import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  pService: ProjectService;

  constructor(pService: ProjectService) {
    this.pService = pService;
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    this.pService.addProjects(
      form.value.projectName,
      form.value.img,
      form.value.data,
      form.value.Unit
    );
  }
  numberOnly(event: KeyboardEvent): boolean {
    console.log(event);

    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
