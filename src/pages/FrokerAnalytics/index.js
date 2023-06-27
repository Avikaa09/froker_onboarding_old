import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FrokerAnalytics = () => {
  const data = [
    { date: '2023-06-01', views: 150, watchtime: 120, followers: 50, videos: 10 },
    { date: '2023-06-02', views: 200, watchtime: 180, followers: 55, videos: 8 },
    { date: '2023-06-03', views: 100, watchtime: 90, followers: 60, videos: 12 },
    // Add more data points as needed
  ];

  return (
    <div>
      <h1>Froker Analytics</h1>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="views" stroke="#8884d8" />
        <Line type="monotone" dataKey="watchtime" stroke="#82ca9d" />
        <Line type="monotone" dataKey="followers" stroke="#ffc658" />
        <Line type="monotone" dataKey="videos" stroke="#8dd1e1" />
      </LineChart>
    </div>
  );
};

export default FrokerAnalytics;
