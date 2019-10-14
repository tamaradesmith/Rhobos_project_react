import React from 'react';
import { LineChart, Line, YAxis, XAxis, Tooltip, LabelList } from 'recharts';
import '../../styles/main.css';

function Chart(props) {
  return (
    <main>
      <div className="chart">

        <LineChart width={1200} height={400} data={props.reading}>
          <Line type='monotone' dataKey="value" stroke="red" />
          <XAxis />
          <LabelList dataKey="props.time" position="bottom" angle="90" />
          <YAxis type="number" domain={['auto', 'auto']} />
          <Tooltip />
        </LineChart>
      
      </div>
    </main>
  )
}

export default Chart