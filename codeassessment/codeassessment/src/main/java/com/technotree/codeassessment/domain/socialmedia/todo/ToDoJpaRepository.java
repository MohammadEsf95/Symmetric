package com.technotree.codeassessment.domain.socialmedia.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoJpaRepository extends JpaRepository<ToDo, Integer>, JpaSpecificationExecutor<ToDo> {
}
