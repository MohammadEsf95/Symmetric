package com.technotree.codeassessment.application.socialmedia.comment.specification;

public class CommentCriteria {

    private Integer postId;

    public CommentCriteria(Integer postId) {
        this.postId = postId;
    }

    public Integer getPostId() {
        return postId;
    }
}
