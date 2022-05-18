import { Container } from "./style";
import { ProfileImage } from "assets/image";

function Menu() {
  return (
    <Container>
      Hello World<img src={ProfileImage}></img>
    </Container>
  );
}

export default Menu;
