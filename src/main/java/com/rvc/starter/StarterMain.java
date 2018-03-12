package com.rvc.starter;

import org.springframework.boot.SpringApplication;

public class StarterMain {
	public static void main(final String... args) {
		new SpringApplication(AppConfig.class).run(args);
	}
}