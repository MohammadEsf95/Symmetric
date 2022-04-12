package com.technotree.codeassessment.application.util.pagination;

import java.io.Serializable;
import java.util.List;

public class PageDTO<T> implements Serializable {

    private List<T> items;
    private long totalCounts;

    public PageDTO(List<T> items) {
        this.items = items;
    }

    public PageDTO(List<T> items, long totalCounts) {
        this.items = items;
        this.totalCounts = totalCounts;
    }

    public List<T> getItems() {
        return items;
    }

    public long getTotalCounts() {
        return totalCounts;
    }

    @Override
    public String toString() {
        return "PageDTO{" +
                "items=" + items +
                ", totalCounts=" + totalCounts +
                '}';
    }
}
