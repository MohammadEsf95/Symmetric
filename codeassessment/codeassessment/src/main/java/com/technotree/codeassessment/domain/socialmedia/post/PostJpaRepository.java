package com.technotree.codeassessment.domain.socialmedia.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PostJpaRepository extends JpaRepository<Post, Integer>, JpaSpecificationExecutor<Post> {
}
