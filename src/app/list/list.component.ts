import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date

  ){ }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    todos: Todo[]
    message : string;

    //   new Todo(1,'learn to Dance',false,new Date()),
    //   new Todo(2,'learn to Code',false,new Date()),
    //   new Todo(3,'learn to Ride',false,new Date())
    // ]

  constructor(
 private todoService:TodoDataService ,
 private router : Router
 ) { }

 ngOnInit() {
  this.refreshTodos(); 

}
refreshTodos(){
this.todoService.getLoginData('dhananjay').subscribe(
  response=>{
    this.todos = response;
    console.log(response);
  }
)

}

deleteTodo(id){
  this.todoService.deleteData('dhananjay',id).subscribe(
    response=>{
      console.log(response);
      this.message = `Delete of Todo ${id} Successfull!`;
      this.refreshTodos();

    }

  )
  console.log(`Delete todo ${id}`);
}


upDateTodo(id){
  console.log(`Update id ${id}`);
  this.router.navigate(['todos',id])
}




}