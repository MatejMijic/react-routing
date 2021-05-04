import * as React from "react";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const match = useRouteMatch();

  useEffect(() => {
    console.log("match", match);
  }, []);

  return (
    <div className="view">
      <p className="bold">THIS IS ERROR PAGE</p>
    </div>
  );
};
