import React from 'react';

export default ({iconId, height = null, width = null}) => (
      <img src={'https://cdn.olympusgg.com/images/' + iconId + '.png'} height={height} width={width} />
  );