package com.example.demo_backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo_backend.entities.User;
import com.example.demo_backend.exception.UserNotFoundException;
import com.example.demo_backend.service.UserServiceImpl;

/* Required when UI app connects with the backend
 * By default backend blocks external apps sending request
 * Cross origin accepts the external apps to send request
 *  */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserServiceImpl service;
	
	@PostMapping
	public ResponseEntity<Object> create(@RequestBody User user) {
		User createdUser = service.createUser(user);
		return ResponseEntity.status(201).body(createdUser);
	}
	@GetMapping
	public ResponseEntity<Object> fetch() {
		return ResponseEntity.ok(service.findAllUsers());
	}
	@GetMapping("/{id}")
	public ResponseEntity<Object> fetch(@PathVariable long id) {
		try {
			return ResponseEntity.ok(service.findById(id));
		} catch(UserNotFoundException e) {
			Map<String, String> error = Map.of("message", e.getMessage());
			return ResponseEntity.status(404).body(error);
		}
	}	
}
