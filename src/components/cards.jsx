import { Container } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderStyledExample() {
  return (
    <>
    <Container sx={{margin:"10px"}}>
        <Card className='m-2'>
      <Card.Header as="h5">Bus Service</Card.Header>
      <Card.Body>
        <Card.Title>Hussainabad to Sadar</Card.Title>
        <Card.Text>
          25 seats
        </Card.Text>
        <Button variant="primary">Book Your Seat</Button>
      </Card.Body>
    </Card>
    <Card className='m-2'>
      <Card.Header as="h5">Bus Service</Card.Header>
      <Card.Body>
        <Card.Title>Hussainabad to Sadar</Card.Title>
        <Card.Text>
          25 seats
        </Card.Text>
        <Button variant="primary">Book Your Seat</Button>
      </Card.Body>
    </Card>     <Card className='m-2'>
      <Card.Header as="h5">Bus Service</Card.Header>
      <Card.Body>
        <Card.Title>Hussainabad to Sadar</Card.Title>
        <Card.Text>
          25 seats
        </Card.Text>
        <Button variant="primary">Book Your Seat</Button>
      </Card.Body>
    </Card>     <Card className='m-2'>
      <Card.Header as="h5">Bus Service</Card.Header>
      <Card.Body>
        <Card.Title>Hussainabad to Sadar</Card.Title>
        <Card.Text>
          25 seats
        </Card.Text>
        <Button variant="primary">Book Your Seat</Button>
      </Card.Body>
    </Card>
   
    </Container>
    
    </>
  );
}

export default WithHeaderStyledExample;