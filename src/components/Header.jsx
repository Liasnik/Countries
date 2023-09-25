import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Container } from './Container'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 15px;
  color: var(--color-text);
  font-size: var(--font-size-sm);
`

const Title = styled(Link).attrs({
  to: '/Countries',
})`
  color: var(--color-text);
  font-size: var(--font-size-big);
  font-weight: var(--fw-bold);
  text-decoration: none;
  font-weight: var(fw-bold);
`

const ModeSwitcher = styled.div`
  display: flex;
  gap: 0.7rem;
  cursor: pointer;
  text-transform: capitalize;
`

export const Header = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Countries </Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoSunnyOutline size="18px" />
            ) : (
              <IoMoonOutline size="16px" />
            )}
            <span>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
