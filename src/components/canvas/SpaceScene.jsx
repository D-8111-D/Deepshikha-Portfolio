import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

const SpaceScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let renderer;
    let scene;
    let camera;
    let sphereBg;
    let nucleus;
    let stars;
    let animationFrameId;

    const container = containerRef.current;

    const noise3D = createNoise3D();

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      3000,
    );

    camera.position.set(0, 0, 700);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    /* ---------------- LIGHTS ---------------- */

    const ambientLight = new THREE.AmbientLight("#ffffff", 1.2);

    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("#ffffff", 2);

    directionalLight.position.set(100, 100, 200);

    scene.add(directionalLight);

    /* ---------------- TEXTURES ---------------- */

    const loader = new THREE.TextureLoader();

    const textureSphereBg = loader.load("https://i.ibb.co/HC0vxMw/sky2.jpg");

    const textureNucleus = loader.load(
      "https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg",
    );

    const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");

    /* ---------------- BACKGROUND SPACE ---------------- */

    const sphereGeometry = new THREE.SphereGeometry(700, 80, 80);

    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: textureSphereBg,
      side: THREE.BackSide,
    });

    sphereBg = new THREE.Mesh(sphereGeometry, sphereMaterial);

    scene.add(sphereBg);

    /* ---------------- PLANET ---------------- */

    const nucleusGeometry = new THREE.IcosahedronGeometry(70, 20);

    const nucleusMaterial = new THREE.MeshPhongMaterial({
      map: textureNucleus,
      shininess: 20,
    });

    nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);

    // Move planet to top-right
    nucleus.position.set(280, 180, 0);

    scene.add(nucleus);

    /* ---------------- STARS ---------------- */

    const starGeometry = new THREE.BufferGeometry();

    const starVertices = [];

    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 4000;

      const y = (Math.random() - 0.5) * 4000;

      const z = (Math.random() - 0.5) * 4000;

      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3),
    );

    const starMaterial = new THREE.PointsMaterial({
      size: 4,
      map: textureStar,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: "#ffffff",
    });

    stars = new THREE.Points(starGeometry, starMaterial);

    scene.add(stars);

    /* ---------------- ANIMATION ---------------- */

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      /* Planet animation */

      nucleus.rotation.y += 0.008;

      nucleus.rotation.x += 0.003;

      const position = nucleus.geometry.attributes.position;

      for (let i = 0; i < position.count; i++) {
        const vector = new THREE.Vector3().fromBufferAttribute(position, i);

        vector.normalize();

        const distance =
          70 +
          noise3D(
            vector.x + time * 0.3,
            vector.y + time * 0.3,
            vector.z + time * 0.3,
          ) *
            4;

        vector.multiplyScalar(distance);

        position.setXYZ(i, vector.x, vector.y, vector.z);
      }

      position.needsUpdate = true;

      /* Background slow rotation */

      sphereBg.rotation.y += 0.0015;

      stars.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    animate();

    /* ---------------- RESIZE ---------------- */

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", handleResize);

      renderer.dispose();

      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-screen h-screen -z-10 overflow-hidden"
    />
  );
};

const SpaceSceneCanvas = () => {
  return (
    <Suspense fallback={null}>
      <SpaceScene />
    </Suspense>
  );
};

export default SpaceSceneCanvas;

// import { Suspense, useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// // import SimplexNoise from "simplex-noise";
// import { createNoise3D } from "simplex-noise";

// const SpaceScene = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let renderer,
//       scene,
//       camera,
//       sphereBg,
//       nucleus,
//       stars,
//       controls,
//       animationFrameId;

//     const container = containerRef.current;

//     const noise3D = new createNoise3D();

//     const clock = new THREE.Clock();

//     let delta = 0;

//     const blobScale = 3;

//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(
//       55,
//       window.innerWidth / window.innerHeight,
//       0.01,
//       1000,
//     );

//     camera.position.set(0, 0, 350);

//     renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });

//     renderer.setSize(container.clientWidth, container.clientHeight);

//     renderer.setPixelRatio(window.devicePixelRatio);

//     container.appendChild(renderer.domElement);

//     /* Lights */

//     const directionalLight = new THREE.DirectionalLight("#ffffff", 1);

//     directionalLight.position.set(0, 50, -20);

//     scene.add(directionalLight);

//     const ambientLight = new THREE.AmbientLight("#ffffff", 1);

//     ambientLight.position.set(0, 20, 20);

//     scene.add(ambientLight);

//     /* Controls */

//     controls = new OrbitControls(camera, renderer.domElement);

//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 4;
//     controls.enablePan = false;
//     controls.minDistance = 150;
//     controls.maxDistance = 350;

//     /* Textures */

//     const loader = new THREE.TextureLoader();

//     const textureSphereBg = loader.load("https://i.ibb.co/HC0vxMw/sky2.jpg");

//     const textureNucleus = loader.load(
//       "https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg",
//     );

//     const textureStar = loader.load("https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png");

//     const texture1 = loader.load("https://i.ibb.co/F8by6wW/p2-b3gnym.png");

