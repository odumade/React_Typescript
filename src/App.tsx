import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';


function App(): JSX.Element {

  const personName = {
    firstname: 'Onyekachi',
    lastname: 'Stanley'
  }

  const nameList = [
    {
      first: 'Seun',
      last: 'Taiwo'
    },
    {
      first: 'Trust',
      last: 'Okerezi'
    },
    {
      first: 'Ganiyat',
      last: 'Adigboluja'
    }
  ]


  return (
    <div className="App">
      <Greet name='kachilala' messageCount={10} isLoggedin={false} />
      <Person name={personName}  />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
