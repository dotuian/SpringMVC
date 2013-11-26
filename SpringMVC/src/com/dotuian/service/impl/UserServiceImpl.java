package com.dotuian.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dotuian.dao.UserDao;
import com.dotuian.dao.entity.UserEntity;
import com.dotuian.service.UserService;
import com.dotuian.service.dto.UserDto;

/**
 * @Service("exampleService") 通过注解在Spring容器中自动生成一个名为exampleService的Bean。
 * @Transactional 
 *                service类前加上@Transactional，声明这个service所有方法需要事务管理。每一个业务方法开始时都会打开一个事务
 *                。 如果遇到checked意外就不回滚。如何改变默认规则： 1.让checked例外也回滚：在整个方法前加上
 *                @Transactional(rollbackFor=Exception.class) 2.让unchecked例外不回滚：
 *                @Transactional(notRollbackFor=RunTimeException.class)
 *                3.不需要事务管理的
 *                (只查询的)方法：@Transactional(propagation=Propagation.NOT_SUPPORTED)
 */
@Service("userServiceImpl")
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	public List<UserDto> getAllUser() {

		List<UserEntity> users = userDao.getAllUser();

		List<UserDto> list = new ArrayList<UserDto>();
		for (int i = 0; i < users.size(); i++) {
			UserEntity entity = users.get(i);
			UserDto user = entity.toUserDto();
			list.add(user);
		}

		return list;
	}

    public UserDto getUser(String userId) {
        UserEntity entity = userDao.getUserById(Long.valueOf(userId));

        UserDto user = entity.toUserDto();

        return user;
    }

    public int insertUser(UserDto user) {

//        MessageBuilder builder = new MessageBuilder();
        
        UserEntity entity = user.toUserEntity();
        return userDao.insertUser(entity);
    }

    public int updateUser(UserDto user) {
        UserEntity entity = user.toUserEntity();
        return userDao.updateUser(entity);
    }

    public int deleteUser(String userId) {
        return userDao.deleteUser(Long.valueOf(userId));
    }

	public int selectUserCount() {
		// TODO Auto-generated method stub
		return userDao.selectUserCount();
	}
	
	public boolean login(String username, String password) {
	    UserEntity entity = userDao.getUserByName(username);
	    if(entity != null) {
	        if(entity.getPassword().equals(password)){
	            return true;
	        }
	    }
	    return false;
	}

}
