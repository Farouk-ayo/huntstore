import WomenProducts from "./WomenProduct";
import WomenSidebar from "./WomenSidebar";
import classes from "../Store.module.css";

const Women = () => {
  return (
    <section className={classes.section}>
      <WomenSidebar />
      <WomenProducts />
    </section>
  );
};

export default Women;