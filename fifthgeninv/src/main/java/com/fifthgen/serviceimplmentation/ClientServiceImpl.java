package com.fifthgen.serviceimplmentation;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Service;

import com.fifthgen.dto.ClientCategoryDto;
import com.fifthgen.dto.ClientProductDto;
import com.fifthgen.dto.ClientStockDto;
import com.fifthgen.entity.ClientCategory;
import com.fifthgen.entity.ClientStock;
import com.fifthgen.entity.Clientproduct;
import com.fifthgen.repository.ClientCategoryRepositories;
import com.fifthgen.repository.ClientProductRepositories;
import com.fifthgen.repository.ClientStockRepositories;
import com.fifthgen.service.ClientService;

@Service
public class ClientServiceImpl implements ClientService {

	@Resource
	ClientCategoryRepositories clientCategoryRepositories;

	@Resource
	ClientProductRepositories clientProductRepositories;

	@Resource
	ClientStockRepositories clientStockRepositories;

	@Override
	public List<ClientCategoryDto> getProductPage() throws IllegalAccessException, InvocationTargetException {
		List<ClientCategory> categorylist = clientCategoryRepositories.findAll();
		List<ClientCategoryDto> clientcategorylistDto = new ArrayList<ClientCategoryDto>();
		for (ClientCategory category : categorylist) {
			ClientCategoryDto categorydto = new ClientCategoryDto();
			BeanUtils.copyProperties(categorydto, category);
			clientcategorylistDto.add(categorydto);
		}

		return clientcategorylistDto;
	}

	@Override
	public List<ClientStockDto> getproductlist() throws IllegalAccessException, InvocationTargetException {// table

		List<ClientStock> stocklist = clientStockRepositories.findAll();
		List<ClientStockDto> stocklistdto = new ArrayList<ClientStockDto>();
		for (ClientStock stock : stocklist) {
			ClientProductDto productdto = new ClientProductDto();
			ClientStockDto stockdto = new ClientStockDto();
			ClientCategoryDto categorydto = new ClientCategoryDto();
			categorydto.setCategoryId(stock.getProduct().getCategory().getCategoryId());
			categorydto.setId(stock.getProduct().getCategory().getId());
			categorydto.setCategoryName(stock.getProduct().getCategory().getCategoryName());

			productdto.setCategory(categorydto);
			productdto.setId(stock.getProduct().getId());
			productdto.setProductName(stock.getProduct().getProductName());
			productdto.setProductQty(stock.getProduct().getProducQty());
			productdto.setProductNo(stock.getProduct().getProductNo());
			productdto.setProductDate(stock.getProduct().getProductDate());
			productdto.setProductDescription(stock.getProduct().getProductDescription());
			productdto.setProductVendor(stock.getProduct().getProductVendor());
			stockdto.setId(stock.getId());
			stockdto.setProduct(productdto);
			stockdto.setStock(stock.getStock());
			stocklistdto.add(stockdto);
		}

		return stocklistdto;
	}

	@Override
	public boolean getProduct(ClientProductDto productdto) {
		Clientproduct clientproduct = new Clientproduct();
		ClientStock clientstock = new ClientStock();
		if (productdto.getId() != null) {
			clientproduct = clientProductRepositories.findOne(productdto.getId());
			clientstock = clientStockRepositories.findByProduct(clientproduct);
			ClientCategory category = new ClientCategory();
			category.setId(productdto.getCategory().getCategoryId());
			category.setCategoryId(productdto.getCategory().getCategoryId());
			clientproduct.setCategory(category);
			Integer prdctQty = clientproduct.getProducQty();
			clientproduct.setProducQty(productdto.getProductQty() + prdctQty);
			clientproduct.setProductName(productdto.getProductName());
			clientproduct.setProductNo(productdto.getProductNo());
			clientproduct.setProductDescription(productdto.getProductDescription());
			clientproduct.setProductDate(productdto.getProductDate());
			clientproduct.setProductVendor(productdto.getProductVendor());
			clientstock.setStock(prdctQty + productdto.getProductQty());
			clientProductRepositories.save(clientproduct);
			clientStockRepositories.save(clientstock);
			return false;// update
		} else {

			ClientCategory category = new ClientCategory();
			category.setId(productdto.getCategory().getCategoryId());
			category.setCategoryId(productdto.getCategory().getCategoryId());
			clientproduct.setCategory(category);
			clientproduct.setProducQty(productdto.getProductQty());
			clientproduct.setProductName(productdto.getProductName());
			clientproduct.setProductNo(productdto.getProductNo());
			clientproduct.setProductDescription(productdto.getProductDescription());
			clientproduct.setProductDate(productdto.getProductDate());
			clientproduct.setProductVendor(productdto.getProductVendor());
			Clientproduct product = clientProductRepositories.save(clientproduct);// save
			clientstock.setProduct(product);
			clientstock.setStock(productdto.getProductQty());
			clientStockRepositories.save(clientstock);
			return true;
		}

	}

	@Override
	public List<ClientProductDto> searchProduct(String productName) {

		List<ClientProductDto> clientProductDtos = new ArrayList<ClientProductDto>();
		List<Clientproduct> products = clientProductRepositories
				.findByProductNameIgnoreCaseContaining( productName );
		if (products != null && products.size() > 0) {

			for (Clientproduct product : products) {
				ClientProductDto productdto = new ClientProductDto();
				ClientCategoryDto categorydto = new ClientCategoryDto();
				categorydto.setCategoryId(product.getCategory().getCategoryId());
				categorydto.setId(product.getCategory().getId());
				categorydto.setCategoryName(product.getCategory().getCategoryName());
				productdto.setCategory(categorydto);
				productdto.setId(product.getId());
				productdto.setProductName(product.getProductName());
				productdto.setProductQty(product.getProducQty());
				productdto.setProductNo(product.getProductNo());
				productdto.setProductDate(product.getProductDate());
				productdto.setProductDescription(product.getProductDescription());
				productdto.setProductVendor(product.getProductVendor());
				clientProductDtos.add(productdto);

			}
		}
		return clientProductDtos;

	}

}
