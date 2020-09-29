import React from "react";

import "../css/Burger.css";

function Burger({ open, setOpen }) {
  return (
    <div className='burger' onClick={() => setOpen(!open)}>
      <div className={open && "first--close"} />
      <div className={open && "second--close"} />
      <div className={open && "third--close"} />
    </div>
  );
}

export { Burger };
