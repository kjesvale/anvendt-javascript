export function handleFormSubmit() {
    const form = document.getElementById("pokemon-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new URLSearchParams(new FormData(form));

        registerPokemon(formData);
    });
}

async function registerPokemon(formData) {
    const response = await fetch("/api/pokemon", {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });

    if (response.ok) {
        window.alert(await response.text());
        document.getElementById("pokemon-dialog").close();
    }
}
