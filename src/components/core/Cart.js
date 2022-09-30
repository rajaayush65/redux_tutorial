import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CartItem from "./CartItem";
import { Box } from "@mui/material";

function Cart() {
  let cartItems = useSelector(state => state.basket.cart);

  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {cartItems.map(({ id, title, price, category, description, image }) => {
          return (
            <Box key={id}>
              <CartItem
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                description={description}
                image={image}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
}

export default Cart;
