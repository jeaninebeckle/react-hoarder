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
      <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <Link to={`/edit/${item.id}`} className="btn btn-secondary m-3">Edit</Link>
          <Link to={`/singlestuff/${item.id}`} className="btn btn-secondary m-3">View</Link>
        </div>
      </div>
    );
  }
}

export default ItemCards;
