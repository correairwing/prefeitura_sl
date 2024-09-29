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
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-5">Cadastrar pessoa</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Nome:</label>
                    <input 
                    type="text" 
                    name="name" 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Email:</label>
                    <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Mobile:</label>
                    <input 
                    type="tel" 
                    name="mobile" 
                    onChange={handleChange} 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">CPF:</label>
                    <input 
                    type="text" 
                    name="cpf" 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Data de nascimento:</label>
                    <input 
                    type="date" 
                    name="data_nascimento" 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mb-2">Sexo:</label>
                    <select 
                    name="sexo" 
                    onChange={handleChange} 
                    required 
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Selecione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    </select>
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

    )
}
