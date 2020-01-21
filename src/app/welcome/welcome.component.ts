import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// if you want to access some class form anthoer module like say from list component, 
//you have import first.
//import { ListComponent } from '../list/list.component';


//in java this is called an annotain
//@ComponentScan (
//   value = "com.package.com")

/* Here its called as decorator */
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//In java public is used as keword if something want to access from the class ousidecally.
export class WelcomeComponent implements OnInit {
  //In js export keyord is used to except public 

  message = 'this is string in js'
  welcomeMessageFromService: string
//  name: any;
  name: string;

  //string message = "this is string in java" 


  // In java we use ClassName to decalre a constructor 
  //constructor() { 
  // in js we use constructor as keyword to initialise a constructor 
  //}

  // in java you would have retun type using like 
  // void init(){}
  // but js you can do something like below for retun type
  //ngOnInit() :void {
  // this says this particular method will not retun anything back.
  //  }

  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) {
  }

  ngOnInit() {
    //console.log(this.message)
    console.log(this.route.snapshot.params['name'])
      this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSucessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name1));
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSucessfullResponse(response),
      error => this.handleErrorResponse(error)
      //response =>console.log(response)
    );
    console.log("last line of getWelcomeMessage");
  }

  handleSucessfullResponse(response) {
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }

  handleErrorResponse(error) {
    //console.log(error);
    console.log(error.message);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}