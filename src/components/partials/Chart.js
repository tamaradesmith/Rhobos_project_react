import React from 'react';
import { LineChart, Line, YAxis, XAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import '../../styles/dashboard.scss';

function Chart(props) {
  return (
    <main>

      <div >
        <ResponsiveContainer width="100%" height={500} className="chart-div" >
          <LineChart data={props.reading} argin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Line type='monotone' dataKey="value" stroke="red" strokeWidth={6} />
            <XAxis dataKey="time" angle={-90} textAnchor="end" height={150} />
          <LabelList dataKey="props.time" position="bottom" angle="90" />
          <YAxis type="number" domain={['auto', 'auto']} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </main>
  )
}

export default Chart