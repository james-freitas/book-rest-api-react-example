package com.mightyjava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mightyjava.domain.Book;
import com.mightyjava.service.IService;

@SpringBootApplication
public class Application implements CommandLineRunner {
	
	@Autowired
	private IService<Book> service;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Book book = new Book();
		book.setTitle("Spring Microservices in Action");
		book.setAuthor("John Carnell");
		book.setCoverPhotoURL("https://images-na.ssl-images-amazon.com/images/I/417zLTa1uqL._SX397_BO1,204,203,200_.jpg");
		book.setIsbnNumber(1617293989L);
		book.setPrice(2776.00);
		book.setLanguage("English");
		service.saveOrUpdate(book);

		Book book2 = new Book();
		book2.setTitle("Java Persistence with Hibernate");
		book2.setAuthor("Christian Bauer and Gavin King");
		book2.setCoverPhotoURL("https://images.manning.com/720/960/resize/book/d/2ea186d-c683-4d54-95f9-cca25b6fe49e/bauer2.png");
		book2.setIsbnNumber(9351199193L);
		book2.setPrice(771.00);
		book2.setLanguage("English");
		service.saveOrUpdate(book2);

		Book book3 = new Book();
		book3.setTitle("Grails in Action");
		book3.setAuthor("Glen Smith and Peter Ledbrook");
		book3.setCoverPhotoURL("https://images.manning.com/720/960/resize/book/6/3e9d5ed-4155-466d-ab46-538bb355948d/gsmith2.png");
		book3.setIsbnNumber(1617290963L);
		book3.setPrice(2907.0);
		book3.setLanguage("English");
		service.saveOrUpdate(book3);

		Book book4 = new Book();
		book4.setTitle("Spring Boot in Action");
		book4.setAuthor("Craig Walls");
		book4.setCoverPhotoURL("https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png");
		book4.setIsbnNumber(1617292540L);
		book4.setPrice(3149.0);
		book4.setLanguage("English");
		service.saveOrUpdate(book4);
	}

}