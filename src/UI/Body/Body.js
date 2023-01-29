import { Fragment } from "react";
import Catalogue from "./catalogue/Catalogue";
import Flashsale from "./flashdeals/Flashsales";
import Kids from "./Gender/kids/Kids";
import Men from "./Gender/Men/Men";
import Women from "./Gender/Women/Women";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <Fragment>
      <Catalogue />
      <Flashsale />
      <section className={classes.gender}>
        <Men />
        <Women />
        <Kids />
      </section>
    </Fragment>
  );
};

export default Body;
