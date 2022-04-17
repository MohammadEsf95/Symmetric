package com.technotree.codeassessment.domain.socialmedia.comment;

import com.technotree.codeassessment.domain.socialmedia.post.Post;

import javax.persistence.*;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "body", length = 500)
    private String body;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    public Comment() {
    }

    public Comment(Integer id, String name, String email, String body, Post post) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
        this.post = post;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getBody() {
        return body;
    }

    public Post getPost() {
        return post;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", body='" + body + '\'' +
                ", post=" + post +
                '}';
    }

    public Comment update(
            String name,
            String email,
            String body
    ) {
        this.name = name;
        this.email = email;
        this.body = body;
        return this;
    }
}
