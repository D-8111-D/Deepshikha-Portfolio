import { Suspense, useEffect, useRef } from "react";

const SpaceParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const particles = [];

    const ratio = window.innerHeight < 400 ? 0.6 : 1;

    const radius = 120;

    let counter = 0;

    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticle = () => {
      particles.push({
        color:
          Math.random() > 0.5 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)",

        particleRadius: Math.random() * 5,

        x: Math.cos(Math.random() * 7 + Math.PI) * radius,

        y: Math.sin(Math.random() * 7 + Math.PI) * radius,

        ring: Math.random() * radius * 3,

        move: (Math.random() * 4 + 1) / 500,

        random: Math.random() * 7,
      });
    };

    const moveParticle = (particle) => {
      particle.ring = Math.max(particle.ring - 1, radius);

      particle.random += particle.move;

      particle.x = Math.cos(particle.random + Math.PI) * particle.ring;

      particle.y = Math.sin(particle.random + Math.PI) * particle.ring;
    };

    const resetParticle = (particle) => {
      particle.ring = Math.random() * radius * 3;

      particle.particleRadius = Math.random() * 5;
    };

    const disappearParticle = (particle) => {
      if (particle.particleRadius < 0.8) {
        resetParticle(particle);
      }

      particle.particleRadius *= 0.994;
    };

    const drawParticle = (particle) => {
      ctx.beginPath();

      ctx.fillStyle = particle.color;

      ctx.arc(particle.x, particle.y, particle.particleRadius, 0, Math.PI * 2);

      ctx.fill();
    };

    const animateParticles = () => {
      ctx.setTransform(
        ratio,
        0,
        0,
        -ratio,
        canvas.width / 2,
        canvas.height / 2,
      );

      ctx.clearRect(
        -canvas.width,
        -canvas.height,
        canvas.width * 2,
        canvas.height * 2,
      );

      if (counter < particles.length) {
        counter++;
      }

      for (let i = 0; i < counter; i++) {
        disappearParticle(particles[i]);

        moveParticle(particles[i]);

        drawParticle(particles[i]);
      }

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    for (let i = 0; i < 450; i++) {
      createParticle();
    }

    animateParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-half h-[700px] absolute left-[600px] top-0 z-[1] "
    />
  );
};

const SpaceParticlesCanvas = () => {
  return (
    <Suspense fallback={null}>
      <SpaceParticles />
    </Suspense>
  );
};

export default SpaceParticlesCanvas;
