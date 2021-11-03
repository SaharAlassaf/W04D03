import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

function Cards() {
  const [search, setSearch] = useState("");

  const play = [
    {
      id: 1,
      name: "Puzzle",
      img: "https://ak.picdn.net/offset/photos/5b36725417fb156e48083fff/medium/photo.jpg",
      isLiked: false,
    },
    {
      id: 2,
      name: "Diamond painting",
      img: "https://cdn.shopify.com/s/files/1/0277/5370/9706/files/Diamond_Painting_Wereld-min.jpg?v=1600081094",
      isLiked: false,
    },
    {
      id: 3,
      name: "Sudoku",
      img: "https://i.insider.com/589e1b653149a162308b5243?width=700",
      isLiked: false,
    },
  ];

  return (
    <div className="cards">
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {play
      // eslint-disable-next-line
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.includes(search)) {
            return item;
          }
        })
        .map((item, i) => {
          // let url = `/card/${item.id}`;
          return (
            <Link to={`/card/${item.id}`} key={i}>
              <Card item={item} />
            </Link>
          );
        })}
    </div>
  );
}

export default Cards;
