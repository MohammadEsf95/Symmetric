package com.technotree.codeassessment.infrastructure.config;

import com.technotree.codeassessment.application.socialmedia.post.PostService;
import com.technotree.codeassessment.domain.socialmedia.post.Post;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Set;

@Component
@Order(1)
public class RetrievePosts implements CommandLineRunner {


    private static final Logger logger = LoggerFactory.getLogger(RetrievePosts.class);
    private final RestTemplate restTemplate;

    private final PostService postService;

    @Value("${posts.path}")
    private String postsUrl;

    @Value("todos.path")
    private String todosUrl;

    public RetrievePosts(RestTemplate restTemplate, PostService postService) {
        this.restTemplate = restTemplate;
        this.postService = postService;
    }


    @Override
    public void run(String... args) throws Exception {
        ResponseEntity<Set<Post>> responseEntity = restTemplate.exchange(
                postsUrl,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Set<Post>>() {}
        );
        Set<Post> posts = responseEntity.getBody();
        postService.saveAllPosts(posts);
        assert posts != null;
        posts.forEach(post -> logger.info(post.toString()));
    }
}
