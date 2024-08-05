import { useNavigate } from "react-router-dom";
import { DecreaseQty, addQty } from "../redux/actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import { AddProduct, AddToCart, DecreaseProduct, DeleteProduct } from "../redux/actions/CartAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Cart() {
  const navigate = useNavigate()
  const product = useSelector((state) => state.CartReducer)
  const dispatch = useDispatch()
  const [qty, setqty] = useState();
  return (
<div style={{textAlign: 'center'}}>   
   <h2>
        <FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quentity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) =>
          (
            <tr key={p.id}>
              <td><img src={p.image}></img></td>
              <td><p>{p.description}</p>${p.price}</td>
              <td>
                <p>
                  <button type="button"
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      dispatch(addQty(p))
                      setqty(p.qty)
                    }}
                  >-</button>
                  {p.qtyInCart}
                  <button type="button"
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      dispatch(AddToCart(p))
                      dispatch(DecreaseQty(p))
                      setqty(p.qty)
                    }}
                  >+</button>
                </p>
              </td>
              <td>
                <button type="button"
                  className="btn btn-danger btn-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch(DeleteProduct(p))
                    dispatch(addQty(p))
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <strong>Total:</strong>
        ${calculateTotal(product)}
        <br></br>
        <button onClick={() => { navigate("/ConfirmationPage") }}>
          Check out
        </button>
      </div>
    </div>
  );
};
const calculateTotal = (product) => {
  return product.reduce((total, item) => total + item.qtyInCart * item.price, 0).toFixed(2);
};
