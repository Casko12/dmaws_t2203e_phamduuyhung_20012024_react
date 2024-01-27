import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [newOrder, setNewOrder] = useState({ itemName: '', itemQty: 0, orderAddress: "", orderDelivery: "", phoneNumber: "" });
  const [updatedOrder, setUpdatedOrder] = useState({ id: 0, orderAddress: '', phoneNumber: '' });


  const placeOrder = () => {
    axios.post('https://localhost:7073/v1/api/order', newOrder,{
      headers:{
        "Content-Type": 'application/json',
      }
    })
      .then(response => {
        alert('Success');
      })
      .catch(error => {
        alert('Error placing order', error);
        console.error('Error updating order', error);
      });
  };

  const updateOrder = () => {
    console.log(updatedOrder)
    axios.put(`https://localhost:7073/v1/api/order/${updatedOrder.id}`, updatedOrder,{
      headers:{
        "Content-Type": 'application/json',
      }
    })
      .then(response => {
        alert('Success');
      })
      .catch(error => {
        alert('Error updating order', error);
        console.error('Error updating order', error);
      });
  };

  return (
    <div className="container">
      <h1>Order</h1>
      <div>
        <h2>Create Order</h2>
        <input type="text" value={newOrder.itemName} onChange={(e) => setNewOrder({ ...newOrder, itemName: e.target.value })} placeholder="Product Name" />
        <input type="number" value={newOrder.itemQty} onChange={(e) => setNewOrder({ ...newOrder, itemQty: e.target.value })} placeholder="Quantity" />
        <input type="text" value={newOrder.orderAddress} onChange={(e) => setNewOrder({ ...newOrder, orderAddress: e.target.value })} placeholder="deliveryAddress" />
        <input type="date" value={newOrder.orderDelivery} onChange={(e) => setNewOrder({ ...newOrder, orderDelivery: e.target.value })} placeholder="deliveryDate" />
        <input type="text" value={newOrder.phoneNumber} onChange={(e) => setNewOrder({ ...newOrder, phoneNumber: e.target.value })} placeholder="phoneNumber" />
        <button onClick={() => placeOrder()}>Create Order</button>
      </div>
      <div>
        <h2>Edit Order</h2>
        <input type="number" value={updatedOrder.id} onChange={(e) => setUpdatedOrder({ ...updatedOrder, id: e.target.value })} placeholder="Order ID" />
        <input type="text" value={updatedOrder.orderAddress} onChange={(e) => setUpdatedOrder({ ...updatedOrder, orderAddress: e.target.value })} placeholder="Updated Order Address" />
        <input type="text" value={updatedOrder.phoneNumber} onChange={(e) => setUpdatedOrder({ ...updatedOrder, phoneNumber: e.target.value })} placeholder="Updated Phone Number" />
        <button onClick={updateOrder}>Update Order</button>
      </div>
    </div>
  );
}

export default App;
