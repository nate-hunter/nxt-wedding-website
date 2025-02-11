'use client';

import { useState } from 'react';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef');

export const useUniqueID = () => {
  const [id] = useState(nanoid);
  return id;
};
