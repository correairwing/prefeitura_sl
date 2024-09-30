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

    function formatDate(dateString) {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
      }

    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold my-5 text-center">Pessoas cadastradas</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full">
                <thead className="bg-sky-800 text-white">
                    <tr className="text-nowrap">
                    <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider">CPF</th>
                    <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider">Contato</th>
                    <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider">Data de Nascimento</th>
                    <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider">Sexo</th>
                    <th className="px-6 py-3 text-center text-s font-medium uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, key) => (
                    <tr key={key} className=" grid grid-cols-8 text-nowrap hover:bg-gray-100">
                        <td className="px-6 py-4 text-s font-medium text-gray-900">{user.id}</td>
                        <td className="px-6 py-4 text-s">{user.name}</td>
                        <td className="px-6 py-4 text-s">{user.email}</td>
                        <td className="px-6 py-4 text-s">{user.cpf}</td>
                        <td className="px-6 py-4 text-s">{user.mobile}</td>
                        <td className="px-6 py-4 text-s">{formatDate(user.data_nascimento)}</td>
                        <td className="px-6 py-4 text-s">{user.sexo}</td>
                        <td className="justify-between px-6 py-4 text-s text-center">
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
