const quizData = [
    // JavaScript Questions (15)
    {
        category: "JavaScript",
        question: "What is the output of: typeof null?",
        options: ["null", "undefined", "object", "number"],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "Which method is used to add elements to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        category: "JavaScript",
        question: "What does '===' operator do in JavaScript?",
        options: ["Assigns value", "Compares value only", "Compares value and type", "None of the above"],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "What is a closure in JavaScript?",
        options: ["A function with no parameters", "A function inside another function with access to outer variables", "A class method", "An anonymous function"],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "Which is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Symbol"],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["The current function", "The current object", "The global object", "It depends on context"],
        correct: 3
    },
    {
        category: "JavaScript",
        question: "Which method converts JSON string to JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        correct: 0
    },
    {
        category: "JavaScript",
        question: "What is the result of: '5' + 3?",
        options: ["8", "53", "Error", "NaN"],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for loop", "while loop", "do-while loop", "forEach loop"],
        correct: 2
    },
    {
        category: "JavaScript",
        question: "What does the spread operator (...) do?",
        options: ["Multiplies numbers", "Expands iterables", "Creates comments", "Declares variables"],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "Which method removes the last element from an array?",
        options: ["pop()", "shift()", "remove()", "delete()"],
        correct: 0
    },
    {
        category: "JavaScript",
        question: "What is the purpose of 'use strict'?",
        options: ["Makes code faster", "Enforces stricter parsing and error handling", "Enables new features", "Compresses code"],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "Which is the correct way to create an arrow function?",
        options: ["function => ()", "() => {}", "=> function()", "arrow function()"],
        correct: 1
    },
    {
        category: "JavaScript",
        question: "What does NaN stand for?",
        options: ["Not a Null", "Not a Number", "Null and Negative", "Number and Null"],
        correct: 1
    },

    // Python Questions (12)
    {
        category: "Python",
        question: "Which keyword is used to create a function in Python?",
        options: ["function", "def", "func", "define"],
        correct: 1
    },
    {
        category: "Python",
        question: "What is the output of: print(type([]))?",
        options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'dict'>"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which of these is a mutable data type in Python?",
        options: ["tuple", "string", "list", "integer"],
        correct: 2
    },
    {
        category: "Python",
        question: "What does the len() function do?",
        options: ["Returns the length of an object", "Creates a list", "Sorts elements", "Finds maximum value"],
        correct: 0
    },
    {
        category: "Python",
        question: "Which symbol is used for comments in Python?",
        options: ["//", "/*", "#", "<!--"],
        correct: 2
    },
    {
        category: "Python",
        question: "What is the result of: 10 // 3 in Python?",
        options: ["3.33", "3", "4", "3.0"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which method adds an element to the end of a list?",
        options: ["add()", "append()", "insert()", "push()"],
        correct: 1
    },
    {
        category: "Python",
        question: "What does the 'self' keyword represent in a Python class?",
        options: ["The class itself", "The instance of the class", "A static variable", "The parent class"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which of these is NOT a Python framework?",
        options: ["Django", "Flask", "FastAPI", "Laravel"],
        correct: 3
    },
    {
        category: "Python",
        question: "What is a lambda function in Python?",
        options: ["A named function", "An anonymous function", "A class method", "A built-in function"],
        correct: 1
    },
    {
        category: "Python",
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "exp", "pow"],
        correct: 1
    },
    {
        category: "Python",
        question: "What does the 'pass' statement do in Python?",
        options: ["Skips a loop iteration", "Does nothing (placeholder)", "Exits a function", "Raises an error"],
        correct: 1
    },

    // Java Questions (10)
    {
        category: "Java",
        question: "Which keyword is used to inherit a class in Java?",
        options: ["extends", "inherits", "implements", "super"],
        correct: 0
    },
    {
        category: "Java",
        question: "What is the size of int data type in Java?",
        options: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correct: 2
    },
    {
        category: "Java",
        question: "Which of these is NOT an access modifier in Java?",
        options: ["public", "private", "protected", "package"],
        correct: 3
    },
    {
        category: "Java",
        question: "What is the parent class of all classes in Java?",
        options: ["System", "Main", "Object", "Class"],
        correct: 2
    },
    {
        category: "Java",
        question: "Which keyword is used to prevent method overriding?",
        options: ["static", "final", "abstract", "const"],
        correct: 1
    },
    {
        category: "Java",
        question: "What does JVM stand for?",
        options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Manager", "Java Version Manager"],
        correct: 0
    },
    {
        category: "Java",
        question: "Which collection does NOT allow duplicate elements?",
        options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
        correct: 2
    },
    {
        category: "Java",
        question: "What is the correct way to create an object in Java?",
        options: ["MyClass obj = new MyClass();", "MyClass obj = MyClass();", "new MyClass obj;", "create MyClass obj;"],
        correct: 0
    },
    {
        category: "Java",
        question: "Which keyword is used for exception handling in Java?",
        options: ["catch", "try", "throw", "All of the above"],
        correct: 3
    },
    {
        category: "Java",
        question: "What is the default value of boolean variable in Java?",
        options: ["true", "false", "0", "null"],
        correct: 1
    },

    // C++ Questions (8)
    {
        category: "C++",
        question: "Which operator is used to access members of a class through a pointer?",
        options: [".", "->", "::", "*"],
        correct: 1
    },
    {
        category: "C++",
        question: "What is the purpose of a destructor in C++?",
        options: ["Create objects", "Delete objects and free memory", "Copy objects", "Initialize objects"],
        correct: 1
    },
    {
        category: "C++",
        question: "Which header file is needed for cout and cin?",
        options: ["<stdio.h>", "<iostream>", "<stdlib.h>", "<conio.h>"],
        correct: 1
    },
    {
        category: "C++",
        question: "What does STL stand for in C++?",
        options: ["Standard Template Library", "System Type Library", "Static Type Library", "Standard Type Language"],
        correct: 0
    },
    {
        category: "C++",
        question: "Which keyword is used to define a constant in C++?",
        options: ["constant", "const", "final", "static"],
        correct: 1
    },
    {
        category: "C++",
        question: "What is function overloading?",
        options: ["Calling too many functions", "Multiple functions with same name but different parameters", "Using functions repeatedly", "Creating virtual functions"],
        correct: 1
    },
    {
        category: "C++",
        question: "Which operator cannot be overloaded in C++?",
        options: ["+", "::", "[]", "*"],
        correct: 1
    },
    {
        category: "C++",
        question: "What is the size of a pointer in a 64-bit system?",
        options: ["4 bytes", "8 bytes", "16 bytes", "Depends on data type"],
        correct: 1
    },

    // General Programming Questions (5)
    {
        category: "General",
        question: "What does OOP stand for?",
        options: ["Object Oriented Programming", "Order Of Programming", "Operational Object Procedure", "Organized Object Pattern"],
        correct: 0
    },
    {
        category: "General",
        question: "Which data structure uses LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Array", "Tree"],
        correct: 1
    },
    {
        category: "General",
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: 1
    },
    {
        category: "General",
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Program Integration", "Automated Process Interface", "Application Process Implementation"],
        correct: 0
    },
    {
        category: "General",
        question: "Which is NOT a principle of OOP?",
        options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let skippedQuestions = 0;
let selectedAnswer = null;
 
function startQuiz() {
    document.querySelector('.start-screen').classList.remove('active');
    document.querySelector('.quiz-screen').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResults();
        return;
    }

    const question = quizData[currentQuestionIndex];
    selectedAnswer = null;

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = quizData.length;
    document.getElementById('category').textContent = question.category;
    document.getElementById('question').textContent = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('next-btn').disabled = true;
    updateProgress();
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    selectedAnswer = index;
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;

    const question = quizData[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(opt => opt.classList.add('disabled'));

    if (selectedAnswer === question.correct) {
        options[selectedAnswer].classList.add('correct');
        correctAnswers++;
        score += 2;
    } else {
        options[selectedAnswer].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        wrongAnswers++;
    }

    document.getElementById('current-score').textContent = score;
    document.getElementById('correct-count').textContent = correctAnswers;

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

function skipQuestion() {
    skippedQuestions++;
    currentQuestionIndex++;
    loadQuestion();
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function showResults() {
    document.querySelector('.quiz-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');

    const percentage = Math.round((correctAnswers / quizData.length) * 100);
    document.getElementById('final-score').textContent = percentage + '%';
    document.getElementById('final-correct').textContent = correctAnswers;
    document.getElementById('final-wrong').textContent = wrongAnswers;
    document.getElementById('final-skipped').textContent = skippedQuestions;

    let message = '';
    if (percentage >= 90) {
        message = 'Outstanding! You\'re a programming expert!';
    } else if (percentage >= 75) {
        message = 'Great job! You have strong programming knowledge!';
    } else if (percentage >= 60) {
        message = 'Good effort! Keep learning and practicing!';
    } else if (percentage >= 40) {
        message = 'Not bad! There\'s room for improvement!';
    } else {
        message = 'Keep studying! Practice makes perfect!';
    }

    document.getElementById('result-message').textContent = message;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    skippedQuestions = 0;
    selectedAnswer = null;

    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.start-screen').classList.add('active');
}
// submit Button.addEventListener ('click', showResults);
