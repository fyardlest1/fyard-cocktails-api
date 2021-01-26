import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js'

const showDrinks = async (URL) => {
    const data = await fetchDrinks(URL)

    console.log(data)
    // fetch drinks
    const section = await displayDrinks(data)
    // display drinks
}

export default showDrinks