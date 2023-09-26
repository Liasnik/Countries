import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  IoArrowUp,
  IoArrowUpCircle,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
} from 'react-icons/io5'
import { ALL_COUNTRIES } from '../config'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/select/Controls'
import { ScrollUp } from '../components/ScrolUp'

export const HomePage = ({ countries, setCountries, language }) => {
  const [countriesFiltered, setCountriesFiltered] = useState(countries)
  const navigate = useNavigate()

  const handleSearch = (search, region) => {
    let data = [...countries]

    if (region) {
      data = data.filter((c) => c.region.includes(region))
    }

    if (search) {
      data = data.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      )
    }
    setCountriesFiltered(data)
  }

  useEffect(() => {
    setCountriesFiltered(countries)
  }, [countries])

  useEffect(() => {
    !countries.length &&
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [countries.length, setCountries])

  return (
    <div>
      <Controls onSearch={handleSearch} language={language} />
      <List>
        {countriesFiltered.map((country) => (
          <Card
            key={country.name.common}
            img={country.flags.svg}
            name={country.name.common}
            info={[
              {
                title: language ? 'Capital' : 'Столиця',
                description: country.capital,
              },
              {
                title: language ? 'Population' : 'Населення',
                description: country.population.toLocaleString(),
              },

              {
                title: language ? 'Region' : 'Регіон',
                description: country.region,
              },
            ]}
            onClick={() => navigate(`/country/${country.name.common}`)}
          />
        ))}
      </List>
      <ScrollUp onClick={() => window.scrollTo(0, 0)}>
        <IoArrowUp />
      </ScrollUp>
    </div>
  )
}