const printCards = () => {
    for (const card of CONFIG.cards) {
        let item = `
        <a
          href="${card.link}"
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          class="buttons__link  card buttonLink__link-${card.id}"
        >
          <i class="buttonLink__icon" icon-name="${card.icon}"></i>
        </a>
    `;

        const position = "beforeend";

        buttonsContainer.insertAdjacentHTML(position, item);
    }
};

printCards();
