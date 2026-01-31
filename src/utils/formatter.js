//Devue la el precio formateado en USD en string:
export const formatPrice = (price) => {

    // Mostrar hasta 8 decimales para precios muy bajos:
    if (price < 0.01) return price.toFixed(8);

    // Convierte a formato moneda USD para precios mayores o iguales a 0.01
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

};

// Devuelve la capitalización de mercado formateada en string:
export const formatMarketCap = (marketCap) => {

    //La función evalúa el número (marketCap) de mayor a menor.
    if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(2)}T`; //Nivel de billones
    if (marketCap >= 1e9) return `${(marketCap / 1e9).toFixed(2)}B`; //Nivel de miles de millones
    if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(2)}M`; //Nivel de millones
    if (marketCap >= 1e3) return `${(marketCap / 1e3).toFixed(2)}K`; //Nivel de miles
    return marketCap.toLocaleString();

    //En el mundo cripto/financiero global, se suele aceptar T y B
    //Pero técnicamente "B(billion)/T(trillion)" no son tecnicamente correctos en español.
};