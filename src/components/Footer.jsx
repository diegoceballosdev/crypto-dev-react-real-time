export const Footer = () => {
    return (
        <footer className="footer">
            <p>Datos proporcionados por la API{" "}
                <a
                    href="https://www.coingecko.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#add8e6" }}>
                    CoinGecko
                </a>
                {" "}• Actualizado cada 60 segundos
            </p>
        </footer>
    );
}