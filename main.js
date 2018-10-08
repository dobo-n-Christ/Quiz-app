'use strict';

//this defines an array of objects; each object holds the question, answers, correct answer, answer value, and images
const STORE = [
    {
        question: 'What is the difference between an oxford shoe and a derby shoe?',
        choices: [
            'An oxford must have either a plain toe or a cap toe, whereas a derby must be a wingtip',
            'An oxford has an open lacing system, whereas a derby has a closed lacing system',
            'An oxford has a closed lacing system, whereas a derby has an open lacing system',
            'The oxford is worn by University of Oxford students, whereas the derby is worn by Kentucky Derby jockeys'
        ],
        correctAnswer: 'An oxford has a closed lacing system, whereas a derby has an open lacing system',
        correctAnswerValue: 'choice-c',
        src1: 'https://i.imgur.com/49Kb3pl.png',
        alt1: 'a pair of light brown full-brogue wingtip oxford shoes',
        src2: 'https://i.imgur.com/6Xys86c.png',
        alt2: 'a pair of brown semi-brogue wingtip derby shoes',
        src3: 'https://i.imgur.com/8i6r1Y3.png',
        alt3: 'a pair of dark brown full-brogue wingtip oxford shoes',
        src4: 'https://i.imgur.com/1sHtFfa.png',
        alt4: 'a pair of dark bordeaux semi-brogue wingtip derby shoes',
    },
    {
        question: 'Which of the following does not have laces?',
        choices: [
            'The balmoral',
            'The monk strap',
            'The blucher',
            'The adelaide'
        ],
        correctAnswer: 'The monk strap',
        correctAnswerValue: 'choice-b',
        src1: 'https://i.imgur.com/SUxuDUq.png',
        alt1: 'a pair of light brown single-monkstrap shoes with medallion broguing on the toe',
        src2: 'https://i.imgur.com/RT2HL8X.png',
        alt2: 'a pair of dark burgundy brown quarter-brogue cap-toe double-monkstrap shoes',
        src3: 'https://i.imgur.com/cgW6A54.png',
        alt3: 'a pair of black plain-toe double-monkstrap shoes',
        src4: 'https://i.imgur.com/AHhRpfC.png',
        alt4: 'a pair of blue plain-toe single-monkstrap shoes',
    },
    {
        question: 'Which of the following is considered the most formal?',
        choices: [
            'The derby',
            'The loafer',
            'The blucher',
            'The oxford'
        ],
        correctAnswer: 'The oxford',
        correctAnswerValue: 'choice-d',
        src1: 'https://i.imgur.com/YRzLPVi.png',
        alt1: 'a pair of light brown quarter-brogue cap-toe derby shoes',
        src2: 'https://i.imgur.com/OzvYi3E.png',
        alt2: 'a pair of blue split-toe loafer shoes',
        src3: 'https://i.imgur.com/35101z6.png',
        alt3: 'a pair of light brown apron-toe penny loafer shoes',
        src4: 'https://i.imgur.com/4I2IUsJ.png',
        alt4: 'assorted views from different angles of the right shoe of a cherry red quarter-brogue cap-toe adelaide oxford and a dark blue semi-brogue cap-toe oxford',
    },
    {
        question: 'What is broguing?',
        choices: [
            'The process of resoling and reconditioning a shoe to prolong its utility',
            'Small decorative holes or perforations punched into a shoe’s toe cap and/or seams',
            'Another name for straight bar lacing, a method of shoe lacing resulting in parallel lace lines',
            'To vomit on one’s shoes'
        ],
        correctAnswer: 'Small decorative holes or perforations punched into a shoe’s toe cap and/or seams',
        correctAnswerValue: 'choice-b',
        src1: 'https://i.imgur.com/tNvd9h1.png',
        alt1: 'a pair of light brown semi-brogue wholecut oxford shoes with medallion broguing on the toe',
        src2: 'https://i.imgur.com/MLD2oQo.png',
        alt2: 'a pair of dark purplish bordeaux semi-brogue adelaide oxford shoes',
        src3: 'https://i.imgur.com/9UKZ57w.png',
        alt3: 'a pair of dark bordeaux semi-brogue wingtip adelaide oxford shoes',
        src4: 'https://i.imgur.com/q7fSJqb.png',
        alt4: 'a pair of red semi-brogue wholecut oxford shoes with medallion broguing on the toe',
    },
    {
        question: 'Rank the following styles in order of most formal to least formal.',
        choices: [
            'Wholecut, cap toe, wingtip, loafer',
            'Cap toe, wingtip, wholecut, loafer',
            'Wingtip, cap toe, loafer, wholecut',
            'Wingtip, wholecut, cap toe, loafer'
        ],
        correctAnswer: 'Wholecut, cap toe, wingtip, loafer',
        correctAnswerValue: 'choice-a',
        src1: 'https://i.imgur.com/u4xPNqB.png',
        alt1: 'a pair of black plain-toe wholecut oxford shoes',
        src2: 'https://i.imgur.com/0JXmb8T.png',
        alt2: 'a pair of black quarter-brogue cap-toe oxford shoes',
        src3: 'https://i.imgur.com/3FyXh9I.png',
        alt3: 'a pair of black full-brogue wingtip oxford shoes',
        src4: 'https://i.imgur.com/l02MzKF.png',
        alt4: 'a pair of black apron-toe penny loafer shoes',
    },
    {
        question: 'What is a wholecut?',
        choices: [
            'A slip-on shoe without laces or eyelet facing, cut so that the whole upper portion of the foot may be seen',
            'A shoe made to be worn every day for the entirety of one’s life',
            'An oxford whose upper is made entirely from one piece of leather, resulting in a shoe construction without seams',
            'A particular cut of steak one may wholly ingest while wearing nice shoes'
        ],
        correctAnswer: 'An oxford whose upper is made entirely from one piece of leather, resulting in a shoe construction without seams',
        correctAnswerValue: 'choice-c',
        src1: 'https://i.imgur.com/EBpH6xt.png',
        alt1: 'a pair of green plain-toe wholecut oxford shoes',
        src2: 'https://i.imgur.com/HBPa6sL.png',
        alt2: 'a pair of dark bordeaux (nearly black) plain-toe wholecut oxford shoes',
        src3: 'https://i.imgur.com/e1ewFjw.png',
        alt3: 'a pair of grey plain-toe wholecut oxford shoes',
        src4: 'https://i.imgur.com/nod5MwQ.png',
        alt4: 'a pair of oxblood plain-toe wholecut oxford shoes',
    },
    {
        question: 'Which type of shoe construction is NEVER utilized in high-quality dress shoes?',
        choices: [
            'Goodyear welted sole',
            'Cemented or glued sole',
            'Blake stitched sole',
            'Norwegian stitched sole'
        ],
        correctAnswer: 'Cemented or glued sole',
        correctAnswerValue: 'choice-b',
        src1: 'https://i.imgur.com/pwyeQ97.png',
        alt1: 'a wall covered with bespoke wooden shoe lasts, three-dimensional patterns of feet around which shoes are shaped',
        src2: 'https://i.imgur.com/nJCAzg9.png',
        alt2: 'a piece of leather, shoemaking tools, and an unfinished black derby shoe with threads attached',
        src3: 'https://i.imgur.com/qD7lhZw.png',
        alt3: 'A shoemaker using a sewing machine to attach the welt to the sole of a shoe',
        src4: 'https://i.imgur.com/Sd6f09c.png',
        alt4: 'top: a green and yellow patina being applied to leather; bottom: the green and yellow leather being molded and sewn around a last to form a shoe',
    },
    {
        question: 'Which of the following is NOT appropriate to wear with a black tie ensemble (also known as a tuxedo or dinner jacket)?',
        choices: [
            'Highly polished black full-brogue wingtip oxfords',
            'Black patent leather opera pumps with grosgrain ribbon',
            'Highly polished black wholecut oxfords',
            'Highly polished black cap-toe oxfords'
        ],
        correctAnswer: 'Highly polished black wingtip full-brogue oxfords',
        correctAnswerValue: 'choice-a',
        src1: 'https://i.imgur.com/11WLg9n.png',
        alt1: 'a pair of black full-brogue wingtip oxford shoes',
        src2: 'https://i.imgur.com/6jg3eQu.png',
        alt2: 'a pair of black patent leather opera pump shoes with grosgrain ribbon over the vamp',
        src3: 'https://i.imgur.com/44k1x8R.png',
        alt3: 'a pair of black plain-toe wholecut oxford shoes',
        src4: 'https://i.imgur.com/UhopoQm.png',
        alt4: 'a pair of black cap-toe oxford shoes',
    },
    {
        question: 'Which of these rules regarding the relative formality of shoes is NOT true?',
        choices: [
            'A full-brogue (i.e., with more holes) is less formal than a semi-brogue, which is less formal than a non-brogue (the more brogueing a shoe has, the less formal it is)',
            'Black is the most formal shoe color',
            'With the exception of opera pumps, shoes with laces are more formal than shoes without laces',
            'Simpler, plainer shoes, those with less decoration, are less formal than shoes with more decoration (e.g., more seams, more stitching, a medallion on the toe, etc.)'
        ],
        correctAnswer: 'Simpler, plainer shoes, those with less decoration, are less formal than shoes with more decoration (e.g., more seams, more stitching, a medallion on the toe, etc.)',
        correctAnswerValue: 'choice-d',
        src1: 'https://i.imgur.com/a2q6xTW.png',
        alt1: 'a pair of brown full-brogue wingtip oxford shoes',
        src2: 'https://i.imgur.com/LbUb0tb.png',
        alt2: 'a pair of oxblood semi-brogue cap-toe oxford shoes',
        src3: 'https://i.imgur.com/FmQqdmw.png',
        alt3: 'a pair of dark red quarter-brogue cap-toe oxford shoes',
        src4: 'https://i.imgur.com/KbHr0zi.png',
        alt4: 'a pair of oxblood plain-toe wholecut oxford shoes',
    },
    {
        question: 'Which of the following is NOT true regarding ready-to-wear (RTW) shoes, made-to-order (MTO) shoes, and bespoke shoes?',
        choices: [
            'RTW involves no customization and is usually made in a factory to the shape of what is perceived as an average or generic foot',
            'MTO involves designing a custom-made shoe with the client, modifying an existing wooden last (pattern) to better match the client’s feet, and cutting and stitching much of the shoe by hand',
            'Bespoke involves designing a custom-made shoe with the client, carving a unique wooden last (pattern) with the shape of the client’s foot and cutting and stitching the entire shoe by hand',
            'RTW is the least expensive, bespoke is more expensive, and MTO is the most expensive (upwards of $2000)'
        ],
        correctAnswer: 'RTW is the least expensive, bespoke is more expensive, and MTO is the most expensive (upwards of $2000)',
        correctAnswerValue: 'choice-d',
        src1: 'https://i.imgur.com/a1CajDB.png',
        alt1: 'a pair of bespoke black quarter-brogue cap-toe adelaide oxford shoes, with one shoe upside down to display a painted sole with fiddleback waisting',
        src2: 'https://i.imgur.com/BeUHxO9.png',
        alt2: 'top: a green and yellow patina being applied to leather; bottom: the green and yellow leather being molded and sewn around a last to form a shoe',
        src3: 'https://i.imgur.com/05QjLsb.png',
        alt3: 'a shoemaker standing next to a wall of lasts',
        src4: 'https://i.imgur.com/4bXV1b4.png',
        alt4: 'top and side view of a pair of bespoke blue wholecut oxford shoes with medallion engraving running from the toe down the side of the shoe',
    },
    {
        question: 'When implementing a glossy, mirror-like finish (also known as a military spit shine or glaçage), which part of the shoe ought to be polished in such a manner?',
        choices: [
            'The entire shoe',
            'The toe only',
            'The heel only',
            'None of it; why would you bother polishing dress shoes?'
        ],
        correctAnswer: 'The toe only',
        correctAnswerValue: 'choice-b',
        src1: 'https://i.imgur.com/FJkTTEZ.png',
        alt1: 'a pair of brown quarter-brogue cap-toe adelaide oxford shoes with the toes polished to a mirror-like shine',
        src2: 'https://i.imgur.com/h1ZjMci.png',
        alt2: 'a pair of cherry red semi-brogue wholecut oxford shoes with the toes polished to a mirror-like shine and with medallion broguing on the toe',
        src3: 'https://i.imgur.com/vCnnM8p.png',
        alt3: 'a pair of black semi-brogue adelaide oxford shoes with the toes polished to a mirror-like shine',
        src4: 'https://i.imgur.com/cDFjmy3.png',
        alt4: 'a pair of light-brown cap-toe oxford shoes with the toes polished to a mirror-like shine',
    },
    {
        question: 'What is an adelaide?',
        choices: [
            'An oxford in which the seam of the facing closely surrounds the eyelets and does not directly touch the sole of the shoe, creating a U-shape or tongue-like appearance',
            'A shoe conceived and worn primarily by the inhabitants of Adelaide, the capital of South Australia',
            'A shoe beloved and made famous by Queen Adelaide of the United Kingdom, the wife of William IV and daughter-in-law of George III',
            'A shoe worn by students who transfer from the University of Oxford to the University of Adelaide'
        ],
        correctAnswer: 'An oxford in which the seam of the facing closely surrounds the eyelets and does not directly touch the sole of the shoe, creating a U-shape or tongue-like appearance',
        correctAnswerValue: 'choice-a',
        src1: 'https://i.imgur.com/KwtJWT3.png',
        alt1: 'a pair of cherry red quarter-brogue cap-toe adelaide oxford shoes',
        src2: 'https://i.imgur.com/QTf9gyF.png',
        alt2: 'a pair of dark bordeaux quarter-brogue wingtip adelaide oxford shoes',
        src3: 'https://i.imgur.com/dBFqlPJ.png',
        alt3: 'a pair of dark brown (almost black) semi-brogue cap-toe adelaide oxford shoes',
        src4: 'https://i.imgur.com/BTpTqoj.png',
        alt4: 'a pair of grey quarter-brogue cap-toe adelaide oxford shoes',
    }
];

