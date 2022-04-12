package com.technotree.codeassessment.application.socialmedia.comment;

import com.technotree.codeassessment.application.socialmedia.comment.dto.CommentDTO;
import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import com.technotree.codeassessment.domain.socialmedia.comment.CommentJpaRepository;
import com.technotree.codeassessment.domain.socialmedia.post.Post;
import com.technotree.codeassessment.domain.socialmedia.post.PostJpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.PostPersist;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class CommentDefaultService implements CommentService {

    private final PostJpaRepository postJpaRepository;
    private final CommentJpaRepository commentJpaRepository;

    public CommentDefaultService(PostJpaRepository postJpaRepository, CommentJpaRepository commentJpaRepository) {
        this.postJpaRepository = postJpaRepository;
        this.commentJpaRepository = commentJpaRepository;
    }

    @Override
    public void saveAllComments(Set<CommentDTO> comments) {
        for (CommentDTO commentDTO : comments) {
            Optional<Post> optionalPost = postJpaRepository.findById(commentDTO.getPostId());
            if (optionalPost.isPresent()) {
                Post post = optionalPost.get();
                Comment comment = new Comment(
                        commentDTO.getId(),
                        commentDTO.getName(),
                        commentDTO.getEmail(),
                        commentDTO.getBody(),
                        post
                );
                commentJpaRepository.save(
                        comment
                );

                postJpaRepository.save(
                        post.updateComments(comment)
                );
            }
        }
    }
}
