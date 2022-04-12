package com.technotree.codeassessment.application.socialmedia.comment;

import com.technotree.codeassessment.application.socialmedia.comment.dto.CommentDTO;
import com.technotree.codeassessment.domain.socialmedia.comment.Comment;

import java.util.Set;

public interface CommentService {
    void saveAllComments(Set<CommentDTO> comments);
}
