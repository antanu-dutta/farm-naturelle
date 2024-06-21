import React, { useRef, useState } from "react";
import { countryCodes } from "../../Data Asset/CountryCode";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [showInputAlert, setShowInputAlert] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  const inputField = useRef();

  const handleOtpButton = () => {
    if (!inputField.current.value) {
      setShowInputAlert(true);
    }
  };

  return (
    <div>
      <div className={styles.login}>
        <div className={`container`}>
          <div className={`${styles["login-container"]}`}>
            <div className={`${styles["login-container-details"]}`}>
              <span className={`${styles["login-navigation"]}`}>
                <Link to="/">HOME</Link> / ACCOUNT
              </span>
              <div className={`${styles["login-form-container"]}`}>
                <h2>Login/Sign up</h2>
                {showInputAlert && (
                  <span className={`${styles["input-alert"]}`}>
                    Please Enter a valid Number
                  </span>
                )}
                <form
                  action=""
                  className={`${styles["login-form"]}`}
                  onSubmit={handleSubmitForm}
                >
                  <div className={`${styles["login-form-input-field"]}`}>
                    <select name="" id="">
                      {countryCodes.map((item, index) => (
                        <option value="" key={index}>
                          {item.code} {item.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      ref={inputField}
                    />
                  </div>
                  <button
                    className={`${styles["login-form-submit-btn"]}`}
                    onClick={handleOtpButton}
                  >
                    Get OTP
                  </button>
                </form>
                <div className={`${styles["remember-me-checkbox"]}`}>
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </div>
                <span className={`${styles["no-account"]}`}>
                  Don't have an account yet?
                </span>
                <div className={`${styles["signin-container"]}`}>
                  <hr className={`${styles["first-hr"]}`} />
                  <span>Or continue with</span>
                  <hr className={`${styles["second-hr"]}`} />
                  <div className={`${styles["signin-option"]}`}>
                    <img
                      src="https://loginviaotp.com/static/img/google_img.webp"
                      alt="google image"
                    />
                    <span>Sign in with Google</span>
                  </div>
                  <div className={`${styles["signin-option"]}`}>
                    <img
                      src="https://loginviaotp.com/static/img/facebook_img.png"
                      alt="facebook-logo"
                    />
                    <span>Sign in with Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
