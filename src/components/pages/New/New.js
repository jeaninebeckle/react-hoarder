import React from 'react';
import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

class New extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  changeImageEvent = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  changeDescEvent = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  saveNewItem = (e) => {
    e.preventDefault();
    const { itemName, itemDescription, itemImage } = this.state;

    const newItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };

    itemsData.createItem(newItem)
      .then((res) => {
        this.props.history.push('/stuff');
      })
      .catch((err) => console.error('cannot create new item', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="New">
        <h1>Add New Stuff</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              placeholder="Enter Item Name"
              value={itemName}
              onChange={this.changeNameEvent}
              />
              <label htmlFor="">Image</label>
              <input
                type="text"
                className="form-control"
                id="itemImage"
                placeholder="Enter Item Image URL"
                value={itemImage}
                onChange={this.changeImageEvent}
                />
                <label htmlFor="">Name</label>
              <input
                type="text"
                className="form-control"
                id="itemDesc"
                placeholder="Enter Item Description"
                value={itemDescription}
                onChange={this.changeDescEvent}
                />
          </div>
          <button className="btn btn-warning" onClick={this.saveNewItem}>Save Item</button>
        </form>
      </div>
    );
  }
}

export default New;
