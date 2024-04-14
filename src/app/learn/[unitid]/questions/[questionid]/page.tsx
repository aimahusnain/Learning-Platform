import { QuestionsCarousel } from '@/components/QuestionsCarousel'
import React from 'react'

const Questions = ({ params }: { params: any }) => {
    const { questionid } = params;
  
  return <QuestionsCarousel questionid={questionid} />;
};

export default Questions