package com.technotree.codeassessment.domain.socialmedia.user;

import com.technotree.codeassessment.domain.socialmedia.post.Post;
import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class User {

    @Id
    private Integer id;

    @OneToMany(mappedBy = "user")
    private Set<Post> posts = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<ToDo> toDos = new HashSet<>();
}
