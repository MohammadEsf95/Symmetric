package com.technotree.codeassessment.presentation.controller;

import com.technotree.codeassessment.application.socialmedia.post.PostService;
import com.technotree.codeassessment.application.util.pagination.PaginationDTO;
import com.technotree.codeassessment.presentation.responseentity.ResponseEntityUtil;
import com.technotree.codeassessment.presentation.responseentity.response.SuccessfulRequestResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll(
            @RequestParam(required = false, defaultValue = "1") int page,
            @RequestParam int pageSize
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        postService.findAll(
                                PaginationDTO.pageable(page, pageSize)
                        )
                )
        );
    }
}
