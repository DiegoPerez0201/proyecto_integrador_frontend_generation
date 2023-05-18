import React, {useState} from "react";
import { Link } from "react-router-dom";

const Login = ({userweb}) => {
     
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
 
    
     const handleLogin = (e) => {
         e.preventDefault();
 
      
         if (email === userweb.email && password === userweb.user_password) {
             console.log(userweb.email + " "  + userweb.user_password);
             console.log("Acceso permitido"); 
         } else {
            console.log(userweb.email + " "  + userweb.user_password);
             alert("usuario  o contraseña incorrectos. Por favor, inténtalo de nuevo."); 
         }
     }
    return (
        <div className="login col-3 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
            <h4 className="mt-4">Iniciar sesión</h4>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email"
                 class="form-control" 
                 id="email" 
                 placeholder="Correo electrónico"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 ></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="password" 
                class="form-control"
                id="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                ></input>
            </div>
            <div className="text-center m-3">
                <h6>¿Olvidaste tu contraseña?</h6>
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
            {email === userweb.email && password === userweb.user_password ? (<Link to="/DashboardPage"><button class="btn btn-primary " type="button"  >Entrar</button></Link>):(<button class="btn btn-primary " onClick={handleLogin} type="button"  >Entrar</button>)}
            
            
            </div>
            <div className="text-center m-3">
                <h6>¿No tiene una cuenta? <Link to="/Register">Crear cuenta</Link> </h6>
            </div>
        </div>
    )
}
export default Login;