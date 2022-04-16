package com.technotree.codeassessment.application.socialmedia.post;

import com.technotree.codeassessment.application.socialmedia.comment.dto.CommentDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.CreatePostDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.PostDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.UpdatePostDTO;
import com.technotree.codeassessment.application.socialmedia.post.specification.PostCriteria;
import com.technotree.codeassessment.application.util.pagination.PageDTO;
import com.technotree.codeassessment.domain.socialmedia.post.Post;
import com.technotree.codeassessment.application.util.actionresponse.SuccessResponseDTO;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Set;

public interface PostService {

    void saveAllPosts(Set<Post> posts);

    PageDTO<PostDTO> findAll(Pageable pageable, PostCriteria postCriteria);

    PostDTO findById(Integer id);

    List<CommentDTO> findCommentsByPostId(Integer id);

    SuccessResponseDTO create(CreatePostDTO createPostDTO);

    SuccessResponseDTO update(UpdatePostDTO updatePostDTO);

    SuccessResponseDTO deleteById(Integer id);
}
