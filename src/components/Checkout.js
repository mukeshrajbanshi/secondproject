import React from "react";
import Table from "react-bootstrap/Table";

const Checkout = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Happy Shopping</h1>
      <p>
        A order for items has been placed and will be delivered to address
        details which were filled in checkout form.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Street</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>123</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>123</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Checkout;
