package com.technotree.codeassessment.domain.socialmedia.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoJpaRepository extends JpaRepository<ToDo, Integer> {
}
