import { Card } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";
import "./style.scss";

// ACCESS KEY DE UNSPLASH
const ACCESS_KEY = "BJt6xX6C1uONpC5f9V4tuk2e9VZpCWO3UlbR4SvBsM4";
const INITIAL_QUERY = "nature";

const app = document.querySelector("#app");

// Crear contenedor principal
const main = document.createElement("main");
const gallery = document.createElement("section");
gallery.className = "gallery-grid";
main.appendChild(gallery);

// Función que consume la API de Unsplash
async function fetchPhotos(query) {
  gallery.innerHTML = `<p class="empty-msg">Cargando inspiración...</p>`;
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();

    gallery.innerHTML = "";

    if (!data.results || data.results.length === 0) {
      gallery.innerHTML = `<p class="empty-msg">No se encontraron resultados para "${query}". Intenta con otra palabra.</p>`;
      return;
    }

    data.results.forEach((photo) => {
      gallery.appendChild(Card(photo));
    });
  } catch (error) {
    gallery.innerHTML = `<p class="empty-msg">Error al conectar con Unsplash. Revisa tu Access Key o conexión.</p>`;
    console.error(error);
  }
}

// Inyección del Header
const header = Header(
  (searchQuery) => fetchPhotos(searchQuery),
  () => fetchPhotos(INITIAL_QUERY)
);

app.appendChild(header);
app.appendChild(main);

// Petición inicial
fetchPhotos(INITIAL_QUERY);
