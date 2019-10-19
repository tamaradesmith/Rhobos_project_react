import React from 'react';
import { LineChart, Line, YAxis, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import '../../styles/dashboard.scss';
import chroma from "chroma-js"
import { scaleLog } from 'd3-scale';
// const scale = scaleLog().base(Math.E);


function Chart(props) {

  if (!props.readings) {
    return "Leading"
  }
  const colours = chroma.scale(['#fa0000', '#00ff00'])
    .mode('lch').colors(props.valueKeys.length)


  return (
    <main>
        <ResponsiveContainer width="100%" height={600} className="chart-div" >
        <LineChart data={props.readings} margin={{ top: 20, right: 30, left: 20, bottom: 15 }}>
            {props.valueKeys.map((key, index) => (

              <Line type='monotone' dataKey={key} stroke={colours[index]} strokeWidth={3} key={index} />
            ))}
            <XAxis type="category" dataKey="time" interval={4} position='bottom' height={50} xAxisId={0}/>

            <XAxis type="category" xAxisId={1} allowDuplicatedCategories={false} label={{ value: '', angle: 0, position: 'bottom' }} interval={12} dataKey="date" tickLine={false} tick={{ fontSize: 24, angle: 0 }} />
          {/* <YAxis scale="log" domain={[1, 2500]} allowDataOverflow  /> */}
          <YAxis domain={['dataMin', 'dataMax']} allowDataOverflow  />
            <Legend verticalAlign="bottom" height={36} iconSize={30} />
            <Tooltip cursor={false} labelStyle={{color:"black"}} />
          </LineChart>
        </ResponsiveContainer>
    </main>
  )
}

export default Chart