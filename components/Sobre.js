import styles from '../styles/css/Sobre.module.css'

function Sobre() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <div className={`col-5 ${styles.box}`}>
        <div className={`card ${styles.card}`}>
            <img src="/ade.jpeg" className={`card-img-top img-fluid ${styles.img}`} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Emily Adelini</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>

        <div className={`col-5 ${styles.box}`}>
          <div className={`card ${styles.card}`}>
            <img src="/mari.jpg" className={`card-img-top img-fluid ${styles.img}`} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Sobre;
