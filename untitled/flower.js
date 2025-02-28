
let rnd = (l,u) => Math.floor(Math.random()*(u-l)+l);

window.onload = function() {
    const scene = document.querySelector("a-scene");

    // Add multiple flowers to the scene
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement("a-entity");
        flower.setAttribute("gltf-model", "#flower");
        flower.setAttribute("position", {
            x: rnd(-10, 10),
            y: 0,
            z: rnd(-10, 10)
        });
        flower.setAttribute("scale", "0.5 0.5 0.5");
        flower.setAttribute("rotation", {
            x: 0,
            y: rnd(0, 360),
            z: 0
        });
        scene.appendChild(flower);
    }
}
