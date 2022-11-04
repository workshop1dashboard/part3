if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../serviceWorker.js")
        .then((reg) => {
            console.log("Enregistrement réussi");
        }).catch((error) => {
        console.log('erreur: '+error);
    })
}
