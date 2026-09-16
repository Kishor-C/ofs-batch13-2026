package com.oracle;

/*
 * This is a custom exception for our business requirement
 * Atleast create 2 constructors one is default constructor and another is parameterized constructor taking error
 * message
 */
public class ProfileNotFoundException extends RuntimeException {

	public ProfileNotFoundException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProfileNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}
