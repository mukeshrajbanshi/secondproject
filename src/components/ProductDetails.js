import React, {  useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtocart } from "../reducersComponent/Action";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

function ProductDetails({ filterData }) {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const userperPage = 20;
  //   console.log(setUsers);
  const pageVisited = pageNumber * userperPage;
  const pageCount = Math.ceil(filterData.length / userperPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {filterData && filterData
          .slice(pageVisited, pageVisited + userperPage)
          .map((items) => (
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

      <footer className="mt-3">
        <ReactPaginate
          previousLabel={"Prvious"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onClick={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </footer>
    </>
  );
}

export default ProductDetails;
