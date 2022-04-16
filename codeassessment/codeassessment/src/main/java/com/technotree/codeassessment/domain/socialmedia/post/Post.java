package com.technotree.codeassessment.domain.socialmedia.post;

import com.technotree.codeassessment.domain.socialmedia.comment.Comment;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "body")
    private String body;

    @Column(name = "user_id")
    private Integer userId;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Comment> comments;

    public Post() {
    }

    public Post(Integer id, String title, String body, Integer userId, Set<Comment> comments) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.comments = comments;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    public Integer getUserId() {
        return userId;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public Post updateComments(Comment comment) {
        this.comments.add(comment);
        return this;
    }

    public Post update(
            String title,
            String body
    ) {
        this.title = title;
        this.body = body;
        return this;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                ", userId=" + userId +
                ", comments=" + comments +
                '}';
    }
}
