package com.technotree.codeassessment.application.socialmedia.post;

import com.technotree.codeassessment.application.socialmedia.post.dto.PostDTO;
import com.technotree.codeassessment.application.util.pagination.PageDTO;
import com.technotree.codeassessment.domain.socialmedia.post.Post;
import org.springframework.data.domain.Pageable;

import java.util.Set;

public interface PostService {

    void saveAllPosts(Set<Post> posts);

    PageDTO<PostDTO> findAll(Pageable pageable);
}
