import { useEffect } from "react"
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { Pokemon, LoadingPokemon } from "./"

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter()    

    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    useEffect(() =>{
        data
    }, [counter])

    return (
        <div className="container text-center md">
            <div className="row justify-content-md-center" id="pokedex_div">
                <div className="col-10 mt-4 mb-4" id="pokedex_title">
                    <h1 className="mb-0">POKEDEX</h1>
                </div>
                
                <div className="col-10" id="pokedex_input">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Number"
                        name="pokemon"
                    />
                    <button className="btn btn-danger mt-2" >Find</button>
                    <button className="btn btn-primary" disabled={isLoading} onClick={() => decrement()}>Previous</button>
                    <button className="btn btn-primary" disabled={isLoading} onClick={reset}># 1</button>
                    <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>Next</button>
                </div>

                <div className="col-10 mt-4 mb-4">
                {
                    isLoading ? <LoadingPokemon /> : <Pokemon data={data}/>
                }
                </div>
            </div>
        </div>
    )
}
