import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  userId=""
  id=""
  title=""
  completed=""

  add=()=>
  {
    let data:any=
    {
      "userId":this.userId,
      "id":this.id,
      "title":this.title,
      "completed":this.completed
    }

    console.log(data)
  }

}
