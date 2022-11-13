import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  projects: Array<object> | undefined;
  pService: ProjectService;
  ngOnInit(): void {}
  constructor(pService: ProjectService) {
    this.pService = pService;
  }

  getProjects() {
    const pService = new ProjectService();
    this.projects = this.pService.projects;
    return this.projects;
  }
}
