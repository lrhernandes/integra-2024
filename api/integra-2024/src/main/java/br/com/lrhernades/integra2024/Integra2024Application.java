package br.com.lrhernades.integra2024;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


/*@EnableJpaRepositories("br.com.lrhernandes.integra2024.*")
@ComponentScan({ "br.com.lrhernandes.integra2024.*", "br.com.lrhernandes.integra2024.controller" })
@EntityScan("br.com.lrhernandes.integra2024.entity")
*/
//@ComponentScan({ "controller" })
@SpringBootApplication(scanBasePackages={"br.com.lrhernandes.integra2024.controller"})
public class Integra2024Application {

	public static void main(String[] args) {
		SpringApplication.run(Integra2024Application.class, args);
	}

}
