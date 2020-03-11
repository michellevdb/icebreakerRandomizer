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
    'If animals could talk, which would be the rudest?'
    
]

function newQuestion() {
    var randomNumber = Math.floor(Math.random() * (questions.length));
    document.getElementById('question-display').innerHTML = questions[randomNumber]
}

