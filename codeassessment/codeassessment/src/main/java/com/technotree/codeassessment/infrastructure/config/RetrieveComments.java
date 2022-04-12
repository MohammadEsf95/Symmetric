package com.technotree.codeassessment.infrastructure.config;

import com.technotree.codeassessment.application.socialmedia.comment.CommentService;
import com.technotree.codeassessment.application.socialmedia.post.PostService;
import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Set;

@Component
@Order(2)
public class RetrieveComments implements CommandLineRunner {

    @Value("${comments.path}")
    private String commentsUrl;

    private static final Logger logger = LoggerFactory.getLogger(RetrievePosts.class);

    private final CommentService commentService;
    private final RestTemplate restTemplate;

    @Autowired
    public RetrieveComments(CommentService commentService, RestTemplateBuilder restTemplateBuilder) {
        this.commentService = commentService;
        this.restTemplate = restTemplateBuilder.build();
    }

    @Override
    public void run(String... args) throws Exception {
        ResponseEntity<Set<Comment>> responseEntity = restTemplate.exchange(
                commentsUrl,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Set<Comment>>() {}
        );

        Set<Comment> comments = responseEntity.getBody();
        commentService.saveAllComments(comments);
        assert comments != null;
        comments.forEach(comment -> logger.info(comment.toString()));
    }
}
