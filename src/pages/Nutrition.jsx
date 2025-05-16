function Nutrition() {
  return (
    <main className="container px-4 py-4 flex-grow-1">
     <section>
        <h2>Харчування тапірів</h2>
        <p>Тапіри — це травоїдні ссавці, які переважно харчуються: </p>
        <ul className="list-group">
                <li className="list-group-item">
                <strong>Листям</strong>
                </li>
                <li className="list-group-item">
                  Молодими пагонами
                </li>
                <li className="list-group-item">
                 Фруктами
                </li>
                <li className="list-group-item">
                  Ягодами
                </li>
                <li className="list-group-item">
                  Водними рослинами
                </li>
              </ul>
              <br/>
        <p>Листя є основою раціону тапірів. Завдяки своїм сильним щелепам, тварини легко пережовують навіть грубі рослинні волокна. У тропічних лісах вони споживають велику кількість рослинного матеріалу щодня.</p>
      </section>
      <aside class="bg-light p-3 my-4 border-start border-3 border-success">
        <h5>Цікаво!</h5>
        <p>Дорослий тапір щодня споживає до 40 кілограмів рослинної їжі, зокрема великі об’єми свіжого листя.</p>
      </aside>
    </main>
  );
}

export default Nutrition;