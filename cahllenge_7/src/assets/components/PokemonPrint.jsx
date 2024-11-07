
export const PokemonPrint = (pokemon) => {

    return(
        <>
        <div className = "pokemon">
        <h3 className = "pokemonName">{pokemon.name}</h3>
        <p className = "pokemonUrl">{pokemon.url} </p>
        </div>
        </>
    )
}