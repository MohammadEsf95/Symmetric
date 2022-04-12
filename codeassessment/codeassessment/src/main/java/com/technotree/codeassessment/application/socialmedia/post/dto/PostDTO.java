package com.technotree.codeassessment.application.socialmedia.post.dto;

import com.technotree.codeassessment.domain.socialmedia.post.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class PostDTO {
    private Integer userId;
    private Integer id;
    private String title;
    private String body;

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
}
