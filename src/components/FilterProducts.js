import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row, Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../reducersComponent/Action";
import ProductDetails from "./ProductDetails";

export default function FilterProducts() {
  const dispatch = useDispatch();

  const { isLoading, products } = useSelector((state) => state.shop);
  const [filterData, setFilterData] = useState([]);

  useEffect(
    () => async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      const { products } = res.data;
      dispatch(fetchData(products));
      setFilterData([...products]);
      // console.log(products);
    },
    [dispatch]
  );

  const priceSort = () => {
    setFilterData(
      [...products].sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };
  const ratingSort = () => {
    setFilterData(
      [...products].sort((a, b) => {
        if (a.rating < b.rating) {
          return -1;
        } else if (a.rating > b.rating) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  const discountSort = () => {
    setFilterData(
      [...products].sort((a, b) => {
        if (a.discountPercentage < b.discountPercentage) {
          return -1;
        } else if (a.discountPercentage > b.discountPercentage) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };
  const sortDecending = () => {
    setFilterData(
      [...products].sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };
  const Sortascending = () => {
    setFilterData(
      [...products].sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        } else if (a.id > b.id) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  };
  const inputSearch = (e) => {
    const searchFilter = products.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFilterData(searchFilter);
    // console.log(searchFilter);
  };

  const handleChange = (e) => {
    setFilterData(products.filter((a) => a.brand === e.target.value));
  };

  const handleChange1 = (e) => {
    setFilterData(products.filter((a) => a.category === e.target.value));
  };

  return (
    <>
      <Row>
        <ButtonGroup aria-label="Third group">
          <label>
            {" "}
            Apple
            <input
              type="checkbox"
              name="Apple"
              value="Apple"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Samsung
            <input
              type="checkbox"
              name="Samsung"
              value="Samsung"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            {" "}
            OPPO
            <input
              type="checkbox"
              name="OPPO"
              value="OPPO"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Huawei
            <input
              type="checkbox"
              name="Huawei"
              value="Huawei"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Microsoft Surface
            <input
              type="checkbox"
              name="Microsoft Surface"
              value="Microsoft Surface"
              onChange={handleChange}
            />
          </label>
        </ButtonGroup>
      </Row>
      <Row>
        <Row sm={6}>
          <Form>
            <Form.Control
              placeholder="Search Prodcuts"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="w-2 m-3"
              onChange={inputSearch}
            />
          </Form>

          <Button
            style={{ margin: "10px" }}
            variant="primary"
            onClick={Sortascending}
          >
            Ascending{" "}
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="primary"
            onClick={sortDecending}
          >
            Decending{" "}
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="primary"
            onClick={priceSort}
          >
            Price
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="primary"
            onClick={ratingSort}
          >
            Rating
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="primary"
            onClick={discountSort}
          >
            Discount
          </Button>

          <Form.Select
            aria-label="Default select example"
            onChange={handleChange1}
          >
            <option>Open this select menu</option>
            {filterData.map((ele) => {
              return (
                <React.Fragment key={ele.id}>
                  <option key={ele.id}>{ele.category}</option>
                </React.Fragment>
              );
            })}
          </Form.Select>
        </Row>

        <Row>
          <ProductDetails filterData={filterData} loading={isLoading} />
        </Row>
        <Row>
          {/* <Pagination filterData={filterData} loading={isLoading} /> */}
        </Row>
      </Row>
    </>
  );
}
