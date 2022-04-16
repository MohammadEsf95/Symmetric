package com.technotree.codeassessment.application.socialmedia.post;

import com.technotree.codeassessment.application.socialmedia.comment.dto.CommentDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.CreatePostDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.PostDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.UpdatePostDTO;
import com.technotree.codeassessment.application.socialmedia.post.specification.PostCriteria;
import com.technotree.codeassessment.application.socialmedia.post.specification.PostSpecification;
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

import java.util.List;
import java.util.Set;

@Service
@Transactional
public class PostDefaultService implements PostService {

    private final PostJpaRepository postJpaRepository;
    private final CommentJpaRepository commentJpaRepository;


    public PostDefaultService(PostJpaRepository postJpaRepository, CommentJpaRepository commentJpaRepository) {
        this.postJpaRepository = postJpaRepository;
        this.commentJpaRepository = commentJpaRepository;
    }

    @Override
    public void saveAllPosts(Set<Post> posts) {
        postJpaRepository.saveAll(posts);
    }

    @Override
    public PageDTO<PostDTO> findAll(Pageable pageable, PostCriteria postCriteria) {
        Specification<Post> specification = Specification.where(new PostSpecification(postCriteria));
        return new PageDTO<>(
                PostDTO.fromPosts(
                        postJpaRepository.findAll(
                                        specification,
                                        pageable)
                                .getContent()
                ),
                postJpaRepository.count(
                        specification
                )
        );
    }

    @Override
    public PostDTO findById(Integer id) {
        Post post = postJpaRepository.findById(id).orElseThrow(
                () -> new RecordNotFoundException(ExceptionMessages.RECORD_NOT_FOUND.getTitle())
        );
        return PostDTO.fromPost(post);
    }

    @Override
    public List<CommentDTO> findCommentsByPostId(Integer id) {
        List<Comment> comments = commentJpaRepository.findAllByPostId(id);
        return CommentDTO.fromComments(comments);
    }

    @Override
    public SuccessResponseDTO create(CreatePostDTO createPostDTO) {
        postJpaRepository.save(CreatePostDTO.to(createPostDTO));
        return new SuccessResponseDTO(ApplicationMessages.OPERATION_COMPLETED.getTitle());
    }

    @Override
    public SuccessResponseDTO update(UpdatePostDTO updatePostDTO) {
        Post post = postJpaRepository.findById(updatePostDTO.getId()).orElseThrow(
                () -> new RecordNotFoundException(ExceptionMessages.RECORD_NOT_FOUND.getTitle())
        );

        postJpaRepository.save(
                post.update(
                        updatePostDTO.getTitle(),
                        updatePostDTO.getBody()
                )
        );
        return new SuccessResponseDTO(ApplicationMessages.OPERATION_COMPLETED.getTitle());
    }

    @Override
    public SuccessResponseDTO deleteById(Integer id) {
        postJpaRepository.deleteById(id);
        return new SuccessResponseDTO(ApplicationMessages.OPERATION_COMPLETED.getTitle());
    }
}
