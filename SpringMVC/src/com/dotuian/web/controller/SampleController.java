package com.dotuian.web.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller("sample")
@RequestMapping("/sample")
public class SampleController extends BaseController {

    Logger log = Logger.getLogger(UserController.class);
    
    @RequestMapping(value = "/index.do", method = RequestMethod.GET)
    public ModelAndView index() {
        log.debug(" ====== SampleController#form() ====== ");
        
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sample/index");
        return mv;
    }
    
    @RequestMapping(value = "/form.do", method = RequestMethod.GET)
    public ModelAndView form() {
        log.debug(" ====== SampleController#form() ====== ");
        
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sample/form");
        return mv;
    }
    
    
    @RequestMapping(value = "/table.do", method = RequestMethod.GET)
    public ModelAndView table() {
        log.debug(" ====== SampleController#table() ====== ");
        
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sample/table");
        return mv;
    }
    
    @RequestMapping(value = "/search.do", method = RequestMethod.GET)
    public ModelAndView search() {
        log.debug(" ====== SampleController#search() ====== ");
        
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sample/search");
        return mv;
    }

}
