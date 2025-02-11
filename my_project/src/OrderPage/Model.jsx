import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
function Modalcom({image}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button  onClick={handleShow}>
      Submit
      </Button> */}
     <Button onClick={handleShow} style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }}>
  Submit
</Button>


      

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Your Order Is Placed </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image}  alt="selected vehicle" style={{height:"50vh", width:"50vh"}} /> 
          <br/>
          
          
        </Modal.Body>
        <Modal.Footer><Link to="/">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button></Link>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalcom;