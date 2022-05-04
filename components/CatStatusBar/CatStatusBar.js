import React from 'react'

const CatStatusBar = ({ title, level }) => {

  return (
    <div className='flex justify-between items-center w-[80%] mb-8'>
      <p className=''><strong>{title}:</strong></p>
      <div className='flex gap-2'>
        {/* If level is greater than equal to 1 then show the status bar color if not then show the latter */}
        <div className={`w-16 h-3 rounded-lg ${level >= 1 ? 'bg-statusBarColor' : 'bg-statusBarGrey'}`}></div>
        <div className={`w-16 h-3 rounded-lg ${level >= 2 ? 'bg-statusBarColor' : 'bg-statusBarGrey'}`}></div>
        <div className={`w-16 h-3 rounded-lg ${level >= 3 ? 'bg-statusBarColor' : 'bg-statusBarGrey'}`}></div>
        <div className={`w-16 h-3 rounded-lg ${level >= 4 ? 'bg-statusBarColor' : 'bg-statusBarGrey'}`}></div>
        <div className={`w-16 h-3 rounded-lg ${level >= 5 ? 'bg-statusBarColor' : 'bg-statusBarGrey'}`}></div>
      </div>
    </div>
  )
}

export default CatStatusBar
