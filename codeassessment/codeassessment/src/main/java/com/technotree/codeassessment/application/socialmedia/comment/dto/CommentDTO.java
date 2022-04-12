package com.technotree.codeassessment.application.socialmedia.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CommentDTO {
    private Integer postId;
    private Integer id;
    private String name;
    private String email;
    private String body;
}
