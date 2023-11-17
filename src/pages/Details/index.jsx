import { Container, Links, Content } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';

export function Details() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet ad, quod ipsum velit numquam rerum magni unde architecto magnam provident expedita a totam veniam mollitia reiciendis eos quae nesciunt!</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="https://rocketseat.com.br">https://rocketseat.com.br</a></li>
              <li><a href="https://rocketseat.com.br">https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}