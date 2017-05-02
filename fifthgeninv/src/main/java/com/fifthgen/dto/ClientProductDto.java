package com.fifthgen.dto;



import java.util.Date;

import com.fifthgen.entity.ClientCategory;

public class ClientProductDto {

	private Integer id;
	private String productName;
	private Integer productQty;
	private String productNo;
	private Date productDate;
	private String productDescription;
	private ClientCategoryDto category;
	private String productVendor;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Integer getProductQty() {
		return productQty;
	}
	public void setProductQty(Integer productQty) {
		this.productQty = productQty;
	}
	public String getProductNo() {
		return productNo;
	}
	public void setProductNo(String productNo) {
		this.productNo = productNo;
	}
	public Date getProductDate() {
		return productDate;
	}
	public void setProductDate(Date productDate) {
		this.productDate = productDate;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public ClientCategoryDto getCategory() {
		return category;
	}
	public void setCategory(ClientCategoryDto category) {
		this.category = category;
	}
	public String getProductVendor() {
		return productVendor;
	}
	public void setProductVendor(String productVendor) {
		this.productVendor = productVendor;
	}
	
	
	
	

}
