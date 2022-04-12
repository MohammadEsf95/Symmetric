package com.technotree.codeassessment.domain.socialmedia.post;

import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "posts")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Post {

    @Id
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "body")
    private String body;

    @Column(name = "user_id")
    private Integer userId;

    @OneToMany(mappedBy = "post")
    private Set<Comment> comments;

    public Post updateComments(Comment comment) {
        this.comments.add(comment);
        return this;
    }
}