let questionIndex = 0;
let scoreCorrect = 0;
let scoreIncorrect = 0;

//this renders the question count to the DOM
function displayQuestionCount () {
    const questionNumber = questionIndex + 1;
    $('.js-question-count').html(`Question: ${questionNumber} of ${STORE.length}`);
}

//this listens for a click start event and renders the question page and question count to the DOM
function handleClickStart() {
    $('.js-start-button').click(event => {
        $('.js-start-page').remove();
        renderQuestionPage();
        displayQuestionCount();
    })
}

//this generates an html string from an object in the STORE array
function generateQuestionAnswersString() {
    const questionAnswers = STORE[questionIndex];
    return `
    <h2>${questionAnswers.question}</h2>
    <form>
        <fieldset name="choices">
            <label>
                ${questionAnswers.choices[0]}
                <input type="radio" name="choices" value="choice-a" required>
                <span class="radio"></span>
            </label>
            <label>
                ${questionAnswers.choices[1]}
                <input type="radio" name="choices" value="choice-b">
                <span class="radio"></span>
            </label>
            <label>
                ${questionAnswers.choices[2]}
                <input type="radio" name="choices" value="choice-c">
                <span class="radio"></span>
            </label>
            <label>
                ${questionAnswers.choices[3]}
                <input type="radio" name="choices" value="choice-d">
                <span class="radio"></span>
            </label>
        </fieldset>
        <input type="submit" class="submit-button js-submit-button" value="Submit">
    </form>
    `;
}

