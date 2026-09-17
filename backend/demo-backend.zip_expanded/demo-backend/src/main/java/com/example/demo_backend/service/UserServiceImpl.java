package com.example.demo_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo_backend.dao.UserRepository;
import com.example.demo_backend.entities.User;
import com.example.demo_backend.exception.UserNotFoundException;

@Service
public class UserServiceImpl {

	@Autowired
	private UserRepository userRepo;
	
	/* We will create interface to this class later */
	/* We will create store, find all and find by id */
	public User createUser(User user) {
		return userRepo.save(user);
	}
	/* find by id and throw UserNotFoundException */
	public User findById(long id) throws UserNotFoundException {
		return userRepo.findById(id)
				.orElseThrow(() -> new UserNotFoundException("User "+id+" not found"));
	}
	/* find all */
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}
}
