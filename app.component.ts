import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'students circle app';
  isFormVisible = false; // Controls the visibility of the form
  projects: any[] = [];

  onProjectSubmitted(project: any) {
    this.projects.push(project);
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible; // Toggle form visibility
  }

  insertRow() {
    // Insert row logic here
  }

  updateRow() {
    // Update row logic here
  }
  deleteRow() {
    // Delete row logic here
  }
  constructor()
  {
     
  }
}

