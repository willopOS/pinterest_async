import "./Header.scss";

export const Header = (onSearch, onReset) => {
    const header = document.createElement("header");
    header.className = "header";

    header.innerHTML = `
        <button class="logo-btn" id="header-logo" title="Volver al inicio">
            <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.1-.1-.95-.2-2.4.04-3.44.22-.93 1.4-5.95 1.4-5.95s-.36-.71-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.4 2.55-5.4 5.18 0 1.03.4 2.13.89 2.73.1.12.11.23.08.35-.1.38-.31 1.27-.35 1.45-.06.22-.19.27-.43.16-1.61-.75-2.61-3.1-2.61-4.99 0-4.06 2.95-7.79 8.51-7.79 4.47 0 7.94 3.19 7.94 7.44 0 4.44-2.8 8.01-6.68 8.01-1.3 0-2.53-.68-2.95-1.48l-.8 3.06c-.29 1.12-1.08 2.52-1.61 3.38 1.13.35 2.33.54 3.57.54 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
        </button>
        
        <div class="nav-links">
            <button class="active">Inicio</button>
            <button>Explorar</button>
            <button>Crear</button>
        </div>

        <div class="search-box">
            <input type="text" id="search-input" placeholder="Buscar inspiración..." autocomplete="off" />
        </div>
        
        <div class="user-icons">
            <button class="icon-btn">🔔</button>
            <button class="icon-btn">💬</button>
            <button class="icon-btn">👤</button>
        </div>
    `;

    const input = header.querySelector("#search-input");
    const logo = header.querySelector("#header-logo");

    // Requisito: Limpiar input tras buscar
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
            onSearch(input.value.trim());
            input.value = "";
        }
    });

    // Requisito: Volver al estado inicial con click en el logo
    logo.addEventListener("click", () => {
        onReset();
    });

    return header;
};
