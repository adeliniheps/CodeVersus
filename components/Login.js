import axios from 'axios';
import styles from '../styles/css/Login.module.css';
import { useState } from 'react';





function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    const criaUser = () => {
        axios.post("http://127.0.0.1:5000/usuarios", {

            "nome": nome,
            "email": email,
            "senha": senha

        }).then(() => { alert("Usuario criado com sucesso") 
        window.location.assign("http://www.devmedia.com.br");})


    }


    //=================================================================================================
    return (
        <div className={styles.Bory}>
            <div className={`container ${styles.container}`}>

                <form>
                    <div class="mb-3">
                        <h4> Novo Login</h4>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Úsuario</label>
                        <input placeholder="@" class="form-control" onChange={(e) => { setNome(e.target.value) }} />
                    </div>


                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => { setSenha(e.target.value) }} />
                    </div>
                    <div class="mb-3 form-check">
                        <input className={`form-check-input ${styles.check}`} type="checkbox" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Ver senha</label>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.botao}`} onClick={(criaUser)} >Enviar</button>
                </form>
            </div>

            <div className={`container ${styles.container} ${styles.box}`}>
                <form>
                    <div class="mb-3">
                        <h4> Login</h4>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <a href='https://www.freecodecamp.org/'></a><button type="submit" className={`btn btn-primary ${styles.botao}`}>Logar</button>
                </form>
            </div>
        </div>



    );
}
export default Login;