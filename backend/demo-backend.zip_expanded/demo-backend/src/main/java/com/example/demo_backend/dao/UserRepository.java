package com.example.demo_backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo_backend.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
