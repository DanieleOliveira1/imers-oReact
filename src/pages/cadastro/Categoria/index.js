import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/formField';
import Button from '../../../componentes/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const {handleChange, values, clearForm} = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  


  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias'
    : 'https://sciflix-app.herokuapp.com/categorias';
    fetch(URL)
      .then(async(respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
    })

  }, []);

  return (
    <PageDefault>
      <div className='cadastro' >
        <h1>
          Cadatro de Categoria:
          {values.nome}
        </h1>

        <Link className='video' to="/">
          Ir para Home
        </Link>
      </div>

      

      <form onSubmit={function handSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
        {categorias.length === 0 &&(
          <div>
          {/*cargando...*/}
          Loading...
        </div>
        )}
        
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
        
      </ul>
      
      
    </PageDefault>
  );
}

export default CadastroCategoria;
