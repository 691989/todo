import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date

  ){

  }
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    todos = [
      new Todo(1,'learn to Dance',false,new Date()),
      new Todo(2,'learn to Code',false,new Date()),
      new Todo(3,'learn to Ride',false,new Date())
    ]


  // todos = [
  //   {id :1 , description:'learn to Dance'},
  //   {id :2 , description:'learn to Code'},
  //   {id :3 , description:'learn to Ride'}
  // ]


  // todo = {
  //   id :1,
  //   description :'Learn to Code'

  // }
  constructor() { }

  ngOnInit() {
  }

}
