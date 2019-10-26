import React from 'react';
import { LineChart, Line, YAxis, XAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
// import chroma from "chroma-js"


function Chart(props) {

  if (!props.readings) {
    return "Leading"
  }
  // const colours = chroma.scale(['#550000','#005500', '#000055'])
  //   .mode('lch').colors(props.valueKeys.length)
  const colours = ['#A20021', "#0dab76", "#347FC4", "#88527F",  "#FF6700", "#004E98", "#cec2ff"]

  return (
    <main>
      <ResponsiveContainer width="100%" height={600} className="chart-div" >

        <LineChart data={props.readings} margin={{ top: 35, right: 30, left: 65, bottom: 45 }}>

          {props.valueKeys.map((key, index) => (

            <Line connectNulls type='monotone' dataKey={key} stroke={colours[index]} strokeWidth={3} key={index}  dot={false} />
          ))}
          <CartesianGrid stroke="#88A09E" strokeDasharray="10 10" vertical={false} />

          <XAxis type="category" dataKey="time" interval={props.interval} position='bottom' height={60} xAxisId={0} dy={15} />

          <XAxis type="category" allowDuplicatedCategories={false} label={{ angle: 0, position: 'bottom' }} interval={24} dataKey="date" tickLine={false} tick={{ fontSize: 30, angle: 0 }} xAxisId={1} />

          <YAxis scale="log" domain={[dataMin =>(dataMin/2) , dataMax => (dataMax * 2)]} />

          <Legend verticalAlign="bottom" height={36} iconSize={30} wrapperStyle={{ bottom: 20 }}   />

          <Tooltip cursor={false} labelStyle={{ color: "black" }}  />

        </LineChart>

      </ResponsiveContainer>
    </main>
  )
}

export default Chart