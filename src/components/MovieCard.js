import React from "react";
import { Card, Row, Col, CardTitle } from "react-materialize";

function MovieCard({ title, image }) {
  return (
    <>
      <Col m={4} s={12}>
        <Card
          className='card'
          header={
            <CardTitle
              image={image}
              reveal
              waves="light"
            />
          }
          title={title && title}
        >
        </Card>
      </Col>
    </>
  );
}

export default MovieCard;
