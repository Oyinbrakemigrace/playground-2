import React from 'react'

const Card = ({ employee, onView, onDelete, onEdit, isViewDetails = false }) => {
    return (
        <div key={employee?.id} className='bg-zinc-600 w-full p-2 rounded-md'>
            <div className='bg-white w-full h-fit text-zinc-700 p-4 rounded-lg'>
                <p>Employee's name : {employee?.employee_name}</p>
                <p>Employee's Age : {employee?.employee_age}</p>
                <p>Employee's salary : ${employee?.employee_salary}</p>
            </div>
            <div className='space-x-3 mt-3 flex justify-center items-center'>
                <button type='button' onClick={() => !isViewDetails ? onView(employee?.id) : onEdit(employee?.id)} className='bg-pink-500 text-white px-2 rounded-md py-2'>{isViewDetails ? "Edit Details" : "View Details"}</button>
                <button type='button' className='bg-red-500 text-white px-2 rounded-md py-2'>Delete details</button>
            </div>
        </div>
    )
}

export default Card