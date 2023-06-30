import { Container } from './styles'

import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Jonas Rocha</span>

      <Button title="Login" loading/>
    </Container>
  )
}