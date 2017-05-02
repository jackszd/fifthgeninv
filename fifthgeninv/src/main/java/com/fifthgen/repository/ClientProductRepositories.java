  package com.fifthgen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fifthgen.entity.Clientproduct;

public interface ClientProductRepositories  extends JpaRepository<Clientproduct, Integer> {

	List<Clientproduct>findByProductNameIgnoreCaseContaining(String productName);


}
