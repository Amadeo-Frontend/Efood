import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  white_bg: '#FFF8F2',
  beige: '#FFEBD9',
  red: '#E66767'
}

export const GlobalStyle = createGlobalStyle`
 *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      list-style: none;
      text-decoration: none;
      overflow-x: hidden;
 }

 body{
      background: ${colors.white_bg};
      color: ${colors.red};
 }

 .container {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
}
 `

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`
