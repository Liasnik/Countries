import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ALL_COUNTRIES } from '../config'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/select/Controls'

export const HomePage = ({ countries, setCountries }) => {
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
      <Controls onSearch={handleSearch} />
      <List>
        {countriesFiltered.map((country) => (
          <Card
            key={country.name.common}
            img={country.flags.svg}
            name={country.name.common}
            info={[
              { title: 'Capital', description: country.capital },
              {
                title: 'Population',
                description: country.population.toLocaleString(),
              },

              { title: 'Region', description: country.region },
            ]}
            onClick={() => navigate(`/country/${country.name.common}`)}
          />
        ))}
      </List>
    </div>
  )
}
