import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list/list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  updateMessage: string

  //todo is local todo data
  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.todo = new Todo(this.id, '', false, new Date())

    this.id = this.route.snapshot.params['id'];//picking the id from url and sotring here in id,
    //after that we are calling this retriveTodo service and as soon as data is available 
    //we are setting it to our local todo//

    if (this.id != -1) {
      this.todoService.retriveTodo('dhananjay', this.id)
        .subscribe(
          //setting data which is coming from backend to todo and then in page of update todo so that user can see what is current data and he can update accordingly.
          data => this.todo = data,

        )
    }
  }

  saveUpdateTodo() {
    if (this.id === -1) {
      //Create add todo
  
      this.todoService.createTodo('dhananjay', this.todo)
        .subscribe(
          data => {
            console.log(data)

            console.log(this.updateMessage = 'Saved');
            this.router.navigate(['list'])


          }
        )
    } else {


      this.todoService.updateTodo('dhananjay', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)

            console.log(this.updateMessage = 'Saved');
            this.router.navigate(['list'])


          }
        )
    }
  }

}
