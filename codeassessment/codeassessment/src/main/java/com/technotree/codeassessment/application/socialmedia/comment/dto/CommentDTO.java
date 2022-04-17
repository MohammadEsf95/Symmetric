package com.technotree.codeassessment.application.socialmedia.comment.dto;

import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

public class CommentDTO {
    private Integer postId;
    private Integer id;
    private String name;
    private String email;
    private String body;

    public CommentDTO(Integer postId, Integer id, String name, String email, String body) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }

    public CommentDTO() {
    }

    public static List<CommentDTO> fromComments(List<Comment> comments) {
        return comments.stream()
                .map(CommentDTO::fromComment)
                .collect(Collectors.toList());
    }

    public static CommentDTO fromComment(Comment comment) {
        return new CommentDTO(
                comment.getPost().getId(),
                comment.getId(),
                comment.getName(),
                comment.getEmail(),
                comment.getBody()
        );
    }

    public Integer getPostId() {
        return postId;
    }

    public Integer getId() {
        return id;
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
}
