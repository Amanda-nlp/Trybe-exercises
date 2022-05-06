import './App.css';
/* import Pokemon from './Pokemon'; */
import data from './data'
import Pokedex from './Pokedex';

function App() {
  return (
    <main >
      <header>Pokedex</header>
      <Pokedex pokemons={data}/>
    </main>
  ); 
}
export default App;
