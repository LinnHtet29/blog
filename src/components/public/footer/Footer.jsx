import React from "react";
import { Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container fluid className="bg-dark">
      <marquee>
        <section className="d-flex flex-nowrap text-white text-nowrap footer-scroll">
          <Link className="fw-bold mx-2 mx-md-5 footer-link">
            Digital product design
          </Link>
          <Link className="mx-2 mx-md-5 footer-link">Remote work</Link>
          <Link className="fw-bold mx-2 mx-md-5 footer-link">UX design</Link>
          <Link className="mx-2 mx-md-5 footer-link">DistriLinkuted teams</Link>
          <Link className="fw-bold mx-2 mx-md-5 footer-link">Creativity</Link>
          <Link className="mx-2 mx-md-5 footer-link">Strategy</Link>
          <Link className="fw-bold mx-2 mx-md-5 footer-link">SusLinkense</Link>
          <Link className="mx-2 mx-md-5 footer-link">Growth</Link>
        </section>
      </marquee>
      <section className="container-md mx-auto px-2 px-md-3 text-white text-center">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2 className="logo mt-5">NORDIC ROSE</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus.
            </p>
            <Stack
              direction="horizontal"
              gap={5}
              className="justify-content-center"
            >
              <Link className="footer-link text-decoration-underline">
                Twitter
              </Link>
              <Link className="footer-link text-decoration-underline">
                LinkedIn
              </Link>
              <Link className="footer-link text-decoration-underline">RSS</Link>
            </Stack>
            <p className="mt-5 pb-4 mb-0">
              © 2012–2020 Nordic Rose Co.  All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
