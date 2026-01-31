# 🪙 Crypto Dev
Una aplicación web moderna para el seguimiento de criptomonedas en tiempo real. Este proyecto permite visualizar, filtrar y analizar el mercado cripto utilizando datos reales, con una interfaz limpia y responsiva.

## 🔗 Live Demo
🚀 **Mira el proyecto funcionando aquí:** [https://cryptodevsalta.vercel.app/](https://cryptodevsalta.vercel.app/)

---

## 🚀 Características Principales

### 🏠 Home (Panel Principal)
* **Listado de Criptomonedas:** Visualización de las principales monedas del mercado traídas desde la API de CoinGecko.
* **Buscador en Tiempo Real:** Filtrado instantáneo por nombre o símbolo de la moneda.
* **Ordenamiento Dinámico:** Capacidad de ordenar la lista por diferentes criterios (Precio, Market Cap, cambio en 24h, etc.).
* **Vistas Alternables:** Botón para cambiar la disposición de los elementos entre **Grid (Cuadrícula)** y **List (Lista)** según la preferencia del usuario.

### 📊 Página de Detalle (Coin Detail)
* **Información Profunda:** Visualización de datos clave como Market Cap, Volumen, Suministro Circulante y Rangos de precio.
* **Gráfico Interactivo:** Chart en tiempo real que muestra la variación del precio en los últimos **7 días**.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido priorizando el rendimiento y la experiencia de desarrollo moderna:

* **React** (Librería de UI)
* **Vite** (Build tool y entorno de desarrollo)
* **JavaScript** (ES6+)
* **CSS** (Estilizado y diseño responsivo)
* **CoinGecko API** (Fuente de datos)

---

## ⚠️ Nota Importante sobre la API y Actualizaciones

Este proyecto utiliza la **versión gratuita (Demo Tier)** de la API de CoinGecko.

**¿Por qué la actualización es cada 60 segundos?**
La API pública de CoinGecko tiene un límite de velocidad (*Rate Limit*) de aproximadamente 10-30 llamadas por minuto dependiendo del tráfico global. Para garantizar la estabilidad de la aplicación y evitar errores `HTTP 429 (Too Many Requests)`, he configurado la actualización automática de datos (`polling`) en un intervalo seguro de **60 segundos**.

> **Nota para desarrolladores:**
> La frecuencia de actualización es totalmente configurable en el código. Si se contara con una **API Key de pago (Pro/Enterprise)**, este intervalo podría reducirse a tiempo real (ej. 3 o 5 segundos) cambiando simplemente una línea de código en el `setInterval` del hook `useEffect`.

---

Gracias por leer ❤️.