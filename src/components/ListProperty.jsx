import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ListProperty = () => {

    const [properties, setProperties] = useState([]);
    useEffect(() => {
        getProperties();
    }, []);

    function getProperties() {
        axios.get('http://localhost:80/api/property.php').then(function(response) {
            console.log(response.data);
            setProperties(response.data);
        });
    }

    const deleteProperty = (id) => {
        axios.delete(`http://localhost:80/api/property.php/${id}/delete`).then(function(response){
            console.log(response.data);
            getProperties();
        });
    }

    return ( 
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold my-5 text-center">Imóveis cadastrados</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full table-fixed">
                <thead className="bg-gray-800 text-white">
                    <tr className="text-nowrap">
                    <th className="w-1/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Inscrição municipal</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">CEP</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Logradouro</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Número</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Bairro</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Complemento</th>
                    <th className="w-1/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID do contribuinte</th>
                    <th className="w-2/12 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col bg-white divide-y divide-gray-200">
                    {properties.map((property, key) => (
                    <tr key={key} className=" grid grid-cols-8 text-nowrap hover:bg-gray-100">
                        <td className="w-1/12 px-6 py-4 text-sm font-medium text-gray-900">{property.id}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{property.cep}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{property.logradouro}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{property.numero}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{property.bairro}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{property.complemento}</td>
                        <td className="w-1/12 px-6 py-4 text-sm text-gray-500">{property.contribuinte}</td>
                        <td className="justify-between px-6 py-4 text-sm text-center">
                        <Link to={`/property/${property.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">
                            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">Editar</button>
                        </Link>
                        <button 
                            onClick={() => deleteProperty(property.id)} 
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                            Excluir
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>

     );
}
 
export default ListProperty;