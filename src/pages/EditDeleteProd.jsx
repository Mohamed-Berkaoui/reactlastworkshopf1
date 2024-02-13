import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { productContext } from '../context/ProductContext';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditDeleteProd() {

    const products = useContext(productContext)


    function hundelDelete(id) {
        axios.delete(`http://localhost:3000/products/${id}`).then(() => {
            console.log("deleted");

        })
    }
    return (
        <Table striped bordered hover style={{ width: '70%', margin: "auto" }}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p, i) => {
                    return <tr>
                        <td>{i + 1}</td>
                        <td>{p.title}</td>
                        <td><Button onClick={() => {
                            hundelDelete(p.id)
                        }}>delete</Button></td>
                        <td>

                            <Link to={`/editdelete/${p.id}`}> <Button >edit</Button></Link></td>
                    </tr>
                })}
            </tbody>
        </Table>
    );
}

export default EditDeleteProd;