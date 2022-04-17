package com.technotree.codeassessment.application.socialmedia.post.dto;

public class UpdatePostDTO extends CreatePostDTO {

    private Integer id;

    public UpdatePostDTO() {
    }

    public UpdatePostDTO(String title, String body, Integer userId, Integer id) {
        super(title, body, userId);
        this.id = id;
    }

    public Integer getId() {
        return id;
    }
}
