import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    let houses = AppState.houses
    let content = ''
    houses.forEach(home => content += home.houseTemplate)
    setHTML('houses', content)
}

export class HousesController {
    constructor() {
        console.log('this is the houses controller')
        _drawHouses()
        AppState.on('houses', _drawHouses)
    }
}