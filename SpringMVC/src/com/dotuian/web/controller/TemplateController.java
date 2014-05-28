package com.dotuian.web.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller("template")
@RequestMapping("/template")
public class TemplateController extends BaseController {

    Logger log = Logger.getLogger(UserController.class);

    @RequestMapping(value = "/E01.do", method = RequestMethod.GET)
    public ModelAndView E01() {
        log.debug(" ====== TemplateController#E01() ====== ");

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/template/E01");
        return mv;
    }

    @RequestMapping(value = "/E02.do", method = RequestMethod.GET)
    public ModelAndView E02() {
        log.debug(" ====== TemplateController#E01() ====== ");

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/template/E02");
        return mv;
    }

    @RequestMapping(value = "/E03.do", method = RequestMethod.GET)
    public ModelAndView E03() {
        log.debug(" ====== TemplateController#E01() ====== ");

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/template/E03");
        return mv;
    }

    @RequestMapping(value = "/E04.do", method = RequestMethod.GET)
    public ModelAndView E04() {
        log.debug(" ====== TemplateController#E04() ====== ");

        ModelAndView mv = new ModelAndView();
        mv.setViewName("/template/E04");
        return mv;
    }

}
