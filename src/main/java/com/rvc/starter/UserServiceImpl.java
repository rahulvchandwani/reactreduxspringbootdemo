package com.rvc.starter;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	private List<User> users = Users.retrieve();

	@Override
	public User getDetails(User user) {
		System.out.println("Inside UserServiceImpl");
		User matchedUser = users.stream().filter(currentUser -> currentUser.getUsername().equals(user.getUsername()) && currentUser.getPassword().equals(user.getPassword())).findAny().get();
		return matchedUser;
	}
}
