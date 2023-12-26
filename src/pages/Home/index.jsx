import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';

import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();
 
  function handleSelectedTag(tagName){
    if(tagName === "all") {
      setSelectedTags([]);

      return;
    }

    const alreadySelected = selectedTags.includes(tagName);
    
    if(alreadySelected){
      const filteredTags = selectedTags.filter(tag => tag !== tagName);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags(prevState => [...prevState, tagName]);
    }   
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  },[]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        {
          <li>
            <ButtonText 
              title="Todos" 
              onClick={() => handleSelectedTag("all")}
              isActive={selectedTags.length === 0}
            />
          </li>
        }
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name} 
                onClick={() => handleSelectedTag(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu> 

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
              <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  )
}