import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { orange, green } from "@mui/material/colors";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h7" fontWeight="700">{item.name}</Typography>
        <Typography variant="h7" fontWeight="700">{item.price.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            sx={{
              color: green[900],
            }}
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            sx={{
              color: green[900],
            }}
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="outlined"
          type="buttton"
          size="small"
          onClick={() => onRemoveFromCart(item.id)}
          sx={{
            color: orange[600],
            borderColor: orange[600],
            "&:hover": {
              borderColor: orange[600],
            },
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
export default CartItem;
