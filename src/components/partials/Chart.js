import React from 'react';
import { LineChart, Line, YAxis, XAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import '../../styles/dashboard.scss';
import chroma from "chroma-js"


function Chart(props) {

  if (!props.readings) {
    return "Leading"
  }
  const colours = chroma.scale(['#fa0000', '#00ff00'])
    .mode('lch').colors(props.valueKeys.length)



  return (
    <main>

      <div >
        <ResponsiveContainer width="100%" height={600} className="chart-div" >
          <LineChart data={props.readings} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            {props.valueKeys.map((key, index) => (

              <Line type='monotone' dataKey={key} stroke={colours[index]} strokeWidth={3} />
            ))}
            <XAxis dataKey="time" angle={-90} textAnchor="end" height={150} />
            <LabelList dataKey="props.time" position="bottom" angle="90" />
            <YAxis type="number" domain={['0', 'dataMax']} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}

export default Chart