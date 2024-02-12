import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useSearchParams } from 'react-router-dom';

function NavBar() {
    const [search,setSearch]=useSearchParams()
  return (
    <>
      

      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/"><p>Home</p></Link>
            <Link to="/products"><p>products</p></Link>
            <label htmlFor="">search</label>
            <input type="text" onChange={(e)=>setSearch({"search":e.target.value})} placeholder='search' />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;