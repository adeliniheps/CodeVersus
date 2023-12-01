import styles from '../styles/css/Cab.module.css';

function Cab() {
    return (
        <div className={styles.bory}>
            <nav className={`navbar navbar-expand-lg bg-body-tertiar ${styles.Cab}`}>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link href="/Home"><img src="logo.png" className={styles.logo} /></Link>
                            <li className={`nav-item ${styles.item}`}>
                                <Link className={`nav-link ${styles.link}`} href="#">Sobre</Link>
                            </li>
                            <li className={`nav-item ${styles.item}`}>
                                <Link className={`nav-link ${styles.link}`} href="#">Dicas✨</Link>
                            </li>
                            <li className={`nav-item dropdown ${styles.item}`}>
                                <Link className={`nav-link dropdown-toggle ${styles.link}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Linguagens
                                </Link>
                                <ul className={`dropdown-menu ${styles.dropmenu}`}>
                                    <li><Link className={`dropdown-item ${styles.drop}`} href="/Python" >Python</Link></li>
                                    <li><Link className={`dropdown-item ${styles.drop}`} href="/Java">Java Script</Link></li>
                                </ul>
                            </li>
                            <li className={`nav-item ${styles.item}`}>
                                <Link class="navbar-brand" href="#"> <svg className={styles.User} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> </Link>
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