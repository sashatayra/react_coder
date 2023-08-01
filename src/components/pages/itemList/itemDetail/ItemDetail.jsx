import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CounterContainer from "../../../common/counter/CounterContainer";
import { useState } from "react";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.title}
          </Typography>
          <CardMedia
            sx={{ height: 10, weigth: 15 }}
            image={product.img}
            title={product.title}
          />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <CounterContainer
            stock={product.stock}
            agregarAlCarrito={agregarAlCarrito}
            cantidadEnCarrito={cantidadEnCarrito}
          />
        </CardActions>
      </Card>
      ;
      {/* <h1> {product.title} </h1>
      <h3> {product.price} </h3> */}
    </div>
  );
};

export default ItemDetail;
