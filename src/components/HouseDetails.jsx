import "./componentsCss/housedetails.css";
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Table} from "react-bootstrap";




const HouseDetails = () => {
  const { houseId } = useParams();
  const navigate = useNavigate();

  const houses = useSelector((state) => state.Houses).houses;
  const houseIdNumber = parseInt(houseId, 10);
  const house = houses.find((house) => houseIdNumber === house.id);
  
  const handleReserve = () => {
    navigate("/reserve");
  };

  if (house) {
    return (
      <div className="house-details">
        <Container className="details">
          <Row>
            <Col md={8} className="house-imgc">
              <Image src={house.image} className="house-image m-2" />
              
            </Col>
            <Col className="info" md={4} >
              <h2>{house.name.toUpperCase()}</h2>
              <Table striped hover className="table">
                <tbody>
                  <tr>
                    <td>Location</td>
                    <td>{house.location}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{house.area}</td>
                  </tr>
                  <tr>
                    <td>Number of Rooms</td>
                    <td>{house.number_of_rooms}</td>
                  </tr>
                  <tr>
                    <td>Price per day</td>
                    <td>{house.price} $</td>
                  </tr>
                </tbody>
              </Table>

              <div>
              <button size="lg"
                  className="reserve-btn"
                  onClick={handleReserve}
                >
                  <i class="fa fa-home fa-2x " aria-hidden="true"></i>

                  RESERVE

                  <i class="fa fa-chevron-circle-right fa-2x" aria-hidden="true"></i>
                </button>
              </div>
            </Col>
          </Row>
          <button className="prev" type="button" onClick={()=> navigate(-1)} >
            <i class="fa fa-caret-left fa-2x" aria-hidden="true"></i>
        </button>
          
        </Container>
        
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default HouseDetails;
