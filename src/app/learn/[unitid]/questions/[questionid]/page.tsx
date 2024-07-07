import { QuestionsCarousel } from "@/components/QuestionsCarousel1";

const Questions = ({ params }: { params: any }) => {
  const { questionid } = params;

  return (
    <>
        <QuestionsCarousel questionid={questionid} />
    </>
  );
};

export default Questions;
