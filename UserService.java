package com.example.demo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional

public class UserService 
{
	@Autowired
	private UserRepository repo;

	public List<User> listAll()
	{
		 return repo.findAll();

	}

	public User get(Integer id) 
	{
		 return repo.findById(id).get();

	}

	public void save(User user) 
	{
		 repo.save(user);

		
	}

	public void delete(Integer id) {
		 repo.deleteById(id);

		
	}

}
