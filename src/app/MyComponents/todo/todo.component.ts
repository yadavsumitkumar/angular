import { Component } from '@angular/core';
import{ Todo } from "../../todos";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{
  todo:Todo[]; 
  constructor(){
    this.todo = [
    {
      sno:1,
      title:"This is Title",
      desc: "Description",
      active: true
    },
    {
      sno:2,
      title:"This is Title",
      desc: "Description",
      active: true
    },
    {
      sno:3,
      title:"This is Title",
      desc: "Description",
      active: true
    }
   ]
  }
}
