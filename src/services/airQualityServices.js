import LondonAirAPI from '../config/api';

export async function getAirQuality() {
	const response = await LondonAirAPI.get('ENDPOINT')
    console.log(response)
    return AirQuality
	// return Promise.resolve(jokes)
}