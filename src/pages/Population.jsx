import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Population() {
  return (
    <main className="container px-4 py-4">
      <div className="row">
        <article>
      <h2>Ареал тапірів</h2>
      <p>Різні види тапірів мешкають у тропічних лісах Південної та Центральної Америки, а також Південно-Східної Азії.</p>

      <div class="accordion" id="tapirHabitat">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingAmerica">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAmerica" aria-expanded="true" aria-controls="collapseAmerica">
              🌎 Америка
            </button>
          </h2>
          <div id="collapseAmerica" class="accordion-collapse collapse show" aria-labelledby="headingAmerica" data-bs-parent="#tapirHabitat">
            <div class="accordion-body">
              <strong>Центральна Америка:</strong>
              <ul>
                <li>Мексика</li>
                <li>Гватемала</li>
                <li>Коста-Рика</li>
                <li>Панама</li>
              </ul>
              <strong>Південна Америка:</strong>
              <ul>
                <li>Бразилія</li>
                <li>Перу</li>
                <li>Колумбія</li>
                <li>Венесуела</li>
                <li>Еквадор</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingAsia">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAsia" aria-expanded="false" aria-controls="collapseAsia">
              🌏 Азія
            </button>
          </h2>
          <div id="collapseAsia" class="accordion-collapse collapse" aria-labelledby="headingAsia" data-bs-parent="#tapirHabitat">
            <div class="accordion-body">
              <strong>Південно-Східна Азія:</strong>
              <ul>
                <li>Малайзія</li>
                <li>Таїланд</li>
                <li>Індонезія</li>
                <li>М'янма</li>
              </ul>
              <p>Тут мешкає <strong>малайський тапір</strong> — найбільший вид, із характерним чорно-білим забарвленням.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
      </div>
    </main>
  );
}

export default Population;