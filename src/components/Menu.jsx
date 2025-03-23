import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Shield, Ship, Wrench, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3 px-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2018/01/marinha-brasil-logo.png"
            alt="Logo"
            style={{ height: 40, width: 40, marginRight: 10 }}
          />
          Frota Naval Remake
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Lista Geral</Nav.Link>
            <Nav.Link as={Link} to="/solicita">Solicitação de Serviços</Nav.Link>

            <NavDropdown title="Outros" id="basic-nav-dropdown">
            <NavDropdown.Header>📌 Informações</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/armamento">
                <Shield size={16} className="me-2" />
                Armamentos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/infor">
                <Ship size={16} className="me-2" />
                Navios
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Header>🛠️ Serviços</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/Armamentos">
                <Shield size={16} className="me-2" />
                Armamentos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/manutencao">
                <Wrench size={16} className="me-2" />
                Manutenção
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/construcao">
                🏗️ Construção
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/missao">
                🚀 Missão
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/treinamento">
                🎯 Treinamento
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servico">
                📋 Serviço
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Header>⚓ Administração</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/comandantes">
                <Users size={16} className="me-2" />
                Comandantes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
