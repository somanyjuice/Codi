import React from "react"
import { Container, Row, Col } from "reactstrap"

const HomeHeader = () => {
    return(
        <Container fluid>
            <Row>
                <Col>
                Trending
                </Col>
                <Col>
                Popular
                </Col>
            </Row>
        </Container>
    )
}

export default HomeHeader