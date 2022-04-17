package com.technotree.codeassessment.presentation.controller;

import com.technotree.codeassessment.application.socialmedia.comment.CommentService;
import com.technotree.codeassessment.application.socialmedia.comment.dto.CreateCommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.dto.UpdateCommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.specification.CommentCriteria;
import com.technotree.codeassessment.application.util.pagination.PaginationDTO;
import com.technotree.codeassessment.presentation.responseentity.ResponseEntityUtil;
import com.technotree.codeassessment.presentation.responseentity.response.SuccessfulRequestResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll(
            @RequestParam(required = false) Integer postId,
            @RequestParam(required = false, defaultValue = "1") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer pageSize
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        commentService.findAll(
                                PaginationDTO.pageable(page, pageSize),
                                new CommentCriteria(postId)
                        )
                )
        );
    }

    @PostMapping
    public ResponseEntity<Object> create(
            @RequestBody CreateCommentDTO createCommentDTO
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        commentService.create(createCommentDTO)
                )
        );
    }

    @PatchMapping
    public ResponseEntity<Object> update(
            @RequestBody UpdateCommentDTO updateCommentDTO
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        commentService.update(updateCommentDTO)
                )
        );
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<Object> deleteById(
            @PathVariable Integer id
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        commentService.deleteById(id)
                )
        );
    }
}
