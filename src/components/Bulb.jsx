import React from "react";

const Bulb = (props) => {
  return <img onClick={props.func} src={props.url} alt="bulb" />;
};
export default Bulb;
