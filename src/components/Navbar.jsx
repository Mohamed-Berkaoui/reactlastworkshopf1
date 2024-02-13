import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useSearchParams } from 'react-router-dom';

function NavBar() {
    const [query,setQuery]=useSearchParams()
  return (
    <>
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/"><p>Home</p></Link>
            <Link to="/products"><p>products</p></Link>
            <Link to='/addproduct'> <p>add product</p>  </Link>
            <Link to="/editdelete"><p>edit delete</p></Link>
            <label htmlFor="">search</label>
            <input type="text" onChange={(e)=>setQuery({"search":e.target.value})} placeholder='search' />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;