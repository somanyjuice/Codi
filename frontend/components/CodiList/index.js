import React from "react";
import Link  from "next/link"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container, Row, Col, Card, CardText, CardBody, CardImg, CardTitle } from "reactstrap";

const QUERY = gql`
  {
    codis {
      id
      top
      bottom
      shoes
      users_permissions_user{username}
      image {
        url
      }
    }
  }
`;


function CodiList() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading codis";
  if (loading) return <h1>Fetching</h1>;

  if(data.codis && data.codis.length) {
    const bestCodis = data.codis // 코디 트렌드 순 정렬 해야됨

    if(bestCodis.length!=0){
      return (
        // Card 형태 styling 해야함.
        <Container fluid>
          <Row>
            {bestCodis.map((codi) => (
              <Col className="mt-5" xs="6">
              <Card>
                <CardImg
                  top={true}
                  style={{ height: 400 }}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${codi.image[0].url}`}
                />
                <CardBody>
                  <CardTitle>{codi.users_permissions_user.username}</CardTitle>
                  <CardText>Top : {codi.top}</CardText>
                  <CardText>Bottom : {codi.bottom}</CardText>
                  <CardText>Shoes : {codi.shoes}</CardText>                  
                </CardBody>
                <div className="card-footer">
                  <Link href={"/codis/[id]"} as={`/codis/${codi.id}`} >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )
    } else {
      return <h1>No codis</h1>
    }
  }
  return <h5>Add codis</h5>
}

export default CodiList