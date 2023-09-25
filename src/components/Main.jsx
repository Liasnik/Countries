import styled from 'styled-components'
import { Container } from './Container'

const Wrapper = styled.main`
  padding: 22px 0;

  @media (min-width: 767px) {
    padding: 44px 0;
  }
`

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
