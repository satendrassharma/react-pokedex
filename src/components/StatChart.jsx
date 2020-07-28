import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';





export default function StatChart({data}) {

 
    return (
      <ResponsiveContainer width="95%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,right:5, left: 5, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="base_stat" fill="#8884d8" />
        <Bar dataKey="effort" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
    );
  
}
