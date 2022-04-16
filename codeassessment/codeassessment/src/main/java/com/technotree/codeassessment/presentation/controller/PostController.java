package com.technotree.codeassessment.presentation.controller;

import com.technotree.codeassessment.application.socialmedia.post.PostService;
import com.technotree.codeassessment.application.socialmedia.post.dto.CreatePostDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.UpdatePostDTO;
import com.technotree.codeassessment.application.socialmedia.post.specification.PostCriteria;
import com.technotree.codeassessment.application.util.pagination.PaginationDTO;
import com.technotree.codeassessment.presentation.responseentity.ResponseEntityUtil;
import com.technotree.codeassessment.presentation.responseentity.response.SuccessfulRequestResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll(
            @RequestParam(required = false) String title,
            @RequestParam(required = false, defaultValue = "1") int page,
            @RequestParam(required = false, defaultValue = "10") int pageSize
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        postService.findAll(
                                PaginationDTO.pageable(page, pageSize),
                                new PostCriteria(title)
                        )
                )
        );
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<Object> findById(
            @PathVariable Integer id
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        postService.findById(id)
                )
        );
    }

    @GetMapping(path = "{id}/comments")
    public ResponseEntity<Object> findCommentsByPostId(
            @PathVariable Integer id
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        postService.findCommentsByPostId(id)
                )
        );
    }

    @PostMapping
    public ResponseEntity<Object> create(
            @RequestBody CreatePostDTO createPostDTO
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        postService.create(createPostDTO)
                )
        );
    }

    @PatchMapping
    public ResponseEntity<Object> update(
            @RequestBody UpdatePostDTO updatePostDTO
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        postService.update(updatePostDTO)
                )
        );
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<Object> delete(
            @PathVariable Integer id
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        postService.deleteById(id)
                )
        );
    }
}
