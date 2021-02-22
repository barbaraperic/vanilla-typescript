// import * as React from "react";


// interface PokemonProps {
//   url: string;
// }

// interface PokemonState {
//   pokemon: {
//     name: string;
//     sprites: {other: {dream_world: {front_default: string}}}
//   } | null
// }

// class Pokemon extends React.Component<PokemonProps, PokemonState> {
//   state: PokemonState = { pokemon: null }

//   getPokemon = async () => {
//     const response = await fetch(this.props.url)
//     const data: PokemonState["pokemon"] = await response.json()
//     this.setState({ pokemon: data })
//   }

//   componentDidMount() {
//     this.getPokemon()
//   }

//   render() {
//     if (!this.state.pokemon) return null;
//     return (
//       <li className="pokemon">
//          <img
//           alt={this.state.pokemon.name}
//           src={this.state.pokemon.sprites.other.dream_world.front_default}
//         />         
//         <strong>{this.state.pokemon.name}</strong>
//      </li>
//     )
//   }
// }

// interface PokeListState {
//   page_num: number,
//   pokemon_list: {url:string}[] | null
// }

// const PAGE_SIZE = 50;
// export default class PokeList extends React.Component<{}, PokeListState> {
//   state:PokeListState = { page_num: 0, pokemon_list: null };
//   getPokemonList = async () => {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${
//         this.state.page_num * PAGE_SIZE
//       }`
//     );
//     const data: {results: {url:string}[]} = await response.json();
//     this.setState({ pokemon_list: data.results });
//   };
//   componentDidMount() {
//     this.getPokemonList();
//   }
//   componentDidUpdate(prevProps:{}, prevState:PokeListState) {
//     if (prevState.page_num !== this.state.page_num) {
//       this.setState({ pokemon_list: null });
//       this.getPokemonList();
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.page_num >= 1 && (
//           <button
//             onClick={() => {
//               this.setState((state) => ({ page_num: state.page_num - 1 }));
//             }}
//           >
//             Prev
//           </button>
//         )}
//         <button
//           onClick={() => {
//             this.setState((state) => ({ page_num: state.page_num + 1 }));
//           }}
//         >
//           Next
//         </button>
//         <ul>
//           {this.state.pokemon_list?.map((pokemon) => (
//             <Pokemon key={pokemon.url} url={pokemon.url} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
