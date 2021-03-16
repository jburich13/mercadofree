import React from "react";


export class ItemListContainer extends React.Component {
  render() {
    return <div>
        {this.props.children}
    </div> 
  }
}

export default ItemListContainer

