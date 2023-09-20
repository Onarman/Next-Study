import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <h1>I am coming from test layout</h1>
      <div>{children}</div>
    </div>
  );
}
