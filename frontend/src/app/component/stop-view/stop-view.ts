import { Component, inject, OnInit } from '@angular/core';
import { DefaultService } from '../../service/default.service';
import { ActivatedRoute } from '@angular/router';
import { LineCard } from '../line-card/line-card';

@Component({
  selector: 'app-stop-view',
  imports: [LineCard],
  templateUrl: './stop-view.html',
  styleUrl: './stop-view.scss'
})
export class StopView implements OnInit {
  defaultService = inject(DefaultService);
  route = inject(ActivatedRoute);

  stop: StopMonitor | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const stopId = params.get('stopId');
      if (stopId) {
        this.defaultService.getStop(Number(stopId)).subscribe(data => {
          this.stop = data;
        });
      }
    });
  }
}
