import React from 'react'

const orders = [
    { name: 'John Doe', date: '10/02/2025', status: 'Pending' },
    { name: 'Bryan Stan', date: '10/02/2025', status: 'Pending' },
    { name: 'Doyin Micheal', date: '09/02/2025', status: 'Pending' },
    { name: 'Rose Daniel', date: '08/02/2025', status: 'Picked-up' },
  ];
  
  const OrdersTable = () => {
    return (
      <div className="orders-table">
        <h3>Latest Orders</h3>
        <table>
          <thead>
            <tr>
              <th className="table-head">Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td>{order.name}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default OrdersTable;