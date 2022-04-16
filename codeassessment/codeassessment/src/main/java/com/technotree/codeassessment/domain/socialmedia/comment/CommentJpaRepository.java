package com.technotree.codeassessment.domain.socialmedia.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentJpaRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findAllByPostId(Integer id);
}
