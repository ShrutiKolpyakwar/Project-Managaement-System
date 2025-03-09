import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{
  project = {
    name: '',
    budget: 0,
    status: '',
    completion: 0
  };
  id:number=0;

  constructor(private router: Router,public service:DataService) {}
  ngOnInit(): void {
    if(this.service.iseditproject)
    {
        this.id=this.service.project.id; 
        this.project=this.service.project; 
    }
    else{
      this.id=this.service.idgenerator +1;
      this.service.idgenerator=this.id;
    }
  }

  onSubmit() {
    /* this.router.navigate(['/dashboard'], { 
      queryParams: {
      name: this.project.name,
      budget: this.project.budget.toString(),
      status: this.project.status,
      completion: this.project.completion.toString()
      }
    }); */
      // Handle form submission
    if(this.service.iseditproject)
    {
      const projects= {
        id:this.id,
        name: this.project.name,
        budget: this.project.budget.toString(),
        status: this.project.status,
        completion: this.project.completion.toString()
        };
        let updatedprojects:any=[];
        this.service.projects.forEach((element:any)=>{
              if(element.id===this.id)
              {
                 updatedprojects.push(projects)
              }
              else{
                updatedprojects.push(element)
              }
        })
        this.service.projects=updatedprojects;
  }
  else{
    const projects= {
      id:this.id,
      name: this.project.name,
      budget: this.project.budget.toString(),
      status: this.project.status,
      completion: this.project.completion.toString()
      };
      this.service.projects.push(projects);
  }
   
    this.resetForm();
    this.router.navigate(['/dashboard']);
  }

  resetForm() {
    this.project = {
      name: '',
      budget: 0,
      status: '',
      completion: 0,
    };
  }

}
