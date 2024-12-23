// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/Loaders/GLTFLoader.js";

// const scene = new THREE.Scene();
// const scene = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// let object;
// let controls;
// let objToRender='eye'



document.addEventListener("scroll", function() {
    const content = document.querySelector(".content");
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
        content.classList.add("visible");
    }
});