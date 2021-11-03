import React, { useState } from 'react'
import { useParams } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, far, faHeart } from '@fortawesome/free-solid-svg-icons'


function Card({ item }) {

  let { id } = useParams();

  const [play, setPlay] = useState([
    {
      id: 1,
      name: "Puzzle",
      img: "https://ak.picdn.net/offset/photos/5b36725417fb156e48083fff/medium/photo.jpg",
      isLiked: false
    },
    {
      id: 2,
      name: "Diamond painting",
      img: "https://cdn.shopify.com/s/files/1/0277/5370/9706/files/Diamond_Painting_Wereld-min.jpg?v=1600081094",
      isLiked: false
    },
    {
      id: 3,
      name: "Sudoku",
      img: "https://i.insider.com/589e1b653149a162308b5243?width=700",
      isLiked: false
    }
  ]);

  let card = play.find(ele => ele.id === id*1)

  const addLike = (id) => {
    const newName = true;
    const newarr = play.map(item => {
        if(id === item.id && item.isLiked === false){
            return {...item, isLiked: newName}
        } else{
            return item;
        }
    });
    setPlay(newarr);
    console.log(newarr);
    localStorage.setItem("arr",JSON.stringify(newarr))

  };


  return (
    <div className="card">
      <h3>{card ? card.name : item.name}</h3>
      <img src={card ? card.img : item.img} alt="img"/>
      <button onClick={() => addLike(item.id)}>Like</button>
    </div>
  );
}

export default Card;
