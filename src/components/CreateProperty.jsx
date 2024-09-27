import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProperty = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/api/property.php', inputs).then(function(response){
            console.log(response.data);
            navigate('/property/list');
        });
        
    }

    return ( 
        <div>
            <h1>Cadastrar imóvel</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>CEP:  </label>
                            </th>
                            <td>
                                <input type="text" name="cep" placeholder="somente números" onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Logradouro: </label>
                            </th>
                            <td>
                                <input type="text" name="logradouro" onChange={handleChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Número: </label>
                            </th>
                            <td> 
                                <input type="text" name="numero" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Bairro: </label>
                            </th>
                            <td>
                                <input type="text" name="bairro" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Complemento: </label>
                            </th>
                            <td>
                                <input type="text" name="complemento" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>ID Contribuinte: </label>
                            </th>
                            <td>
                                <input type="number" name="contribuinte" onChange={handleChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Salvar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
     );
}
 
export default CreateProperty;