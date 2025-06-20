'use client';

import { Heart, HeartFilled } from '@realdangol/jjindangol-ui';
import React, { useState } from 'react';

import colors from '@/constants/colors';

const LikeButton = () => {
  const [like, setLike] = useState(false);

  const handleToggle = () => {
    setLike(!like);
  };

  return (
    <button className="h-fit" onClick={handleToggle}>
      {like ? <HeartFilled color={colors.brand700} /> : <Heart />}
    </button>
  );
};

export default LikeButton;
