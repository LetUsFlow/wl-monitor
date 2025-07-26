export interface RouteStop {
  LineID: number;
  PatternID: number;
  StopSeqCount: number;
  StopID: number;
  Direction: "1" | "2" | null; // Direction can be "1", "2", or null
  StopText: string;
  DIVA: number;
}

export interface TransportRoute {
  route: RouteStop[];
  LineText: string;
}
