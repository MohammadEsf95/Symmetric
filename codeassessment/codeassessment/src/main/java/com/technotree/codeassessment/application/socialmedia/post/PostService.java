package com.technotree.codeassessment.application.socialmedia.post;

import com.technotree.codeassessment.domain.socialmedia.post.Post;

import java.util.Set;

public interface PostService {

    void saveAllPosts(Set<Post> posts);
}
