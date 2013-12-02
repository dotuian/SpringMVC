package com.dotuian.web.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dotuian.service.CommonService;
import com.dotuian.service.UserService;
import com.dotuian.service.dto.UserDto;
import com.dotuian.web.form.LoginForm;
import com.dotuian.web.form.UserForm;
import com.dotuian.web.validator.LoginFormValidator;
import com.dotuian.web.validator.UserFormValidator;

@Controller("user")
@RequestMapping("/user")
public class UserController extends BaseController{

    Logger log = Logger.getLogger(UserController.class);
    
	/**
	 * 通过注解@Autowired，查找匹配类型的实例来自动装配xampleService实例。
	 * 就不要再XML配置文件中配置注入了。
	 * 但是ExampleServiceImpl需要用注解@Service来定义，
	 * 或者在XML配置文件中进行Bean的配置
	 */
	@Autowired
	private UserService userService;
	
	@Autowired
	private CommonService commonService;
	
	//==================================================
	// Validator
	//==================================================
	/**
	 * 对象指定Validator
	 * @param binder
	 */
	@InitBinder("userForm")
    protected void initUserFormBinder(WebDataBinder binder) {
        binder.setValidator(new UserFormValidator());  
    }  	
	
    @InitBinder("loginForm")
    protected void initLoginFormBinder(WebDataBinder binder){  
        binder.setValidator(new LoginFormValidator());
    }  	
	
    
    //==================================================
    // Action
    //==================================================
    /**
     * 登录画面
     */
    @RequestMapping(value = "/login.do", method = RequestMethod.GET)
    public ModelAndView login() {
        
        // 登录用户的信息
        if (this.getLoginUserName() != null) {
            return new ModelAndView("redirect:/user/index.do");
        }
        
        ModelAndView mv = new ModelAndView();
        mv.addObject(new LoginForm());
        mv.setViewName("/user/login");
        return mv;
    }

    /**
     * 用户登录操作
     * @throws Exception 
     */
    @RequestMapping(value = "/login.do", method = RequestMethod.POST)
    public ModelAndView login(@ModelAttribute @Validated LoginForm loginForm, BindingResult result) throws Exception {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/user/login");

        // 校验没有通过
        if (result.hasErrors()) {
            return mv;
        }
        
        if (userService.login(loginForm.getUsername(), loginForm.getPassword())){
            return new ModelAndView("redirect:/user/index.do");
        } else {
            result.addError(new ObjectError("username", "ERROR005"));
            throw new Exception("用户登录失败！");
        }
    }
    
	/**
	 * 用户列表画面
	 */
	@RequestMapping(value = "/index.do", method = RequestMethod.GET)
	public ModelAndView getUser() {
		ModelAndView mv = new ModelAndView();
		

        System.out.println("登录的用户信息：" + this.getLoginUserName());
		
		
		List<UserDto> list = userService.getAllUser();
		mv.addObject("list", list);
		
		UserDto user = userService.getUser("1");
		mv.addObject("user", user);
		
		mv.addObject("message", "Hello World!!!");
		
		mv.setViewName("/user/index");
		return mv;
	}
	
    /**
     * 删除用户
     * @param userForm
     * @return
     */
    @RequestMapping(value = "/deleteUser.do", method = RequestMethod.POST)
    public ModelAndView deleteUser(UserForm userForm) {
        
        
        return new ModelAndView("redirect:/user/index.do");
    }
    
    /**
     * 更新用户画面
     * @param userForm
     * @return
     */
    @RequestMapping(value = "/updateUser.do", method = RequestMethod.GET)
    public ModelAndView updateUser(UserForm userForm) {
        
        
        return new ModelAndView("redirect:/user/index.do");
    }
    
    /**
     * 更新用户操作
     * @param userForm
     * @param result
     * @return
     */
    @RequestMapping(value = "/editUser.do", method = RequestMethod.POST)
    public ModelAndView updateUser(@ModelAttribute @Validated UserForm userForm, BindingResult result) {
        
        
        return new ModelAndView("redirect:/user/index.do");
    }

    
    /**
     * 添加用户画面
     * @return
     */
    @RequestMapping(value = "/addUser.do", method = RequestMethod.GET)
    public ModelAndView addUser() {
        ModelAndView mv = new ModelAndView();
        mv.addObject("hobbyMap", commonService.getHobbyMap());
        mv.addObject("salaryList", commonService.getSalaryList());
        mv.addObject("years", commonService.getYearsOfBirthday());
        mv.addObject("months", commonService.getMonthsOfBirthday());
        mv.addObject("days", commonService.getDaysOfBirthday());

        mv.addObject(new UserForm());
        mv.setViewName("/user/add");
        return mv;
    }

    /**
     * 保存添加的用户
     * @return
     */
    @RequestMapping(value = "/addUser.do", method = RequestMethod.POST)
    public ModelAndView saveUser(@ModelAttribute @Validated UserForm userForm,
            BindingResult result) {

        ModelAndView mv = new ModelAndView();
        mv.addObject("hobbyMap", commonService.getHobbyMap());
        mv.addObject("salaryList", commonService.getSalaryList());
        mv.addObject("years", commonService.getYearsOfBirthday());
        mv.addObject("months", commonService.getMonthsOfBirthday());
        mv.addObject("days", commonService.getDaysOfBirthday());

        System.out.println(userForm.toString());

        // 校验没有通过
        if (result.hasErrors()) {
            System.out.println("has errors !");
            mv.setViewName("/user/add");
            return mv;
        }

        userService.insertUser(userForm.toUserDto());

        return new ModelAndView("redirect:/user/index.do");
    }
    
    
}
