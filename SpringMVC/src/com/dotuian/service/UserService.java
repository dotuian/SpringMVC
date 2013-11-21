package com.dotuian.service;

import java.util.List;

import com.dotuian.service.dto.UserDto;

public interface UserService {

	public List<UserDto> getAllUser();

	public UserDto getUser(String userID);

	public int insertUser(UserDto user);

	public int updateUser(UserDto user);

	public int deleteUser(String userID);
	
	public int selectUserCount();
	
	public boolean login(String username, String password);
	
}
