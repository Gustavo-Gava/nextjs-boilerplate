import * as S from './styles'

export const Main = () => {
  return (
    <S.Container>
      <S.Logo
        src="/logo.svg"
        width="350"
        height="120"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />

      <S.Title>React Avançado - Boilerplate</S.Title>

      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components!
      </S.Description>

      <S.Illustration src="/svg/illustration.svg" width="400" height="300" />
    </S.Container>
  )
}
