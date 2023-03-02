
export const Pokemon = ({data}) => {

    const color = (type) => {
        let colorType = ''
        switch(type) {
            case 'normal':
                colorType = '#A8A878'
                break;
            case 'fire':
                colorType = '#F08030'
                break;
            case 'water':
                colorType = '#6890F0'
                break;
            case 'grass':
                colorType = '#78C850'
                break;
            case 'electric':
                colorType = '#F8D030'
                break;
            case 'ice':
                colorType = '#98D8D8'
                break;
            case 'fighting':
                colorType = '#C03028'
                break;
            case 'poison':
                colorType = '#A040A0'
                break;
            case 'ground':
                colorType = '#E0C068'
                break;
            case 'flying':
                colorType = '#A890F0'
                break;
            case 'psychic':
                colorType = '#F85888'
                break;
            case 'bug':
                colorType = '#A8B820'
                break;
            case 'rock':
                colorType = '#B8A038'
                break;
            case 'ghost':
                colorType = '#705898'
                break;
            case 'dark':
                colorType = '#705848'
                break;
            case 'dragon':
                colorType = '#7038F8'
                break;
            case 'steel':
                colorType = '#B8B8D0'
                break;
            case 'fairy':
                colorType = '#F0B6BC'
                break;
        }
        return colorType
    }

    return (
        <div className="card text-center" id="pokedex_card">
            <div className="card-header" id="pokedex_card_title">
                <h3 className="mb-0">INFO</h3>
            </div>
            <div className="card-body" id="pokedex_card_body">
                <h5 className="card-title">#0{data.id} {data.forms[0].name}</h5>
                <img src={data.sprites.other['official-artwork'].front_default}></img>
                <br />
                <img src={data.sprites.front_default}></img>
                <img src={data.sprites.back_default}></img>
            </div>
            <div className="card-footer text-muted" id="pokedex_card_footer">
                <ul className="list-group list-group-horizontal justify-content-md-center">
                    <li className="list-group-item" id="class_type" style={{backgroundColor: color(data.types[0].type.name)}}><b>{data.types[0].type.name.toUpperCase()}</b></li>
                </ul>
            </div>
        </div>
    )
}
