import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../redux/actions/CartAction";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple, MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { DecreaseQty } from "../redux/actions/ProductAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

export default function StoreItems() {
  const items = useSelector((state) => state.productReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [addToCartItem, setAddToCartItem] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  // const [topRightModal, setTopRightModal] = useState(false);
  // const toggleOpen = () => setTopRightModal(!topRightModal);
  const handleAddToCart = (item) => {
    setAddToCartItem(item);
    setShowAlert(true);
  };

  const confirmAddToCart = () => {
    if (addToCartItem) {
      dispatch(AddToCart(addToCartItem));
      dispatch(DecreaseQty(addToCartItem));
      setShowAlert(false);
    }
  };

  const cancelAddToCart = () => {
    setAddToCartItem(null);
    setShowAlert(false);
  };

  const continueShopping = () => {
    setAddToCartItem(null);
    setShowAlert(false);
  };

  const goToCart = () => {
    setShowAlert(false);
    navigate('/Cart');
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Antiqe Shop</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', }}>
        {items.map(item => (
          <MDBCard style={{ "width": "18rem", "marginRight": "auto", "marginLeft": "auto", "marginBottom": "5px", "borderColor": "gray", "marginTop": "1.5rem" }}>
            <MDBRipple rippleColor='red' rippleTag='div'>
              <MDBCardImage src={item.image} position='top' alt='...' />
              <a href='/#'>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle> {item.name} </MDBCardTitle>
              <MDBCardText>{item.description}</MDBCardText>
              <p style={{ color: 'red' }}>Left in stock: {item.qty}</p>
              <p>Price: ${item.price}</p>
              <div position='bottom' >
                <button type="button" class="btn btn-outline-warning"
                  className='rounded-pill'
                  style={{ backgroundColor: 'gold', color: 'black' }}
                  onClick={(e) => {
                     e.preventDefault() 
                     dispatch(AddToCart(item))
                     dispatch(DecreaseQty(item))
                     handleAddToCart(item)
                  }}><FontAwesomeIcon icon={faCartPlus} style={{ marginRight: '8px', color: 'black' }} />
                  Add to Cart
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        )
        )}
      </div>
      <button onClick={() => {
        navigate("/Cart")
      }}
      >show cart</button>
      {addToCartItem && (
        <Alert
          show={showAlert}
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: '300px',
            borderRadius: '10px',
          }}
        >
          <Card>
            <Card.Header style={{ backgroundColor: 'gold', color: 'black', textAlign: 'center' }}>
              <strong>Your choise</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title>{addToCartItem.name}</Card.Title>
              <Card.Text>
                Quantity: {addToCartItem.qty}, Price: ${addToCartItem.price}
              </Card.Text>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <MDBBtn color="success" onClick={goToCart}>
                  View Cart
                </MDBBtn>
                <MDBBtn color="secondary" onClick={continueShopping}>
                  Continue Shopping
                </MDBBtn>
              </div>
            </Card.Body>
          </Card>
        </Alert>
      )}
      </div>
  )
}
