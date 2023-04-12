import React from "react";
import {} from "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="section-header">
        <h2>blog page</h2>
      </div>
      <div className="section-container">
        <div style={{ marginBottom: "50px" }}>
          <div className="qna-content">
            <div className="card">
              <h2 className="question">When should you use context API?</h2>
              <div className="answer">
                <b style={{ color: "red" }}>Context API</b> should use when you
                have data that needs to be shared between multiple components
                that are not directly related to each other, and passing props
                down the component tree becomes cumbersome. It's particularly
                useful when you have a large application with many components
                that need to share the same data. Context API is also helpful
                for managing global state, such as authentication or theme
                management, that needs to be accessed by multiple components.
                Additionally, Context API can be used for managing localization
                and passing data to deeply nested components.
              </div>
            </div>
            <div className="card">
              <h2 className="question">What is a custom hook?</h2>
              <div className="answer">
                A <b style={{ color: "red" }}>custom hook</b> is a JavaScript
                function that utilizes one or more of the built-in React hooks
                to provide a reusable piece of logic that can be shared across
                multiple components in a React application. Custom hooks allow
                you to encapsulate complex logic or behavior and expose a
                simplified interface for other components to use. By convention,
                custom hook names should start with the word "use" to make it
                clear that they are hooks and to follow the rules of hooks.
              </div>
            </div>
            <div className="card">
              <h2 className="question">What is useRef?</h2>
              <div className="answer">
                <b style={{ color: "red" }}>useRef</b> is a built-in hook in
                React that provides a way to store a mutable value in a way that
                persists between re-renders of a component. The useRef hook
                returns an object with a current property that can be used to
                read or modify the value. Unlike state, changing the value of a
                useRef object does not trigger a re-render of the component.
              </div>
            </div>
            <div className="card">
              <h2 className="question">What is useMemo?</h2>
              <div className="answer">
                <b style={{ color: "red" }}>useMemo</b> is a built-in hook in
                React that is used to memoize the result of a function so that
                it is only re-computed when the inputs to that function change.
                Memoization is a technique used to optimize expensive
                computations or functions that are called frequently but return
                the same result for the same input.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
