import "./Card.scss";

export const Card = (photo) => {
    const card = document.createElement("article");
    card.className = "pin-card";

    const imgUrl = photo.urls?.regular || "";
    const altDesc = photo.alt_description || "Foto de Unsplash";
    const userImg = photo.user?.profile_image?.medium || "";
    const userName = photo.user?.name || "Autor desconocido";
    const postUrl = photo.links?.html || "#";
    const likes = photo.likes || 0;

    card.innerHTML = `
    <div class="image-container">
        <img src="${imgUrl}" alt="${altDesc}" loading="lazy" />
        <a href="${postUrl}" target="_blank" rel="noopener noreferrer" class="visit-btn">Visitar</a>
    </div>
    <div class="card-footer">
        <div class="user-info">
            <img src="${userImg}" alt="${userName}" />
            <span title="${userName}">${userName}</span>
        </div>
        <div class="likes">❤️ ${likes}</div>
    </div>
    `;

    return card;
};
