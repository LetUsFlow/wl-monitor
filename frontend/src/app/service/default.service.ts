import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinesDto } from '../dto/line';
import { RouteDto } from '../dto/route';

const baseUri = environment.API_BASE_PATH + '/api';

@Injectable({
    providedIn: 'root'
})
export class DefaultService {
    http = inject(HttpClient);

    getLines(): Observable<LinesDto> {
        return this.http.get<LinesDto>(`${baseUri}/lines`);
    }

    getRoute(lineID: number): Observable<RouteDto> {
        return this.http.get<RouteDto>(`${baseUri}/route/${lineID}`);
    }

    getStop(stopID: number): Observable<StopMonitor> {
        return this.http.get<StopMonitor>(`${baseUri}/stop/${stopID}`);
    }
}
