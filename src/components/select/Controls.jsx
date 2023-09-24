import { useEffect, useState } from 'react'
import Search from './Search'
import { CustomSelect } from './CastomSelect'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    aline-items: center;
  }
`
const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Antarctic', label: 'Antarctic' },
]

export const Controls = ({ onSearch }) => {
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
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}
