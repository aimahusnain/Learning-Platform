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
          "Excuse me, do you speak English?",
          "‘Where’s Tom?’ ‘He is having a shower.’",
          "I don’t watch TV very often.",
          "Listen! Somebody is singing.",
          "Sarah is tired. She wants to go home now.",
          "How often do you use your car? Every day?",
          "‘Excuse me, but you are sitting in my seat.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t understand. Can you speak more slowly?",
          "It’s late. I am going home now. Are you coming with me?",
          "What time does your father finish work every day?",
          "You can turn off the radio. I am not listening to it.",
          "‘Where’s Paul?’ ‘In the kitchen. He is cooking something.’",
          "Mark doesn’t usually drive to work. He usually walks.",
          "Sue doesn’t like coffee. She prefers tea.",
          "Excuse me, do you have a pen?",
          "‘Where’s Sarah?’ ‘She is reading a book.’",
          "I don’t eat meat very often.",
          "Look! The cat is climbing the tree.",
          "John is hungry. He wants to eat something.",
          "How often do you go to the gym? Every week?",
          "‘Excuse me, but you are blocking my view.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t remember your name.",
          "It’s getting late. I am leaving now. Are you staying here?",
          "What time does the train arrive every day?",
          "You can close the window. I am not feeling cold.",
          "‘Where’s Mike?’ ‘In the garage. He is fixing his car.’",
          "Anna doesn’t usually eat breakfast. She usually drinks coffee.",
          "Tom doesn’t like tea. He prefers coffee.",
          "Excuse me, do you know the time?",
          "‘Where’s Emma?’ ‘She is talking on the phone.’",
          "I don’t go to the cinema very often.",
          "Listen! The birds are singing.",
          "Lisa is tired. She wants to rest.",
          "How often do you travel abroad? Every year?",
          "‘Excuse me, but you are standing on my foot.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t understand this question.",
          "It’s dark. I am turning on the light. Are you staying here?",
          "What time does the shop open every day?",
          "You can turn off the TV. I am not watching it.",
          "‘Where’s Jane?’ ‘In the kitchen. She is baking a cake.’",
          "Mark doesn’t usually drink soda. He usually drinks water.",
          "Sue doesn’t like chocolate. She prefers fruit.",
          "Excuse me, do you have a map?",
          "‘Where’s the dog?’ ‘It is sleeping in its bed.’",
          "I don’t read newspapers very often.",
          "Watch out! The car is coming.",
          "David is thirsty. He wants a drink.",
          "How often do you visit your family? Every month?",
          "‘Excuse me, but you are using my pen.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t know the answer.",
          "It’s raining. I am taking an umbrella. Are you coming with me?",
          "What time does the bus leave every day?",
          "You can turn off the light. I am not reading.",
          "‘Where’s Peter?’ ‘In the garden. He is planting flowers.’",
          "Lucy doesn’t usually wear jeans. She usually wears dresses.",
          "Tom doesn’t like fish. He prefers chicken.",
          "Excuse me, do you have a ticket?",
          "‘Where’s the cat?’ ‘It is hiding under the bed.’",
          "I don’t drink coffee very often.",
          "Look! The children are playing in the park.",
          "Sarah is cold. She wants a blanket.",
          "How often do you exercise? Every day?",
          "‘Excuse me, but you are sitting in my seat.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t hear you. Can you repeat that?",
          "It’s late. I am going to bed. Are you staying up?",
          "What time does the movie start every day?",
          "You can turn off the fan. I am not hot.",
          "‘Where’s John?’ ‘In the living room. He is watching TV.’",
          "Anna doesn’t usually eat lunch. She usually eats dinner.",
          "Sue doesn’t like milk. She prefers juice.",
          "Excuse me, do you have a phone charger?",
          "‘Where’s the baby?’ ‘It is sleeping in the crib.’",
          "I don’t write letters very often.",
          "Listen! The wind is blowing.",
          "John is hungry. He wants a sandwich.",
          "How often do you clean your house? Every week?",
          "‘Excuse me, but you are blocking the door.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t believe you.",
          "It’s sunny. I am wearing sunglasses. Are you coming with me?",
          "What time does the train depart every day?",
          "You can turn off the heater. I am not cold.",
          "‘Where’s Lisa?’ ‘In the bathroom. She is brushing her teeth.’",
          "Mark doesn’t usually drink coffee. He usually drinks tea.",
          "Tom doesn’t like vegetables. He prefers meat.",
          "Excuse me, do you have a spare key?",
          "‘Where’s the bird?’ ‘It is flying in the sky.’",
          "I don’t use my phone very often.",
          "Watch out! The dog is barking.",
          "David is tired. He wants to sleep.",
          "How often do you read books? Every month?",
          "‘Excuse me, but you are standing in my way.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t recognize you.",
          "It’s cold. I am wearing a coat. Are you coming with me?",
          "What time does the store close every day?",
          "You can turn off the music. I am not listening to it.",
          "‘Where’s Emma?’ ‘In the kitchen. She is making dinner.’",
          "Lucy doesn’t usually wear makeup. She usually goes natural.",
          "Tom doesn’t like soda. He prefers water.",
          "Excuse me, do you have a moment?",
          "‘Where’s the fish?’ ‘It is swimming in the tank.’",
          "I don’t go to the gym very often.",
          "Listen! The rain is falling.",
          "Sarah is thirsty. She wants a drink.",
          "How often do you visit your friends? Every week?",
          "‘Excuse me, but you are using my computer.’ ‘Oh, I’m sorry.’",
          "I’m sorry, I don’t remember your face.",
          "It’s getting late. I am leaving now. Are you staying here?",
          "What time does the bus arrive every day?",
          "You can turn off the radio. I am not listening to it.",
          "‘Where’s Paul?’ ‘In the kitchen. He is cooking something.’",
          "Mark doesn’t usually drive to work. He usually walks.",
          "Sue doesn’t like coffee. She prefers tea.",
          "Excuse me, do you have a map?",
          "‘Where’s the dog?’ ‘It is sleeping in its bed.’"
      ]
      
        },
    ],
    "data set 4": [
      {
        name: "Positive" as const,
        sentence: [
          "‘Do you speak English?’ ‘Yes, a little.’",
          "Sometimes we go away at weekends.",
          "It’s a nice day today. The sun is shining.",
          "(You meet Kate in the street.) Hello, Kate. Where are you going?",
          "How often do you go on holiday?",
          "Emily is a writer. She writes books for children.",
          "I never read newspapers.",
          "‘Where are Mark and Laura?’ ‘They’re watching TV in the living room.’",
          "Helen is in her office. She’s talking to somebody.",
          "What time do you usually have dinner?",
          "Joe isn’t at home at the moment. He’s visiting some friends.",
          "‘Would you like some tea?’ ‘No, thank you. I don’t drink tea.’",
          "‘Do you play the piano?’ ‘Yes, a little.’",
          "Sometimes we go hiking in the mountains.",
          "It’s a beautiful evening. The stars are shining.",
          "(You see John at the park.) Hi, John. Where are you going?",
          "How often do you visit your grandparents?",
          "Michael is a chef. He cooks delicious meals.",
          "I rarely watch movies.",
          "‘Where are Sarah and Tom?’ ‘They’re playing in the garden.’",
          "David is in his room. He’s reading a book.",
          "What time do you usually wake up?",
          "Anna isn’t at school today. She’s visiting her grandmother.",
          "‘Would you like some coffee?’ ‘No, thank you. I don’t drink coffee.’",
          "‘Do you like chocolate?’ ‘Yes, very much.’",
          "Sometimes we go swimming in the lake.",
          "It’s a warm afternoon. The birds are singing.",
          "(You see Emma at the store.) Hi, Emma. What are you buying?",
          "How often do you go to the gym?",
          "Lisa is a teacher. She teaches math.",
          "I never eat fast food.",
          "‘Where are Jack and Jill?’ ‘They’re studying in the library.’",
          "Helen is in the kitchen. She’s baking a cake.",
          "What time do you usually go to bed?",
          "Tom isn’t at work today. He’s helping his friend move.",
          "‘Would you like some water?’ ‘No, thank you. I’m not thirsty.’",
          "‘Do you play soccer?’ ‘Yes, every weekend.’",
          "Sometimes we go camping in the forest.",
          "It’s a chilly morning. The wind is blowing.",
          "(You see Mike at the gym.) Hi, Mike. What are you doing?",
          "How often do you read books?",
          "Sarah is a doctor. She helps people.",
          "I rarely drink soda.",
          "‘Where are Ben and Lucy?’ ‘They’re shopping at the mall.’",
          "Mark is in the garage. He’s fixing his bike.",
          "What time do you usually start work?",
          "Jane isn’t at home right now. She’s visiting her aunt.",
          "‘Would you like some juice?’ ‘No, thank you. I don’t like juice.’",
          "‘Do you play chess?’ ‘Yes, sometimes.’",
          "Sometimes we go fishing at the river.",
          "It’s a foggy day. The mist is rising.",
          "(You see Alice at the café.) Hi, Alice. What are you drinking?",
          "How often do you go to the movies?",
          "John is a lawyer. He works in an office.",
          "I never eat breakfast.",
          "‘Where are Sam and Emma?’ ‘They’re walking in the park.’",
          "Laura is in the garden. She’s planting flowers.",
          "What time do you usually finish work?",
          "Peter isn’t at the office today. He’s attending a conference.",
          "‘Would you like some milk?’ ‘No, thank you. I’m lactose intolerant.’",
          "‘Do you play basketball?’ ‘Yes, with my friends.’",
          "Sometimes we go skiing in the winter.",
          "It’s a rainy afternoon. The rain is pouring.",
          "(You see Tom at the library.) Hi, Tom. What are you reading?",
          "How often do you visit the museum?",
          "Emily is an artist. She paints beautiful pictures.",
          "I rarely drink coffee.",
          "‘Where are Kate and John?’ ‘They’re having lunch at a restaurant.’",
          "David is in the living room. He’s watching a movie.",
          "What time do you usually leave the house?",
          "Anna isn’t at the gym today. She’s feeling sick.",
          "‘Would you like some bread?’ ‘No, thank you. I’m on a diet.’",
          "‘Do you play the guitar?’ ‘Yes, every day.’",
          "Sometimes we go running in the park.",
          "It’s a snowy evening. The snow is falling.",
          "(You see Sarah at the market.) Hi, Sarah. What are you buying?",
          "How often do you go to the beach?",
          "Michael is a musician. He plays the piano.",
          "I never drink alcohol.",
          "‘Where are Lisa and Tom?’ ‘They’re dancing at the club.’",
          "Helen is in the office. She’s writing a report.",
          "What time do you usually get home?",
          "Tom isn’t at the park today. He’s studying for an exam.",
          "‘Would you like some soup?’ ‘No, thank you. I’m not hungry.’",
          "‘Do you play video games?’ ‘Yes, in my free time.’",
          "Sometimes we go biking in the countryside.",
          "It’s a windy day. The leaves are falling.",
          "(You see John at the bus stop.) Hi, John. Where are you going?",
          "How often do you visit your friends?",
          "Lisa is a nurse. She takes care of patients.",
          "I rarely eat dessert.",
          "‘Where are Mark and Anna?’ ‘They’re jogging in the park.’",
          "David is in the kitchen. He’s making dinner.",
          "What time do you usually wake up?",
          "Anna isn’t at the store today. She’s working from home.",
          "‘Would you like some ice cream?’ ‘No, thank you. I’m full.’",
          "‘Do you play the drums?’ ‘Yes, in a band.’",
          "Sometimes we go sailing on the lake.",
          "It’s a cloudy morning. The sky is grey.",
          "(You see Emma at the gym.) Hi, Emma. What are you doing?",
          "How often do you read the newspaper?",
          "Sarah is a scientist. She conducts experiments.",
          "I never drink tea.",
          "‘Where are Ben and Lucy?’ ‘They’re shopping at the mall.’",
          "Mark is in the garage. He’s fixing his car.",
          "What time do you usually start work?",
          "Jane isn’t at home right now. She’s visiting her aunt.",
          "‘Would you like some juice?’ ‘No, thank you. I don’t like juice.’",
          "‘Do you play chess?’ ‘Yes, sometimes.’",
          "Sometimes we go fishing at the river.",
          "It’s a foggy day. The mist is rising.",
          "(You see Alice at the café.) Hi, Alice. What are you drinking?"
      ]      
      },
    ],
  },
];

export default data;
