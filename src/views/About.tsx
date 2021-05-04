import * as React from "react";
import { NavLink } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <div className="view">
      <p className="bold">THIS IS ABOUT PAGE</p>
      <NavLink
        to={{
          pathname: "/item-list",
          search: "desc",
          state: {
            fromAbout: true,
          },
        }}
        className="link"
        activeClassName="active-link"
      >
        GO TO SPECIAL LIST
      </NavLink>
    </div>
  );
};
