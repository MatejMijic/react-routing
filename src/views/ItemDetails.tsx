import * as React from "react";
import { useState } from "react";
import {
  Redirect,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { data, SomeItem } from "../const";

export const ItemDetails: React.FC = () => {
  const params: { id: string } = useParams();
  // const { state } = useLocation<{ item: SomeItem }>();

  const [item] = useState<SomeItem | undefined>(
    data.find((someItem) => someItem.itemId === params.id)
  );

  if (!item) {
    return <Redirect to="/item-list" />;
  }

  return (
    <div className="view item-list-view">
      <p className="bold">ITEM {item.itemName}</p>
    </div>
  );
};
