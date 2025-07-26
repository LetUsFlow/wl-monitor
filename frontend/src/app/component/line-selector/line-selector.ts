import { Component, inject, OnInit } from '@angular/core';
import { DefaultService } from '../../service/default.service';
import { Router } from '@angular/router';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { Line } from '../../dto/line';

@Component({
  selector: 'app-line-selector',
  imports: [MatChipSet, MatChip],
  templateUrl: './line-selector.html',
  styleUrl: './line-selector.scss'
})
export class LineSelector implements OnInit {
  defaultService = inject(DefaultService);
  router = inject(Router);

  lines: Line[] = [];

  ngOnInit() {
    this.defaultService.getLines().subscribe(data => {
      this.lines = data["lines"];
    });
  }

  selectLine(lineID: number) {
    this.router.navigate(['/line', lineID]);
  }
}
