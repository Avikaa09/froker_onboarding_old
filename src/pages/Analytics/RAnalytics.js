import React from 'react';
import { Table } from 'antd';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import './index.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
    //   text: 'Orders Monthly',
    },
  },
};
const monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
<canvas role="img" height="400" width="375" style="box-sizing: border-box; display: block; height: 150px; width: 300px;"></canvas>
export const monthlyData = {
  labels: monthlyLabels,
  datasets: [
    {
      label: 'Hyderabadi Bucket Biryani',
      data: monthlyLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Cibo Matto',
      data: monthlyLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Otto',
      data: monthlyLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(234, 162, 235, 0.5)',
    },
  ],
};

const dailyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
<canvas role="img" height="187" width="375" style="box-sizing: border-box; display: block; height: 150px; width: 300px;"></canvas>

export const dailyData = {
  labels: dailyLabels,
  datasets: [
    {
      label: 'Hyderabadi Bucket Biryani',
      data: dailyLabels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Cibo Matto',
      data: dailyLabels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Otto',
      data: dailyLabels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: 'rgba(234, 162, 235, 0.5)',
    },
  ],
};

const weeklyLabels = ['Week1', 'Week2', 'Week3', 'Week4'];
<canvas role="img" height="187" width="375" style="box-sizing: border-box; display: block; height: 150px; width: 300px;"></canvas>

export const WeeklyData = {
  labels: weeklyLabels,
  datasets: [
    {
      label: 'Hyderabadi Bucket Biryani',
      data: weeklyLabels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Cibo Matto',
      data: weeklyLabels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Otto',
      data: weeklyLabels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: 'rgba(234, 162, 235, 0.5)',
    },
  ],
};
  

function RAnalytics(){
    return (
        <>
        <div classRestaurantID='chartList'>
      <div>
        <h2>Orders Monthly</h2>
        <Bar options={options} data={monthlyData} />
      </div>
      <div>
        <h2>Orders Daily</h2>
        <Bar options={options} data={dailyData} />
      </div>
      <div>
        <h2>Orders Weekly</h2>
        <Bar options={options} data={WeeklyData} />
      </div>
      
    </div>
    <Table columns={columns} dataSource={data} onChange={onChange} />

    </>
        );
    }

    var columns = [
      {
        title: 'RestaurantID',
        dataIndex: 'RestaurantID',
        filters: [
          {
            text: '001',
            value: '001',
          },
          {
            text: '002',
            value: '002',
          },
       
        ],
        // specify the condition of filtering result
        // here is that finding the RestaurantID started with `value`
        onFilter: (value, record) => record.RestaurantID.indexOf(value) === 0,
        sorter: (a, b) => a.RestaurantID - b.RestaurantID,
        // sortDirections: ['descend'],
      },
      {
        title: 'TotalOrdersWeekly',
        dataIndex: 'TotalOrdersWeekly',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.TotalOrdersWeekly - b.TotalOrdersWeekly,
      },
      {
        title: 'TotalOrdersDaily',
        dataIndex: 'TotalOrdersDaily',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.TotalOrdersDaily - b.TotalOrdersDaily,
      },
      {
        title: 'TotalOrdersMonthly',
        dataIndex: 'TotalOrdersMonthly',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.TotalOrdersMonthly- b.TotalOrdersMonthly,
      },
      {
        title: 'TotalAmount',
        dataIndex: 'TotalAmount',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.TotalAmount- b.TotalAmount,
      },
    ]
    const data = [
      {
        key: '1',
        RestaurantID: '001',
        TotalOrdersWeekly: 32,
        TotalOrdersDaily : 12,
        TotalOrdersMonthly : 45,
        TotalAmount:5900,
      },
      {
        key: '2',
        RestaurantID: '004',
        TotalOrdersWeekly: 42,
        TotalOrdersDaily : 23,
        TotalOrdersMonthly : 68,
        TotalAmount:6700,
      },
      {
        key: '3',
        RestaurantID: '008',
        TotalOrdersWeekly: 36,
        TotalOrdersDaily : 19,
        TotalOrdersMonthly : 70,
        TotalAmount:3580,
      },
      {
        key: '4',
        RestaurantID: '005',
        TotalOrdersWeekly: 51,
        TotalOrdersDaily : 26,
        TotalOrdersMonthly : 89,
        TotalAmount:5600,
      },
      {
        key: '5',
        RestaurantID: '007',
        TotalOrdersWeekly: 49,
        TotalOrdersDaily : 24,
        TotalOrdersMonthly : 89,
        TotalAmount:3400,
      },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
    
    
    // createRoot(mountNode).render(<ComponentDemo />);
    
    export default RAnalytics;