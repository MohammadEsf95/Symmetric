package com.technotree.codeassessment.application.socialmedia.comment;

import com.technotree.codeassessment.application.socialmedia.comment.dto.CommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.dto.CreateCommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.dto.UpdateCommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.specification.CommentCriteria;
import com.technotree.codeassessment.application.socialmedia.comment.specification.CommentSpecification;
import com.technotree.codeassessment.application.util.actionresponse.SuccessResponseDTO;
import com.technotree.codeassessment.application.util.pagination.PageDTO;
import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import com.technotree.codeassessment.domain.socialmedia.comment.CommentJpaRepository;
import com.technotree.codeassessment.domain.socialmedia.post.Post;
import com.technotree.codeassessment.domain.socialmedia.post.PostJpaRepository;
import com.technotree.codeassessment.infrastructure.ApplicationMessages;
import com.technotree.codeassessment.infrastructure.exception.ExceptionMessages;
import com.technotree.codeassessment.infrastructure.exception.applicationexception.RecordNotFoundException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
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

    @Override
    public PageDTO<CommentDTO> findAll(Pageable pageable, CommentCriteria commentCriteria) {
        Specification<Comment> specification = Specification.where(new CommentSpecification(commentCriteria));
        return new PageDTO<>(
                CommentDTO.fromComments(
                        commentJpaRepository.findAll(
                                specification,
                                pageable
                        ).getContent()
                ), commentJpaRepository.count(specification)
        );
    }

    @Override
    public SuccessResponseDTO create(CreateCommentDTO createCommentDTO) {
        Post post = postJpaRepository.findById(createCommentDTO.getPostId()).orElseThrow(
                () -> new RecordNotFoundException(ExceptionMessages.RECORD_NOT_FOUND.getTitle())
        );
        commentJpaRepository.save(
                CreateCommentDTO.to(createCommentDTO, post)
        );
        return new SuccessResponseDTO(ApplicationMessages.OPERATION_COMPLETED.getTitle());
    }

    @Override
    public SuccessResponseDTO update(UpdateCommentDTO updateCommentDTO) {
        Comment comment = commentJpaRepository.findById(updateCommentDTO.getId()).orElseThrow(
                () -> new RecordNotFoundException(ExceptionMessages.RECORD_NOT_FOUND.getTitle())
        );

        commentJpaRepository.save(
                comment.update(
                        updateCommentDTO.getName(),
                        updateCommentDTO.getEmail(),
                        updateCommentDTO.getBody()
                )
        );
        return new SuccessResponseDTO(ApplicationMessages.OPERATION_COMPLETED.getTitle());
    }

    @Override
    public SuccessResponseDTO deleteById(Integer id) {
        commentJpaRepository.deleteById(id);
        return new SuccessResponseDTO(ApplicationMessages.OPERATION_COMPLETED.getTitle());
    }
}
