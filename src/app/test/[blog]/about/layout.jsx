import React from "react";

export default function aboutLayout({ children }) {
  return (
    <div>
      <h2>I am coming from about layout</h2>
      <div>{children}</div>
    </div>
  );
}