//this renders the question page to the DOM
function renderQuestionPage() {
    const questionAnswersString = generateQuestionAnswersString();
    $('.js-question-form').html(questionAnswersString);
}

//this listens for a submit event and renders the feedback page to the DOM
function handleClickSubmit() {
    
    $('.js-question-form').submit(event => {
        event.preventDefault();
        renderFeedbackPage();
        $('.js-question-form').empty();
    })
}

//this generates an html string for a correct answer
function generateCorrectAnswerString() {
    const questionAnswers = STORE[questionIndex];
    return `
    <p>Correct</p>
    <div class="row">
        <div class="col-6">
            <img src="${questionAnswers.src1}" class="image 1" alt="${questionAnswers.alt1}">
        </div>
        <div class="col-6">
            <img src="${questionAnswers.src2}" class="image 2" alt="${questionAnswers.alt2}">
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <img src="${questionAnswers.src3}" class="image 3" alt="${questionAnswers.alt3}">
        </div>
        <div class="col-6">
            <img src="${questionAnswers.src4}" class="image 4" alt="${questionAnswers.alt4}">
        </div>
    </div>
    <button type="button" class="next-button js-next-button">Next</button>
    `;
}

//this renders the correct answer feedback page to the DOM
function renderFeedbackPageCorrect() {
    
    const correctAnswerString = generateCorrectAnswerString();
    $('.js-feedback-page').html(correctAnswerString);
}

