import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const inicialValues = {
      name: 'Inicial name',
      description: 'Inicial description',
      color: '#bbb',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(inicialValues);


    function setValue(key, value){
      setValues({
        ...values,
        [key]: value,
      })
    }

    function handleChange(data){
      /* const {getAttribute, value} = data.target; */
        setValue(
          data.target.getAttribute('name'), 
          data.target.value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(eventSubmited){
          eventSubmited.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(inicialValues);
        }}>

          <FormField 
            type="textarea"
            name="Descrição"
            value={values.name}
            onChange={handleChange}
          />

          <FormField 
            type="textarea"
            name="Descrição"
            value={values.description}
            onChange={handleChange}
          />

          <FormField 
            type="color"
            name="Cor"
            value={values.color}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>
        </form>   

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.name}
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