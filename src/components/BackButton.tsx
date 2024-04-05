'use client'

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="ghost" onClick={handleBack}>Back</Button>
  );
}

export default BackButton;
