import React from "react";
import { notFound } from "next/navigation";

function Blog({ searchParams }) {
  if (searchParams.test === "true") {
    notFound();
  }
  return (
    <div>
      <h2>Blog Page</h2>
    </div>
  );
}

export default Blog;
