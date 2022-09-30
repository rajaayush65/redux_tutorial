import React, { useEffect } from "react";
import ProductCard from "../components/core/ProductCard";
import { useDispatch, useSelector } from "react-redux";

import { setProducts, fetchProducts } from "../redux/actions/productActions";
import { getCategories } from "../api/index";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.allProducts.loading);
  let products = useSelector(state => state.allProducts.products);
  const filteredProduct = useSelector(state => state.filter.filteredItems);
  useEffect(() => {
    dispatch(setProducts());
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "auto",
        m: 5,
        minHeight:"71vh"
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {loading ? (
          <p>Products Loading...</p>
        ) : filteredProduct.length > 0 ? (
          filteredProduct.map(
            ({ id, title, price, category, description, image }) => {
              return (
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  category={category}
                  description={description}
                  image={image}
                />
              );
            }
          )
        ) : (
          products.map(({ id, title, price, category, description, image }) => {
            return (
              <ProductCard
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                description={description}
                image={image}
              />
            );
          })
        )}
      </Grid>
    </Box>
  );
}

export default HomePage;
