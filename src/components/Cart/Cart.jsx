import { Container, Grid, Typography, Button, useTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  const theme = useTheme()

  const EmptyCart = () => (
    <Typography variant="subtitle1" sx={{fontWeight: "600"}}>
      You have no items in your shopping cart, <Link to="/" className={classes.link}>
       start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart?.line_items?.map((item) => {
          return (
            <Grid item xs={12} sm={3} key={item.id}>
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h6" color="inherit">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="medium"
            variant="outlined"
            type="button"
            sx={{
              color: green[900],
              borderColor: green[900],
              marginRight: "20px",
              '&:hover': {
                borderColor: green[900],
              },
            //   [theme.breakpoints.down('xs')]: {
            //     marginBottom: '5px',
            //   },
            //   [theme.breakpoints.up('xs')]: {
            //     marginRight: '20px',
            //   },
            }}
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="medium"
            variant="contained"
            type="button"
            sx={{
                bgcolor: orange[600],
                '&:hover': {
                    bgcolor: orange[700],
                },
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return <Typography variant="h4"  color={green[800]}>Loading...</Typography>;

  return (
    <div>
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h4" gutterBottom sx={{fontWeight: "600"}}>
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};
export default Cart;
