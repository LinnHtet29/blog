import React from "react";
import UserSignInSignUpForm from "../../components/public/form/UserSignInSignUpForm";

export default function Login() {
  return (
    <div>
      <div className="d-md-flex vh-100">
        <img
          className="login-img object-fit-cover"
          src="https://r1.ilikewallpaper.net/ipad-pro-wallpapers/download/94679/abstract-colorful-space-colors-art-4k-ipad-pro-wallpaper-ilikewallpaper_com.jpg"
          alt="Login Image"
        />
        <UserSignInSignUpForm />
      </div>
    </div>
  );
}
