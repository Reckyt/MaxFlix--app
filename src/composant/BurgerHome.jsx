import React from "react";

import "../css/BurgerHome.css";

function BurgerHome({ open, setOpen }) {
  return (
    <div className='burger--responsive' onClick={() => setOpen(!open)}>
      <div className={open && "first--close"} />
      <div className={open && "second--close"} />
      <div className={open && "third--close"} />
    </div>
  );
}

export { BurgerHome };
