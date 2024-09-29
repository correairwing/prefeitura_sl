import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/api/index.php', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h2 className='text-xl font-bold my-5'>Cadastrar pessoa</h2>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td> 
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="tel" name="mobile" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>CPF: </label>
                            </th>
                            <td>
                                <input type="text" name="cpf" onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Data de nascimento: </label>
                            </th>
                            <td>
                                <input type="date" name="data_nascimento" onChange={handleChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Sexo: </label>
                            </th>
                            <td>
                                <select name="sexo" onChange={handleChange} required>
                                    <option value="">Selecione</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
