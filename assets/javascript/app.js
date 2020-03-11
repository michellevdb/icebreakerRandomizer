var questions = [
    'What is the funniest name you have actually heard used in the real world?',
    'What is the sexiest name you can imagine?',
    'What is the least sexy name you have ever heard?',
    'What sport would be the funniest to add a mandatory amount of alcohol to?',
    'If you could replace all of the grass in the world with something else, what would it be?',
    'If you had to choose one animal to help you win a fight, which animal would you choose?',
    'If you could morph two animals to make one super animal, what two animals would you choose? Why?',
    'What movie would be greatly improved if it was made into a musical?',
    'If you could choose one musical artist to marry but could never listen to their music again, who would it be?',
    'If your five-year-old self suddenly found themselves inhabiting your current body, what would your five-year-old self do first?',
    'What is something that everyone looks stupid doing?',
    'Have you ever sent a text message to the wrong person?',
    'What are three items you could buy together at the grocery store to make the cashier laugh?',
    'Have you ever caught something on fire while you were cooking?',
    'What is something that is really popular now, but in 5 years everyone will look back on and be embarrassed by?',
    'What is your most embarrassing moment from high school?',
    'What is something you refuse to share?',
    'What would be the hat to end all hats? What could you wear on your head that would make people stop what they are doing and stare in awe and amazement?',
    'What is your favorite dance move to do when you are at the club?',
    'What would your favorite dance move be if you were at a wedding?',
    'If animals could talk, which would be the rudest?',
    'Which animal do you think would be the most polite?',
    'In 40 years what will people be nostalgic for?',
    'What inanimate object do you wish you could eliminate from existence?',
    'What are some things that are okay to occasionally but definitely not okay to do every day?',
    'What is the weirdest thing you have seen in someone else’s home?',
    'Who do you know that really reminds you of a character in a TV show or movie?',
    'What would be the coolest animal to scale up to the size of a horse?',
    'What is the most embarrassing thing you have ever worn?',
    'If you could kill off any character from a current TV show who would it be and why?',
    'What part of a kid’s movie completely scarred you?',
    'What kid’s movie did you think was too scary when you were a child?',
    'What used to be considered trashy but now is very classy?',
    'If you had the power to shrink any one object and carry it with yo in your pocket, which item would it be?',
    'If you were arrested with no explanation, what would your friends and family assume you had done?',
    'What’s the most ridiculous fact you know?',
    'What set of items could you buy that would make the cashier the most uncomfortable?',
    'What is the funniest joke you know by heart?',
    'What are the unwritten rules of where you work?',
    'What is something that you just recently realized that you are embarrassed you didn’t realize earlier?',
    'What is the funniest corporate / business screw up you have heard of?',
    'If you die and find out that everyone gets to choose a twelve-foot by twelve-foot square to stay in alone for eternity without being able to influence or contact the living world, what twelve-foot by twelve-foot square would you choose?',
    'What’s the best type of cheese?',
    'If you were kind/queen for a day, what would be your first rule that you would change?',
    'What kind of cult would you like to start?',
    'In one sentence, how would you sum up the internet?',
    'First think of a product. Now, what would be the absolute worst brand name for one of those products?',
    'If the all the States in the USA were represented by food, what food would each state be represented by?',
    'What are some of the nicknames you have for customers or coworkers?',
    'What would be the absolute worst name you could give your child?',
    'What are some fun and interesting alternatives to war that countries could settle their differences with?',
    'What would the world be like if it was filled with male and female copies of you?',
    'What’s the best Wi-Fi name you’ve seen?',
    'If you would create a holiday, what would it be called and how would we celebrate it? When would this holiday be?',
    'If you had to give up one thing that you do every day, what would it be?',
    'If life were a video game, what would some of the cheat codes be?',
    'How many chickens would it take to kill an elephant?',
    'What would be the worst “buy one get one free” sale of all time?',
    'Is a hotdog a sandwich?',
    'What secret conspiracy would you like to start?',
    'What would be the worst thing for the government to make illegal?',
    'Which body part do you wish you could detach and why?',
    'What’s the weirdest thing a guest has done at your house?',
    'If you had to give up either brushing your teeth or brushing your hair every day, which one would you choose?',
    'What’s invisible but you wish people could see?',
    'What movie completely changes its plot when you change one letter in its title? What’s the new movie about?',
    'If you were a pair of shoes, what kind of shoes would you be?',
    'If you were held at gunpoint and told that if you didn’t impress them with your dance moves you would be killed, what dance moves would you bust out?',
    'Would you rather be a hobbit or an elf for a day? What is the first thing you would do?',
    'If you had to replace your hands with something other than hands, hooks, or claws, what would you choose and why?',
    'Where is the strangest place you’ve urinated or defecated?',
    'In the event of the apocalypse, what three places are you going to first to gather supplies?',
    'During the apocalypse, what supplies are the most important (besides weapons and food)? If you manage to survive the apocalypse, what will your new job title be?',
    'In the apocalypse, would you rather tough it alone or try to find a community to live in?',
    'What’s the weirdest smell you have ever smelled?',
    'What mythical creature would improve the world most if it existed?',
    'Would you go streaking across the field at a sporting event for a thousand dollars, even if there was a 50/50 chance you could get arrested for indecent exposure?',
    'What is the silliest/most embarrassing thing you have done while drinking?',
    'What is your favorite drinking game to play and why?',
    'If you could have an unlimited storage space full of one thing, what would it be?',
    'How do you feel about putting pineapple on pizza?',
    'Do you fold your pizza when you eat it?',
    'If you had to become an inanimate object for a year, what object would it be?',
    'If you could only eat one food item for the rest of your life, what would it be?',
    'You’re a mad scientist, what scientific experiment would you run if money and ethics weren’t an issue?',
    'What two totally normal things become really weird if you do them back to back?',
    'If peanut butter wasn’t called peanut butter, what would it be called?',
    'If a hacker hacked into your computer and was threatening to release your browser history to your friends and family, how much would you pay them to avoid it?',
    'What would be the creepiest thing you could say while passing a stranger on the street?',
    'What ridiculous and untrue, yet slightly plausible, theories can you come up with for the cause of common ailments like headaches or cavities?',
    'What’s the most imaginative insult you can come up with?',
    'If you were wrongfully put into an insane asylum, how would you convince them that you’re actually sane and not just pretending to be sane?',
    'What would be the best-worst name for different types of businesses? (dry cleaners, amusement parks, etc.)',
    'If you were a street fighter, what would your theme song be and why?',
    'If you were transported 400 years into the past with no clothes or anything else, how would you prove that you were from the future?',
    'Toilet paper, over or under?',
    'What fictional character is amazing in their book / show / movie, but would be insufferable if you had to deal with them in mundane everyday situations?',
    'What are some fun ways to answer everyday questions like “how’s it going” or “what do you do”?',
    'What would some fairytales be like if they took place in the present and included modern technology and culture?',
    'Is cereal soup?',
    'If over time you replace parts on a car, at what point does it stop being the same car you bought? How many parts do you need to replace to make it a new car?',
    'If someone asked to be your apprentice and learn all that you know, what would you teach them?',
    'What’s the best inside joke you’ve been a part of?',
    'What are the three best things about you that you wouldn’t put in your bio on a dating profile?',
    'On a scale of 1-10, how strict are/were your parents?',
    'Were your parents more or less strict on you than they were your siblings?',
    'Who was your worst teacher? Why?',
    'Who was your favorite teacher? Why?',
    'Which would you pick: being world-class attractive, a genius or famous for doing something great?',
    'Who are the 3 greatest living musicians?',
    'What was your favorite toy growing up?',
    'Who is a celebrity you admire and why?',
    'What is one animal that you are really afraid of?',
    'What movie completely changes its plot when you change one letter in the movie title?',
    'Who is a celebrity that you think shouldn’t be famous?',
    'What accomplishment are you most proud of?',
    'Would you rather sweat melted cheese or have snakes for hair?',
    'Which of your friends are you proudest of? Why?',
    'What’s the most beautiful place you’ve ever been?',
    'If you had to work but didn\'t need the money what would you choose to do?',
    'What are your 3 favorite movies?',
    'Would you rather have to eat a bowl full of cricket or a bowl full of worms?',
    'If you could dis-invent one thing, what would it be?',
    'Which historical figure would you like to be?',
    'What do you think the right age is to get married?',
    'Would you rather have a rare disease that makes you always say everything that is on your mind or lose the ability to ever speak again?',
    'Tell me 3 things you remember about kindergarten.',
    'What paper that you’ve written are you most proud of?',
    'What would you do if you were invisible for a day?',
    'Who would you like to live like for a day?',
    'If you could time travel, where would you go?',
    'If you could live in any TV home, what would it be?',
    'What’s your favorite ice cream flavor?',
    'Would you rather shoot spaghetti out of your fingers or sneeze meatballs?',
    'Would you rather live for a week in the past or the future?',
    'What’s your best childhood memory?',
    'What’s your favorite holiday?',
    'If you could eat only 3 foods for the rest of your life, what would they be?',
    'If you could be a cartoon character for a week, who would you be?',
    'Would you rather have x-ray vision or the ability to always know when someone is lying to you?',
    'If you could have dinner with anyone from history, who would it be?',
    'What’s one choice you really regret?',
    'What’s your favorite childhood book?',
    'What’s a great book you’ve read recently?',
    'Do you feel like a leader or a follower?',
    'If you could ask your pet 3 questions, what would they be?',
    'What’s the most courageous thing you’ve ever done?',
    'Who would play you in a movie of your life?',
    'If you could be an Olympic athlete, in what sport would you compete?',
    'If you had to live in a different state, what would it be?',
    'What living person, other than family members, do you most admire?',
    'What has been your favorite family vacation?',
    'If you could choose your own nickname, what would it be?',
    'Who is the funniest person you know?',
    'What’s your favorite thing about one of your grandparents?',
    'Tell the person to your right your favorite thing about them.',
    'Do you ever talk to yourself? When and what do you say?',
    'When you’re having a bad day, what do you do to make yourself feel better?',
    'Which TV family is most like your own?',
    'What’s your favorite smell in the whole world?',
    'What do you think is the greatest invention of all time?',
    'Using one word, how would you describe your family?',
    'Would you rather win an Olympic medal, an Academy Award or the Nobel Peace prize?',
    'What’s your favorite time of day?',
    'What’s your favorite season?',
    'What’s the one food you could never bring yourself to eat?',
    'If you could read minds, how would you use the gift?',
    'What is the sound you love the most?',
    'What 3 famous people, living or dead, would you want at your fantasy dinner party?',
    'If you could ask the President one question, what would it be?',
    'Have you ever accidentally been caught in your birthday suit?',
    'If you could pick a new first name, what would it be?',
    'If you had to leave earth on a spaceship and take 4 friends with you, who would they be?',
    'Have you ever noticed that easy open packages are actually pretty hard to open?',
    'What is your favorite movie quote?',
    'If you won a trip to anywhere in the world, where would you go?',
    'What’s your pet peeve(s)?',
    'Do you sleep with your sheets tucked in or out?',
    'Do you ever count your steps when you walk?',
    'What’s your favorite kind of sandwich?',
    'What’s your dream job?',
    'Cake or pie?',
    'Who is the kindest person you know?',
    'Would you rather have noisy neighbors or nosy neighbors?',
    'What’s the best part about having siblings?',
    'What is the scariest movie you’ve ever seen?',
    'Would you rather live somewhere where it is always winter or where it is always summer?',
    'If you could travel anywhere in the world, where would it be?',
    'What is your favorite family tradition?',
    'Would you rather eat a stick of butter or snort a tablespoon of salt?',
    'Who’s your celebrity crush?',
    'What trait do you like the most about yourself?',
    'What are you good at?',
    'What fictional character do you wish you could meet?',
    'If you could be great at one sport which would you choose?',
    'What’s the first thing you do when you get home from a trip?',
    'Would you rather spend five days exploring Disney or New York City?',
    'Would you rather have a third eye or a third arm?',
    'Could you go a week without your smart phone?',
    'Whose parents do/did you wish you had?',
    'If you could shop for free at one store, which one would you choose?',
    'How did you get out of being in trouble when you were a child?',
    'Have you ever been banned from a public place? If so, why?',
    'Would you rather only be able to whisper or only be able to yell everything?',
    'Did you ever skip school as a child?',
    'What personal trait has gotten you in the most trouble?',
    'Which celebrity chef would you most like to fix you a meal?',
    'Who is your favorite athlete?',
    'What is the best piece of advice you’ve received?',
    'If you had to pick a new name for yourself, what name would you pick?',
    'Would you rather be the most popular kid in school or the smartest kid in school?',
    'If it had to be something in this room, what would your zombie apocalypse weapon be?',
    'What do you like to do on a rainy day?',
    'What is the stupidest way you have ever hurt yourself?',
    'Would you rather be the best player on a horrible team or the worst player on a great team?',
    'What is your favorite animal sound?',
    'If you could choose any animal to be your permanent sidekick, what animal would it be?',
    'What is your favorite thing about the beach?',
    'If you had to suddenly flee the country, where would you live and why?',
    'If you could be anywhere else right now, where would it be?',
    'What is your favorite Disney movie?',
    'What is the worst date you’ve ever been on and how long did it last?',
    'Which of the Seven Dwarfs is most like you?',
    'If someone made a movie of your life would it be a drama, a comedy, a romantic-comedy, action film, or science fiction?',
    'How would you take down Kanye West’s ego?',
    'Name a product or service you love so much that you’d happily be that company’s spokesperson.',
    'If you could choose between using a time machine to go back in time or to go into the future, which would you choose?',
    'If you could use a time machine to go back into your past and fix one thing, what would it be and how would it change your future?',
    'What is the sickest you have ever been?',
    'If you were guaranteed to be successful in a different profession, what would you want to do?',
    'Do you believe in ghosts and would you ever go ghost hunting?',
    'Whats the stupidest thing you\'ve ever been dared to do?',
    'Would you rather have unlimited sushi or unlimited tacos for life?',
    'What would you say to the President if you had the chance?',
    'How do you handle people you don’t like?',
    'If you could have a conversation with any one of our world leaders, who would it be and why?',
    'As a child, what did you wish to become when you grew up?',
    'What’s the worst thing you did as a kid?',
    'What movie title best explains your life right now and why?',
    'What product would you stockpile if you found out they weren\'t going to sell it anymore?',
    'What is your favorite day of the week?',
    'If you had to either shave your head or dye all of your hair pink, which would you choose?',
    'If you could have plastic surgery to enlarge one part of you body, what would it be?',
    'If you had to marry one Star Wars character, which one would you choose?',
    'If you had to wear one halloween costume every day for the rest of your life, what would you be?',
    'If you could be a fly on the wall, where would you land?',
    'If you had to choose one cartoon character to be your best friend, what character would you choose?',
    'Imagine you owned a five star restaurant. What would you serve and what would the name of the restaurant be?',
    'If you could have any animal as a tame pet, what would you choose?',
    'If you had one million dollars to build anything you wanted, what would you build and why?'


]


function newQuestion() {
    var randomNumber = Math.floor(Math.random() * (questions.length));
    document.getElementById('question-display').innerHTML = questions[randomNumber]
}

