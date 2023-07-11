import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "./../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <div>
        <h1>Logijn With</h1>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div>
        <h1>Find Us On</h1>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>

          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>

          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
