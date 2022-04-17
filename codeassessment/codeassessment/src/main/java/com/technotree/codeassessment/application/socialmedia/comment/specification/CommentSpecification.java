package com.technotree.codeassessment.application.socialmedia.comment.specification;

import com.technotree.codeassessment.application.socialmedia.post.specification.PostCriteria;
import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import com.technotree.codeassessment.domain.socialmedia.post.Post;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class CommentSpecification implements Specification<Comment> {

    private final CommentCriteria commentCriteria;
    private final List<Predicate> predicates;

    public CommentSpecification(CommentCriteria commentCriteria) {
        this.commentCriteria = commentCriteria;
        this.predicates = new ArrayList<>();
    }

    @Override
    public Predicate toPredicate(Root<Comment> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        addPostIdPredicate(root, criteriaBuilder);
        return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
    }

    private void addPostIdPredicate(Root<Comment> root, CriteriaBuilder criteriaBuilder) {
        if (commentCriteria.getPostId() != null) {
            predicates.add(criteriaBuilder.equal(root.get("post").get("id"),  commentCriteria.getPostId()));
        }
    }
}
