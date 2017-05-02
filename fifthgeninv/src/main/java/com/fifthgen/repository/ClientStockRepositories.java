package com.fifthgen.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fifthgen.entity.ClientStock;
import com.fifthgen.entity.Clientproduct;

public interface ClientStockRepositories extends JpaRepository<ClientStock, Integer>{

	ClientStock findByProduct(Clientproduct clientproduct);

	


}
