import * as React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * * [LINK/NAVLINK PROPS]
 * * to: string | object | function -> A string representation of the Link location |
 * *                                   An object that can have any of the following properties: pathname, search, hash, state |
 * *                                   A function to which current location is passed as an argument and which should return location representation as a string or as an object
 * * replace: bool -> When true, clicking the link will replace the current entry in the history stack instead of adding a new one.
 * * component: React.Component -> If you would like utilize your own navigation component, you can simply do so by passing it through the component prop.
 * * others -> You can also pass props you’d like to be on the <a> such as a title, id, className, etc.
 * * activeClassName -> The class to give the element when it is active.
 * * activeStyle -> The styles to apply to the element when it is active.
 * * exact -> When true, the active class/style will only be applied if the location is matched exactly.
 * * isActive -> A function to add extra logic for determining whether the link is active.
 */

export const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="bold">
        <p>#JS MENTOR</p>
      </Link>
      <div>
        <Link to="/about" className="link">
          ABOUT
        </Link>
        <NavLink to="/item-list" className="link" activeClassName="active-link">
          ITEM LIST
        </NavLink>
      </div>
    </header>
  );
};
