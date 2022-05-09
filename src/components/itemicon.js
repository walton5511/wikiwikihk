import React from 'react';

export default ({iconId, height = null, width = null}) => (
      <img src={'https://nosapki.nostale.club/images/Ikona/' + iconId + '.png'} height={height} width={width} />
  );