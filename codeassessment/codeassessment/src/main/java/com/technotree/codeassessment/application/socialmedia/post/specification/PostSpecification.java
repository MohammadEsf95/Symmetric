package com.technotree.codeassessment.application.socialmedia.post.specification;

import com.technotree.codeassessment.domain.socialmedia.post.Post;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class PostSpecification implements Specification<Post> {
    private final PostCriteria postCriteria;
    private final List<Predicate> predicates;

    public PostSpecification(PostCriteria postCriteria) {
        this.postCriteria = postCriteria;
        this.predicates = new ArrayList<>();
    }

    @Override
    public Predicate toPredicate(Root<Post> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        addTitlePredicate(root, criteriaBuilder);
        return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
    }

    private void addTitlePredicate(Root<Post> root, CriteriaBuilder criteriaBuilder) {
        if (postCriteria.getTitle() != null && !postCriteria.getTitle().isEmpty()) {
            predicates.add(criteriaBuilder.like(root.get("title"), "%" + postCriteria.getTitle() + "%"));
        }
    }
}
