package com.technotree.codeassessment.application.socialmedia.comment.dto;

import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import com.technotree.codeassessment.domain.socialmedia.post.Post;

public class CreateCommentDTO {

     private int postId;
     private String name;
     private String email;
     private String body;

    public CreateCommentDTO(int postId, String name, String email, String body) {
        this.postId = postId;
        this.name = name;
        this.email = email;
        this.body = body;
    }

    public CreateCommentDTO() {
    }

    public Integer getPostId() {
        return postId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getBody() {
        return body;
    }

    public static Comment to(CreateCommentDTO createCommentDTO, Post post) {
        return new Comment(
                null,
                createCommentDTO.getName(),
                createCommentDTO.getEmail(),
                createCommentDTO.getBody(),
                post
        );
    }
}
