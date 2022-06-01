import React from 'react';

export default ({monsterVnum, height = null, width = null}) => (
      <img src={'https://cdn.olympusgg.com/images/monsters/' + monsterVnum + '.png'} height={height} width={width} />
  );