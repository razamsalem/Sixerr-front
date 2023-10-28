import React, { useState } from 'react'

export function Pagination({ currentPage, totalPages, onPageChange }) {
    const [activePage, setActivePage] = useState(1)

    function handlePageChange(newPage) {
        if (newPage >= 1 && newPage <= totalPages) {
            console.log('currentPage', currentPage)
            onPageChange(newPage)
            setActivePage(newPage)
        }
    }

    function renderPageNumbers() {
        return Array.from({ length: totalPages }, (_, idx) => (
            <li
                key={idx + 1}
                onClick={() => handlePageChange(idx + 1)}
                className={`page-number ${activePage === idx + 1 ? 'active' : ''}`}
            >
                <span>{idx + 1}</span>
            </li>
        ))
    }

    return (
        <ul className="pagination flex">
            {currentPage > 1 && (
                <li
                    className="pagination-arrows"
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <i class="fa-solid fa-arrow-left"></i>
                </li>
            )}
            {renderPageNumbers()}
            {currentPage < totalPages && (
                <li
                    className="pagination-arrows"
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    <i class="fa-solid fa-arrow-right"></i>
                </li>
            )}
        </ul>
    )
}