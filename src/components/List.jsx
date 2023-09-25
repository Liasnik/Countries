import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 32px 15px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    padding: 2.5rem 15px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 64px;
  }
`

export const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
