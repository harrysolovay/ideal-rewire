import styled, { injectGlobal, keyframes } from 'styled-components'
import normalize from 'styled-normalize'

injectGlobal`
  ${ normalize }
`

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export default styled.div`

  text-align: center;

  .logo {
    animation: ${ logoSpin } infinite 20s linear;
    height: 80px;
  }

  .header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .title {
    font-size: 1.5em;
  }

  .intro {
    font-size: large;
  }

`