package com.todo.java.backend.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	//GET
	//URI - /hello-world
	//method -"Hello World"
	
	//@RequestMapping(method = RequestMethod.GET,path="/hello-world") ** Similarly we can directly call GetMapping
	
	@GetMapping(path="/hello-world")//Returning string back as "Hello World"
	public String helloWorld() {
		return "Hello World";
		
	}
	
	@GetMapping(path="/hello-world-bean")//Returning a Bean back as message
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
		
	}

}
