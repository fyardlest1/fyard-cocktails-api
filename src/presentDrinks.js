import fetchDrinks from './fetchDrinks.js';

const showDrinks = async (URL) => {
    const data = await fetchDrinks(URL)
    console.log(data)
    // fetch drinks
    // display drinks
}

export default showDrinks