import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserInfoDropdown from "./UserInfoDropdown";
import { useEffect, useState } from "react";

export default function CusNavbar() {
  // const userInfoFromRedux = ;
  const userInfo = useSelector((state) => state.auth.userInfo);

  // useEffect(() => {
  //   setUserInfo(userInfoFromRedux);
  // }, [userInfoFromRedux]);

  // useEffect(() => {
  //   console.log("UserInfo", userInfo);
  //   // Additional logic when userInfo changes
  // }, [userInfo]);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary position-fixed top-0 start-0 w-100"
    >
      <Container>
        <Navbar.Brand href="#home">
          <h3 className="logo">NORDIC ROSE</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="exact-active">
              Blog
            </Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            {(userInfo && <UserInfoDropdown />) || (
              <Link to="/login" className="btn btn-dark px-3 pt-2 ms-5 fw-bold">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
