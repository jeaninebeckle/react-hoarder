import React from 'react';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/props/itemShape';

class ItemCards extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;

    return (
      <div class="card">
        <img class="card-img-top" src={item.itemImage} alt="Card cap" />
          <div class="card-body">
          <h5 class="card-title">{item.itemName}</h5>
          <Link to={`/edit/${item.id}`} className="btn btn-light m-3">Edit</Link>
          <Link to={`/stuff/${item.id}`} className="btn btn-light m-3">View</Link>
        </div>
      </div>
    );
  }
}

export default ItemCards;
