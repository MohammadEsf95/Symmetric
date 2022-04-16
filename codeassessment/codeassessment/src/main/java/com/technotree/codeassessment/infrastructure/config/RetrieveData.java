//package com.technotree.codeassessment.infrastructure.config;
//
//import com.technotree.codeassessment.domain.socialmedia.post.Post;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//import org.springframework.web.reactive.function.client.WebClient;
//import reactor.core.publisher.Flux;
//
//@Component
//public class RetrieveData implements CommandLineRunner {
//
//    @Override
//    public void run(String... args) throws Exception {
//        WebClient webClient = WebClient.create("https://jsonplaceholder.typicode.com");
//        Flux<Post> postFlux = webClient.get().uri("/posts").retrieve().bodyToFlux(Post.class);
//    }
//}
