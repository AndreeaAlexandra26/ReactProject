import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListaProduse = () => {
    const [productdata, productdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/produse/detalii/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/produse/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Vrei sa stergi produsul')) {
            fetch("http://localhost:3004/produse/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Produs sters cu succes.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:3000/produse").then((res) => {
            return res.json();
        }).then((resp) => {
            productdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Lista Produse</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/adauga/produse" className="btn btn-success">Adauga produs (+) </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Nume</td>
                                <td>Categorie</td>
                                <td>Pret</td>
                                <td>Imagine</td>
                                <td>Actiune</td>
                            </tr>
                        </thead>
                        <tbody>
{productdata &&
                                productdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.price}</td>
                                        <td>{item.img}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Editeaza</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Sterge</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Detalii</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListaProduse;