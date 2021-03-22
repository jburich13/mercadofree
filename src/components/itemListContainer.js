import React from "react";
import {Container,Row} from "react-bootstrap";


class ItemListContainer extends React.Component {
  render() {
    return <div>
      <Container className="justify-content-center">
        <Row>
        {this.props.children}
        </Row>
      </Container>
     
    </div> 
  }
}

export default ItemListContainer

