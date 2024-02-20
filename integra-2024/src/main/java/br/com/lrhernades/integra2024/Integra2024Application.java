package br.com.lrhernades.integra2024;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


/*
@EntityScan("br.com.lrhernandes.integra2024.entity")
*/
//@ComponentScan({ "controller" })
/*@Configuration
@SpringBootApplication(scanBasePackages={"controller"})*/
@SpringBootApplication
@EnableJpaRepositories("br.com.lrhernandes.integra2024.*")
@ComponentScan({ "br.com.lrhernandes.integra2024.*", "br.com.lrhernandes.integra2024.controller", "controller" })
public class Integra2024Application {

	public static void main(String[] args) {
		SpringApplication.run(Integra2024Application.class, args);
                System.out.println("iniciou");
	}

}
