package com.technotree.codeassessment.domain.socialmedia.comment;

import com.technotree.codeassessment.domain.socialmedia.post.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "comments")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
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
}
