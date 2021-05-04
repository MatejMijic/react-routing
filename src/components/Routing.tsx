import * as React from "react";
import * as views from "../views";
import { Switch, Route } from "react-router-dom";
import { About, ErrorPage, Home, ItemDetails, ItemList } from "../views";

/**
 * * <Switch> is unique in that it renders a route exclusively
 */

/**
 * * [ROUTE PROPS]
 * * path -> Any valid URL path or array of paths that path-to-regexp@^1.7.0 understands
 * * exact -> When true, will only match if the path matches the location.pathname exactly.
 * * component -> A React component to render only when the location matches. It will be rendered with route props. (match, location, history)
 * * render -> This allows for convenient inline rendering and wrapping without the undesired remounting
 */

export const Routing: React.FC = () => {
  return (
    <Switch>
      {/* <Route path="/" component={views.Home} /> */}
      {/* <Route
        exact
        path="/"
        render={({ match, location, history }) => <Home />}
      /> */}

      <Route exact path="/">
        <Home />
        <About />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/item-list/:id">
        <ItemDetails />
      </Route>

      <Route exact path="/item-list">
        <ItemList />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
