"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StaticData } from "@/lib/staticdata";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { PlayCircle, Book, CheckCircle, XCircle } from "lucide-react";

async function SearchedUnit(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/units/unitopen?id=${id}`
  );
  const data = await res.json();
  if (data.success) return data.data;
}

async function SearchedQuestions(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/questions?id=${id}`
  );
  const data = await res.json();
  if (data.success) return data.data;
}

const UnitDetails: React.FC<any> = async ({ params, colorScheme }) => {
  const { unitid } = params;

  const UnitDetailsData = await SearchedUnit(unitid);
  const Questions = await SearchedQuestions(unitid);

  const colors = getColors(colorScheme);

  const practiceSentences = [

    {
      name: "are you doing? (present continuous questions)",
      link: "/learn/cly4ngafb0004ldnn1v522bfy/questions/practice-sentences-unit4-1",
    },
    {
      name: "I do/work/like etc. (present simple)",
      link: "/learn/cly4ngafb0004ldnn1v522bfy/questions/practice-sentences-unit5-1",
    },
    {
      name: "I don't... (present simple negative)",
      link: "/learn/cly4ngafc0006ldnnnge57r94/questions/practice-sentences-unit6-1",
    },
    {
      name: "Do you...? (present simple questions)",
      link: "/learn/cly4ngafc0006ldnnnge57r94/questions/practice-sentences-unit7-1",
    },
    {
      name: "I am doing (present continuous) and I do (present simple)",
      link: "/learn/cly4ngafd0008ldnn9qkgi7qi/questions/practice-sentences-unit8-1",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.gradient}`}>
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className={`text-5xl font-bold mb-12 text-center text-${colors.text}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {UnitDetailsData[0].name}{" "}
          <span className={`font-normal text-${colors.primary}`}>
            Questions
          </span>
        </motion.h1>

        {/* Practice Sentences */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-${colors.primary} border-2`}
                >
                  <CardHeader>
                    <CardTitle className="capitalize w-full text-left flex items-center">
                      <PlayCircle
                        className={`w-6 h-6 mr-2 text-${colors.primary}`}
                      />
                      Explanatory Video
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="flex w-full justify-between">
                    <div></div>
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Watch Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle
                  className={`text-2xl font-bold text-${colors.text}`}
                >
                  Explanation Video
                </DialogTitle>
                <DialogDescription>
                  This video will explain {UnitDetailsData[0].name} in an
                  easy-to-understand manner.
                </DialogDescription>
              </DialogHeader>
              {UnitDetailsData[0].videoReferenceVideo ? (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src={UnitDetailsData[0].videoReferenceVideo}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <p className="text-center py-8 text-gray-500">
                  Video not found :(
                </p>
              )}
            </DialogContent>
          </Dialog>

          {/* Practice Sentences */}
          {UnitDetailsData[0].name === "am/is/are" ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                  <Link
                    href={`/learn/cly4ne9ni0001ldnnlphvaq6p/questions/practice-sentences-unit1-1`}
                  >
                    <CardTitle
                      className={`capitalize text-${colors.text} flex items-center`}
                    >
                      <Book className={`w-5 h-5 mr-2 text-${colors.primary}`} />
                      Practice Sentences
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link
                    href={`/learn/cly4ne9ni0001ldnnlphvaq6p/questions/practice-sentences-unit1-1`}
                  >
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Learn
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ) : null}

          {UnitDetailsData[0].name === "am/is/are" ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                  <Link
                    href={`/learn/cly4ne9ni0001ldnnlphvaq6p/questions/practice-sentences-unit1-2`}
                  >
                    <CardTitle
                      className={`capitalize text-${colors.text} flex items-center`}
                    >
                      <Book className={`w-5 h-5 mr-2 text-${colors.primary}`} />
                      Practice Sentences 2
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link
                    href={`/learn/cly4ne9ni0001ldnnlphvaq6p/questions/practice-sentences-unit1-2`}
                  >
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Learn
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ) : null}

          {UnitDetailsData[0].name === "am/is/are (questions)" ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                  <Link
                    href={`/learn/cly4ne9ni0001ldnnlphvaq6p/questions/practice-sentences-unit2-1`}
                  >
                    <CardTitle
                      className={`capitalize text-${colors.text} flex items-center`}
                    >
                      <Book className={`w-5 h-5 mr-2 text-${colors.primary}`} />
                      Practice Sentences
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link
                    href={`/learn/cly4ne9ni0001ldnnlphvaq6p/questions/practice-sentences-unit2-1`}
                  >
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Learn
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ) : null}

          {UnitDetailsData[0].name === "I am doing (present continuous)" ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/practice-sentences-unit3-1`}
                  >
                    <CardTitle
                      className={`capitalize text-${colors.text} flex items-center`}
                    >
                      <Book className={`w-5 h-5 mr-2 text-${colors.primary}`} />
                      Practice Sentences
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/practice-sentences-unit3-1`}
                  >
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Learn
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ) : null}

          {UnitDetailsData[0].name === "am/is/are" ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/alfabet-learning`}
                  >
                    <CardTitle
                      className={`capitalize text-${colors.text} flex items-center`}
                    >
                      <Book className={`w-5 h-5 mr-2 text-${colors.primary}`} />
                      Alfabet Learning
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/alfabet-learning`}
                  >
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Learn
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ) : null}

          {UnitDetailsData[0].name === "am/is/are" ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/2-letter-words`}
                  >
                    <CardTitle
                      className={`capitalize text-${colors.text} flex items-center`}
                    >
                      <Book className={`w-5 h-5 mr-2 text-${colors.primary}`} />
                      2 Letter Words
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/2-letter-words`}
                  >
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Learn
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ) : null}

{UnitDetailsData[0].name === "am/is/are" ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/3-letter-words`}
                  >
                    <CardTitle
                      className={`capitalize text-${colors.text} flex items-center`}
                    >
                      <Book className={`w-5 h-5 mr-2 text-${colors.primary}`} />
                      3 Letter Words
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link
                    href={`/learn/cly4ngafa0003ldnnucg3o2l9/questions/3-letter-words`}
                  >
                    <Button
                      className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                    >
                      Learn
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ) : null}

          {practiceSentences.map((box, index) => (
            <>
              {UnitDetailsData[0].name === box.name ? (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                    <CardHeader
                      className={`bg-${colors.secondary} rounded-t-lg`}
                    >
                      <Link href={box.link}>
                        <CardTitle
                          className={`capitalize text-${colors.text} flex items-center`}
                        >
                          <Book
                            className={`w-5 h-5 mr-2 text-${colors.primary}`}
                          />
                          Practice Sentences
                        </CardTitle>
                      </Link>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Link href={box.link}>
                        <Button
                          className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                        >
                          Learn
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ) : null}
            </>
          ))}

          {Questions && Array.isArray(Questions) ? (
            Questions.map((question: any) => (
              <motion.div
                key={question.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardHeader className={`bg-${colors.secondary} rounded-t-lg`}>
                    <Link href={`/learn/${unitid}/questions/${question.id}`}>
                      <CardTitle
                        className={`capitalize text-${colors.text} flex items-center`}
                      >
                        <Book
                          className={`w-5 h-5 mr-2 text-${colors.primary}`}
                        />
                        {question.name}
                      </CardTitle>
                    </Link>
                    <CardDescription
                      className={`text-${colors.primary} font-medium`}
                    >
                      {question.MainQuestions &&
                        `${question.MainQuestions.length} Questions`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent></CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      className="cursor-default flex items-center"
                    >
                      {question.submitted ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          Submitted
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 mr-2 text-red-500" />
                          Not Submitted
                        </>
                      )}
                    </Button>
                    <Link href={`/learn/${unitid}/questions/${question.id}`}>
                      <Button
                        className={`bg-${colors.primary} hover:bg-${colors.hover} text-white`}
                      >
                        Learn
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center py-8 text-gray-500">
              No questions found
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const getColors = (scheme: "pink" | "purple") => {
  return {
    primary: scheme === "pink" ? "pink-600" : "indigo-600",
    secondary: scheme === "pink" ? "pink-100" : "indigo-100",
    text: scheme === "pink" ? "pink-800" : "indigo-800",
    hover: scheme === "pink" ? "pink-700" : "indigo-700",
    gradient:
      scheme === "pink"
        ? "from-pink-50 to-red-100"
        : "from-blue-50 to-indigo-100",
  };
};

export default UnitDetails;
