import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core'
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {
  projects: any[] = [];

  constructor(private route: Router,public service:DataService) {}

  ngOnInit() {
    console.log(this.service.projects)
   /*  this.route.queryParams.subscribe(params => {
      // Extract parameters with default values to prevent errors
      const name = params['name'] || 'Facebook';
      const budget = params['budget'] || '70';
      const status = params['status'] || 'Working';
      const completion = params['completion'] || '100';

      // Check if all necessary parameters are present and valid
      if (name && !isNaN(parseFloat(budget)) && status && !isNaN(parseFloat(completion))) {
        // Create a new project object with parsed values
        const newProject = {
          name: name,
          budget: parseFloat(budget), // Convert to number
          status: status,
          completion: parseFloat(completion) // Convert to number
        };
        this.projects.push(newProject);
        
      }
    }); */
  }
  createproject()
  {
    this.service.iseditproject=false;
    this.route.navigate(['/new-project']);
  }
  removeProject(project: any) {
    this.service.projects = this.service.projects.filter((p:any) => p !== project);
  }
  editProject(project: any) {
    this.service.iseditproject=true;
    this.service.project=project;
    this.route.navigate(['/new-project']);
  }
}
