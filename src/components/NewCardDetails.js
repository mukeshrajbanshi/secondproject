import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewCardDetails() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(
    () => async () => {
      const res = await axios.get("https://dummyjson.com/products/" + id);
      const products = res.data;
      setItem(products);
    },
    [id]
  );
  //  console.log("this is item", item)
  return (
    <>
      <Row>
        <Col className="mt-3 d-flex">
          <Card className="mx-3 align-center justify-content-center d-flex text-center">
            <Card.Header>{item.title}</Card.Header>
            <Card.Img
              variant="top"
              src={item.thumbnail}
              onClick={() => navigate(`/productDetails/${item.id}`)}
              width={200}
              height={300}
              style={{ objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>{item.title} </Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Price : $ {item.price}</Button>
              <span style={{ margin: "10px" }}>
                <Button variant="primary">Rating : {item.rating}</Button>
              </span>
              <br />
              <Button style={{ margin: "10px" }} variant="primary">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NewCardDetails;
