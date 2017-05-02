package com.fifthgen.controller;

import java.lang.reflect.InvocationTargetException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fifthgen.dto.ClientCategoryDto;
import com.fifthgen.dto.ClientProductDto;
import com.fifthgen.dto.ClientStockDto;
import com.fifthgen.service.ClientService;

@Controller
@RequestMapping("/")
public class CommonController {

	
	
	@Autowired
	ClientService clientService;

	@RequestMapping("product")//pageloading
	@ResponseBody
	public ModelAndView getProductPage(Model model) throws IllegalAccessException, InvocationTargetException{
		ModelAndView modelandview = new ModelAndView("clientproduct");
		List<ClientCategoryDto> categorylist = clientService.getProductPage();
		model.addAttribute("categorylist", categorylist);
		return modelandview;
		
	}
	
	@RequestMapping("getproductlist")//tableviewing
	@ResponseBody
	public List<ClientStockDto>  getproductlist() throws IllegalAccessException, InvocationTargetException{
		List<ClientStockDto> stocklist = 	clientService.getproductlist();
		return stocklist;
	}
	
	@RequestMapping(value="saveproduct")//save or update
	@ResponseBody
	public boolean savecreatproduct( String  productName,
			 Integer productQty,
			String productNo,
			Date productDate,
			 String productDescription,
			Integer category,
			 String productVendor,Integer id ) 
					 {
		ClientProductDto productdto = new ClientProductDto();
		ClientCategoryDto categorydto = new ClientCategoryDto();
		categorydto.setCategoryId(category);
		productdto.setCategory(categorydto);
		productdto.setId(id);
		productdto.setProductName(productName);
		productdto.setProductNo(productNo);
		productdto.setProductQty(productQty);
		productdto.setProductDate(productDate);
		productdto.setProductDescription(productDescription);
		productdto.setProductVendor(productVendor);
		
		Boolean productsave = clientService.getProduct(productdto);
		
		
		return productsave;
		
	}
@RequestMapping(value="searchproduct")//search
@ResponseBody
public List<ClientProductDto> searchproduct(String productName){
	List<ClientProductDto> productdtos = clientService.searchProduct(productName);
	
		return productdtos;

}
	
	
	
	

}
