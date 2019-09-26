import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('1/1', 2000),
  createData('2/1', 2300),
  createData('3/1', 2600),
  createData('4/1', 2800),
  createData('5/1', 2500),
  createData('6/1', 2000),
  createData('7/1', 2400),
  createData('8/1', 2400),
  createData('9/1', undefined),
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Average Diamond Price</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Price ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
