import React from "react";

const home = props => {
  console.log(" props", props);
  const change = e => {
    props.history.push("/mahi");
  };
  return (
    <>
      <h1>Home Component</h1>
      <button type="button" onClick={change}>
        {" "}
        redirect
      </button>
    </>
  );
};

export default home;
