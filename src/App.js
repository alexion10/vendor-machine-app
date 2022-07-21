import './App.css';
import { Card } from './Dashboard/Card';
import { Products } from './Dashboard/ProductsList';
import { Menu } from './menuInteraction/Counter';

function App() {
  return (
    <div className="App">
      <div className='products'>
        <Products />
        </div>
        <div className='interactionMenu'>
          <p>Menu Interaction</p>
          <Menu />
        </div>
    </div>
  );
}

export default App;
