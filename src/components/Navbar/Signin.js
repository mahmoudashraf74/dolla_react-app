import React from 'react';
import { Button, Container, Form ,Row,Col} from 'react-bootstrap';
import { ImFacebook ,ImGoogle,ImTwitter} from 'react-icons/im';

import './Signin.css';
const Signin = () => {
  return (
    <div className='signin '>
      <h1>Sign in</h1>
      <br/>
      <Container >
         <Row className="justify-content-md-center">
         <Col xs={12} md={6}>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   

<Row>
    <Col >    <Form.Check type="checkbox" label="Check me out" />
</Col>
    <Col > <Form.Text  >
    Forgot<a href='#h'>     Password?
</a>   
</Form.Text></Col>
  </Row>
  </Form.Group>
  <br/>
  <div className="d-grid gap-2">
  <Button variant="success" size="lg">login  </Button>
</div>
  <br/>
  <div style={{ borderTop: "2px solid #fff ", }}></div>
<Row> 
<div className='socialsign'>
<h5>or Sign in with:</h5>
<Button variant="outline-success"><ImFacebook/></Button>{' '}
<Button variant="outline-success"><ImTwitter/></Button>{' '}
<Button variant="outline-success"><ImGoogle/></Button>{' '}
</div>
</Row>
</Form>
</Col>
</Row>

</Container>

    </div>
  )
}

export default Signin