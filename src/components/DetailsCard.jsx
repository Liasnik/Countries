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

  & > b {
    font-weight: var(--fw-bold);
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
  box-shadow: var(--shadow-input);
  cursor: pointer;
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

  return (
    <Wrapper>
      <CardImage src={country.flags.svg} alt={country.flag.alt} />
      <div>
        <CardTitle>{country.name.official}</CardTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Capital</b> {country.capital}
            </ListItem>
            <ListItem>
              <b>Native Name</b> {country.nativeName}
            </ListItem>
            <ListItem>
              <b>Region</b> {country.region}
            </ListItem>
            <ListItem>
              <b>Population</b> {country.population}
            </ListItem>

            <ListItem>
              <b>Subregion</b> {country.subregion}
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
          {currencies.map((c) => (
            <span key={c.code}>{c.name} </span>
          ))}
        </List>
        <List>
          <b>Language</b>{' '}
          {languages.map((l) => (
            <span key={l.name}>{l.name}</span>
          ))}
        </List> */}
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
