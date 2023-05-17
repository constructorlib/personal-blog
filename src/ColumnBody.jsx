import Container from "react-bootstrap/Container";
import CardLeft from "./CardLeft";
function ColumnBody() {
  return (
    <>
      <Container fluid>
        <CardLeft />
        <Container>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, rem
            incidunt dolorum quo fuga recusandae saepe optio. Nam
            exercitationem, facere quod enim officia ipsam reprehenderit
            distinctio animi! Quis, odit saepe.
          </p>
        </Container>
        <CardLeft />
      </Container>
    </>
  );
}

export default ColumnBody;
