package com.fifthgen.service;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import com.fifthgen.dto.ClientCategoryDto;
import com.fifthgen.dto.ClientProductDto;
import com.fifthgen.dto.ClientStockDto;

public interface ClientService {

	public List<ClientCategoryDto> getProductPage() throws IllegalAccessException, InvocationTargetException;
	
	public List<ClientStockDto> getproductlist() throws IllegalAccessException, InvocationTargetException;
	
	public boolean getProduct(ClientProductDto productdto);
	
	public List<ClientProductDto> searchProduct(String productName);
	
	
	
	
	
	
}
