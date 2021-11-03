import React from "react";
import Card from "../Card";

function Fav({ item }) {

    const arr = JSON.parse(localStorage.getItem("arr")) || []
    console.log(arr);


  return (
    <div>
      <h1>Favorite</h1>
      <div className="cards">
        {arr
        // eslint-disable-next-line
        .map((item, i) => {
            if (item.isLiked === true) return <Card item={item} key={i}/>;
          })}
      </div>
    </div>
  );
}

export default Fav;
