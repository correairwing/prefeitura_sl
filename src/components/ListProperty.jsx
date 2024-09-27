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
            <h1>Imóveis cadastrados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Inscrição municipal</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Número</th>
                        <th>Bairro</th>
                        <th>Complemento</th>
                        <th>ID Contribuinte</th>

                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property, key) =>
                        <tr key={key}>
                            <td>{property.id}</td>
                            <td>{property.cep}</td>
                            <td>{property.logradouro}</td>
                            <td>{property.numero}</td>
                            <td>{property.bairro}</td>
                            <td>{property.complemento}</td>
                            <td>{property.contribuinte}</td>
                            <td>
                                <Link to={`/property/${property.id}/edit`} style={{marginRight: "10px"}}>
                                    <button>editar</button> 
                                </Link>
                                <button onClick={() => deleteProperty(property.id)}>excluir</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
     );
}
 
export default ListProperty;