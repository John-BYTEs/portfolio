import { useEffect, useState } from 'react';
import './Dino.css';

const Dino = () => {
  const [ducking, setDucking] = useState(false);

  // Autoplay duck loop only
  useEffect(() => {
    const duckTimer = setInterval(() => {
      setDucking(d => !d);
    }, 2000);

    return () => clearInterval(duckTimer);
  }, []);

  return (
    <div className="dino-wrapper">
      <div className={`dino-sprite ${ducking ? 'duck' : 'run'}`} />
    </div>
  );
};

export default Dino;