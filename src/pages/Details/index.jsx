import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
        <ButtonText title="Excluir Nota" />

        <h1>
          Introdução ao React
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Odit reiciendis blanditiis et ipsam ducimus consequuntur iste sequi 
          obcaecati assumenda? A, perspiciatis maxime architecto pariatur similique
          vitae dolorum alias. Voluptas, eveniet.
        </p>

        <Section title="Links úteis" >
          <Links>
            <li><a href='#'>https://www.rocketseat.com.br/</a></li>
            <li><a href='#'>https://www.rocketseat.com.br/</a></li>
          </Links>
        </Section>

        <Section title="Marcadores" >
          <Tag title="express" />
          <Tag title="nodeJs" />
        </Section>

        <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}