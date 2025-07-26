// --- Core Types ---

interface Coordinates {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}

interface LocationStopProperties {
  name: string; // e.g., "60200560"
  title: string; // e.g., "Bahnhof Hütteldorf SU"
  municipality: string; // e.g., "Wien"
  municipalityId: number; // e.g., 49000001
  type: "stop";
  coordName: "WGS84";
  gate?: string; // e.g., "B7" (Optional as not all entries have it)
  attributes: {
    rbl: number; // e.g., 5697
  };
}

interface LocationStop {
  type: "Feature";
  geometry: Coordinates;
  properties: LocationStopProperties;
}

interface DepartureTime {
  timePlanned: string; // ISO 8601 date-time string
  timeReal?: string; // ISO 8601 date-time string (Optional)
  countdown: number; // Minutes until departure
}

interface Vehicle {
  name: string; // e.g., "43B"
  towards: string; // e.g., "Neustift, Agnesgasse"
  direction: string; // e.g., "H"
  platform: string; // e.g., "1"
  richtungsId: string; // e.g., "1"
  barrierFree: boolean;
  foldingRamp: boolean;
  foldingRampType?: string; // e.g., "part" (Optional)
  realtimeSupported: boolean;
  trafficjam: boolean;
  type: string; // e.g., "ptBusCity"
  attributes: Record<string, never>; // An empty object {}
  linienId: number;
}

interface Departure {
  departureTime: DepartureTime;
  vehicle?: Vehicle; // Optional, as seen in the first U4 departure
}

interface Departures {
  departure: Departure[];
}

interface Line {
  name: string; // e.g., "43B"
  towards: string; // e.g., "Neustift, Agnesgasse"
  direction: string; // e.g., "H"
  platform: string; // e.g., "1"
  richtungsId: string; // e.g., "1"
  barrierFree: boolean;
  realtimeSupported: boolean;
  trafficjam: boolean;
  departures: Departures;
  type: string; // e.g., "ptBusCity"
  lineId: number;
}

interface Monitor {
  locationStop: LocationStop;
  lines: Line[];
  attributes: Record<string, never>; // An empty object {}
}

// --- Top-Level Response Structure ---

interface Message {
  value: string; // e.g., "OK"
  messageCode: number; // e.g., 1
  serverTime: string; // ISO 8601 date-time string
}

interface Data {
  monitors: Monitor[];
}

interface StopMonitor {
  data: Data;
  message: Message;
  StopID: number; // e.g., 4401
  DIVA: number; // e.g., 60200560
  StopText: string; // e.g., "Hütteldorf"
  Municipality: string; // e.g., "Wien"
  MunicipalityID: number; // e.g., 49000001
  Longitude: number; // e.g., 16.2607284
  Latitude: number; // e.g., 48.1969676
}
