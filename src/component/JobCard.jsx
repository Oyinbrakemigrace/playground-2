import React from 'react'

function JobCard({ by, time, url, title }) {
  return (
    <div className='bg-gray-200 space-y-2 p-4'>
      <div className='font-semibold text-3xl'>
        {
          url ? <a href={url} className='hover:underline'>{title}</a> : <h2>{title}</h2>
        }
      </div>
      <div className='text-gray-500 capitalize'>
        By {by} · {new Date(time * 1000).toLocaleString()}
      </div>
    </div>
  )
}

export default JobCard