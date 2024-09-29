import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/index.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/index.php/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold my-5 text-center">Pessoas cadastradas</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full table-fixed">
                <thead className="bg-gray-800 text-white">
                    <tr className="text-nowrap">
                    <th className="w-1/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">CPF</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contato</th>
                    <th className="w-2/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Data de Nascimento</th>
                    <th className="w-1/12 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sexo</th>
                    <th className="w-2/12 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col bg-white divide-y divide-gray-200">
                    {users.map((user, key) => (
                    <tr key={key} className=" grid grid-cols-8 text-nowrap hover:bg-gray-100">
                        <td className="w-1/12 px-6 py-4 text-sm font-medium text-gray-900">{user.id}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{user.name}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{user.email}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{user.cpf}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{user.mobile}</td>
                        <td className="w-2/12 px-6 py-4 text-sm text-gray-500">{user.data_nascimento}</td>
                        <td className="w-1/12 px-6 py-4 text-sm text-gray-500">{user.sexo}</td>
                        <td className="justify-between px-6 py-4 text-sm text-center">
                        <Link to={`user/${user.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">
                            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">Editar</button>
                        </Link>
                        <button 
                            onClick={() => deleteUser(user.id)} 
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

    )
}
