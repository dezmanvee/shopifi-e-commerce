import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { green } from "@mui/material/colors";
import { orange } from "@mui/material/colors";
import logo from "../../assets/s-high-resolution-logo-transparent (1).png";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ color: green[900] }}
            className={classes.title}
            fontWeight={700}
            component={Link}
            to="/"
          >
            <img
              src={logo}
              alt="Shopifi logo"
              height="45px"
              className={classes.image}
            />
            Shopif<span className={classes.logoI}>i</span>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Add to cart"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCart fontSize="large" color="action" />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
