import React from "react";
import { InputGroup, Button } from "react-bootstrap";

export default function SignUpForm() {
  return (
    <article className="col-md-6 mx-auto mb-5 p-3 border-top border-4 border-dark shadow-sm">
      <h2 className="secondary-font mt-5 mb-2 text-center fw-bold">
        Sign up for the newsletter
      </h2>
      <p className="text-center px-md-5">
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </p>
      <InputGroup className="mx-md-3 my-5 justify-content-center">
        <input
          type="email"
          className="fs-6 p-2 col-7"
          placeholder="Enter your email..."
        />
        <Button className="btn btn-dark rounded-0 px-md-4 fs-5 font-monospace">
          SIGN UP
        </Button>
      </InputGroup>
    </article>
  );
}
