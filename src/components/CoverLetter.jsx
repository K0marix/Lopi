import React from 'react';
import './CoverLetter.css';

function CoverLetter() {
  return (
    <section className="cover-letter">
      <div className="letter-container">
        <h2>Уважаемые представители компании,</h2>
        <p>
          меня зовут Кончаков Максим — специалист в области информационных технологий с опытом разработки, тестирования и внедрения программных решений.
          Я внимательно слежу за трендами в сфере IT и всегда стремлюсь к профессиональному росту.
        </p>
        <p>
          За время своей карьеры я участвовал в реализации проектов различной сложности, начиная от разработки внутренних сервисов и заканчивая масштабными системами.
          Мои ключевые навыки включают: Python, SQL, DevOps, управление проектами.
        </p>
        <p>
          Я уверен, что смогу внести реальный вклад в развитие вашей компании и стать активным членом команды.
          Более подробно обо мне, моем опыте и компетенциях вы можете узнать из представленного резюме.
        </p>
        <p>
          С нетерпением жду возможности обсудить потенциальное сотрудничество.
        </p>
        <p className="signature">
          С уважением,<br />
          Кончаков Максим
        </p>
      </div>
    </section>
  );
}

export default CoverLetter;