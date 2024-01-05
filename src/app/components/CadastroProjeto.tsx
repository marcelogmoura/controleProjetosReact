import axios from "axios";
import { useState } from "react";

const CadastroProjeto = () => {

    const[nome, setNome] = useState("");
    const[escopo, setEscopo] = useState("");
    const[dataEntrega, setDataEntrega] = useState("");
    const[errors , SetErrors] = useState([]);

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        SetErrors([]);

        axios.post('http://localhost:8081/api/projeto' , 
        {
            nome, 
            escopo , 
            dataEntrega

        })
            .then((result) => {
                alert(`Cadastrado com sucesso!\nID: ${result.data}`);
                location.reload();
            })
            .catch((error) => {
                SetErrors(error.response.data.errors); 
            });
    }
    
    return(
        <div>     

            <ul>
                {
                    errors.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <li className="text-danger">
                            {item}
                        </li>
                    ))
                }
            </ul>




            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nome do projeto:</label>
                    <input 
                           type="text" 
                           className="form-control" 
                           placeholder="Digite aqui"
                           value={nome}
                           onChange={(e) => setNome(e.target.value)}
                           />
                </div>

                <div className="mb-3">
                    <label>Escopo do projeto:</label>
                    <textarea 
                           className="form-control"
                           value={escopo}
                           onChange={(e) => setEscopo(e.target.value)}
                           ></textarea>
                </div>

                <div className="mb-3">
                    <label>Data de entrega:</label>
                    <input 
                           type="date" 
                           className="form-control"
                           value={dataEntrega}
                           onChange={(e) => setDataEntrega(e.target.value)}
                           />
                </div>

                <div className="mb-3 d-grid">
                    <input type="submit" className="btn btn-outline-success"
                        value="Realizar Cadastro" />
                </div>
            </form>


        </div>
    )
}

export default CadastroProjeto;



