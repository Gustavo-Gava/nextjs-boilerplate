import styled from 'styled-components'

import Image from 'next/image'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: #06092b;
  color: #fff;
`

export const Logo = styled(Image)``

export const Title = styled.h1`
  font-size: 24px;
`

export const Description = styled.h2`
  color: #ababab;
  margin: 12px 0 20px;

  font-size: 18px;
`

export const Illustration = styled(Image)``
