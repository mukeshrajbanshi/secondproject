import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { removeFromCart } from "../reducersComponent/Action";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

export default function CartDetails() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.shop);
  let TotalCartPrice = 0;
  cart.map((e) => {
    return (TotalCartPrice += e.price);
  });
  // console.log(cart)
  return (
    <>
      <Container className="d-flex">
        {cart &&
          cart.map((items) => (
            <Card key={items.id} style={{ width: "18rem" }} className="m-3">
              <Card.Img variant="top" src={items.thumbnail} />

              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>{items.description}</Card.Text>
                <Button variant="primary">Price : $ {items.price}</Button>
                <span style={{ margin: "10px" }}>
                  <Button variant="primary">Rating : {items.rating}</Button>
                </span>
                <br />
                <Button
                  variant="primary"
                  className="m-1"
                  onClick={() => dispatch(removeFromCart(items.id))}
                >
                  Remove Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
      </Container>

      <div>
        <>
          <h1 style={{ textAlign: "center" }}>
            Sum Price : $ {TotalCartPrice}
          </h1>
        </>
      </div>

      <Link to="/placeorder" style={{ textDecoration: "none"}}>
        <button
          className="btn-primary "
          style={{
            background: "blue",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          PlaceOrder
        </button>
      </Link>
    </>
  );
}
