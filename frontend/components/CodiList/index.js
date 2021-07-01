import React from "react";
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

const CodiList = () => {
  return (
    <Container  className="mt-5" fluid>
      <Row>
        <Col>
        <Card>
          <CardBody>
            <CardTitle>Codi 1</CardTitle>
            <CardText>This is Codi num 1</CardText>
            <Button>View</Button>
          </CardBody>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardBody>
            <CardTitle>Codi 2</CardTitle>
            <CardText>This is Codi num 2</CardText>
            <Button>View</Button>
          </CardBody>
        </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CodiList