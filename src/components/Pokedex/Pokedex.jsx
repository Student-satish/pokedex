
import './Pokedex.css';
import Search from '../Search/Search.jsx'

import PokemonList from '../PokemonList/PokemonList.jsx'
function Pokedex() {
    return (
        <div className='pokedex-wrapper'>
        <h1>POKEDEX</h1>
        <Search />
        <PokemonList />
        </div>
    )
}
export default Pokedex;