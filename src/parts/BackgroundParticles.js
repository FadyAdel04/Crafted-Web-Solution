/* eslint-disable */
import React, { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for interactive effect
    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    // Brand theme color palette matching Crafted Web Solutions logo
    const colors = [
      { r: 43, g: 102, b: 255 }, // Brand Blue #2B66FF
      { r: 139, g: 92, b: 246 }, // Brand Purple #8B5CF6
      { r: 99, g: 102, b: 241 }, // Brand Indigo #6366F1
      { r: 56, g: 189, b: 248 }, // Cyan highlight #38BDF8
    ];

    // Responsive particle count
    const isMobile = width < 768;
    const particleCount = isMobile ? 32 : 68;
    let particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Float speed
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.colorObj = colors[Math.floor(Math.random() * colors.length)];
        this.baseRadius = Math.random() * 2.2 + 1.2;
        this.radius = this.baseRadius;
        this.alpha = Math.random() * 0.4 + 0.2;
        this.baseAlpha = this.alpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
        // Shape: 75% circular glowing orbs, 25% pixel cubes inspired by Crafted "C" pixel logo
        this.isPixel = Math.random() > 0.75;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges seamlessly
        if (this.x < -10) this.x = width + 10;
        else if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        else if (this.y > height + 10) this.y = -10;

        // Subtle alpha breathing
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.12;

        // Interactive mouse physics
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            // Soft reactive repulsion
            this.x -= dirX * force * 2.2;
            this.y -= dirY * force * 2.2;
            this.radius = this.baseRadius + force * 1.5;
            this.alpha = Math.min(0.85, this.baseAlpha + force * 0.4);
          } else {
            this.radius = this.baseRadius;
          }
        }
      }

      draw() {
        ctx.save();
        const { r, g, b } = this.colorObj;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0.05, this.alpha)})`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        ctx.shadowBlur = 8;

        if (this.isPixel) {
          // Pixel mark style
          const size = this.radius * 2;
          ctx.fillRect(this.x - size / 2, this.y - size / 2, size, size);
        } else {
          // Glowing circular dot
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    function initParticles() {
      particles = [];
      const count = window.innerWidth < 768 ? 32 : 68;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with subtle glowing lines
      const maxDist = isMobile ? 85 : 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.16;
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Connect particles to mouse
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.35;
            ctx.strokeStyle = `rgba(43, 102, 255, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
