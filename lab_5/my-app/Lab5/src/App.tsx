import Licznik from './components/efekty/Licznik';
import Odliczanie from './components/efekty/Odliczanie';
import Tytul from './components/efekty/Tytul';
import Formularz from './components/formularze/Formularz';
import Aktualizacja from './components/inne/Aktualizacja';
import Ternary from './components/inne/Ternary';
import Koszyk from './components/koszyk/Koszyk';
import NowyKoszyk from './components/koszyk/NowyKoszyk';
import NowyLicznik from './components/liczniki/NowyLicznik';
import Komentarze from './components/produkty/Komentarze'
import Studenci from './components/studenci/Studentci';
import StudentManager from './components/studenci/StudentManager';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div>
        <h1>Zadanie 1.</h1>
        <Koszyk />
        <NowyKoszyk />
      </div>
      <hr style={{ margin: '20px 0', border: '3px solid Black', width: '100%' }} />
      <div>
          <h1>Zadanie 2.</h1>
          <NowyLicznik />
      </div>
      <hr style={{ margin: '20px 0', border: '3px solid Black', width: '100%' }} />
      <div>
          <h1>Zadanie 3.</h1>
          <Formularz />
      </div>
      <hr style={{ margin: '20px 0', border: '3px solid Black', width: '100%' }} />
      <div>
          <h1>Zadanie 4.</h1>
          <Ternary />
          <Aktualizacja/>
      </div>
      <hr style={{ margin: '20px 0', border: '3px solid Black', width: '100%' }} />
      <div>
          <h1>Zadanie 5.</h1>
          <Studenci />
          <StudentManager/>
      </div>
      <hr style={{ margin: '20px 0', border: '3px solid Black', width: '100%' }} />
      <div>
          <h1>Zadanie 6.</h1>
          <Licznik />
          <Tytul />
          <Odliczanie />
      </div>
      <hr style={{ margin: '20px 0', border: '3px solid Black', width: '100%' }} />
      <div>
          <h1>Zadanie 7.</h1>
          <Komentarze />
      </div>
    </div>
  );
}

export default App;
