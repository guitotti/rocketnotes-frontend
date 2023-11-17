import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li><ButtonText title="Todos"/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs" $isactive/></li>
      </Menu> 

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  )
}