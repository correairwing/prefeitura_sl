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
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-5">Cadastrar imóvel</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                <div className="flex flex-col">
                    <label className="font-semibold mb-2">CEP:</label>
                    <input 
                    type="text" 
                    name="cep" 
                    placeholder="Somente números" 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Logradouro:</label>
                    <input 
                    type="text" 
                    name="logradouro" 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Número:</label>
                    <input 
                    type="text" 
                    name="numero" 
                    onChange={handleChange} 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Bairro:</label>
                    <input 
                    type="text" 
                    name="bairro" 
                    onChange={handleChange} 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Complemento:</label>
                    <input 
                    type="text" 
                    name="complemento" 
                    onChange={handleChange} 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">ID Contribuinte:</label>
                    <input 
                    type="number" 
                    name="contribuinte" 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="text-right">
                    <button 
                    type="submit" 
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    Salvar
                    </button>
                </div>
                </div>
            </form>
        </div>

     );
}
 
export default CreateProperty;