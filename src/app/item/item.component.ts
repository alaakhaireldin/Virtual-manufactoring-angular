import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() project: any;
  pService: ProjectService;

  constructor(pService: ProjectService) {
    this.pService = pService;
  }

  ngOnInit(): void {}
}
