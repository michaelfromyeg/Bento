let darkTheme = localStorage.getItem("darkTheme");
const themeToggle = document.querySelector("#themeButton");
const bodyBackground = document.getElementById("#body");

const enableDark = () => {
    document.body.classList.add("darktheme");
    localStorage.setItem("darkTheme", "enabled");
    themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`;
    lucide.createIcons();
};

const disableDark = () => {
    document.body.classList.remove("darktheme");
    localStorage.setItem("darkTheme", null);
    themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`;
    lucide.createIcons();
};

if (darkTheme === "enabled") {
    document.body.offsetHeight;
    document.body.classList.add("no-transition");

    enableDark();

    document.body.offsetHeight;
    document.body.classList.remove("no-transition");
} else {
    disableDark();
}

themeToggle.addEventListener("click", () => {
    document.body.offsetHeight;
    document.body.classList.add("no-transition");

    darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme !== "enabled") {
        enableDark();
    } else {
        disableDark();
    }

    document.body.offsetHeight;
    document.body.classList.remove("no-transition");
});

if (CONFIG.imageBackground) {
    document.body.classList.add("withImageBackground");
}
