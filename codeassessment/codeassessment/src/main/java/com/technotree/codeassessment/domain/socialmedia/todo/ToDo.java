package com.technotree.codeassessment.domain.socialmedia.todo;

import com.technotree.codeassessment.domain.socialmedia.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
