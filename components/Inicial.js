import styles from '../styles/css/Inicial.module.css';

function Inicial() {
    return (
        <div className={styles.Bory}>
            <div className={`container-fluid ${styles.container}`}>
                <div className="row">
                    <div className={` col-md-5 ${styles}`}>
                        <div className={` ${styles.box}`}>
                            <h4>oi</h4>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget</p>
                        </div>
                        <button type="button" className={`btn btn-dark ${styles.bt}`}>🚀 ver</button>

                    </div>

                    <div className={` col-md-7 ${styles}`}>
                        <img src="lp.png" alt="Logo" className={styles.img} />
                    </div>
                </div>
                <div className="row">

                    <div className={` col-md-5 ${styles.top} `}>
                        <div className={` ${styles.box} ${styles.box2}`}>
                            <h4>oi</h4>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget</p>
                        </div>
                        <button type="button" className={`btn btn-dark ${styles.bt2}`}>🚀 Ver</button>

                    </div>
                </div>

                <div className="row">
                    <div className={` col-md-8 ${styles.box3}`}>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget</p>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget</p>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget</p>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eget</p>
                    </div>

                    <div className={` col-md-4 ${styles}`}>
                        <img src="comp.png" alt="Logo" className={styles.img2} />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Inicial;