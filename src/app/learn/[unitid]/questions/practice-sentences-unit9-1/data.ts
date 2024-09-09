// data.ts
const data = [
  {
    name: "MySelf",
    "data set 1": [
      {
        name: "Positive" as const,
        sentence: [
          "They have two children.<br />They’ve got two children.",
          "He has a new job.<br />He’s got a new job.",
          "We have a lot of work to do.<br />We’ve got a lot of work to do.",
          "They have a big house.<br />They’ve got a big house.",
          "He has a new phone.<br />He’s got a new phone.",
          "We have a meeting today.<br />We’ve got a meeting today.",
          "They have a dog.<br />They’ve got a dog.",
          "He has a new car.<br />He’s got a new car.",
          "We have a problem.<br />We’ve got a problem.",
          "They have a garden.<br />They’ve got a garden.",
          "He has a new watch.<br />He’s got a new watch.",
          "We have a plan.<br />We’ve got a plan.",
          "They have a cat.<br />They’ve got a cat.",
          "He has a new bike.<br />He’s got a new bike.",
          "We have a solution.<br />We’ve got a solution.",
          "They have a pool.<br />They’ve got a pool.",
          "He has a new computer.<br />He’s got a new computer.",
          "We have a project.<br />We’ve got a project.",
          "They have a boat.<br />They’ve got a boat.",
          "He has a new job.<br />He’s got a new job.",
          "We have a task.<br />We’ve got a task.",
          "They have a TV.<br />They’ve got a TV.",
          "He has a new hat.<br />He’s got a new hat.",
          "We have a car.<br />We’ve got a car.",
          "They have a bike.<br />They’ve got a bike.",
          "He has a new phone.<br />He’s got a new phone.",
          "We have a house.<br />We’ve got a house.",
          "They have a car.<br />They’ve got a car.",
          "He has a new book.<br />He’s got a new book.",
          "We have a dog.<br />We’ve got a dog.",
          "They have a laptop.<br />They’ve got a laptop.",
          "He has a new coat.<br />He’s got a new coat.",
          "We have a garden.<br />We’ve got a garden.",
          "They have a house.<br />They’ve got a house.",
          "He has a new laptop.<br />He’s got a new laptop.",
          "We have a pool.<br />We’ve got a pool.",
          "They have a boat.<br />They’ve got a boat.",
          "He has a new bike.<br />He’s got a new bike.",
          "We have a TV.<br />We’ve got a TV.",
          "They have a car.<br />They’ve got a car.",
          "He has a new job.<br />He’s got a new job.",
          "I don’t have your number.<br />I haven’t got your number.",
          "She doesn't have a key.<br />She hasn’t got a key.",
          "I don't have your phone number.<br />I haven’t got your phone number.",
          "She doesn’t have a passport.<br />She hasn’t got a passport.",
          "I don’t have your address.<br />I haven’t got your address.",
          "She doesn’t have a ticket.<br />She hasn’t got a ticket.",
          "I don’t have your email.<br />I haven’t got your email.",
          "She doesn’t have a laptop.<br />She hasn’t got a laptop.",
          "She doesn’t have a job.<br />She hasn’t got a job.",
          "I don’t have your keys.<br />I haven’t got your keys.",
          "She doesn’t have a phone.<br />She hasn’t got a phone.",
          "I don’t have your pen.<br />I haven’t got your pen.",
          "She doesn’t have a car.<br />She hasn’t got a car.",
          "I don’t have your book.<br />I haven’t got your book.",
          "She doesn’t have a bag.<br />She hasn’t got a bag.",
          "I don’t have your coat.<br />I haven’t got your coat.",
          "She doesn’t have a job.<br />She hasn’t got a job.",
          "I don’t have your shoes.<br />I haven’t got your shoes.",
          "She doesn’t have a computer.<br />She hasn’t got a computer.",
          "I don’t have your hat.<br />I haven’t got your hat.",
          "She doesn’t have a watch.<br />She hasn’t got a watch.",
          "I don’t have your bag.<br />I haven’t got your bag.",
          "She doesn’t have a bike.<br />She hasn’t got a bike.",
          "I don’t have your phone.<br />I haven’t got your phone.",
          "She doesn’t have a job.<br />She hasn’t got a job.",
          "I don’t have your keys.<br />I haven’t got your keys.",
          "She doesn’t have a phone.<br />She hasn’t got a phone.",
          "Do you have an umbrella?<br />Have you got an umbrella?",
          "Does your father have a car?<br />Has your father got a car?",
          "How much money do we have?<br />How much money have we got?",
          "Do you have a pen?<br />Have you got a pen?",
          "Does your sister have a bike?<br />Has your sister got a bike?",
          "How much time do we have?<br />How much time have we got?",
          "Do you have a map?<br />Have you got a map?",
          "Does your brother have a job?<br />Has your brother got a job?",
          "How many books do we have?<br />How many books have we got?",
          "Do you have a camera?<br />Have you got a camera?",
          "Does your friend have a car?<br />Has your friend got a car?",
          "How much food do we have?<br />How much food have we got?",
          "Do you have a ticket?<br />Have you got a ticket?",
          "Does your neighbor have a dog?<br />Has your neighbor got a dog?",
          "How many chairs do we have?<br />How many chairs have we got?",
          "Do you have a book?<br />Have you got a book?",
          "Does your cousin have a bike?<br />Has your cousin got a bike?",
          "How much water do we have?<br />How much water have we got?",
          "Do you have a coat?<br />Have you got a coat?",
          "Does your aunt have a house?<br />Has your aunt got a house?",
          "How many apples do we have?<br />How many apples have we got?",
          "Do you have a chair?<br />Have you got a chair?",
          "Does your uncle have a boat?<br />Has your uncle got a boat?",
          "How much milk do we have?<br />How much milk have we got?",
          "Do you have a table?<br />Have you got a table?",
          "Does your friend have a cat?<br />Has your friend got a cat?",
          "How many pens do we have?<br />How many pens have we got?",
          "Do you have a lamp?<br />Have you got a lamp?",
          "Does your neighbor have a bike?<br />Has your neighbor got a bike?",
          "How much bread do we have?<br />How much bread have we got?",
          "Do you have a pen?<br />Have you got a pen?",
          "Does your cousin have a car?<br />Has your cousin got a car?",
          "How many chairs do we have?<br />How many chairs have we got?",
          "Do you have a book?<br />Have you got a book?",
          "Does your aunt have a dog?<br />Has your aunt got a dog?",
          "How much juice do we have?<br />How much juice have we got?",
          "Do you have a coat?<br />Have you got a coat?",
          "Does your uncle have a house?<br />Has your uncle got a house?",
          "How many apples do we have?<br />How many apples have we got?",
          "Do you have a lamp?<br />Have you got a lamp?"
        ]
        
        },
    ],
    "data set 2": [
      {
        name: "Positive" as const,
        sentence:[
          "Have you got any money?<br />Do you have any money?",
          "I haven't got many clothes.<br />I don’t have many clothes.",
          "Has Tom got a brother?<br />Does Tom have a brother?",
          "How many children have they got?<br />How many children do they have?",
          "Have you got any questions?<br />Do you have any questions?",
          "Sam hasn't got a job.<br />Sam doesn’t have a job.",
          "Have you got a pen?<br />Do you have a pen?",
          "She hasn’t got a car.<br />She doesn’t have a car.",
          "Has he got a dog?<br />Does he have a dog?",
          "Have they got any books?<br />Do they have any books?",
          "I haven’t got any friends here.<br />I don’t have any friends here.",
          "Has she got a new phone?<br />Does she have a new phone?",
          "Have you got any siblings?<br />Do you have any siblings?",
          "He hasn’t got any plans tonight.<br />He doesn’t have any plans tonight.",
          "Have we got enough time?<br />Do we have enough time?",
          "Has the store got what you need?<br />Does the store have what you need?",
          "Have they got a house?<br />Do they have a house?",
          "I haven’t got any ideas.<br />I don’t have any ideas.",
          "Has he got a ticket?<br />Does he have a ticket?",
          "Have you got any news?<br />Do you have any news?",
          "She hasn’t got any money left.<br />She doesn’t have any money left.",
          "Have they got a reservation?<br />Do they have a reservation?",
          "Has he got a job?<br />Does he have a job?",
          "Have you got any advice?<br />Do you have any advice?",
          "I haven’t got a clue.<br />I don’t have a clue.",
          "Has she got a solution?<br />Does she have a solution?",
          "Have they got a plan?<br />Do they have a plan?",
          "He hasn’t got any patience.<br />He doesn’t have any patience.",
          "Have you got a moment?<br />Do you have a moment?",
          "Has the team got a strategy?<br />Does the team have a strategy?",
          "Have they got any questions?<br />Do they have any questions?",
          "I haven’t got any doubts.<br />I don’t have any doubts.",
          "Has he got a chance?<br />Does he have a chance?",
          "Have you got any suggestions?<br />Do you have any suggestions?",
          "She hasn’t got any experience.<br />She doesn’t have any experience.",
          "Have they got a backup plan?<br />Do they have a backup plan?",
          "Has he got a partner?<br />Does he have a partner?",
          "Have you got any feedback?<br />Do you have any feedback?",
          "I haven’t got any complaints.<br />I don’t have any complaints.",
          "Has she got a reason?<br />Does she have a reason?",
          "Have they got a solution?<br />Do they have a solution?",
          "He hasn’t got any excuses.<br />He doesn’t have any excuses.",
          "Have you got a map?<br />Do you have a map?",
          "Has the company got a policy?<br />Does the company have a policy?",
          "Have they got any updates?<br />Do they have any updates?",
          "I haven’t got any information.<br />I don’t have any information.",
          "Has he got a license?<br />Does he have a license?",
          "Have you got any plans?<br />Do you have any plans?",
          "She hasn’t got any time.<br />She doesn’t have any time.",
          "Have they got a budget?<br />Do they have a budget?",
          "Has he got a solution?<br />Does he have a solution?",
          "Have you got any ideas?<br />Do you have any ideas?",
          "I haven’t got any questions.<br />I don’t have any questions.",
          "Has she got a ticket?<br />Does she have a ticket?",
          "Have they got a strategy?<br />Do they have a strategy?",
          "He hasn’t got any friends.<br />He doesn’t have any friends.",
          "Have you got a pen?<br />Do you have a pen?",
          "Has the team got a plan?<br />Does the team have a plan?",
          "Have they got any suggestions?<br />Do they have any suggestions?",
          "I haven’t got any doubts.<br />I don’t have any doubts.",
          "Has he got a solution?<br />Does he have a solution?",
          "Have you got any feedback?<br />Do you have any feedback?",
          "She hasn’t got any complaints.<br />She doesn’t have any complaints.",
          "Have they got a reason?<br />Do they have a reason?",
          "Has he got a backup plan?<br />Does he have a backup plan?",
          "Have you got any experience?<br />Do you have any experience?",
          "I haven’t got any excuses.<br />I don’t have any excuses.",
          "Has she got a partner?<br />Does she have a partner?",
          "Have they got a policy?<br />Do they have a policy?",
          "He hasn’t got any updates.<br />He doesn’t have any updates.",
          "Have you got a license?<br />Do you have a license?",
          "Has the company got a budget?<br />Does the company have a budget?",
          "Have they got any plans?<br />Do they have any plans?",
          "I haven’t got any time.<br />I don’t have any time.",
          "Has he got a strategy?<br />Does he have a strategy?",
          "Have you got any information?<br />Do you have any information?",
          "She hasn’t got any friends.<br />She doesn’t have any friends.",
          "Have they got a map?<br />Do they have a map?",
          "Has he got a policy?<br />Does he have a policy?",
          "Have you got any updates?<br />Do you have any updates?",
          "I haven’t got any plans.<br />I don’t have any plans.",
          "Has she got a solution?<br />Does she have a solution?",
          "Have they got a license?<br />Do they have a license?",
          "He hasn’t got any ideas.<br />He doesn’t have any ideas.",
          "Have you got a budget?<br />Do you have a budget?",
          "Has the team got a strategy?<br />Does the team have a strategy?",
          "Have they got any feedback?<br />Do they have any feedback?",
          "I haven’t got any suggestions.<br />I don’t have any suggestions.",
          "Has he got a reason?<br />Does he have a reason?",
          "Have you got any complaints?<br />Do you have any complaints?",
          "She hasn’t got a backup plan.<br />She doesn’t have a backup plan.",
          "Have they got a partner?<br />Do they have a partner?"
        ]
        
         },
    ],
    "data set 3": [
      {
        name: "Positive" as const,
        sentence: [
          "He hasn't got a car. He's got a bike.",
          "He hasn't got a dog. He's got a mobile phone.",
          "He hasn't got a watch. He's got two brothers and a sister.",
          "She hasn't got a laptop. She's got a tablet.",
          "She hasn't got a cat. She's got a fish.",
          "She hasn't got a microwave. She's got a toaster oven.",
          "He hasn't got a house. He's got an apartment.",
          "He hasn't got a TV. He's got a projector.",
          "He hasn't got a dishwasher. He's got a drying rack.",
          "They haven't got a garden. They've got a balcony.",
          "They haven't got a car. They've got bicycles.",
          "They haven't got a washing machine. They've got a laundromat nearby.",
          "She hasn't got long hair. She's got short hair.",
          "She hasn't got blue eyes. She's got brown eyes.",
          "She hasn't got pierced ears. She's got tattoos.",
          "He hasn't got a degree. He's got work experience.",
          "He hasn't got savings. He's got investments.",
          "He hasn't got a 9-to-5 job. He's got a freelance career.",
          "They haven't got a pool. They've got a hot tub.",
          "They haven't got a dining room. They've got a breakfast nook.",
          "They haven't got a garage. They've got a carport.",
          "She hasn't got allergies. She's got asthma.",
          "She hasn't got a gym membership. She's got home workout equipment.",
          "She hasn't got a driver's license. She's got a bus pass.",
          "He hasn't got a landline. He's got a smartphone.",
          "He hasn't got cable TV. He's got streaming services.",
          "He hasn't got a bookshelf. He's got an e-reader.",
          "They haven't got a big family. They've got close friends.",
          "They haven't got a vacation home. They've got timeshares.",
          "They haven't got pets. They've got plants.",
          "She hasn't got a high-paying job. She's got a fulfilling career.",
          "She hasn't got a lot of free time. She's got many hobbies.",
          "She hasn't got a car. She's got a motorcycle.",
          "He hasn't got a sweet tooth. He's got a preference for savory foods.",
          "He hasn't got a coffee maker. He's got a tea kettle.",
          "He hasn't got a desktop computer. He's got a laptop.",
          "They haven't got a traditional wedding. They've got a destination elopement planned.",
          "They haven't got a joint bank account. They've got separate finances.",
          "They haven't got children. They've got pets.",
          "She hasn't got a fear of heights. She's got a love for rock climbing.",
          "She hasn't got a gym membership. She's got outdoor exercise equipment.",
          "She hasn't got a lot of clothes. She's got a capsule wardrobe.",
          "He hasn't got a green thumb. He's got low-maintenance succulents."
        ]
        
        },
    ],
    "data set 4": [
      {
        name: "Positive" as const,
        sentence: [
          "Sarah doesn't have a car. She goes everywhere by bike.",
          "They like animals. They have three dogs and two cats.",
          "Charles isn't happy. He has a lot of problems.",
          "They are always busy. They don't have much free time.",
          "'What's wrong?' 'I have something in my eye.'",
          "'Where's my pen?' 'I don't know. I don't have it.'",
          "Amy wants to go to the concert, but she doesn't have a ticket.",
          "Tom doesn't have a job. He's been looking for work for months.",
          "They love music. They play guitar and piano every day.",
          "Lisa isn't feeling well. She has a bad cold.",
          "We don't have any milk. We need to go to the store.",
          "'What's the matter?' 'I have a terrible headache.'",
          "'Where's my phone?' 'I can't find it anywhere.'",
          "John wants to travel, but he doesn't have enough money.",
          "Mary doesn't have a boyfriend. She's happy being single.",
          "They enjoy cooking. They make dinner at home every night.",
          "Peter isn't satisfied. He wants a better job.",
          "We're always tired. We don't get enough sleep.",
          "'What's wrong?' 'I have a pain in my back.'",
          "'Where are my keys?' 'I don't know. I haven't seen them.'",
          "Emma wants to buy a new dress, but she doesn't have the budget.",
          "David doesn't have a passport. He can't travel abroad.",
          "They like reading. They have hundreds of books at home.",
          "Susan isn't confident. She has low self-esteem.",
          "We don't have any plans. We're free this weekend.",
          "'What's the problem?' 'I have a flat tire.'",
          "'Where's the remote?' 'I don't know. It's not on the table.'",
          "Mike doesn't have a degree. He's considering going back to school.",
          "They enjoy gardening. They grow their own vegetables.",
          "Karen isn't happy at work. She's thinking of changing jobs.",
          "We don't have any sugar. Can I borrow some from you?",
          "'What's wrong?' 'I have a stomachache.'",
          "'Where's my wallet?' 'I can't remember where I put it.'",
          "Alex wants to join the gym, but he doesn't have time.",
          "Sophie doesn't have any siblings. She's an only child.",
          "They love traveling. They visit a new country every year.",
          "Robert isn't motivated. He lacks direction in life.",
          "We're always late. We need to manage our time better.",
          "'What's the matter?' 'I have a sore throat.'",
          "'Where are my glasses?' 'I don't know. Have you checked your desk?'",
          "Olivia wants to move out, but she doesn't have enough savings.",
          "Jack doesn't have a driver's license. He relies on public transport.",
          "They enjoy painting. They have an art studio at home.",
          "Emily isn't comfortable in social situations. She has anxiety.",
          "We don't have any coffee. We forgot to buy it yesterday.",
          "'What's wrong?' 'I have a toothache.'",
          "'Where's the scissors?' 'I don't know. They're not in the drawer.'",
          "Nathan doesn't have a computer. He uses the library for research.",
          "They enjoy hiking. They explore new trails every weekend.",
          "Linda isn't satisfied with her appearance. She's considering a makeover.",
          "We don't have any clean dishes. We need to do the washing up.",
          "'What's the problem?' 'I have a rash on my arm.'",
          "'Where's my umbrella?' 'I can't find it anywhere.'",
          "Rachel wants to start a business, but she doesn't have the capital.",
          "Chris doesn't have any allergies. He can eat anything.",
          "They love photography. They have several expensive cameras.",
          "Mark isn't progressing in his career. He feels stuck.",
          "We're always arguing. We need to improve our communication.",
          "'What's wrong?' 'I have a splinter in my finger.'",
          "'Where are my headphones?' 'I don't know. I haven't seen them today.'",
          "Tina wants to adopt a dog, but she doesn't have permission from her landlord.",
          "George doesn't have a good credit score. He can't get a loan.",
          "They enjoy birdwatching. They have a bird feeder in their garden.",
          "Anna isn't confident in her abilities. She doubts herself often.",
          "We don't have any wrapping paper. We need to buy some for the gift.",
          "'What's the matter?' 'I have a cramp in my leg.'",
          "'Where's the remote control?' 'I don't know. It's not on the couch.'",
          "Paul doesn't have health insurance. He's worried about medical expenses.",
          "They enjoy swimming. They go to the pool three times a week.",
          "Sarah isn't happy with her living situation. She's looking for a new apartment.",
          "We don't have any eggs. We can't make pancakes for breakfast.",
          "'What's wrong?' 'I have a paper cut on my finger.'",
          "'Where's my jacket?' 'I can't remember where I hung it.'",
          "Kevin wants to travel abroad, but he doesn't have a valid passport.",
          "Lisa doesn't have any work experience. She's finding it hard to get a job.",
          "They love stargazing. They have a powerful telescope at home.",
          "Michael isn't confident in social situations. He feels awkward at parties.",
          "We're always overspending. We need to create a budget.",
          "'What's the problem?' 'I have a blister on my foot.'",
          "'Where are my car keys?' 'I don't know. Have you checked your coat pocket?'",
          "Emma wants to take piano lessons, but she doesn't have an instrument at home.",
          "Daniel doesn't have a good internet connection. He struggles with online classes.",
          "They enjoy rock climbing. They visit the climbing gym every week.",
          "Jessica isn't satisfied with her current relationship. She's considering breaking up.",
          "We don't have any clean towels. We need to do laundry.",
          "'What's wrong?' 'I have a mosquito bite that's really itchy.'",
          "'Where's the TV remote?' 'I don't know. It's not on the coffee table.'",
          "Andrew doesn't have enough experience. He can't apply for the senior position.",
          "They love cooking international cuisine. They try a new recipe every weekend.",
          "Melissa isn't happy with her weight. She's starting a new diet.",
          "We don't have any cash. We need to find an ATM.",
          "'What's the matter?' 'I have a slight fever.'",
          "'Where's my library card?' 'I can't find it in my wallet.'",
          "Ryan wants to buy a house, but he doesn't have enough for a down payment.",
          "Carol doesn't have many friends in her new city. She feels lonely sometimes.",
          "They enjoy gardening. They grow their own herbs and vegetables.",
          "Brian isn't satisfied with his current job. He's looking for new opportunities.",
          "We're always running out of gas. We need to fill up more often.",
          "'What's wrong?' 'I have a bruise on my knee from falling.'",
          "'Where are my sunglasses?' 'I don't know. Have you looked in your car?'",
          "Sophia wants to join the school play, but she doesn't have acting experience.",
          "Alan doesn't have a smartphone. He uses an old flip phone.",
          "They love playing board games. They have a large collection at home.",
          "Nicole isn't confident about her presentation. She's nervous about public speaking.",
          "We don't have any milk. We can't have cereal for breakfast.",
          "'What's the problem?' 'I have a hangnail that's bothering me.'",
          "'Where's my library book?' 'I don't know. It's not on your bookshelf.'"
        ]
           
      },
    ],
    "data set 5": [
      {
        name: "Positive" as const,
        sentence: [
          "I'm not feeling very well. I've got a headache.",
          "Everybody likes Tom. He's got a lot of friends.",
          "She can't open the door. She hasn't got a key.",
          "Quick! We haven't got much time.",
          "An insect has got six legs.",
          "I'm unemployed. I haven't got a job.",
          "I've got a sore throat today.",
          "They've got three cats at home.",
          "He hasn't got any money left.",
          "We've got a big test tomorrow.",
          "She's got beautiful blue eyes.",
          "The car's got a flat tire.",
          "I haven't got time for this nonsense.",
          "They've got a lovely garden.",
          "He's got a great sense of humor.",
          "We haven't got enough ingredients for the recipe.",
          "The house has got five bedrooms.",
          "She's got a lot of experience in marketing.",
          "I've got an important meeting at 2 PM.",
          "They haven't got any children.",
          "He's got a new job in the city.",
          "We've got to leave now or we'll be late.",
          "The restaurant's got excellent reviews.",
          "She hasn't got her driver's license yet.",
          "I've got a terrible toothache.",
          "They've got a problem with their computer.",
          "He's got a degree in engineering.",
          "We haven't got any milk left in the fridge.",
          "The movie's got amazing special effects.",
          "She's got a busy schedule this week.",
          "I've got butterflies in my stomach.",
          "They haven't got enough space in their apartment.",
          "He's got a talent for playing the piano.",
          "We've got to finish this project by Friday.",
          "The dog's got fleas.",
          "She hasn't got any siblings.",
          "I've got a great idea for a story.",
          "They've got a vacation planned for next month.",
          "He hasn't got much patience.",
          "We've got a leak in the roof.",
          "The company's got a strong reputation.",
          "She's got a fear of heights.",
          "I haven't got a clue how to solve this puzzle.",
          "They've got a lot of work to do.",
          "He's got a collection of rare coins.",
          "We haven't got any plans for the weekend.",
          "The building's got 20 floors.",
          "She's got a knack for languages.",
          "I've got a bad feeling about this.",
          "They haven't got enough seats for everyone.",
          "He's got a black belt in karate.",
          "We've got to make a decision soon.",
          "The concert's got a great lineup.",
          "She hasn't got any allergies.",
          "I've got a splitting headache.",
          "They've got a beautiful view from their balcony.",
          "He's got a lot of potential.",
          "We haven't got the right tools for the job.",
          "The team's got a good chance of winning.",
          "She's got a green thumb.",
          "I've got to run some errands.",
          "They haven't got much furniture in their new house.",
          "He's got a photographic memory.",
          "We've got a long way to go.",
          "The book's got an interesting plot twist.",
          "She hasn't got any experience in this field.",
          "I've got a surprise for you.",
          "They've got a strict policy on tardiness.",
          "He hasn't got a care in the world.",
          "We've got to find a solution quickly.",
          "The play's got excellent reviews.",
          "She's got a lot on her plate right now.",
          "I haven't got the heart to tell him the truth.",
          "They've got a spacious backyard.",
          "He's got a way with words.",
          "We haven't got enough information to make a decision.",
          "The hotel's got a swimming pool.",
          "She's got a natural talent for singing.",
          "I've got a hunch about this.",
          "They haven't got any pets.",
          "He's got a busy day ahead of him.",
          "We've got to be more careful in the future.",
          "The store's got a wide selection of products.",
          "She hasn't got time for a vacation this year.",
          "I've got a lot of catching up to do.",
          "They've got a tight budget this month.",
          "He's got a reputation for being difficult.",
          "We haven't got any other options.",
          "The restaurant's got a new menu.",
          "She's got a flair for interior design.",
          "I've got to make a phone call.",
          "They haven't got enough evidence to prove their case.",
          "He's got a lot of responsibility at work.",
          "We've got to start from scratch.",
          "The movie's got a star-studded cast.",
          "She hasn't got any regrets about her decision.",
          "I've got a full schedule today.",
          "They've got a long history together.",
          "He hasn't got the necessary qualifications.",
          "We've got to face the facts.",
          "The party's got a great atmosphere.",
          "She's got a knack for problem-solving.",
          "I haven't got the energy for this right now.",
          "They've got a strong team this year.",
          "He's got a lot of influence in the industry.",
          "We've got to make the best of the situation."
        ]
          
      },
    ],
  },
];

export default data;