package com.fifthgen.entity;



import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="clientproduct")
public class Clientproduct {

	private Integer id;
	private String productName;
	private Integer producQty;
	private String productNo;
	private Date productDate;
	private String productDescription;
	private ClientCategory category;
	private String productVendor;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name= "id")
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	@Column(name= "product_name")
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	@Column(name= "product_qty")
	public Integer getProducQty() {
		return producQty;
	}
	public void setProducQty(Integer producQty) {
		this.producQty = producQty;
	}
	
	@Column(name= "product_no")
	public String getProductNo() {
		return productNo;
	}
	
	public void setProductNo(String productNo) {
		this.productNo = productNo;
	}
	@Column(name= "product_date")
	public Date getProductDate() {
		return productDate;
	}
	public void setProductDate(Date productDate) {
		this.productDate = productDate;
	}
	@Column(name= "product_description")
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	@ManyToOne
	@JoinColumn(name = "category_id")
	public ClientCategory getCategory() {
		return category;
	}
	public void setCategory(ClientCategory category) {
		this.category = category;
	}
	@Column(name= "productvendor")
	public String getProductVendor() {
		return productVendor;
	}
	public void setProductVendor(String productVendor) {
		this.productVendor = productVendor;
	}
	
	
	
	
	
	
	
}
