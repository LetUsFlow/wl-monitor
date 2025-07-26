import { Component, inject, OnInit } from '@angular/core';
import { DefaultService } from '../../service/default.service';
import { Router } from '@angular/router';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { Lines } from '../../dto/line';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-line-selector',
  imports: [MatChipSet, MatChip, KeyValuePipe],
  templateUrl: './line-selector.html',
  styleUrl: './line-selector.scss'
})
export class LineSelector implements OnInit {
  defaultService = inject(DefaultService);
  router = inject(Router);

  lines: Lines = {};

  ngOnInit() {
    this.defaultService.getLines().subscribe({
      next: data => {
        this.lines = data;
      },
      error: error => {
        console.error('Error fetching lines:', error);
      }
    });
  }

  selectLine(lineID: string) {
    this.router.navigate(['/line', lineID]);
  }
}
