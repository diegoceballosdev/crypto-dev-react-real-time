import { useState, useEffect } from "react";
import { fetchCryptos } from "../api/coinGecko";
import { CryptoCard } from "../components/CryptoCard";
import { Footer } from "../components/Footer";

export const Home = () => {

    const [cryptoList, setCryptoList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState("grid");
    const [sortBy, setSortBy] = useState("market_cap_rank");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Carga inicial de datos :
        fetchCryptoData();

        // Los datos se actualizan en tiempo real cada 30 segundos:
        const interval = setInterval(fetchCryptoData, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        filterAndSort();
    }, [sortBy, cryptoList, searchTerm]);

    const fetchCryptoData = async () => {
        try {
            const data = await fetchCryptos();
            setCryptoList(data);
        } catch (error) {
            console.error("Error en fetch de crytos:", error);
        } finally {
            setIsLoading(false);
        }

    }

    const filterAndSort = () => {
        let filtered = cryptoList.filter(crypto =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filtered.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                case "price_asc":
                    return a.current_price - b.current_price;
                case "price_desc":
                    return b.current_price - a.current_price;
                case "change":
                    return a.price_change_percentage_24h - b.price_change_percentage_24h;
                case "market_cap":
                    return a.market_cap - b.market_cap;
                default:
                    return a.market_cap_rank - b.market_cap_rank;
            }
        });

        setFilteredList(filtered);
    }

    return (
        <div className="app">

            <header className="header">
                <div className="header-content">
                    <div className="logo-section">
                        <h1>🚀 Crypto Dev</h1>
                        <p>Cotización y datos del mercado de criptomonedas en tiempo real</p>
                    </div>
                    <div className="search-section">
                        <input type="text" placeholder="Buscar cryptos..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
            </header>

            <div className="controls">

                {/* FILTRO */}
                <div className="filter-group">
                    <label>Ordenar por:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="market_cap_rank">Ranking</option>
                        <option value="name">Nombre</option>
                        <option value="price_asc">Precio mas bajo</option>
                        <option value="price_desc">Precio mas alto</option>
                        <option value="change">Cambio 24hs</option>
                        <option value="market_cap">Capitalización</option>
                    </select>
                </div>

                {/* GRID - LIST */}
                <div className="view-toggle">
                    <button className={viewMode === "grid" ? "active" : ""}
                        onClick={() => setViewMode("grid")}>
                        Grilla
                    </button>
                    <button className={viewMode === "list" ? "active" : ""}
                        onClick={() => setViewMode("list")}>
                        Lista
                    </button>
                </div>

            </div>

            {isLoading ?
                (<div className="loading">
                    <div className="spinner" />
                    <p>Cargando datos...</p>
                </div>
                ) : (
                    <div className={`crypto-container ${viewMode}`}>
                        {
                            filteredList.map((crypto, key) => (
                                <CryptoCard crypto={crypto} key={key} />
                            ))
                        }
                    </div>
                )
            }

            <Footer />
        </div>
    );
}