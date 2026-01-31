/*
    CoinGecko API - LIMITES PARA USUARIOS GRATUITOS:

    - 30 llamadas por minuto (Se reenicia el contador cada minuto)
    - 10.0000 llamadas al mes (Se bloquea la IP si se excede)
*/

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptos = async () => {

    const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

    if (!response.ok) {
        throw new Error("Fallo al obtener los datos de las criptomonedas");
    }

    return response.json();
};

export const fetchCoinData = async (id) => {

    const response = await fetch(`${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);

    if (!response.ok) {
        throw new Error("Fallo al obtener los datos de la criptomoneda seleccionada");
    }

    return response.json();
};

export const fetchChartData = async (id) => {
    const response = await fetch(
        `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch chart data");
    }
    return response.json();
};