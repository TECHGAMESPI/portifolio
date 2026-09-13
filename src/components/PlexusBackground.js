import React, {useEffect, useRef} from 'react';
import Style from './PlexusBackground.module.scss';

export default function PlexusBackground({darkMode}) {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return undefined;

      const context = canvas.getContext('2d');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let width = 0;
      let height = 0;
      let frameId;
      let particles = [];
      let pointer = {x: -1000, y: -1000, active: false};

      const createParticles = () => {
         const density = width < 720 ? 24 : Math.min(62, Math.floor(width / 24));
         particles = Array.from({length: density}, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.16,
            vy: (Math.random() - 0.5) * 0.16,
            radius: Math.random() * 1.15 + 0.55
         }));
      };

      const resize = () => {
         const ratio = Math.min(window.devicePixelRatio || 1, 2);
         width = window.innerWidth;
         height = window.innerHeight;
         canvas.width = width * ratio;
         canvas.height = height * ratio;
         canvas.style.width = `${width}px`;
         canvas.style.height = `${height}px`;
         context.setTransform(ratio, 0, 0, ratio, 0, 0);
         createParticles();
         if (reducedMotion) draw();
      };

      const drawConnection = (fromX, fromY, toX, toY, opacity) => {
         context.beginPath();
         context.moveTo(fromX, fromY);
         context.lineTo(toX, toY);
         context.strokeStyle = darkMode
            ? `rgba(45, 212, 191, ${opacity})`
            : `rgba(13, 148, 136, ${opacity})`;
         context.lineWidth = 0.7;
         context.stroke();
      };

      const draw = () => {
         context.clearRect(0, 0, width, height);

         particles.forEach((particle, index) => {
            if (!reducedMotion) {
               particle.x += particle.vx;
               particle.y += particle.vy;

               if (particle.x < -10) particle.x = width + 10;
               if (particle.x > width + 10) particle.x = -10;
               if (particle.y < -10) particle.y = height + 10;
               if (particle.y > height + 10) particle.y = -10;
            }

            context.beginPath();
            context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            context.fillStyle = darkMode
               ? 'rgba(94, 234, 212, 0.28)'
               : 'rgba(13, 148, 136, 0.2)';
            context.fill();

            for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
               const next = particles[nextIndex];
               const distance = Math.hypot(particle.x - next.x, particle.y - next.y);

               if (distance < 145) {
                  drawConnection(
                     particle.x,
                     particle.y,
                     next.x,
                     next.y,
                     (1 - distance / 145) * (darkMode ? 0.12 : 0.09)
                  );
               }
            }

            if (pointer.active) {
               const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
               if (pointerDistance < 175) {
                  drawConnection(
                     particle.x,
                     particle.y,
                     pointer.x,
                     pointer.y,
                     (1 - pointerDistance / 175) * (darkMode ? 0.2 : 0.13)
                  );
               }
            }
         });

         if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
      };

      const handlePointerMove = event => {
         pointer = {x: event.clientX, y: event.clientY, active: true};
      };

      const handlePointerLeave = () => {
         pointer.active = false;
      };

      resize();
      draw();

      window.addEventListener('resize', resize);
      if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
         window.addEventListener('pointermove', handlePointerMove, {passive: true});
         document.addEventListener('mouseleave', handlePointerLeave);
      }

      return () => {
         window.cancelAnimationFrame(frameId);
         window.removeEventListener('resize', resize);
         window.removeEventListener('pointermove', handlePointerMove);
         document.removeEventListener('mouseleave', handlePointerLeave);
      };
   }, [darkMode]);

   return <canvas ref={canvasRef} className={Style.plexus} aria-hidden="true"/>;
}
