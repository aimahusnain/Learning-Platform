// data.ts
const data = [
    {
      name: "MySelf",
      noun: [
        {
          name: "Negative" as const,
          sentence: ["I'm not a student", "I'm not a teacher", "I'm not an engineer"],
        },
        {
          name: "Positive" as const,
          sentence: ["I'm a student", "I'm a teacher", "I'm an engineer"],
        },
        {
          name: "Yes/No Questions" as const,
          sentence: ["Am I a student?", "Am I a teacher?", "Am I an engineer?"],
        },
      ],
      adjective: [
        {
          name: "Negative" as const,
          sentence: ["I'm not happy", "I'm not tired", "I'm not busy"],
        },
        {
          name: "Positive" as const,
          sentence: ["I'm happy", "I'm tired", "I'm busy"],
        },
        {
          name: "Yes/No Questions" as const,
          sentence: ["Am I happy?", "Am I tired?", "Am I busy?"],
        },
      ],
      preposition: [
        {
          name: "Negative" as const,
          sentence: ["I'm not at home", "I'm not in the office", "I'm not on vacation"],
        },
        {
          name: "Positive" as const,
          sentence: ["I'm at home", "I'm in the office", "I'm on vacation"],
        },
        {
          name: "Yes/No Questions" as const,
          sentence: ["Am I at home?", "Am I in the office?", "Am I on vacation?"],
        },
      ],
    },
  ];
  
  export default data;