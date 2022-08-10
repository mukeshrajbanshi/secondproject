import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtocart } from "../reducersComponent/Action";

import { useNavigate } from "react-router-dom";

function ProductDetails({ filterData }) {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {filterData &&
          filterData.map((items) => (
            <Col key={items.id}>
              <Card>
                <Card.Header>{items.title}</Card.Header>
                <Card.Img
                  variant="top"
                  src={items.thumbnail}
                  onClick={() => navigate(`/productDetails/${items.id}`)}
                  width={200}
                  height={300}
                  style={{ objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{items.title} </Card.Title>
                  <Card.Text>{items.description}</Card.Text>
                  <Button variant="primary">Price : $ {items.price}</Button>
                  <span style={{ margin: "10px" }}>
                    <Button variant="primary">Rating : {items.rating}</Button>
                  </span>
                  <br />
                  <Button
                    style={{ margin: "10px" }}
                    variant="primary"
                    onClick={() => dispatch(addtocart(items.id))}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default ProductDetails;
