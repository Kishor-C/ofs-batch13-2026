package com.oracle;

import java.util.List;

public interface ProfileDao {
	// save profile and return 1 for success - Profile
	public int save(Profile profile);
	// find all and return List<Profile>
	public List<Profile> findAll();
	// find by id - select * from profile where id = ?
	public Profile findById(int id);
}
