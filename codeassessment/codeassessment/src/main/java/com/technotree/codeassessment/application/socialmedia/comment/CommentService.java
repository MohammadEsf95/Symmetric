package com.technotree.codeassessment.application.socialmedia.comment;

import com.technotree.codeassessment.application.socialmedia.comment.dto.CommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.dto.CreateCommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.dto.UpdateCommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.specification.CommentCriteria;
import com.technotree.codeassessment.application.util.actionresponse.SuccessResponseDTO;
import com.technotree.codeassessment.application.util.pagination.PageDTO;
import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import org.springframework.data.domain.Pageable;

import java.util.Set;

public interface CommentService {
    void saveAllComments(Set<CommentDTO> comments);

    PageDTO<CommentDTO> findAll(Pageable pageable, CommentCriteria commentCriteria);

    SuccessResponseDTO create(CreateCommentDTO createCommentDTO);

    SuccessResponseDTO update(UpdateCommentDTO updateCommentDTO);

    SuccessResponseDTO deleteById(Integer id);
}
