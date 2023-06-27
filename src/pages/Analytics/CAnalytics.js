import React from 'react';
import { Table } from 'antd';
import { faker } from '@faker-js/faker';

const customerData = [
  {
    key: '1',
    CustomerID: 'CUS001',
    CustomerName: "Avika",
    NumberofOrders: faker.datatype.number({ min: 0, max: 10 }),
    NumberofPurchases: faker.datatype.number({ min: 0, max: 10 }),
    TotalAmount: faker.datatype.number({ min: 100, max: 1000 }),
  },
  {
    key: '2',
    CustomerID: 'CUS002',
    CustomerName: "Sunidhi",
    NumberofOrders: faker.datatype.number({ min: 0, max: 10 }),
    NumberofPurchases: faker.datatype.number({ min: 0, max: 10 }),
    TotalAmount: faker.datatype.number({ min: 100, max: 1000 }),
  },
  {
    key: '3',
    CustomerID: 'CUS003',
    CustomerName: "Sai",
    NumberofOrders: faker.datatype.number({ min: 0, max: 10 }),
    NumberofPurchases: faker.datatype.number({ min: 0, max: 10 }),
    TotalAmount: faker.datatype.number({ min: 100, max: 1000 }),
  },
  {
    key: '4',
    CustomerID: 'CUS004',
    CustomerName: "Aishwary",
    NumberofOrders: faker.datatype.number({ min: 0, max: 10 }),
    NumberofPurchases: faker.datatype.number({ min: 0, max: 10 }),
    TotalAmount: faker.datatype.number({ min: 100, max: 1000 }),
  },
  // Add more customer data as needed
];

const columns = [
  {
    title: 'Customer ID',
    dataIndex: 'CustomerID',
    key: 'CustomerID',
  },
  {
    title: 'Customer Name',
    dataIndex: 'CustomerName',
    key: 'CustomerName',
  },
  {
    title: 'Number of Orders',
    dataIndex: 'NumberofOrders',
    key: 'NumberofOrders',
  },
  {
    title: 'Number of Purchases',
    dataIndex: 'NumberofPurchases',
    key: 'NumberofPurchases',
  },
  {
    title: 'Total Amount',
    dataIndex: 'TotalAmount',
    key: 'TotalAmount',
  },
];

export function CAnalytics() {
    // Find the customer with maximum orders
    let maxOrders = 0;
    let maxOrdersCustomer = null;
    customerData.forEach((customer) => {
      if (customer.NumberofOrders > maxOrders) {
        maxOrders = customer.NumberofOrders;
        maxOrdersCustomer = customer;
      }
    });
  
    return (
      <>
        <Table columns={columns} dataSource={customerData} />
        {maxOrdersCustomer && (
          <div>
           <h3> Customer with Maximum Orders: </h3>{maxOrdersCustomer.CustomerID} (Orders: {maxOrdersCustomer.NumberofOrders})
          </div>
        )}
      </>
    );
  }
  
  
  
  
