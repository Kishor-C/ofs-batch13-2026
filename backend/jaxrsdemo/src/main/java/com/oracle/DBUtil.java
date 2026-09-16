package com.oracle;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.cj.jdbc.Driver;

public class DBUtil {
	// reusable method to get the connection
	public static Connection getConnection() {
		try {
			//Class.forName("oracle.jdbc.driver.OracleDriver");
			Class.forName("com.mysql.cj.jdbc.Driver");
			//oracle URL - jdbc:oracle:thin:@localhost:1521:free
			// getConnection(url, username, password);
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "root");
			return connection;
		} catch(ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			return null;
		}
	}
	// we can test the connection using the main method
	public static void main(String[] args) {
		System.out.println(getConnection());
	}
}
