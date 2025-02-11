import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link } from 'react-router-dom';
import "./Card.css";

function Cards(props) {
  const cardStyle = {
    width: '20rem',
    height: '29rem', // Ensures uniform height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1, // Ensures consistent spacing in the card body
    justifyContent: 'space-between',
  };
  console.log(props.id)
  return (
    <div>

      <Card style={cardStyle} className="cardMain">
        <Card.Img variant="top" src={props.image} style={{minWidth: '320px',maxWidth:'320px',}}  alt={`${props.brand} ${props.model}`}  />
        <Card.Body style={cardBodyStyle} className='CardBody'>
          <Card.Title>Brand :{props.BrandName}<br />
       
          </Card.Title>
          <Card.Text>
          {props.CarType}
          </Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
          <Link to ={`/carrents/${props.brand}`} style={{textDecoration:"none"}}>  <Button variant="primary">Mroe Info</Button></Link>
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
