import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { filterByCode } from '../config'

const Wrapper = styled.section`
  margin-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 32px;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 80px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  box-shadow: var(--shadow);
  }
`

const CardTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`

const ListGroup = styled.div`
 display: flex;
 flex-direction: column;

 gap: 32px;

 @media (min-width: 1024px) {
    flex-direction: row;
    gap: 64px;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 1.8;
  letter-spacing: 1.5px;

  & > b {
    font-weight: var(--fw-bold);
  }

  & > a {
    color: var(--color-text);
  }
`

const Meta = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 5px 10px;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow-button);
  cursor: pointer;
  border-radius: var(--radius-sm);
`

export const DetailsCard = ({ country }) => {
  const [bordering, setBordering] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (country.borders)
      axios
        .get(filterByCode(country.borders))
        .then(({ data }) => setBordering(data))
  }, [country.borders])

  let people
  const lastNumber = country.population % 10
  if (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) {
    people = 'человека'
  } else people = 'человек'
  console.log(lastNumber)

  // //const lastNumber = country.population.toString().split('').slice(-1)
  // const lastNumber = country.population.toString().split('').pop()
  // if (lastNumber === '2' || lastNumber === '3' || lastNumber === '4') {
  //   people = 'человека'
  // } else people = 'человек'
  // console.log(lastNumber)

  // const array = country.population.toString().split('')
  // const lastNumber = array[array.length - 1]
  // if (array === '2' || lastNumber === '3' || lastNumber === '4') {
  //   people = 'человека'
  // } else people = 'человек'
  // console.log(array[array.length - 1])

  return (
    <Wrapper>
      <CardImage src={country.flags.svg} alt={country.flag.alt} />
      <div>
        <CardTitle>{country.name.common}</CardTitle>
        <ListGroup>
          <List>
            <ListItem>
              Capital <b>{country.capital}</b>
            </ListItem>
            <ListItem>
              Official Name <b>{country.name.official}</b>
            </ListItem>
            <hr />
            <ListItem>Alternative Spellings:</ListItem>
            <ListItem>
              <b>{country.altSpellings[0]}</b>
            </ListItem>
            <ListItem>
              <b>{country.altSpellings[1]}</b>
            </ListItem>
            <ListItem>
              <b>{country.altSpellings[2]}</b>
            </ListItem>
            <hr />
            <ListItem>
              Region <b>{country.region}</b>
            </ListItem>
            <ListItem>
              Population <b>{country.population.toLocaleString()}</b> {people}
            </ListItem>
            <ListItem>
              Subregion <b>{country.subregion}</b>
            </ListItem>

            <ListItem>
              Driving <b>{country.car.side}</b>
            </ListItem>
            <hr />
            <ListItem>
              <a href={country.maps.googleMaps}>Google Maps</a>
            </ListItem>
            <ListItem>
              <a href={country.maps.openStreetMaps}>Open Street Maps</a>
            </ListItem>
          </List>
          {/* <List>
          <b>Top Level Domain</b>{' '}
          {tlds.map((domain) => (
            <span key={domain}>{domain} </span>
          ))}
        </List> */}
          {/* <List>
            <b>Currency</b>{' '}
            {country.currencies.map((c) => (
              <span key={c.code}>{c.name} </span>
            ))}
          </List> */}
          <List>
            {/* <b>Language</b>{' '} */}
            {/* {country.languages.map((l) => (
              <span key={l.name}>{l.name}</span>
            ))} */}
            {/* {country.languages.mkd} */}
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!country.borders ? (
            <span>There isn't border countries</span>
          ) : (
            <TagGroup>
              {bordering &&
                bordering.map((b) => (
                  <Tag
                    key={b.name.common}
                    onClick={() => navigate(`/country/${b.name.common}`)}
                  >
                    {b.name.common}
                  </Tag>
                ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
}
