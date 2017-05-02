package com.fifthgen.entity;

import static javax.persistence.GenerationType.IDENTITY;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="clientstock")
public class ClientStock {

	private Integer id;
	private Clientproduct product;
	private Integer Stock;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id")
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@OneToOne
	@JoinColumn(name = "product_id")
	public Clientproduct getProduct() {
		return product;
	}
	public void setProduct(Clientproduct product) {
		this.product = product;
	}
	
	@Column(name = "stock")
	public Integer getStock() {
		return Stock;
	}
	public void setStock(Integer stock) {
		Stock = stock;
	}
	
	
	
}
