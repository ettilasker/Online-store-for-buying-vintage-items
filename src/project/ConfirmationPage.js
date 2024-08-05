import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const [x, setx] = useState();

  const handlePayNow = () => {
    alert("Are you sure you want to go to payment?")
    navigate("/PaymentPage");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p) => (
              <tr key={p.id}>
                <td>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "auto",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.qtyInCart}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total" style={{ textAlign: "center", marginTop: "20px" }}>
          <strong style={{ fontSize: "1.5rem", color: "gold" }}>Total:</strong>
          <span
            style={{ fontSize: "1.5rem", color: "gold", marginLeft: "10px" }}
          >
            ${calculateTotal(product)}
          </span>
          <br />
          <button
            onClick={handlePayNow}
            className="btn btn-warning"
            style={{ marginTop: "10px" }}
          >
            Pay Now!{" "}
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ marginLeft: "5px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

const calculateTotal = (product) => {
  return product
    .reduce((total, item) => total + item.qtyInCart * item.price, 0)
    .toFixed(2);
};
