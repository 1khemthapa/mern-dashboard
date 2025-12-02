import { Pie } from "react-chartjs-2";
import { StoreContext } from "../context/storeContext.jsx";
import {products as assets} from '../assets/assets.js'
import "chart.js/auto";
import { useContext } from "react";



export function PieChart() {
  const { data } = useContext(StoreContext);

const Pdata={
    labels:data.map((data)=>data.Category),
    datasets:[
        {
            label:'Revenue',
            data:data.map((data)=>data.Revenue),
            backgroundColor:[
          'rgba(255,99,132,0.5)',
          'rgba(54,162,235,0.5)',
          'rgba(255,206,86,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(153,102,255,0.5)',
            ]
        }
    ]
}
  return <div className="w-100 h-85">
    <Pie data={Pdata} />
  </div> ;
}