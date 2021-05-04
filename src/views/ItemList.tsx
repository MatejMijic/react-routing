import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { data } from "../const/data";

export const ItemList: React.FC = () => {
  const [list, setList] = useState(data);

  const history = useHistory();

  const { state } = useLocation<{ fromAbout: boolean }>();

  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    if (query.get("special")) {
      setList(data.filter((item) => item.special === true));
    }
  }, []);

  function handleClick(itemId: string) {
    history.push(`/item-list/${itemId}`);
  }

  return (
    <div className="view item-list-view">
      <p className="bold">THIS IS ITEM LIST PAGE</p>
      <ul>
        {list.map((item) => (
          <li onClick={() => handleClick(item.itemId)}>
            <p>{item.itemName}</p>
          </li>
        ))}
      </ul>
      <p>From about? {state?.fromAbout ? "Yeah" : "No"}</p>
    </div>
  );
};
