import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    const [categorias, setCategorias] = useState(['Teste']);
    const inicialValues = {
      name: 'Inicial name',
      description: 'Inicial description',
      color: '#bbb',
    }
    const [values, setValues] = useState(inicialValues);

    return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(eventSubmited){
          eventSubmited.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
        }}>        
          <div>
            <label>
              Nome da Categoria:
              <input
                type="text"
                value={values.name}
                onChange={function categoriaInput(data){
                  setValues(data.target.value)
                }}
              />
            </label>    
          </div>  

          <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.description}
                onChange={function categoriaInput(data){
                  setValues(data.target.value)
                }}
              />
            </label>
          </div>

          <div>
            <label>
              Cor:
              <input
                type="color"
                value={values.color}
                onChange={function categoriaInput(data){
                  setValues(data.target.value)
                }}
              />
            </label>
          </div>

          <button>
            Cadastrar
          </button>
        </form>   

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            )
          })}
        </ul>
                
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;