import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import {green} from "@mui/material/colors"

import useStyle from "./styles";

const Product = ({ product, onAddToCart }) => {

  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h7" fontWeight={700} gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h7" fontWeight={700}>{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{__html: product.description}} />
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart sx={{color: green[800]}}/>
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
