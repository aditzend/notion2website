import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { testBlock } from '../api/blocks';

export const Blocks = () => {
  const blocks = useTracker(() => {
    return testBlock;
  });

  return (
    <div>
      <h2>{blocks.data}</h2>
    </div>
  );
};
