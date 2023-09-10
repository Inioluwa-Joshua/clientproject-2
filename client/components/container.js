import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container py-8 mx-auto px-[0.8rem] lg:px-[3rem] ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;