//this generates an html string for an incorrect answer
function generateIncorrectAnswerString() {
    const questionAnswers = STORE[questionIndex];
    return `
    <p class="incorrect">Incorrect</p>
    <br>
    <p>Correct Answer:<br>${questionAnswers.correctAnswer}</p>
    <div class="row">
        <div class="col-6">
            <img src="${questionAnswers.src1}" class="image 1" alt="${questionAnswers.alt1}">
        </div>
        <div class="col-6">
            <img src="${questionAnswers.src2}" class="image 2" alt="${questionAnswers.alt2}">
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <img src="${questionAnswers.src3}" class="image 3" alt="${questionAnswers.alt3}">
        </div>
        <div class="col-6">
            <img src="${questionAnswers.src4}" class="image 4" alt="${questionAnswers.alt4}">
        </div>
    </div>
    <button type="button" class="next-button js-next-button">Next</button>
    `;
}

//this renders the incorrect answer feedback page to the DOM
function renderFeedbackPageIncorrect() {
    const incorrectAnswerString = generateIncorrectAnswerString();
    $('.js-feedback-page').html(incorrectAnswerString);
}

//this increments the score correct and renders it to the DOM
function incrementScoreCorrect() {
    $('.js-score').html(`Score: ${++scoreCorrect} Correct; ${scoreIncorrect} Incorrect`);
}

