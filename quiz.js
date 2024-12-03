function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

const quizData = [
    { question: "Which language is used for Machine Learning?", choices: ["Python", "C++", "Java", "PHP"], correct: 0 },
    { question: "Which programming language is primarily used for web development?", choices: ["Python", "Ruby", "JavaScript", "Go"], correct: 2 },
    { question: "What is AI short for?", choices: ["Artificial Intelligence", "Automated Intelligence", "Artificial Integration", "Automatic Integration"], correct: 0 },
    { question: "What does SQL stand for?", choices: ["Structured Query Language", "Simple Query Language", "Secure Query Language", "Structured Quick Language"], correct: 0 },
    { question: "Which of these is a Python framework?", choices: ["Laravel", "Django", "Angular", "React"], correct: 1 },
    { question: "Which database system is commonly used for relational data?", choices: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"], correct: 1 },
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Rome", "Paris"], correct: 3 },
    { question: "Which keyword is used to define a function in Python?", choices: ["def", "function", "func", "define"], correct: 0 },
    { question: "Which data structure uses LIFO (Last In, First Out) principle?", choices: ["Queue", "Stack", "Array", "Linked List"], correct: 1 },
    { question: "What is the largest planet in our solar system?", choices: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
    { question: "Which language is used for Android development?", choices: ["Kotlin", "Java", "Swift", "Objective-C"], correct: 0 },
    { question: "Which programming language is mainly used for iOS development?", choices: ["Kotlin", "Java", "Ruby", "Swift"], correct: 3 },
    { question: "Which tool is used to manage database schema changes?", choices: ["Docker", "Kubernetes", "Flyway", "Terraform"], correct: 2 },
    { question: "What is the default HTTP port?", choices: ["80", "443", "8080", "5000"], correct: 0 },
    { question: "Which cloud platform is owned by Google?", choices: ["Azure", "AWS", "Oracle", "Google Cloud"], correct: 3 },
    { question: "Which keyword is used for inheritance in Python?", choices: ["inherits", "extends", "super", "class"], correct: 1 },
    { question: "Which of these is an example of a NoSQL database?", choices: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], correct: 2 },
    { question: "What is the value of pi approximately?", choices: ["3.14", "3.1415", "3.14159", "3.1416"], correct: 2 },
    { question: "What is the term for a variable that can hold different data types in Python?", choices: ["dynamic", "generic", "flexible", "weakly typed"], correct: 0 },
    { question: "Which HTML element is used to define a hyperlink?", choices: ["<button>", "<a>", "<link>", "<div>"], correct: 1 },
    { question: "Which of these is a front-end framework?", choices: ["Spring", "Django", "Node.js", "React"], correct: 3 },
    { question: "What is the default port for HTTPS?", choices: ["443", "80", "8080", "5000"], correct: 0 },
    { question: "Which technology is used to build Progressive Web Apps?", choices: ["Service Workers", "React", "Vue.js", "JavaScript"], correct: 0 },
    { question: "Which of these is a Python built-in data type?", choices: ["int", "char", "boolean", "date"], correct: 0 },
    { question: "What does HTTP stand for?", choices: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "HyperText Template Protocol"], correct: 0 },
    { question: "Which CSS property is used to change the font size?", choices: ["size", "font-style", "text-size", "font-size"], correct: 3 },
    { question: "Which of these is a cloud computing service?", choices: ["Kubernetes", "Docker", "Google Cloud", "XAMPP"], correct: 2 },
    { question: "What does CSS stand for?", choices: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Centralized Style Sheets"], correct: 1 },
    { question: "What does JSON stand for?", choices: ["JavaScript Object Notation", "JavaSource Object Notation", "JavaScript Online Notation", "JavaScript Ordered Notation"], correct: 0 },
    { question: "Which of these is used for data visualization?", choices: ["NumPy", "Keras", "Flask", "D3.js"], correct: 3 },
    { question: "Which function is used to find the length of a list in Python?", choices: ["len()", "size()", "length()", "count()"], correct: 0 },
    { question: "What is the full form of DNS?", choices: ["Domain Name Service", "Domain Name System", "Dynamic Name Service", "Dynamic Name System"], correct: 1 },
    { question: "Which of these is used to make API calls in JavaScript?", choices: ["request()", "get()", "ajax()", "fetch()"], correct: 3 },
    { question: "Which of these is a JavaScript framework?", choices: ["React", "Vue", "Angular", "All of the above"], correct: 3 },
    { question: "Which method is used to add an item to the end of an array in JavaScript?", choices: ["append()", "push()", "insert()", "add()"], correct: 1 },
    { question: "Which tag is used to create a table in HTML?", choices: ["<table>", "<thead>", "<tbody>", "<tr>"], correct: 0 },
    { question: "What is used to style HTML documents?", choices: ["JavaScript", "CSS", "HTML", "PHP"], correct: 1 },
    { question: "Which command is used to get the current directory in a Linux terminal?", choices: ["dir", "cd", "ls", "pwd"], correct: 3 },
    { question: "Which of these is a popular Python web framework?", choices: ["Flask", "Laravel", "Django", "Ruby on Rails"], correct: 2 },
    { question: "Which of these is used to style HTML pages?", choices: ["HTML", "CSS", "JavaScript", "XML"], correct: 1 },
    { question: "Which of these is a version control system?", choices: ["Git", "GitHub", "Docker", "Kubernetes"], correct: 0 },
    { question: "What is the main purpose of a CDN?", choices: ["Backup data", "Distribute content", "Host web apps", "Handle traffic"], correct: 1 },
    { question: "Which command is used to install a package in Python?", choices: ["install", "get", "add", "pip"], correct: 3 },
    { question: "Which of these is a CSS property for positioning elements?", choices: ["position", "display", "float", "align"], correct: 0 },
    { question: "What is the function of a router in networking?", choices: ["Store Data", "Handle data", "Direct traffic", "Encrypt data"], correct: 2 },
    { question: "Which JavaScript function is used to parse JSON?", choices: ["JSON.parse()", "JSON.stringify()", "JSON.parseText()", "JSON.parseFile()"], correct: 0 },
    { question: "Which protocol is commonly used for sending email?", choices: ["FTP", "SMTP", "IMAP", "POP3"], correct: 1 },
    { question: "Which of these is a popular JavaScript runtime environment?", choices: ["Node.js", "React", "Vue", "Angular"], correct: 0 },
    { question: "Which language is primarily used for data analysis?", choices: ["Python", "Java", "Go", "R"], correct: 3 }
];


let currentQuestion = 0;
let score = 0;
let skippedQuestions = [];
let totalQuestionsAttempted = 0;
const maxQuestions = quizData.length;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const badgeElement = document.getElementById("badge");

function loadQuestion() {
    if (totalQuestionsAttempted >= maxQuestions) {
        if (skippedQuestions.length > 0) {
            showSkippedQuestions();
        } else {
            showBadge();
        }
        return;
    }

    if (currentQuestion < quizData.length) {
        const currentQuiz = quizData[currentQuestion];
        questionElement.innerHTML = currentQuiz.question;
        choicesElement.innerHTML = '';
        currentQuiz.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.innerHTML = choice;
            button.onclick = () => checkAnswer(index);
            choicesElement.appendChild(button);
        });
    } else if (skippedQuestions.length > 0) {
        showSkippedQuestions();
    } else {
        showBadge();
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;
    }
    totalQuestionsAttempted++;
    currentQuestion++;
    loadQuestion();
}

function skipQuestion() {
    skippedQuestions.push(quizData[currentQuestion]);
    totalQuestionsAttempted++;
    currentQuestion++;
    loadQuestion();
}

function showSkippedQuestions() {
    if (skippedQuestions.length === 0) {
        showBadge();
        return;
    }

    const skippedQuestion = skippedQuestions.shift(); 
    questionElement.innerHTML = skippedQuestion.question;
    choicesElement.innerHTML = '';
    skippedQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerHTML = choice;
        button.onclick = () => {
            if (index === skippedQuestion.correct) {
                score++;
            }
            if (skippedQuestions.length > 0) {
                showSkippedQuestions();
            } else {
                showBadge();
            }
        };
        choicesElement.appendChild(button);
    });
}

function showBadge() {
    if (score === maxQuestions) {
        badgeElement.innerHTML = "Badge Earned: Quiz Master!";
    } else if (score > 0) {
        badgeElement.innerHTML = `Badge Earned: Tech Enthusiast! (${score} out of ${maxQuestions})`;
    } else {
        badgeElement.innerHTML = "Badge Earned: Try Again!";
    }
}

nextBtn.addEventListener("click", skipQuestion);

loadQuestion();