//     const texture2 = loader.load("https://i.ibb.co/yYS2yx5/p3-ttfn70.png");

//     const texture4 = loader.load("https://i.ibb.co/yWfKkHh/p4-avirap.png");

//     /* Nucleus */

//     const nucleusGeometry = new THREE.IcosahedronGeometry(30, 10);

//     const nucleusMaterial = new THREE.MeshPhongMaterial({
//       map: textureNucleus,
//     });

//     nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);

//     scene.add(nucleus);

//     /* Background Sphere */

//     const sphereGeometry = new THREE.SphereGeometry(900, 40, 40);

//     const sphereMaterial = new THREE.MeshBasicMaterial({
//       side: THREE.BackSide,
//       map: textureSphereBg,
//     });

//     sphereBg = new THREE.Mesh(sphereGeometry, sphereMaterial);

//     scene.add(sphereBg);

//     /* Random Sphere Point */

//     const randomPointSphere = (radius) => {
//       const theta = 2 * Math.PI * Math.random();

//       const phi = Math.acos(2 * Math.random() - 1);

//       const x = radius * Math.sin(phi) * Math.cos(theta);

//       const y = radius * Math.sin(phi) * Math.sin(theta);

//       const z = radius * Math.cos(phi);

//       return new THREE.Vector3(x, y, z);
//     };

//     /* Moving Stars */

//     const starVertices = [];

//     for (let i = 0; i < 2000; i++) {
//       const particle = randomPointSphere(800);

//       particle.velocity = THREE.MathUtils.randInt(50, 200);

//       particle.startX = particle.x;
//       particle.startY = particle.y;
//       particle.startZ = particle.z;

//       starVertices.push(particle.x, particle.y, particle.z);
//     }

//     const starsGeometry = new THREE.BufferGeometry();

//     starsGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starVertices, 3),
//     );

//     const starsMaterial = new THREE.PointsMaterial({
//       size: 5,
//       color: "#ffffff",
//       transparent: true,
//       opacity: 0.8,
//       map: textureStar,
//       blending: THREE.AdditiveBlending,
//       depthWrite: false,
//     });

//     stars = new THREE.Points(starsGeometry, starsMaterial);

//     scene.add(stars);

//     /* Fixed Stars */

//     const createStars = (texture, size, total) => {
//       const positions = [];

//       for (let i = 0; i < total; i++) {
//         const particle = randomPointSphere(THREE.MathUtils.randInt(500, 850));

//         positions.push(particle.x, particle.y, particle.z);
//       }

//       const geometry = new THREE.BufferGeometry();

//       geometry.setAttribute(
//         "position",
//         new THREE.Float32BufferAttribute(positions, 3),
//       );

//       const material = new THREE.PointsMaterial({
//         size,
//         map: texture,
//         transparent: true,
//         blending: THREE.AdditiveBlending,
//       });

//       return new THREE.Points(geometry, material);
//     };

//     scene.add(createStars(texture1, 15, 20));

//     scene.add(createStars(texture2, 5, 5));

//     scene.add(createStars(texture4, 7, 5));

//     /* Animation */

//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);

//       delta += clock.getDelta();

//       if (delta < 1 / 60) return;

//       delta %= 1 / 60;

//       nucleus.rotation.y += 0.002;

//       sphereBg.rotation.x += 0.002;
//       sphereBg.rotation.y += 0.002;
//       sphereBg.rotation.z += 0.002;

//       const positions = stars.geometry.attributes.position.array;

//       for (let i = 0; i < positions.length; i += 3) {
//         positions[i] *= 0.995;
//         positions[i + 1] *= 0.995;
//         positions[i + 2] *= 0.995;
//       }

//       stars.geometry.attributes.position.needsUpdate = true;

//       const time = Date.now();

//       const position = nucleus.geometry.attributes.position;

//       for (let i = 0; i < position.count; i++) {
//         const vector = new THREE.Vector3().fromBufferAttribute(position, i);

//         vector.normalize();

//         const distance =
//           30 +
//           noise3D(
//             vector.x + time * 0.0005,
//             vector.y + time * 0.0003,
//             vector.z + time * 0.0008,
//           ) *
//             blobScale;

//         vector.multiplyScalar(distance);

//         position.setXYZ(i, vector.x, vector.y, vector.z);
//       }

//       position.needsUpdate = true;

//       controls.update();

//       renderer.render(scene, camera);
//     };

//     animate();

//     /* Resize */

//     const handleResize = () => {
//       camera.aspect = container.clientWidth / container.clientHeight;

//       camera.updateProjectionMatrix();

//       renderer.setSize(container.clientWidth, container.clientHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrameId);

//       window.removeEventListener("resize", handleResize);

//       renderer.dispose();

//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10"
//     />
//   );
// };

// const SpaceSceneCanvas = () => {
//   return (
//     <Suspense fallback={null}>
//       <SpaceScene />
//     </Suspense>
//   );
// };

// export default SpaceSceneCanvas;
