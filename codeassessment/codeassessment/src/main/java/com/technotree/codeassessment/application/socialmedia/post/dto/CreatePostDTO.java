package com.technotree.codeassessment.application.socialmedia.post.dto;

import com.technotree.codeassessment.domain.socialmedia.post.Post;

import java.util.HashSet;

public class CreatePostDTO {
    private String title;
    private String body;
    private Integer userId;

    public CreatePostDTO(String title, String body, Integer userId) {
        this.title = title;
        this.body = body;
        this.userId = userId;
    }

    public CreatePostDTO() {
    }

    public static Post to(CreatePostDTO createPostDTO) {
        return new Post(
                null,
                createPostDTO.getTitle(),
                createPostDTO.getBody(),
                createPostDTO.getUserId(),
                new HashSet<>()
        );
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    public Integer getUserId() {
        return userId;
    }
}
