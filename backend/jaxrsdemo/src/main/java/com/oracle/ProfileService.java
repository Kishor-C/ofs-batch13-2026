package com.oracle;

import java.util.ArrayList;
import java.util.List;


// this is a service layer and it is accessed by controller layer

public class ProfileService {
	// you must access DAO from here, this we will do later
	
	private static List<Profile> tempDB = new ArrayList<>();
	
	private ProfileDao dao = new ProfileDAOImpl();
	
	// save in tempDB
	public Profile save(Profile profile) {
		//tempDB.add(profile);
		int status = dao.save(profile);
		if(status == 1) 
			return profile;
		else
			return null;
	}
	
	// get from tempDB
	public List<Profile> findAll() {
		tempDB = dao.findAll();
		return new ArrayList<>(tempDB);
	}
	
	// get single profile or null
	public Profile find(int id) throws ProfileNotFoundException {
		Profile profile = dao.findById(id);
		if(profile == null) {
			throw new ProfileNotFoundException("Profile with an id "+id+" not found");
		}
		return profile;
		// in spring boot findById() returns Optional
		// -> dao.findById(id).orElseThrow(new ProfileNotFoundException(...)));
	}
}
