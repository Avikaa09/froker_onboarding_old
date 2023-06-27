import { Table } from 'antd';
import moment from 'moment';
function Subscription(){
    return (
        <>
        <div><h1>Subscription</h1></div>

        <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
            )
        }


var columns = [
  {
    title: 'CustomerID',
    dataIndex: 'CustomerID',
    
  
  
   
    sorter: (a, b) => a.CustomerID - b.CustomerID,

  },
  {
  title: 'Customer Name',
  dataIndex: 'CustomerName',

},
  {
    title: 'TotalOrders',
    dataIndex: 'TotalOrders',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.TotalOrders - b.TotalOrders,
  },

  {
    title: 'AmountPaid',
    dataIndex: 'AmountPaid',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.AmountPaid- b.AmountPaid,
  },
  {
    title: 'SubscriptionStart',
    dataIndex: 'SubscriptionStart',
  
  },
  {
    title: 'SubscriptionEnd',
    dataIndex: 'SubscriptionEnd',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.AmountPaid- b.AmountPaid,
  },
]
const data = [
  {
    key: '1',
    CustomerID: '001',
    CustomerName: 'Avika',
   OrderID: 32,
    TotalOrders : 12,
    AmountPaid:5900,
    SubscriptionStart:'12/05/2023',
    SubscriptionEnd:'23/06/2023',
  },
  {
    key: '2',
    CustomerID: '004',
    CustomerName: 'Sunidhi',
   OrderID: 42,
    TotalOrders : 23,
    AmountPaid:6700,
    SubscriptionStart:'27/06/2023',
    SubscriptionEnd:'01/08/2023',
    
  },
  {
    key: '3',
    CustomerID: '008',
    CustomerName: 'Sai',
   OrderID: 36,
    TotalOrders : 19,
    AmountPaid:3580,
    SubscriptionStart:'09/05/2023',
    SubscriptionEnd:'15/05/2023',
  },
  {
    key: '4',
    CustomerID: '005',
    CustomerName: 'Aishwary',
   OrderID: 51,
    TotalOrders : 26,
    AmountPaid:5600,
    SubscriptionStart:'30/05/2023',
    SubscriptionEnd:'01/07/2023',
  },
  {
    key: '5',
    CustomerID: '007',
    CustomerName: 'Amogh',
   OrderID: 49,
    TotalOrders : 24,
    TotalOrdersMonthly : 89,
    AmountPaid:3400,
    SubscriptionStart:'22/04/2023',
    SubscriptionEnd:'23/06/2023',
  },
];
const onChange = (pagination, sorter, extra) => {
  console.log('params', pagination,sorter, extra);
};


export default Subscription;