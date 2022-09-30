import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CartItem({ id, title, price, category, description, image }) {
  return (
    <Card
      raised
      sx={{
        maxWidth: 280,
        margin: "10px auto",
        padding: "0.1em",
        border: "1px solid #dbdbdb",
        borderRadius: "20px"
      }}
    >
      <CardMedia
        component="img"
        height="240"
        sx={{ objectFit: "contain" }}
        image={image}
        alt={title}
      />
      <CardContent sx={{ mt: 1, borderTop: "1px solid #dbdbdb" }}>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical"
          }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical"
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Typography
          sx={{ ml: 1 }}
          variant="subtitle2"
          gutterBottom
          component="h6"
        >
          {price} ₹
        </Typography>
      </Box>
    </Card>
  );
}

export default CartItem;
