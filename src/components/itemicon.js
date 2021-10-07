import React from 'react';

export default ({iconId}) => (
        <img src={'https://nosapki.nostale.club/images/Ikona/' + (iconId <= 4484 ? iconId : 0) + '.png'} />
  );