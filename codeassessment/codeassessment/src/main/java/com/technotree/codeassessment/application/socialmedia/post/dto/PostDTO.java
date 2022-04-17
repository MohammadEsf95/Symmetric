package com.technotree.codeassessment.application.socialmedia.post.dto;

import com.technotree.codeassessment.domain.socialmedia.post.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

public class PostDTO {
    private Integer userId;
    private Integer id;
    private String title;
    private String body;

    public PostDTO() {
    }

    public PostDTO(Integer userId, Integer id, String title, String body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    public static PostDTO fromPost(Post post) {
        return new PostDTO(
                post.getUserId(),
                post.getId(),
                post.getTitle(),
                post.getBody()
        );
    }

    public static List<PostDTO> fromPosts(List<Post> posts) {
        return posts.stream()
                .map(PostDTO::fromPost)
                .collect(Collectors.toList());
    }

    public Integer getUserId() {
        return userId;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }
}
