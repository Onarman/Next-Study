import React from "react";

function Blog({ searchParams }) {
  if (searchParams.error === "true") {
    throw new Error("This is an error!");
  }
  return (
    <div>
      <h2>Blog Page</h2>
    </div>
  );
}

export default Blog;
