package com.technotree.codeassessment.application.socialmedia.comment;

import com.technotree.codeassessment.domain.socialmedia.comment.Comment;

import java.util.Set;

public interface CommentService {
    void saveAllComments(Set<Comment> comments);
}
