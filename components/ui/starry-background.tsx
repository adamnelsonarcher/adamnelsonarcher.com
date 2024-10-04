"use client";

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
}

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const mouseSpeedRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const initialShootingStarCreatedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      starsRef.current = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const createShootingStar = () => {
      const shootingStar: ShootingStar = {
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 60 + 20,
        speed: Math.random() * 4 + 5,
        opacity: 1,
      };
      shootingStarsRef.current.push(shootingStar);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;
      
      mouseSpeedRef.current = {
        x: dx * 0.05,
        y: dy * 0.05
      };

      setTimeout(() => {
        mouseSpeedRef.current = { x: 0, y: 0 };
      }, 100);

      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Guarantee a shooting star within the first 10 seconds
    const initialShootingStarTimeout = setTimeout(() => {
      if (!initialShootingStarCreatedRef.current) {
        createShootingStar();
        initialShootingStarCreatedRef.current = true;
      }
    }, Math.random() * 5000); // Random time within 5 seconds

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';

      // Animate stars
      starsRef.current.forEach((star) => {
        star.x += star.speed * mouseSpeedRef.current.x * (2 - Math.abs(star.x / canvas.width - 0.5) * 2);
        star.y += star.speed * mouseSpeedRef.current.y * (2 - Math.abs(star.y / canvas.height - 0.5) * 2);

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Animate shooting stars
      shootingStarsRef.current.forEach((shootingStar, index) => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x + shootingStar.length, shootingStar.y + shootingStar.length);
        ctx.stroke();

        shootingStar.x += shootingStar.speed;
        shootingStar.y += shootingStar.speed;
        shootingStar.opacity -= 0.02;

        if (shootingStar.opacity <= 0) {
          shootingStarsRef.current.splice(index, 1);
        }
      });

      // Occasionally create a new shooting star
      if (initialShootingStarCreatedRef.current && Math.random() < 0.002) {
        createShootingStar();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(initialShootingStarTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />;
};

export default StarryBackground;