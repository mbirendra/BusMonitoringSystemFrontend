import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import axios from 'axios';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Cards() {
  let [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:90/product/showAll")
      .then((response) => {
        console.log(response);
        setProduct(
          response.data.data
        )
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  return (
    <div className='cards'>
      <h1 className="heading">Newly Added Bus</h1>
      <div className="underline mx-auto"></div>
      <Container>
        <Row>
          {
            products.map((product) => {
              return (
                <Col lg={4}>
                  <Card className="lensCard">

                    <Card.Img variant="top" src={`http://localhost:90/${product.pImage}`} />

                    <Card.Body>
                      <Card.Title className="text-center">{product.pName}</Card.Title>
                      <p> <b>Route </b>{product.pPrice}</p>
                      <p> <b>Intial Stop </b>{product.pRating}</p>
                      <p> <b>Description: </b>{product.pDesc}</p>


                    </Card.Body>


                    <Row className="p-3">
                      <Col lg={12}>
                        <Link style={{ float: "right", color: "red", fontSize: "25px" }} name="cart" to={`/Shop/` + product._id}>View Location</Link>
                      </Col>

                    </Row>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>

    </div>
  );
}

export default Cards;
