package com.oracle;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ProfileDAOImpl implements ProfileDao {

	@Override
	public int save(Profile profile) {
		try {
			//1->Connection, 2->Statement 3->Set values & Execute 4->Close
			Connection connection = DBUtil.getConnection();
			String query = "insert into profile values(?,?,?)"; // if there's a sequence you will use seq.nextval
			PreparedStatement statement = connection.prepareStatement(query);
			// set values to the ?, for LocalDate you must use java.sql.Date.valueOf(LocalDate)
			statement.setInt(1, profile.getId());
			statement.setString(2, profile.getName());
			statement.setDate(3, Date.valueOf(profile.getDob()));
			int status = statement.executeUpdate(); // executeQuery -> for ResultSet | select 
			statement.close();
			connection.close();
			return status;
		} catch(Exception e) {
			e.printStackTrace();
		}
		return 0;
	}

	@Override
	public List<Profile> findAll() {
		// select * from profile -> get profile and add each profile to List<Profile>
		try {
			//1->Connection, 2->Statement 3->Set values & Execute 4->Close
			Connection connection = DBUtil.getConnection();
			String query = "select * from profile";
			PreparedStatement statement = connection.prepareStatement(query);
			ResultSet result = statement.executeQuery();
			List<Profile> list = new ArrayList<Profile>();
			while(result.next()) {
				Profile profile = new Profile(result.getInt("ID"), 
						result.getString("NAME"), 
						result.getDate("DOB").toLocalDate());
				// getDate() returns Date then Date.toLocalDate() gives LocalDate
				list.add(profile);
			}
			result.close();
			statement.close();
			connection.close();
			return list; // we must return the list having profile else client gets null
		} catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Profile findById(int id) {
		// select * from profile -> get profile and add each profile to List<Profile>
				try {
					//1->Connection, 2->Statement 3->Set values & Execute 4->Close
					Connection connection = DBUtil.getConnection();
					String query = "select * from profile where id = ?";
					PreparedStatement statement = connection.prepareStatement(query);
					statement.setInt(1, id);
					ResultSet result = statement.executeQuery();
					Profile profile = null;
					if(result.next()) {
						profile = new Profile(result.getInt("ID"), 
								result.getString("NAME"), 
								result.getDate("DOB").toLocalDate());
					}
					result.close();
					statement.close();
					connection.close();
					return profile;
				} catch(Exception e) {
					e.printStackTrace();
				}
				return null;
			}
	}

	

