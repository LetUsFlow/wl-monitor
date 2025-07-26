import { Routes } from '@angular/router';
import { LineSelector } from './component/line-selector/line-selector';
import { StopSelector } from './component/stop-selector/stop-selector';
import { StopView } from './component/stop-view/stop-view';

export const routes: Routes = [
    {path: '', component: LineSelector},
    {path: 'line/:lineId', component: StopSelector},
    {path: 'stop/:stopId', component: StopView}
];
