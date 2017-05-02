package com.fifthgen.dto;

import com.fifthgen.entity.Clientproduct;

public class ClientStockDto {

	private Integer id;
	private ClientProductDto product;
	private Integer Stock;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public ClientProductDto getProduct() {
		return product;
	}
	public void setProduct(ClientProductDto product) {
		this.product = product;
	}
	public Integer getStock() {
		return Stock;
	}
	public void setStock(Integer stock) {
		Stock = stock;
	}
	
	
	

}
