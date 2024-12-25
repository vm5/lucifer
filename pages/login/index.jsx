import { useState, useEffect } from "react";
import LoginForm from "../../components/login/LoginForm";
import styles from "./style.module.css";
import SignupForm from "../../components/login/SignupForm";

function Login() {
  const [renderSignUp, setRenderSignUp] = useState(false);


  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <LoginForm setRenderSignUp={setRenderSignUp} />
        {renderSignUp && (
          <SignupForm
            renderSignUp={renderSignUp}
            setRenderSignUp={setRenderSignUp}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
