import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  idgenerator:number=10;
  iseditproject:boolean=false;
  project:any=undefined;
  projects:any=[
    {
         id:1,
        "name": "Asana",
        "budget": 2500,
        "status": "Working",
        "completion": 60,
        imgsrc:'assets/project/Asana.png',
    },
    {
      id:2,
     "name": "github",
     "budget": 5000,
     "status": "Done",
     "completion": 100,
     imgsrc:'assets/project/github.png',
 },
 {
  id:3,
 "name": "Atlassian",
 "budget": 3400,
 "status": "canceled",
 "completion": 30,
 imgsrc:'assets/project/Atlassian.png',
},
{
id:4,
"name": "Bootstrap",
"budget": '14000',
"status": "working",
"completion": 80,
imgsrc:'assets/project/bootstrap.png',
},
{
  id:5,
 "name": "Slack",
 "budget": 1000,
 "status": "canceled",
 "completion": 0,
 imgsrc:'assets/project/Slack.png',
},
{
id:6,
"name": "Devto",
"budget": 2300,
"status": "Done",
"completion": 100,
imgsrc:'assets/project/Devto.png',
}

];
constructor() { }


}
