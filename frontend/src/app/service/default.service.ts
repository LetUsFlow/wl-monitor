import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lines } from '../dto/line';
import { TransportRoute } from '../dto/route';

const baseUri = environment.API_BASE_PATH + '/api';

@Injectable({
    providedIn: 'root'
})
export class DefaultService {
    http = inject(HttpClient);

    getLines(): Observable<Lines> {
        return this.http.get<Lines>(`${baseUri}/lines`);
    }

    getRoute(lineID: number): Observable<TransportRoute> {
        return this.http.get<TransportRoute>(`${baseUri}/route/${lineID}`);
    }

    getStop(stopID: number): Observable<StopMonitor> {
        return this.http.get<StopMonitor>(`${baseUri}/stop/${stopID}`);
    }
}
