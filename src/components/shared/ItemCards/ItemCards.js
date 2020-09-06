import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import itemShape from '../../../helpers/props/itemShape';

class ItemCards extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func.isRequired,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <Link to={`/edit/${item.id}`} className="btn btn-secondary m-3"><i className="fas fa-pencil-alt"></i></Link>
          <Link to={`/singlestuff/${item.id}`} className="btn btn-secondary m-3"><i className="far fa-eye"></i></Link>
          <button className="btn btn-secondary m-3" onClick={this.deleteItemEvent}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default ItemCards;
