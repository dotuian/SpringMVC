package com.dotuian.dao;

import java.util.List;

import com.dotuian.dao.entity.UserEntity;
import com.dotuian.service.dto.UserDto;

public interface UserDao {

	public UserEntity getUserById(String userId);
	
	public UserEntity getUserByName(String username);

	public List<UserEntity> getAllUser();

	public int insertUser(UserDto user);

	public int updateUser(UserDto user);

	public int deleteUser(String userID);
	
	public int selectUserCount();

}
