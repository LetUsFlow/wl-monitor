export interface Line {
  LineID: number;
  LineText: string;
  SortingHelp: number;
  Realtime: boolean;
  MeansOfTransport: string;
}

export interface LinesDto {
  lines: Line[];
}
