package com.rvc.starter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/getDetails", method = RequestMethod.POST)
	public User getDetails(@RequestBody User user) {
		System.out.println("Inside UserController");
		System.out.println("user : "+user);
		return userService.getDetails(user);
	}
}
