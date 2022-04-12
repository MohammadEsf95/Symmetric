package com.technotree.codeassessment.application.socialmedia.post;

import com.technotree.codeassessment.application.socialmedia.post.dto.PostDTO;
import com.technotree.codeassessment.application.util.pagination.PageDTO;
import com.technotree.codeassessment.domain.socialmedia.post.Post;
import com.technotree.codeassessment.domain.socialmedia.post.PostJpaRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PostDefaultService implements PostService {

    private final PostJpaRepository postJpaRepository;

    public PostDefaultService(PostJpaRepository postJpaRepository) {
        this.postJpaRepository = postJpaRepository;
    }

    @Override
    public void saveAllPosts(Set<Post> posts) {
        postJpaRepository.saveAll(posts);
    }

    @Override
    public PageDTO<PostDTO> findAll(Pageable pageable) {
        return new PageDTO<>(
                PostDTO.fromPosts(
                        postJpaRepository.findAll(pageable).getContent()
                )
        );
    }
}
