package com.mss.cus.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
 
@Controller


public class CUSLoginController {
 
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	protected ModelAndView handleRequestInternal() throws Exception {
 
		ModelAndView model = new ModelAndView("login");
		//model.addObject("msg", "hello world");
 
		return model;
	}

	@RequestMapping(value="/ebillenrollment", method = RequestMethod.GET)
	protected ModelAndView handleRequestEbillenrollment() throws Exception {
 
		ModelAndView model = new ModelAndView("ebillenrollment");
		//model.addObject("msg", "hello world");
 
		return model;
	}

	@RequestMapping(value="/index", method = RequestMethod.GET)
	protected ModelAndView handleRequestIndex() throws Exception {
 
		ModelAndView model = new ModelAndView("index");
		//model.addObject("msg", "hello world");
 
		return model;
	}

	@RequestMapping(value="/forgotUserId", method = RequestMethod.GET)
	protected ModelAndView handleRequestforgotUserId() throws Exception {
 
		ModelAndView model = new ModelAndView("forgotUserId");
		return model;
	}

	@RequestMapping(value="/addaccount", method = RequestMethod.GET)
	protected ModelAndView handleRequestaddaccount() throws Exception {
 
		ModelAndView model = new ModelAndView("addaccount");
		return model;
	}
	
	@RequestMapping(value="/forgotPassword", method = RequestMethod.GET)
	protected ModelAndView handleRequestForgotPassword() throws Exception {
 
		ModelAndView model = new ModelAndView("forgotPassword");
		return model;
	}
	@RequestMapping(value="/resetPasswd", method = RequestMethod.GET)
	protected ModelAndView handleRequestResetPassword() throws Exception {
 
		ModelAndView model = new ModelAndView("resetPassword");
		return model;
	}

	@RequestMapping(value="/mcuslogin", method = RequestMethod.GET)
	protected ModelAndView handleRequestmcuslogin() throws Exception {
 
		ModelAndView model = new ModelAndView("mcuslogin");
		return model;
	}
	@RequestMapping(value="/logout", method = RequestMethod.GET)
	protected ModelAndView handleRequestlogout(HttpServletRequest req) throws Exception {
 
		req.getSession(true).invalidate();
		ModelAndView mav = new ModelAndView("mcuslogin");
		mav.addObject("dispmessage", "User has successfully logged out.");
		return mav;
	}

}
