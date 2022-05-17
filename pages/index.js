import { useState } from 'react'
import Head from 'next/head'
import { LineChart } from '../components/Charts/LineChart'
import { MenteeTrends } from '../lib/constants'


export default function Home() {
  const [trends, setTrends] = useState({
    labels: MenteeTrends && MenteeTrends.map((data) => data.month),
    datasets: [{
      label: 'Mentee registration trend',
      data: MenteeTrends && MenteeTrends.map((data) => data.trend),
      backgroundColor: ['cyan'],
      borderColor:"#31A5D7",
      borderWidth: 1
    }]
  })
  return (
    <div className="p-8 mt-20 bg-gray-900 rounded-lg lg:w-2/3 lg:mx-auto md:mx-auto h-max sm:mx-10">
     <LineChart chartData={trends}/>
    </div>
  )
}
