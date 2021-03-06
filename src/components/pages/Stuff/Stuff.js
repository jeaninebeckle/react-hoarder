import React from 'react';
import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';
import ItemCards from '../../shared/ItemCards/ItemCards';

class Stuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    itemsData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('get items broke', err));
  }

  componentDidMount() {
    this.getItems();
  }

  deleteItem = (itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => {
        this.getItems();
      })
      .catch((err) => console.error('delete items failed', err));
  }

  render() {
    const { items } = this.state;

    const itemCards = items.map((item) => <ItemCards key={item.id} item={item} deleteItem={this.deleteItem}/>);

    return (
      <div className="Stuff">
        <h1>My Stuff</h1>
        <div className="card-columns m-3">
          { itemCards }
        </div>
      </div>
    );
  }
}

export default Stuff;
