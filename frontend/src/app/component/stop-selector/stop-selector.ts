import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultService } from '../../service/default.service';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { RouteStop } from '../../dto/route';

@Component({
  selector: 'app-stop-selector',
  imports: [MatChipSet, MatChip],
  templateUrl: './stop-selector.html',
  styleUrl: './stop-selector.scss'
})
export class StopSelector implements OnInit {
  defaultService = inject(DefaultService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  stops: RouteStop[] = [];

  error: string | undefined = undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const lineId = params.get('lineId');
      if (lineId) {
        this.defaultService.getRoute(Number(lineId)).subscribe({
          next: data => {
            this.stops = data.route;
            this.error = undefined;
          },
          error: err => {
            this.error = err.error.detail;
          }
        });
      }
    });
  }

  selectStop(stopId: number) {
    this.router.navigate(['/stop', stopId]);
  }
}
