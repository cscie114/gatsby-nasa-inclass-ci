import React from "react";
import { Link } from "gatsby";
import * as styles from "./pagination.module.css";

// Returns an array of numbers from start (inclusive) to end (exclusive)
const range = (start, end) => {
  return Array.from({ length: end - start }, (_, i) => start + i);
};

// Returns the path based on the page number (page 1 is a special case)
const pagePath = (pathPrefix, pageNum) => {
  if (!Number.isInteger(pageNum)) {
    return "";
  }
  return pageNum === 1 ? pathPrefix : `${pathPrefix}/${pageNum}`;
};

const Pagination = ({ currentPage, numPages, pathPrefix }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < numPages ? currentPage + 1 : null;

  const prevPagePath = pagePath(pathPrefix, prevPage);
  const nextPagePath = pagePath(pathPrefix, nextPage);

  return (
    <div className="pagination">
      {prevPagePath ? <Link to={prevPagePath}>‹ Previous</Link> : "‹ Previous"}{" "}
      {range(1, numPages + 1).map((pageNum) => {
        const className = currentPage === pageNum ? styles.active : "";
        return (
          <Link key={pageNum} className={className} to={pagePath(pathPrefix, pageNum)}>
            {pageNum}
          </Link>
        );
      })}{" "}
      {nextPagePath ? <Link to={nextPagePath}>Next ›</Link> : "Next ›"}
    </div>
  );
};

export default Pagination;
