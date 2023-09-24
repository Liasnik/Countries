import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config'
import { Button } from '../components/Batton'
import { DetailsCard } from '../components/DetailsCard'

export const Details = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
  console.log(country)

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
  }, [name])

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <Button onClick={handleGoBack}>
        {' '}
        <IoArrowBack />
        Back
      </Button>
      {country && <DetailsCard country={country} />}
    </div>
  )
}
