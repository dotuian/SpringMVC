package com.dotuian.dao.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dotuian.dao.UserDao;
import com.dotuian.dao.entity.UserEntity;
import com.dotuian.service.dto.UserDto;

/**
 * 通过注解@Repository声明UserDaoImpl在Spring容器中对应的BeanId为userDao
 * @Repository 只能标注在DAO类上，原因在于该注解的作用不只是将类识别为 Bean，
 * 同时它还能将所标注的类中抛出的数据访问异常封装为 Spring 的数据访问异常类型
 *
 */
@Repository("userDao")
public class UserDaoImpl extends SqlSessionDaoSupport implements UserDao {
	/**
	 * SqlSessionDaoSupport是一个抽象的支持类，用来为你提供SqlSession。调用getSqlSession()方法你会得到一个SqlSessionTemplate
	 */
	
	@Autowired
	public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		super.setSqlSessionTemplate(sqlSessionTemplate);
	}
	
	/**
	 * 
	 */
	public UserEntity getUserById(String userId) {
		UserEntity user = this.getSqlSession().selectOne("selectUserById", userId);
		return user;
	}
	
    public UserEntity getUserByName(String username) {
        UserEntity user = this.getSqlSession().selectOne("selectUserByName", username);
        return user;
    }
	
	public List<UserEntity> getAllUser() {
		List<UserEntity> dataList = this.getSqlSession().selectList("selectAllUser");
		return dataList;
	}

	public int insertUser(UserDto user) {
        return this.getSqlSession().insert("insertUser", user);
	}

	public int updateUser(UserDto user) {
        return this.getSqlSession().update("updateUser", user);
	}

	public int deleteUser(String userId) {
		return this.getSqlSession().delete("deleteUser", userId);
	}
	
	
	public int selectUserCount() {
		return this.getSqlSession().selectOne("selectUserCount");
	}

	
}
