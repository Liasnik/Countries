import { useEffect, useState } from 'react'
import Search from './Search'
import { CustomSelect } from './CastomSelect'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: var(--color-bg);
  padding: 20px 15px;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    aline-items: center;
  }
`
const options = [
  { value: 'Europe', label: 'Europe' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Antarctic', label: 'Antarctic' },
]

export const Controls = ({ onSearch, language }) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  console.log(region)
  useEffect(() => {
    const regionValue = region?.value || ''
    onSearch(search, regionValue)

    // eslint-disable-next-line
  }, [search, region])

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} language={language} />
      <CustomSelect
        options={options}
        placeholder={
          language ? 'Filter by region' : 'Відфільртувати по регіону'
        }
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}
