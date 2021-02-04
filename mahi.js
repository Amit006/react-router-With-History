import React from "react";

const mahi = props => {
  console.log(" props", props);
  const change = e => {
    props.history.push("/home");
  };
  return (
    <>
      <h1>Mahi Component</h1>
      <button type="button" onClick={change}>
        {" "}
        redirect
      </button>
    </>
  );
};

export default mahi;
