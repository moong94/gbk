package com.gbk1021.gbk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j
public class GbkApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(GbkApplication.class, args);
		log.info("""
			
				================================
				=                              =
				=         GBK PROJECT          =
				=                              =
				================================	

				""");
	}

}
