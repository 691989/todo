package com.todo.java.backend.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	// GET
	// URI - /hello-world
	// method -"Hello World"

	// @RequestMapping(method = RequestMethod.GET,path="/hello-world") ** Similarly
	// we can directly call GetMapping

	@GetMapping(path = "/hello-world") // Returning string back as "Hello World"
	public String helloWorld() {
		return "Hello World";

	}

	@GetMapping(path = "/hello-world-bean") // Returning a Bean back as message
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
		// //throw new RuntimeException("Some Error has happened contact helpdesk!");
	}

	// hello-world/path-variable/dhananjay
	@GetMapping(path = "/hello-world/path-variable/{name}") // Returning a Bean back as message
	public HelloWorldBean helloWorldBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));

	}

}
