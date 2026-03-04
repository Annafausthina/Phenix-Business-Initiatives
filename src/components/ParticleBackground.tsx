import { useEffect, useMemo, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';

const ParticleBackground = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: 'transparent' },
      particles: {
        number: { value: 60, density: { enable: true, area: 1000 } },
        color: { value: ['#0ea5e9', '#f97316', '#38bdf8'] },
        shape: { type: 'circle' },
        opacity: {
          value: 0.3,
          random: { enable: true, minimumValue: 0.1 }
        },
        size: { value: { min: 1, max: 2.5 } },
        links: {
          enable: true,
          distance: 180,
          color: '#0ea5e9',
          opacity: 0.12,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'none',
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'bubble' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, links: { opacity: 0.4 } },
          bubble: { size: 6, duration: 2, opacity: 0.8, color: '#f59e0b' },
        },
      },
      themes: [
        {
          name: "light",
          default: {
            value: true,
            mode: "light",
          },
          options: {
            particles: {
              color: {
                value: "#0ea5e9",
              },
            },
          },
        },
      ],
    }),
    []
  );

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 -z-10 bg-grid"
        style={{
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.08), transparent 40%), radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.05), transparent 40%)',
        }}
      />
    );
  }

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,#f0f9ff,transparent),radial-gradient(circle_at_bottom_left,#fff7ed,transparent)]" />
      <div className="fixed inset-0 -z-20 bg-grid opacity-30" />
      <Particles
        className="fixed inset-0 -z-10"
        style={{ pointerEvents: 'none' }}
        init={async (engine: Engine) => {
          await loadFull(engine);
        }}
        options={options}
      />
    </>
  );
};

export default ParticleBackground;
