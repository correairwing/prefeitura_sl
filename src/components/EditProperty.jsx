import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditProperty = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getProperty();
    }, []);

    function getProperty() {
        axios.get(`http://localhost:80/api/property.php/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/api/property.php/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/property/list');
        });
        
    }
    return (
        <div>
            <h1>Editar cadastro de imóvel</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>CEP: </label>
                            </th>
                            <td>
                                <input value={inputs.cep} type="text" name="cep" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Logradouro:</label>
                            </th>
                            <td> 
                                <input value={inputs.logradouro} type="text" name="logradouro" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Número: </label>
                            </th>
                            <td>
                                <input value={inputs.numero} type="text" name="numero" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Bairro: </label>
                            </th>
                            <td>
                                <input value={inputs.bairro} type="text" name="bairro" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Complemento: </label>
                            </th>
                            <td>
                                <input value={inputs.complemento} type="date" name="complemento" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>ID Contribuinte: </label>
                            </th>
                            <td>
                                <input value={inputs.contribuinte} type="text" name="contribuinte" onChange={handleChange} />
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
 
export default EditProperty;