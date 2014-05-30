package com.dotuian.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller("ajax")
@RequestMapping("/ajax")
public class AjaxController extends BaseController{

    Logger log = Logger.getLogger(UserController.class);
    
    //==================================================
    // Ajax Request
    //==================================================
    /**
     * 直接返回JavaScript字符串 
     * @return
     */
    @RequestMapping(value = "/ajaxtest1.json", method = RequestMethod.GET)
    public @ResponseBody Object ajaxtest1() {
        log.info("==== UserController#ajaxtest1.json  ====");
        
        Random rand = new Random();
        float r = rand.nextFloat() * 100;
        String result = "<br>Next Random # is <b>" + r + "</b>. Generated on <b>" + new Date().toString() + "</b>";
        
        log.info(result);
        
        return result;
    }
    
    
    /**
     * 返回JavaScript对象
     * @return
     */
    @RequestMapping(value = "/ajaxtest2.json", method = RequestMethod.GET)
    public ModelAndView ajaxtest2() {
        log.info("==== UserController#ajaxtest2.json  ====");
        
        ModelAndView mv = new ModelAndView("jsonView");
        
        Map<String, String> map = new HashMap<String, String>();
        map.put("1", "111");
        map.put("2", "222");
        map.put("3", "333");
        map.put("4", "444");
        mv.addObject("result", map);
        
        return mv;
    }
    
    
    /**
     * 参数传递
     * @return
     */
    @RequestMapping(value = "/ajaxtest3.json")
    public ModelAndView ajaxtest3(@RequestParam(value = "param", required = true) long id) {
        log.info("==== UserController#ajaxtest3.json  ====");
        
        ModelAndView mv = new ModelAndView("jsonView");
        
        Random rand = new Random();
        long r = rand.nextLong() * 100000;
        
        Map<String, Long> data = new HashMap<String, Long>();
        for (int i = 0; i < id; i++) {
            data.put(String.valueOf(i), r);
        }
        
        mv.addObject("result", data);
        
        return mv;
    }

    @RequestMapping(value = "/ajaxtest4.json")
    public ModelAndView ajaxtest4(@RequestParam(value = "param", required = true) long id) {
        log.info("==== UserController#ajaxtest4.json  ====");
        
        if(id == 0){
            throw new NullPointerException();
        }

        ModelAndView mv = new ModelAndView("jsonView");
        
        List<String> data = new ArrayList<String>();
        for (int i = 0; i < id; i++) {
            data.add(String.valueOf(i));
        }
        
        mv.addObject("result", data);
        return mv;
    }
}
