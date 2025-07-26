export interface Line {
  LineText: string;
  SortingHelp: number;
  Realtime: boolean;
  MeansOfTransport: string;
}

export interface Lines {
  [key: string]: Line;
}
