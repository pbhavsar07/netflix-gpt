import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className="px-36 pt-[20%] absolute text-white
    bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4"> {overview} </p>
      <div>
      <button className="text-white bg-gray-400 bg-opacity-50 px-12 text-lg rounded-lg p-4">Play</button>
      <button className="mx-4 text-white bg-gray-400 bg-opacity-50 px-12 text-lg rounded-lg p-4">More Info</button>
      </div>
      
    </div>
  )
}

export default VideoTitle