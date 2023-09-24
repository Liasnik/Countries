import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow-input);
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for country',
})`
  background-color: var(--color-ui-base);
  color: var(--color-text);
  border: none;
  outline: none;
  margin-left: 22px;
`

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  )
}

export default Search
