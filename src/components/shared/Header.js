import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Popover from "@mui/material/Popover";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeEmail,
  changePassword,
} from "../../redux/actions/inputChangeActions";
import { logout } from "../../redux/actions/authActions";
import { filterProduct } from "../../redux/actions/filterActions";
import Cart from "../core/Cart";
import FilterDrawer from "../core/FilterDrawer";

export default function Header({ openDrawer }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.cart);
  const navigate = useNavigate();
  let products = useSelector((state) => state.allProducts.products);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(changeEmail(""));
    dispatch(changePassword(""));
    dispatch(logout({ type: "LOGOUT" }));
    navigate("/");
  };

  const getCategoryProduct = () => {
    dispatch(filterProduct(products, "jewelery"));
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <FilterDrawer />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Store
              <Button onClick={getCategoryProduct} color="inherit">
                Jewelery
              </Button>
            </Typography>

            <Button onClick={logoutHandler} color="inherit">
              Logout
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "12px",
                borderRadius: "50%",
              }}
            >
              <IconButton
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                <ShoppingCartIcon />
              </IconButton>

              <Typography
                variant="overline"
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 12,
                  padding: "2px 9px",
                }}
              >
                {items.length}
              </Typography>
            </Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Cart />
            </Popover>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
