import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Using bg-gray-900 color
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const columns = 20;
      const rows = 15;
      const cellWidth = canvas.width / columns;
      const cellHeight = canvas.height / rows;

      for (let i = 0; i <= rows; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;

        for (let j = 0; j <= columns; j++) {
          const x = j * cellWidth;
          const y = i * cellHeight;
          
          // Base wave movement from left to right
          const baseWave = Math.sin(x * 0.02 - time * 0.002) * 30;
          
          // Mouse interaction effect
          const distX = x - mouseX;
          const distY = y - mouseY;
          const distance = Math.sqrt(distX * distX + distY * distY);
          const maxDistance = 300;
          const influence = Math.max(0, 1 - distance / maxDistance);
          const mouseEffect = influence * 40;
          
          // Combine both effects
          const totalOffset = baseWave + (mouseEffect * Math.sin(distance * 0.01 - time * 0.002));
          
          if (j === 0) {
            ctx.moveTo(x, y + totalOffset);
          } else {
            ctx.lineTo(x, y + totalOffset);
          }
        }
        ctx.stroke();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 bg-gray-900"
    />
  );
};

export default AnimatedBackground;