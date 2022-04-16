package com.technotree.codeassessment.application.socialmedia.comment.dto;

import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CommentDTO {
    private Integer postId;
    private Integer id;
    private String name;
    private String email;
    private String body;

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
}
