import React from "react";

function Logo(props) {
    console.log({props})
  return <img src={props.src} className="App-logo" alt="logo" style={props.animated} />;
}

export default Logo;
