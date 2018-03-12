package com.rvc.starter;

import java.util.ArrayList;
import java.util.List;

public class Users {
	public static List<User> retrieve() {
		List<User> users = new ArrayList<User>();
		User user1 = new User();
		user1.setId("1");
		user1.setUsername("jsmith");
		user1.setPassword("jsmith");
		user1.setFirstName("John");
		user1.setLastName("Smith");
		user1.setEmail("johnsmith@gmail.com");
		user1.setAddress("Texas");
		users.add(user1);
		
		User user2 = new User();
		user2.setId("2");
		user2.setUsername("rkey");
		user2.setPassword("rkey");
		user2.setFirstName("Robert");
		user2.setLastName("Key");
		user2.setEmail("robertkey@gmail.com");
		user2.setAddress("London");
		users.add(user2);
		return users;
	}
}
