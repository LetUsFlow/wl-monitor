from fastapi import FastAPI, APIRouter, HTTPException
import requests
import csv

app = FastAPI()
router = APIRouter(prefix="/api")

lines = [] # LineID;LineText;SortingHelp;Realtime;MeansOfTransport
routes = [] # LineID;PatternID;StopSeqCount;StopID;Direction
stops = {} # StopID;DIVA;StopText;Municipality;MunicipalityID;Longitude;Latitude

with open("data/wienerlinien-ogd-linien.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter=';')
    for row in reader:
        lines.append({
            "LineID": int(row["LineID"]),
            "LineText": row["LineText"],
            "SortingHelp": int(row["SortingHelp"]),
            "Realtime": row["Realtime"] == "1",
            "MeansOfTransport": row["MeansOfTransport"]
        })

with open("data/wienerlinien-ogd-haltepunkte.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter=';')
    for row in reader:
        if not row["DIVA"]:
            continue
        row["StopID"] = int(row["StopID"])
        stops[row["StopID"]] = {
            "StopID": row["StopID"],
            "DIVA": int(row["DIVA"]),
            "StopText": row["StopText"],
            "Municipality": row["Municipality"],
            "MunicipalityID": int(row["MunicipalityID"]),
            "Longitude": float(row["Longitude"]),
            "Latitude": float(row["Latitude"])
        }

with open("data/wienerlinien-ogd-fahrwegverlaeufe.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter=';')
    for row in reader:
        row["StopID"] = int(row["StopID"])
        if row["StopID"] not in stops:
            continue
        routes.append({
            "LineID": int(row["LineID"]),
            "PatternID": int(row["PatternID"]),
            "StopSeqCount": int(row["StopSeqCount"]),
            "StopID": row["StopID"],
            "Direction": row["Direction"],
            "StopText": stops[row["StopID"]]["StopText"],
            "DIVA": int(stops[row["StopID"]]["DIVA"])
        })


@router.get("/lines")
def read_lines():
    """
    Retrieve all lines with their details.
    """
    return {"lines": lines}

@router.get("/route/{line_id}")
def read_route(line_id: int):
    """
    Retrieve route information by LineID.
    """
    route = []
    for r in routes:
        if r["LineID"] == line_id:
            route.append(r)
    if route:
        return {"route": route}
    raise HTTPException(status_code=404, detail="Route not found")

@router.get("/stop/{stop_id}")
def read_stop(stop_id: int):
    """
    Retrieve stop information by StopID, including realtime data.
    API Url: https://www.wienerlinien.at/ogd_realtime/monitor?stopId=12345
    """
    stop = stops.get(stop_id, {})
    if not stop:
        raise HTTPException(status_code=404, detail="Stop not found")
    stop = requests.get(f"https://www.wienerlinien.at/ogd_realtime/monitor?diva={stop['DIVA']}").json()
    stop.update(stops[stop_id])
    return stop

app.include_router(router)
