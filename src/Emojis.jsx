import React, { useState } from 'react';

export const Emojis = () => {
  const [emoji, setEmoji] = useState('👽');

  const emojis = ['🛸', '🧉', '🎮', '🎃', '🌴', '🪐', '🎬', '📀', '🏉'];

  const handleClick = () => {
    const emojialeatorio = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[emojialeatorio]);
  };

  return (
    <div>
      <span className='span2' style={{ fontSize: '3em', marginLeft: '10px' }}>{emoji}</span>
      <button onClick={handleClick}>Toca para cambiar el emoji</button>
    </div>
  );
};

