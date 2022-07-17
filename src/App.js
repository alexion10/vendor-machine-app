import './App.css';
import { Card } from './Dashboard/Card';

function App() {
  const userInfo = {
    name: 'Gigi',
    Age: 18,
    profession: 'student'
  }
  
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
