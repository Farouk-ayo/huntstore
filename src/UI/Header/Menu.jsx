import { useState } from "react";
import classes from "./Menu.module.css";
import { MdCable, MdCheckroom, MdToys, MdWeekend } from "react-icons/md";
import { GiGoldNuggets, GiRunningShoe } from "react-icons/gi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const suggestionArray = [
  { id: 1, type: "Clothes", img: <MdCheckroom size={30} /> },
  { id: 2, type: "Furniture", img: <MdWeekend size={30} /> },
  { id: 3, type: "Electronics", img: <MdCable size={30} /> },
  { id: 4, type: "Shoes", img: <GiRunningShoe size={30} /> },
  { id: 5, type: "Bags", img: <BsHandbagFill size={30} /> },
  { id: 6, type: "Jewelry", img: <GiGoldNuggets size={30} /> },
  { id: 7, type: "Toys", img: <MdToys size={30} /> },
];

const Menu = () => {
  const [categories, setCategories] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeCategory = () => {
    setCategories(!categories);
  };

  const changeDropdown = () => {
    setDropdown(!dropdown);
  };
  const scrollFunction = (e) => {
    const id = e.target.getAttribute("id");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.menu}>
      <div className={classes.categories}>
        <button onClick={changeCategory}>
          <BiCategory />
          Categories
          <RiArrowDropDownFill
            className={categories ? classes.rotate : classes.normal}
          />
        </button>
        {categories ? (
          <ul className={classes.categoriesSug}>
            {suggestionArray.map((each, key) => {
              return (
                <li key={key}>
                  <Link to={`#`}> {each.type}</Link>
                  {each.img}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <nav className={classes.navBar}>
        <Link to="/#men" id="#men" onClick={scrollFunction} className="eachNav">
          Men
        </Link>

        <Link
          to="/#women"
          id="#women"
          onClick={scrollFunction}
          className="eachNav"
        >
          Women
        </Link>

        <Link
          to="/#kids"
          id="#kids"
          onClick={scrollFunction}
          className="eachNav"
        >
          Kids
        </Link>

        <div onClick={changeDropdown} className={classes.user}>
          <Link to="" className={classes.eachNav}>
            User Account
          </Link>
          <RiArrowDropDownFill cursor="pointer" size={25} />
        </div>

        {dropdown ? (
          <div className={classes.dropdown}>
            {/* <Link></Link> */}
            accounts
          </div>
        ) : null}
      </nav>
    </div>
  );
};
export default Menu;
