import './Academico.css';

export default function Academico() {
  return (
    <section className="academic" id="formacao">
      <h2 className="academic__title">Academic education</h2>
      <div className="academic__courses">
        <div className="academic__courses__box">
          <ul className="academic__courses__list">

            <li className="academic__courses__item__img"><img src="assets/Fatec-sorocaba.png" alt="" /></li>
            <li className="academic__courses__item__title">
              <h4>Analysis and systems development</h4>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>2018 - FATEC Sorocaba</p>
            </li>
          </ul>
        </div>
        <div className="academic__courses__box">
          <ul className="academic__courses__list">

            <li className="academic__courses__item__img"><img src="assets/cruzeiro-do-sul.png" alt="" /></li>
            <li className="academic__courses__item__title">
              <h4>R2 - Mathematics</h4>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>2020 - Cruzeiro do Sul</p>
            </li>
          </ul>
        </div>

        <div className="academic__courses__box">
          <ul className="academic__courses__list">

            <li className="academic__courses__item__img"><img src="assets/cruzeiro-do-sul.png" alt="" /></li>
            <li className="academic__courses__item__title">
              <h4>Accounting Sciences</h4>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>Ongoing - Cruzeiro do Sul</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}