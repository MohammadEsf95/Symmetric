package com.technotree.codeassessment.application.socialmedia.todo.specification;

import com.technotree.codeassessment.domain.socialmedia.post.Post;
import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class ToDoSpecification implements Specification<ToDo> {

    private final ToDoCriteria toDoCriteria;
    private final List<Predicate> predicates;

    public ToDoSpecification(ToDoCriteria toDoCriteria) {
        this.toDoCriteria = toDoCriteria;
        this.predicates = new ArrayList<>();
    }

    @Override
    public Predicate toPredicate(Root<ToDo> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        addCompletedPredicate(root, criteriaBuilder);
        addUserIdPredicate(root, criteriaBuilder);
        return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
    }

    private void addUserIdPredicate(Root<ToDo> root, CriteriaBuilder criteriaBuilder) {
        if (toDoCriteria.getUserId() != null) {
            predicates.add(criteriaBuilder.equal(root.get("userId"), toDoCriteria.getUserId()));
        }
    }

    private void addCompletedPredicate(Root<ToDo> root, CriteriaBuilder criteriaBuilder) {
        if (toDoCriteria.getCompleted() != null) {
            predicates.add(criteriaBuilder.equal(root.get("completed"), toDoCriteria.getCompleted()));
        }
    }
}
