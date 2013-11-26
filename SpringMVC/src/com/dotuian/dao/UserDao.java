package com.dotuian.dao;

import java.util.List;

import com.dotuian.dao.entity.UserEntity;
import com.dotuian.service.dto.UserDto;

public interface UserDao {

	public UserEntity getUserById(long id);
	
	public UserEntity getUserByName(String username);

	public List<UserEntity> getAllUser();

	public int insertUser(UserEntity user);

	public int updateUser(UserEntity user);

	public int deleteUser(long id);
	
	public int selectUserCount();

}
