import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return (<div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} style={{width: 300, height: 300}}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://contents.sixshop.com/uploadedFiles/72878/product/image_1540176020065.jpg",
  },
  {
    id: 2,
    name: "samgiopsal",
    image: "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://www.ghostfreshmart.com/wp-content/uploads/2020/04/%EB%93%B1%EC%8B%AC%EB%8F%88%EA%B9%8C%EC%8A%A4.jpg",
    rating: 4.7
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/201806/a8d34579-3939-498b-9254-6e3cfac4bfda.jpg",
    rating: 4.6
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
