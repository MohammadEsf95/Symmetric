package com.technotree.codeassessment.application.socialmedia.comment;

import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import com.technotree.codeassessment.domain.socialmedia.comment.CommentJpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@Transactional
public class CommentDefaultService implements CommentService {

    private final CommentJpaRepository commentJpaRepository;

    public CommentDefaultService(CommentJpaRepository commentJpaRepository) {
        this.commentJpaRepository = commentJpaRepository;
    }

    @Override
    public void saveAllComments(Set<Comment> comments) {
        commentJpaRepository.saveAll(comments);
    }
}
