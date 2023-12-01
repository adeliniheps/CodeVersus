import styles from '../styles/css/Cab.module.css';

function Cab() {
    return (
        <div className={styles.bory}>
            <nav className={`navbar navbar-expand-lg bg-body-tertiar ${styles.Cab}`}>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <a href="/Home"><img src="logo.png" className={styles.logo} /></a>
                            <li className={`nav-item ${styles.item}`}>
                                <a className={`nav-link ${styles.link}`} href="#">Sobre</a>
                            </li>
                            <li className={`nav-item ${styles.item}`}>
                                <a className={`nav-link ${styles.link}`} href="#">Dicas✨</a>
                            </li>
                            <li className={`nav-item dropdown ${styles.item}`}>
                                <a className={`nav-link dropdown-toggle ${styles.link}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Linguagens
                                </a>
                                <ul className={`dropdown-menu ${styles.dropmenu}`}>
                                    <li><a className={`dropdown-item ${styles.drop}`} href="/Python" >Python</a></li>
                                    <li><a className={`dropdown-item ${styles.drop}`} href="/Java">Java Script</a></li>
                                </ul>
                            </li>
                            <li className={`nav-item ${styles.item}`}>
                                <a class="navbar-brand" href="#"> <svg className={styles.User} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className={styles.cab2}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md">
                            <h6 className={styles.texto}> 🪐 Desvende o mundo do código com nossos recursos especializados e torne-se o mestre da programação.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Cab;