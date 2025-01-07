import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'

const Contact = () => {
  const { employee } = useContext(AppContext)
  //console.log("employee:", employee);
  
  return (
    <Card 
    employee={employee}
    isViewDetails={true}
    />
  )
}

export default Contact