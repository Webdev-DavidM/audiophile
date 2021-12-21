import React from "react";

 const Header:React.FC<{number: string}> = (props) => {
  return <div>{props.number}</div>;
}

export default Header