import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { AppContext } from '../context/AppContext'

const Services = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  const { viewSpecificEmployee } = useContext(AppContext)

  useEffect(() => {
    const fetchEmployees = async () => {

      try {
        setLoading(true)
        const response = await axios.get("/employees")
        setEmployees(response.data.data)
        setLoading(false)

      } catch (error) {
        console.error("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchEmployees()
  }, [])

  return (
    <div className='p-4 grid grid-cols-4 gap-5 '>
      {
        employees?.map((employee) => {
          return (
            <Card
              key={employee.id}
              employee={employee}
              onView={viewSpecificEmployee}
            />
          )
        })
      }
    </div>
  )
}

export default Services