//this increments the score incorrect and renders it to the DOM
function incrementScoreIncorrect() {
    $('.js-score').html(`Score: ${scoreCorrect} Correct; ${++scoreIncorrect} Incorrect`);
}

//this renders the feedback page to the DOM
function renderFeedbackPage() {
    const questionAnswers = STORE[questionIndex];
    const userChoice = $('input:checked').val();
    if (userChoice === questionAnswers.correctAnswerValue) {
        renderFeedbackPageCorrect();
        incrementScoreCorrect();
    }
    else {
        renderFeedbackPageIncorrect();
        incrementScoreIncorrect();
    }
}

//this increments the question index
function incrementQuestionIndex() {
    questionIndex++;
}

//this listens for a click next event and renders either the next question or the final page to the DOM
function handleClickNext() {
    $('.js-feedback-page').on('click', `.js-next-button`, event => {
        $('.js-feedback-page').empty();
        if (questionIndex < STORE.length - 1) {
            incrementQuestionIndex();
            renderQuestionPage(questionIndex);
            displayQuestionCount();
        }
        else {
            renderFinalPage();
        }
    })
}

//this generates a final page html string
function generateFinalPageString() {
    return `
    <p class="final-score">Final Score:
    <br>
    ${scoreCorrect}/${STORE.length}</p>
    <br>
    <button type="button" class="js-restart-button">Restart Quiz</button>
    `;
}

//this renders the final page with the quiz results to the DOM
function renderFinalPage() {
    const finalPageString = generateFinalPageString();
    $('.js-final-page').html(finalPageString);
}

//this listens for a click restart event and restarts the quiz
function handleClickRestart() {
    $('.js-final-page').on('click', `.js-restart-button`, event => {
        location.reload();
    })
}

function handleQuizApp() {
    handleClickStart();
    handleClickSubmit();
    handleClickNext();
    handleClickRestart();
}

$(handleQuizApp);