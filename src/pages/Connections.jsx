import React, { useState } from 'react'
import {Users,UserPlus,UserCheck,UserRoundPen,MessageSquare} from 'lucide-react'
import {useNavigate} from 'react-router-dom'
import { 
  dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingConnections
 } from '../assets/assets'

const Connections = () => {
  const [currentTab,setCurrentTab] = useState('Followers')
  const navigate = useNavigate()
  const dataArray = [
    {lable:'Followers',value:followers,icon:Users},
    {lable:'Following',value:following,icon:UserCheck},
    {lable:'Pending',value:pendingConnections,icon:UserRoundPen},
    {lable:'Connections',value:connections,icon:UserPlus}
  ]
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
   {/* Title */}
          <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2 text-slate-900">Connections</h1>
              <p className="text-slate-600">Manage your network and discover new connections.</p>
          </div>
          {/* counts */}
          <div className="mb-8 flex flex-wrap gap-6">
             {dataArray.map((item,index)=>(
              <div key={index} className="flex flex-col items-center justify-center gap-1 border h-20 w-40 border-gray-200 bg-white shadow rounded-md ">
                <b>{item.value.length}</b>
                <p className="text-slate-600">{item.lable}</p>
              </div>
             ))}
          </div>
            {/* Tabs */}
            <div className="inline-flex flex-wrap items-center border  border-gray-200 rouned-md p-1 bg-white shadow-sm ">
             {dataArray.map((tab)=>(
             <button onClick={()=>setCurrentTab(tab.lable)} key={tab.lable} className={`flex items-center cursor-pointer px-3 py-1 text-sm rounded-md transition-colors ${currentTab === tab.lable ? 'bg-white font-medium text-black' : 'text-gray-500 hover:text-black'}`}>
               <tab.icon className='w-4 h-4'/>
               <span className='ml-1'>{tab.lable}</span>
               {tab.count !== undefined && (<span className='ml-2 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full'>{tab.count}</span>)}
             </button>
             ))}
            </div>
      </div>
    </div>
  )
}

export default Connections