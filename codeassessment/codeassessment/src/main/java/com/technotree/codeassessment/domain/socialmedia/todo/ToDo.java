package com.technotree.codeassessment.domain.socialmedia.todo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "todos")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class ToDo {

    @Id
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "completed")
    private Boolean completed;

}
