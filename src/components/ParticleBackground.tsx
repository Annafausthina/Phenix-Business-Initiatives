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
        number: { value: 70, density: { enable: true, area: 900 } },
        color: { value: '#6dd5d8' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 2 } },
        links: {
          enable: true,
          distance: 140,
          color: '#7fd9dc',
          opacity: 0.28,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          repulse: { distance: 90, duration: 0.4 },
          push: { quantity: 3 },
        },
      },
    }),
    []
  );

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 -z-10"
        style={{
          pointerEvents: 'none',
          background:
            'radial-gradient(1200px 800px at 10% 10%, rgba(111, 221, 216, 0.25), transparent 60%), radial-gradient(1000px 700px at 90% 20%, rgba(88, 196, 190, 0.18), transparent 55%), radial-gradient(900px 700px at 40% 90%, rgba(120, 231, 220, 0.2), transparent 60%)',
        }}
      />
    );
  }

  return (
    <Particles
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
      init={async (engine: Engine) => {
        await loadFull(engine);
      }}
      options={options}
    />
  );
};

export default ParticleBackground;
