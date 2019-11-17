import React from "react";

import classes from "./preloader.module.scss";

export default function Preloader() {
  return (
    <div className={classes["lds-ripple"]}>
      <div />
      <div />
    </div>
  );
}
