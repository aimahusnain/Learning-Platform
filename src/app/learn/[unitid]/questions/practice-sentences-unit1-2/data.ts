// data.ts
const data = [
  {
    name: "MySelf",
    "data set 1": [
      {
        name: "Negative" as const,
        sentence: [
          "I'm not a student",
          "I'm not a teacher",
          "I'm not an engineer",
        ],
      },
      {
        name: "Positive" as const,
        sentence: [
          "The weather is nice today",
          "I'm not rich",
          "This bag is heavy",
          "These bags are heavy",
          "Look! There is Aiza",
          "My brother and I are good tennis players",
          "Shahnila is at home. Her children are at school",
          "I'm a taxi driver. My sister is a nurse",
          "The sun is shining brightly",
          "We aren't famous actors",
          "This book is interesting",
          "Those shoes are comfortable",
          "Listen! The birds are singing",
          "My parents and I are avid hikers",
          "Amin Ahsan is at work. His colleagues are in a meeting",
          "I'm a teacher. My husband is an accountant",
          "The coffee is hot",
          "They aren't professional athletes",
          "That car is expensive",
          "These apples are fresh",
          "Watch! The dog is chasing its tail",
          "My sister and I are good cooks",
          "Eman is in the garden. Her flowers are blooming",
          "I'm a librarian. My brother is a chef",
          "The movie was exciting",
          "We're not expert musicians",
          "This computer is fast",
          "Those paintings are beautiful",
          "Hurry! The bus is coming",
          "My friends and I are enthusiastic travelers",
          "Tom is at the gym. His trainer is helping him",
          "I'm a photographer. My cousin is a graphic designer",
          "The cake tastes delicious",
          "They aren't famous writers",
          "That building is tall",
          "These chairs are comfortable",
          "Look out! It's starting to rain",
          "My cousin and I are skilled artists",
          "Lisa is at the store. Her groceries are in the cart",
          "I'm a dentist. My wife is a pediatrician",
          "The music is loud",
          "We're not professional dancers",
          "This shirt is soft",
          "Those trees are old",
          "Be careful! The floor is wet",
          "My neighbors and I are friendly people",
          "David is at the airport. His luggage is at the check-in counter",
          "I'm a baker. My daughter is a florist",
          "The party was fun",
          "They aren't experienced sailors",
          "That house is beautiful",
          "These berries are sweet",
          "Listen carefully! Someone is knocking",
          "My colleagues and I are hard workers",
          "Emma is at the library. Her books are on the table",
          "I'm a plumber. My son is an electrician",
          "The soup is hot",
          "We aren't professional singers",
          "This bag is light",
          "Those clouds are dark",
          "Look! A rainbow is forming",
          "My classmates and I are diligent students",
          "Mark is at the beach. His friends are in the water",
          "I'm a veterinarian. My partner is a zookeeper",
          "The room is quiet",
          "They aren't expert chefs",
          "That mountain is high",
          "These puppies are playful",
          "Hurry up! The movie is starting",
          "My team and I are skilled programmers",
          "Anna is at the office. Her computer is on the desk",
          "I'm a firefighter. My sister is a police officer",
          "The water is cold",
          "We're not professional athletes",
          "This jacket is warm",
          "Those stars are bright",
          "Watch out! The cat is climbing the curtains",
          "My family and I are avid readers",
          "Peter is at the restaurant. His meal is on the table",
          "I'm a pilot. My wife is a flight attendant",
          "The grass is green",
          "They aren't experienced hikers",
          "That bicycle is new",
          "These flowers are colorful",
          "Look! The moon is full tonight",
          "My roommates and I are clean and tidy",
          "Sophie is at the gym. Her workout clothes are in her bag",
          "I'm a chef. My brother is a food critic",
          "The lecture was boring",
          "We aren't professional actors",
          "This couch is comfortable",
          "Those birds are noisy",
          "Be quiet! The baby is sleeping",
          "My cousins and I are competitive gamers",
          "Oliver is at school. His backpack is in his locker",
          "I'm a journalist. My husband is an editor",
          "The pizza is delicious",
          "They aren't expert gardeners",
          "That phone is expensive",
          "These vegetables are fresh",
          "Listen! The thunder is loud",
          "My neighbors and I are friendly",
          "Laura is at the mall. Her shopping bags are heavy",
          "I'm a painter. My sister is a sculptor",
          "The wind is strong",
          "We're not professional swimmers",
          "This tea is hot",
          "Those fireworks are beautiful"
      ]      
      },
      {
        name: "Yes/No Questions" as const,
        sentence: ["Am I a student?", "Am I a teacher?", "Am I an engineer?"],
      },
    ],
    "data set 2": [
      {
        name: "Negative" as const,
        sentence: ["I'm not happy", "I'm not tired", "I'm not busy"],
      },
      {
        name: "Positive" as const,
        sentence: [
          "Steve is ill. He's in bed",
          "I'm not hungry, but I'm thirsty",
          "Mr. Faiz is a very old man. He's 98",
          "These chairs aren't beautiful, but they're comfortable",
          "The weather is nice today. It's warm and sunny",
          "Are you late? No, I'm not. I'm early",
          "Rafia isn't at home. She's at work",
          "Is this your coat? Oh, thank you very much",
          "Tom is busy. He's at the office",
          "I'm not tired, but I'm bored",
          "Mrs. Johnson is a talented artist. She's 72",
          "These shoes aren't stylish, but they're durable",
          "The party is fun tonight. It's lively and exciting",
          "Are you ready? Yes, I am. I'm prepared",
          "Sarah isn't at school. She's at the doctor's",
          "Is this your umbrella? Yes, thank you so much",
          "The cat is sleepy. It's on the couch",
          "We're not lost, but we're confused",
          "Mr. Lee is a skilled chef. He's 45",
          "This book isn't short, but it's interesting",
          "The music is loud today. It's energetic and upbeat",
          "Are you new here? No, I'm not. I'm a regular",
          "David isn't at the gym. He's at the library",
          "Is this your phone? Oh, I've been looking for it!",
          "The dog is playful. It's in the yard",
          "They're not angry, but they're disappointed",
          "Ms. Garcia is a strict teacher. She's 38",
          "These headphones aren't expensive, but they're high-quality",
          "The movie is entertaining. It's funny and clever",
          "Are you satisfied? Yes, I am. I'm very pleased",
          "Lisa isn't at the party. She's at home studying",
          "Is this your wallet? Oh, thank goodness you found it!",
          "The baby is fussy. She's in her crib",
          "We're not experts, but we're enthusiastic",
          "Dr. Miller is a renowned scientist. He's 62",
          "This apartment isn't spacious, but it's cozy",
          "The concert is amazing tonight. It's energetic and loud",
          "Are you nervous? No, I'm not. I'm confident",
          "Peter isn't at the beach. He's at the mountains",
          "Is this your luggage? Yes, that's mine. Thank you!",
          "The flowers are beautiful. They're in the garden",
          "I'm not rich, but I'm content",
          "Mrs. Thompson is a dedicated volunteer. She's 55",
          "These cars aren't fast, but they're reliable",
          "The lecture is informative today. It's clear and concise",
          "Are you awake? Yes, I am. I couldn't sleep",
          "Emily isn't at the store. She's at the park",
          "Is this your seat? No, it's not. Mine is over there",
          "The coffee is strong. It's in the blue mug",
          "Are you finished? No, I'm not. I'm still working",
          "John isn't at the meeting. He's on vacation",
          "Is this your notebook? Yes, it is. I've been searching for it",
          "The sky is cloudy today. It's gray and overcast",
          "We're not experts, but we're willing to learn",
          "Ms. Chen is a talented musician. She's 29",
          "This restaurant isn't fancy, but it's delicious",
          "The game is exciting tonight. It's close and intense",
          "Are you cold? Yes, I am. I'm shivering",
          "Rachel isn't in the kitchen. She's in the garden",
          "Is this your jacket? Oh, I thought I'd lost it!",
          "The computer is slow. It's old and outdated",
          "They're not famous, but they're respected",
          "Mr. Brown is a skilled carpenter. He's 50",
          "These vegetables aren't fresh, but they're still edible",
          "The meeting is productive today. It's focused and efficient",
          "Are you available? No, I'm not. I'm busy all day",
          "Mark isn't at the airport. He's still at home packing",
          "Is this your dog? No, it's not. Mine is much smaller",
          "The tea is hot. It's in the green teapot",
          "Are you excited? Yes, I am. I'm thrilled about the trip",
          "Kelly isn't at the gym. She's at the yoga studio",
          "Is this your book? Yes, it is. I've been looking for it",
          "The room is messy. It's cluttered and disorganized",
          "We're not professionals, but we're dedicated amateurs",
          "Dr. Patel is a respected surgeon. She's 47",
          "This movie isn't original, but it's entertaining",
          "The festival is lively today. It's colorful and noisy",
          "Are you hungry? No, I'm not. I just ate",
          "Michael isn't at the concert. He's at home with a cold",
          "Is this your umbrella? No, it's not. Mine is black",
          "The river is calm. It's smooth and peaceful",
          "I'm not an expert, but I'm eager to learn",
          "Mrs. Rodriguez is a talented painter. She's 68",
          "These shoes aren't comfortable, but they're fashionable",
          "The lecture is interesting today. It's engaging and thought-provoking",
          "Are you ready to leave? Yes, I am. I'm all set",
          "Sophie isn't in the living room. She's in the study",
          "Is this your car? Yes, it is. Thank you for finding it",
          "The cake is delicious. It's sweet and moist",
          "Are you worried? No, I'm not. I'm optimistic",
          "Alex isn't at the library. He's at the coffee shop",
          "Is this your hat? Yes, it is. I almost forgot it",
          "The garden is beautiful. It's colorful and well-maintained",
          "They're not wealthy, but they're happy",
          "Professor Wilson is a brilliant mathematician. He's 56",
          "This report isn't brief, but it's comprehensive",
          "The atmosphere is tense today. It's quiet and uneasy",
          "Are you allergic? Yes, I am. I'm allergic to peanuts",
          "Linda isn't at the mall. She's at the dentist",
          "Is this your suitcase? No, it's not. Mine has a red tag",
          "The sunset is stunning. It's orange and purple",
          "We're not close friends, but we're good colleagues",
          "Ms. Taylor is a dedicated teacher. She's 41",
          "This software isn't user-friendly, but it's powerful",
          "The party is enjoyable tonight. It's relaxed and friendly",
          "Are you married? No, I'm not. I'm single",
          "Robert isn't in the office. He's working from home",
          "Is this your bicycle? Yes, it is. Thank you for finding it!"
      ]      
      },
      {
        name: "Yes/No Questions" as const,
        sentence: ["Am I happy?", "Am I tired?", "Am I busy?"],
      },
    ],
    "data set 3": [
      {
        name: "Negative" as const,
        sentence: [
          "I'm not at home",
          "I'm not in the office",
          "I'm not on vacation",
        ],
      },
      {
        name: "Positive" as const,
        sentence: [
          "My name is Amin Ahsan.",
          "I'm 42.",
          "I'm from Pakistan.",
          "I'm an accountant.",
          "My favourite color is blue.",
          "I'm interested in coding.",
          "My name is Sarah Johnson.",
          "I'm 35.",
          "I'm from Canada.",
          "I'm a teacher.",
          "My favorite color is green.",
          "I'm interested in photography.",
          "His name is Carlos Rodriguez.",
          "He's 28.",
          "He's from Spain.",
          "He's a chef.",
          "His favorite color is red.",
          "He's interested in soccer.",
          "Her name is Emma Thompson.",
          "She's 51.",
          "She's from Australia.",
          "She's a lawyer.",
          "Her favorite color is purple.",
          "She's interested in gardening.",
          "Their names are Mark and Lisa Chen.",
          "They're both 39.",
          "They're from China.",
          "They're software engineers.",
          "Their favorite color is orange.",
          "They're interested in traveling.",
          "My name is Ahmed Hassan.",
          "I'm 45.",
          "I'm from Egypt.",
          "I'm a doctor.",
          "My favorite color is white.",
          "I'm interested in reading.",
          "Her name is Olivia Brown.",
          "She's 22.",
          "She's from the United States.",
          "She's a student.",
          "Her favorite color is yellow.",
          "She's interested in dancing.",
          "His name is Raj Patel.",
          "He's 33.",
          "He's from India.",
          "He's a businessman.",
          "His favorite color is navy blue.",
          "He's interested in meditation.",
          "My name is Anna Kowalski.",
          "I'm 29.",
          "I'm from Poland.",
          "I'm a graphic designer.",
          "My favorite color is pink.",
          "I'm interested in painting.",
          "Their names are Tom and Emily Wilson.",
          "They're 55 and 53.",
          "They're from England.",
          "They're retired teachers.",
          "Their favorite color is beige.",
          "They're interested in birdwatching.",
          "His name is Yuki Tanaka.",
          "He's 41.",
          "He's from Japan.",
          "He's an architect.",
          "His favorite color is gray.",
          "He's interested in calligraphy.",
          "My name is Maria Silva.",
          "I'm 37.",
          "I'm from Brazil.",
          "I'm a nurse.",
          "My favorite color is turquoise.",
          "I'm interested in volunteering.",
          "Her name is Fatima Al-Sayed.",
          "She's 48.",
          "She's from Saudi Arabia.",
          "She's a university professor.",
          "Her favorite color is gold.",
          "She's interested in astronomy.",
          "His name is Pierre Dubois.",
          "He's 31.",
          "He's from France.",
          "He's a fashion designer.",
          "His favorite color is black.",
          "He's interested in cinema.",
          "Their names are John and Mary O'Brien.",
          "They're both 60.",
          "They're from Ireland.",
          "They're farmers.",
          "Their favorite color is forest green.",
          "They're interested in folklore.",
          "My name is Elena Popescu.",
          "I'm 26.",
          "I'm from Romania.",
          "I'm a journalist.",
          "My favorite color is lavender.",
          "I'm interested in politics.",
          "His name is Lars Andersen.",
          "He's 50.",
          "He's from Norway.",
          "He's a fisherman.",
          "His favorite color is sea blue.",
          "He's interested in skiing.",
          "Her name is Zoe Mitchell.",
          "She's 19.",
          "She's from New Zealand.",
          "She's an athlete."
      ]
      
      },
      {
        name: "Yes/No Questions" as const,
        sentence: ["Am I at home?", "Am I in the office?", "Am I on vacation?"],
      },
    ],
    "data set 4": [
      {
        name: "Negative" as const,
        sentence: [
          "I'm not at home",
          "I'm not in the office",
          "I'm not on vacation",
        ],
      },
      {
        name: "Positive" as const,
        sentence: [
          "She's thirsty.",
          "They're cold.",
          "He's hot.",
          "He's scared.",
          "They're hungry.",
          "She's angry.",
          "He's tired.",
          "She's excited.",
          "They're bored.",
          "It's loud.",
          "We're confused.",
          "You're happy.",
          "I'm sleepy.",
          "He's nervous.",
          "She's calm.",
          "They're energetic.",
          "It's quiet.",
          "We're relaxed.",
          "You're stressed.",
          "I'm curious.",
          "He's sad.",
          "She's proud.",
          "They're embarrassed.",
          "It's dark.",
          "We're amused.",
          "You're worried.",
          "I'm frustrated.",
          "He's surprised.",
          "She's determined.",
          "They're satisfied.",
          "It's bright.",
          "We're disappointed.",
          "You're relieved.",
          "I'm optimistic.",
          "He's pessimistic.",
          "She's confident.",
          "They're anxious.",
          "It's warm.",
          "We're grateful.",
          "You're irritated.",
          "I'm content.",
          "He's depressed.",
          "She's elated.",
          "They're shocked.",
          "It's cold.",
          "We're thrilled.",
          "You're exhausted.",
          "I'm motivated.",
          "He's overwhelmed.",
          "She's relaxed.",
          "They're inspired.",
          "It's foggy.",
          "We're cautious.",
          "You're amazed.",
          "I'm discouraged.",
          "He's hopeful.",
          "She's amused.",
          "They're perplexed.",
          "It's windy.",
          "We're ecstatic.",
          "You're devastated.",
          "I'm intrigued.",
          "He's uncomfortable.",
          "She's determined.",
          "They're pleased.",
          "It's sunny.",
          "We're apprehensive.",
          "You're enthusiastic.",
          "I'm indifferent.",
          "He's furious.",
          "She's serene.",
          "They're puzzled.",
          "It's stormy.",
          "We're exhilarated.",
          "You're melancholy.",
          "I'm anxious.",
          "He's delighted.",
          "She's irritated.",
          "They're astonished.",
          "It's humid.",
          "We're fascinated.",
          "You're perplexed.",
          "I'm relieved.",
          "He's tense.",
          "She's overjoyed.",
          "They're dejected.",
          "It's chilly.",
          "We're startled.",
          "You're inquisitive.",
          "I'm peaceful.",
          "He's agitated.",
          "She's content.",
          "They're horrified.",
          "It's stuffy.",
          "We're elated.",
          "You're skeptical.",
          "I'm jubilant.",
          "He's miserable.",
          "She's cheerful.",
          "They're bewildered.",
          "It's breezy.",
          "We're uneasy.",
          "You're satisfied.",
          "I'm apprehensive.",
          "He's grateful.",
          "She's annoyed."
      ]
      
      },
      {
        name: "Yes/No Questions" as const,
        sentence: ["Am I at home?", "Am I in the office?", "Am I on vacation?"],
      },
    ],
    "data set 5": [
      {
        name: "Negative" as const,
        sentence: [
          "I'm not at home",
          "I'm not in the office",
          "I'm not on vacation",
        ],
      },
      {
        name: "Positive" as const,
        sentence: [
          "It's hot today.",
          "It isn't windy today.",
          "My hands are cold.",
          "Brazil is a very big country.",
          "Diamonds aren't cheap.",
          "Toronto isn't in the US.",
          "I'm tired.",
          "I'm hungry.",
          "I'm not a good swimmer.",
          "I'm interested in football.",
          "The sky is blue.",
          "It's raining outside.",
          "My coffee is hot.",
          "Australia is a large continent.",
          "Elephants aren't small animals.",
          "Paris isn't in Germany.",
          "I'm thirsty.",
          "I'm excited.",
          "I'm not a morning person.",
          "I'm fascinated by astronomy.",
          "The grass is green.",
          "It's snowing today.",
          "Her car is red.",
          "Russia is the largest country.",
          "Bicycles aren't expensive.",
          "Rome isn't in France.",
          "I'm sleepy.",
          "I'm nervous.",
          "I'm not a good cook.",
          "I'm interested in history.",
          "The ocean is deep.",
          "It's foggy this morning.",
          "My phone is new.",
          "China has a large population.",
          "Diamonds aren't common.",
          "London isn't in Scotland.",
          "I'm happy.",
          "I'm stressed.",
          "I'm not a fast runner.",
          "I'm curious about science.",
          "The sun is bright.",
          "It's humid today.",
          "His house is big.",
          "Africa is a diverse continent.",
          "Gold isn't cheap.",
          "Madrid isn't in Italy.",
          "I'm sad.",
          "I'm relaxed.",
          "I'm not a good artist.",
          "I'm passionate about music.",
          "The moon is round.",
          "It's cloudy outside.",
          "Their dog is friendly.",
          "Canada has many lakes.",
          "Airplanes aren't slow.",
          "Tokyo isn't in China.",
          "I'm confused.",
          "I'm surprised.",
          "I'm not a patient person.",
          "I'm interested in photography.",
          "The fire is hot.",
          "It's windy today.",
          "My book is interesting.",
          "India has a rich culture.",
          "Diamonds aren't soft.",
          "Sydney isn't in New Zealand.",
          "I'm bored.",
          "I'm anxious.",
          "I'm not a good dancer.",
          "I'm fascinated by technology.",
          "The ice is cold.",
          "It's sunny outside.",
          "Her voice is beautiful.",
          "Brazil has a large rainforest.",
          "Elephants aren't light.",
          "Berlin isn't in Austria.",
          "I'm proud.",
          "I'm disappointed.",
          "I'm not a good singer.",
          "I'm interested in politics.",
          "The water is clear.",
          "It's chilly this evening.",
          "My computer is fast.",
          "Egypt has ancient pyramids.",
          "Diamonds aren't large.",
          "Venice isn't in Spain.",
          "I'm grateful.",
          "I'm worried.",
          "I'm not a good public speaker.",
          "I'm passionate about environmental issues.",
          "The mountain is tall.",
          "It's stormy tonight.",
          "Their garden is beautiful.",
          "Mexico has a diverse landscape.",
          "Feathers aren't heavy.",
          "Amsterdam isn't in Belgium.",
          "I'm content.",
          "I'm frustrated.",
          "I'm not a good mathematician.",
          "I'm interested in psychology.",
          "The desert is dry.",
          "It's freezing outside.",
          "My laptop is lightweight.",
          "Japan has many islands.",
          "Rocks aren't soft.",
          "Cairo isn't in Libya.",
          "I'm amazed.",
          "I'm overwhelmed.",
          "I'm not a good driver.",
          "I'm fascinated by marine biology."
      ]
      
      },
      {
        name: "Yes/No Questions" as const,
        sentence: ["Am I at home?", "Am I in the office?", "Am I on vacation?"],
      },
    ],
    "data set 6": [
      {
        name: "Negative" as const,
        sentence: [
          "I'm not at home",
          "I'm not in the office",
          "I'm not on vacation",
        ],
      },
      {
        name: "Positive" as const,
        sentence: [
          "The windows are open.",
          "Eman isn't happy.",
          "Aima is a doctor.",
          "The children are asleep.",
          "Gary isn't hungry.",
          "The books aren't on the table.",
          "The hotel is near the station.",
          "The bus isn't full.",
          "The door is locked.",
          "Sarah isn't tired.",
          "Tom is a teacher.",
          "The flowers are beautiful.",
          "John isn't late.",
          "The keys aren't in the drawer.",
          "The restaurant is across the street.",
          "The movie isn't interesting.",
          "The cat is sleeping.",
          "Mary isn't at home.",
          "Paul is an engineer.",
          "The stores are closed.",
          "The coffee isn't hot.",
          "The paintings are expensive.",
          "The park is nearby.",
          "The train isn't on time.",
          "The grass is green.",
          "Lisa isn't busy.",
          "Mark is a student.",
          "The dishes are clean.",
          "The water isn't cold.",
          "The bananas are ripe.",
          "The library is open.",
          "The concert isn't over.",
          "The sky is cloudy.",
          "Emma isn't sick.",
          "David is a lawyer.",
          "The streets are empty.",
          "The milk isn't fresh.",
          "The mountains are tall.",
          "The museum is downtown.",
          "The game isn't difficult.",
          "The baby is crying.",
          "Anna isn't ready.",
          "Michael is a chef.",
          "The leaves are falling.",
          "The car isn't new.",
          "The ocean is blue.",
          "The market is crowded.",
          "The computer isn't working.",
          "The birds are singing.",
          "Karen isn't married.",
          "Peter is an artist.",
          "The shoes are comfortable.",
          "The soup isn't hot.",
          "The stars are bright.",
          "The airport is far.",
          "The test isn't easy.",
          "The dog is friendly.",
          "Rachel isn't awake.",
          "Chris is a musician.",
          "The apples are sweet.",
          "The room isn't clean.",
          "The sun is shining.",
          "The party is tonight.",
          "The bread isn't fresh.",
          "The river is wide.",
          "Sophie isn't here.",
          "Alex is a dentist.",
          "The flowers are blooming.",
          "The pizza isn't ready.",
          "The city is noisy.",
          "The pool is deep.",
          "The movie isn't funny.",
          "The cake is delicious.",
          "Robert isn't available.",
          "Laura is a nurse.",
          "The glasses are broken.",
          "The tea isn't sweet.",
          "The beach is crowded.",
          "The store is closed.",
          "The shirt isn't ironed.",
          "The moon is full.",
          "Emily isn't tall.",
          "Daniel is a pilot.",
          "The fruits are fresh.",
          "The chair isn't comfortable.",
          "The road is busy.",
          "The museum is interesting.",
          "The ice cream isn't cold.",
          "The garden is beautiful.",
          "Kevin isn't rich.",
          "Jessica is a dancer.",
          "The windows are dirty.",
          "The food isn't spicy.",
          "The air is fresh.",
          "The meeting is important.",
          "The dress isn't expensive.",
          "The forest is dense.",
          "Olivia isn't famous.",
          "Andrew is a scientist.",
          "The vegetables are organic.",
          "The phone isn't charged.",
          "The lecture is boring.",
          "The lake is calm.",
          "The package isn't heavy.",
          "The hills are green.",
          "Nicole isn't old.",
          "Brian is a photographer.",
          "The weather is nice."
      ]      
      
      },
      {
        name: "Yes/No Questions" as const,
        sentence: ["Am I at home?", "Am I in the office?", "Am I on vacation?"],
      },
    ],
    "data set 7": [
      {
        name: "Negative" as const,
        sentence: [
          "I'm not at home",
          "I'm not in the office",
          "I'm not on vacation",
        ],
      },
      {
        name: "Positive" as const,
        sentence: [
          "It's morning.",
          "It's getting dark.",
          "Where there's a will, there's a way.",
          "A book is on the table.",
          "There's a book on the table.",
          "There's Ali beating Rashid.",
          "It's 7 o'clock.",
          "It's fine today.",
          "What a beautiful place it is!",
          "It's you who broke my pen.",
          "It's very hot today.",
          "It's evening.",
          "There's no book on the table.",
          "There are some apples in the basket.",
          "There are no new clothes in the box.",
          "I'm an honest boy.",
          "She's very pretty.",
          "We're tired.",
          "He isn't brave.",
          "You aren't a liar.",
          "We're all Muslims.",
          "Ahmad is a bold soldier.",
          "The dog and the horse are faithful animals.",
          "Every Pakistani is a patriot.",
          "Lahore is famous for gardens."
        ]        
      },
      {
        name: "Yes/No Questions" as const,
        sentence: ["Am I at home?", "Am I in the office?", "Am I on vacation?"],
      },
    ],
  },
];

export default data;
