export default function Index() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', backgroundColor: '#f0f8ff' }}>
      {/* Заголовок */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ 
          color: '#0066cc', 
          fontSize: '36px', 
          textDecoration: 'underline',
          marginBottom: '10px'
        }}>
          🎭 АЛЕКСАНДР СЕРГЕЕВИЧ ПУШКИН 📚
        </h1>
        <p style={{ fontSize: '18px', color: '#333', fontStyle: 'italic' }}>
          Великий русский поэт и писатель
        </p>
      </div>

      {/* Основная информация */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        border: '3px solid #0066cc',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#cc0066', fontSize: '24px' }}>📖 Основные факты:</h2>
        <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
          <li><strong>Годы жизни:</strong> 1799 - 1837 гг.</li>
          <li><strong>Место рождения:</strong> Москва</li>
          <li><strong>Образование:</strong> Царскосельский лицей</li>
          <li><strong>Известен как:</strong> "Солнце русской поэзии"</li>
          <li><strong>Самые известные произведения:</strong> "Евгений Онегин", "Капитанская дочка"</li>
        </ul>
      </div>

      {/* Картинка */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img 
          src="/img/f6000e1f-18d0-4d79-9758-1ae4ad5e2c7f.jpg" 
          alt="Портрет А.С. Пушкина"
          style={{ 
            width: '300px', 
            height: '400px', 
            objectFit: 'cover',
            border: '5px solid #ffcc00',
            borderRadius: '15px'
          }}
        />
        <p style={{ fontSize: '14px', fontStyle: 'italic', marginTop: '10px' }}>
          Портрет великого поэта
        </p>
      </div>

      {/* Стихи */}
      <div style={{ 
        backgroundColor: '#ffffcc', 
        padding: '20px', 
        border: '2px dashed #ff6600',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#ff6600', fontSize: '24px' }}>🌟 Популярные стихотворения:</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#0066cc' }}>❤️ "Я вас любил"</h3>
          <div style={{ 
            fontStyle: 'italic', 
            fontSize: '16px', 
            backgroundColor: 'white',
            padding: '15px',
            borderLeft: '4px solid #0066cc',
            margin: '10px 0'
          }}>
            Я вас любил: любовь ещё, быть может,<br/>
            В душе моей угасла не совсем;<br/>
            Но пусть она вас больше не тревожит;<br/>
            Я не хочу печалить вас ничем.
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#0066cc' }}>☀️ "Зимнее утро"</h3>
          <div style={{ 
            fontStyle: 'italic', 
            fontSize: '16px', 
            backgroundColor: 'white',
            padding: '15px',
            borderLeft: '4px solid #0066cc',
            margin: '10px 0'
          }}>
            Мороз и солнце; день чудесный!<br/>
            Ещё ты дремлешь, друг прелестный —<br/>
            Пора, красавица, проснись:<br/>
            Открой сомкнуты негой взоры...
          </div>
        </div>
      </div>

      {/* Интересные факты */}
      <div style={{ 
        backgroundColor: '#e6ffe6', 
        padding: '20px', 
        border: '3px solid #009900',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#009900', fontSize: '24px' }}>🤔 Интересные факты:</h2>
        <ol style={{ fontSize: '16px', lineHeight: '1.6' }}>
          <li>Пушкин знал французский язык лучше русского в детстве</li>
          <li>Он был очень вспыльчивым и участвовал в 29 дуэлях</li>
          <li>Пушкин создал современный русский литературный язык</li>
          <li>Его прадедом был Абрам Петрович Ганнибал - африканец</li>
          <li>За свою жизнь написал более 800 стихотворений</li>
        </ol>
      </div>

      {/* Произведения список */}
      <div style={{ 
        backgroundColor: '#fff0f5', 
        padding: '20px', 
        border: '2px solid #ff1493',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#ff1493', fontSize: '24px' }}>📝 Главные произведения:</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <strong>Поэмы:</strong><br/>
            • Руслан и Людмила<br/>
            • Кавказский пленник<br/>
            • Цыганы<br/>
            • Полтава
          </div>
          <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <strong>Романы:</strong><br/>
            • Евгений Онегин<br/>
            • Дубровский<br/>
            • Капитанская дочка
          </div>
          <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <strong>Сказки:</strong><br/>
            • О рыбаке и рыбке<br/>
            • О царе Салтане<br/>
            • О мёртвой царевне<br/>
            • О золотом петушке
          </div>
        </div>
      </div>

      {/* Заключение */}
      <div style={{ 
        textAlign: 'center', 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        border: '2px solid #666',
        borderRadius: '10px',
        fontSize: '18px'
      }}>
        <h2 style={{ color: '#333' }}>🏆 Вывод</h2>
        <p style={{ fontWeight: 'bold', color: '#0066cc' }}>
          Александр Сергеевич Пушкин - это самый важный поэт в русской литературе! 
          Его произведения читают во всём мире. Он создал основу для всей современной русской литературы.
        </p>
        <p style={{ fontSize: '16px', marginTop: '15px' }}>
          🌟 "Пушкин - наше всё!" - В.Г. Белинский 🌟
        </p>
      </div>

      {/* Подпись автора */}
      <div style={{ textAlign: 'right', marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>Проект по литературе</p>
        <p>Ученик 9 класса</p>
        <p>2024 год 📅</p>
      </div>
    </div>
  );
}