const questions = [
  // Original 12 questions...
  {
    q: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
    a: "George Washington",
    difficulty: "easy",
    subsection: "Founding"
  },
  {
    q: "Who wrote the Declaration of Independence?",
    options: ["James Madison", "Benjamin Franklin", "Thomas Jefferson", "John Hancock"],
    a: "Thomas Jefferson",
    difficulty: "medium",
    subsection: "Founding"
  },
  {
    q: "How many original colonies were there?",
    options: ["10", "12", "13", "15"],
    a: "13",
    difficulty: "easy",
    subsection: "Founding"
  },
  {
    q: "Who was the President during the Civil War?",
    options: ["George Washington", "Abraham Lincoln", "Ulysses S. Grant", "Andrew Jackson"],
    a: "Abraham Lincoln",
    difficulty: "easy",
    subsection: "Civil War"
  },
  {
    q: "Which war ended slavery in the U.S.?",
    options: ["World War I", "Civil War", "Revolutionary War", "Vietnam War"],
    a: "Civil War",
    difficulty: "medium",
    subsection: "Civil War"
  },
  {
    q: "Who gave the Gettysburg Address?",
    options: ["George Washington", "Abraham Lincoln", "Ulysses S. Grant", "Theodore Roosevelt"],
    a: "Abraham Lincoln",
    difficulty: "medium",
    subsection: "Civil War"
  },
  {
    q: "Which country did the U.S. fight in the Revolutionary War?",
    options: ["France", "Spain", "Mexico", "Great Britain"],
    a: "Great Britain",
    difficulty: "easy",
    subsection: "Revolution"
  },
  {
    q: "What event started the American Revolution?",
    options: ["Declaration of Independence", "Boston Tea Party", "Civil War", "War of 1812"],
    a: "Boston Tea Party",
    difficulty: "medium",
    subsection: "Revolution"
  },
  {
    q: "What is the supreme law of the land?",
    options: ["The Bible", "The Constitution", "The Declaration", "Bill of Rights"],
    a: "The Constitution",
    difficulty: "easy",
    subsection: "Government"
  },
  {
    q: "Which document begins with 'We the People'?",
    options: ["Declaration of Independence", "Gettysburg Address", "Constitution", "Emancipation Proclamation"],
    a: "Constitution",
    difficulty: "medium",
    subsection: "Government"
  },
  {
    q: "Who was president during the Great Depression and WWII?",
    options: ["Harry Truman", "Herbert Hoover", "Franklin D. Roosevelt", "Woodrow Wilson"],
    a: "Franklin D. Roosevelt",
    difficulty: "hard",
    subsection: "Modern Era"
  },
  {
    q: "Which U.S. President resigned from office?",
    options: ["Richard Nixon", "Bill Clinton", "Andrew Johnson", "Herbert Hoover"],
    a: "Richard Nixon",
    difficulty: "medium",
    subsection: "Modern Era"
  },

  // --- Added Questions ---

  // Founding
  {
    q: "Which compromise counted slaves as partial citizens for representation?",
    options: ["Missouri Compromise", "3/5 Compromise", "Connecticut Compromise", "Virginia Plan"],
    a: "3/5 Compromise",
    difficulty: "hard",
    subsection: "Founding"
  },
  {
    q: "Where was the Constitutional Convention held?",
    options: ["Boston", "Philadelphia", "New York City", "Richmond"],
    a: "Philadelphia",
    difficulty: "medium",
    subsection: "Founding"
  },

  // Civil War
  {
    q: "Who was the commanding general of the Confederate Army?",
    options: ["Ulysses S. Grant", "Robert E. Lee", "Stonewall Jackson", "George McClellan"],
    a: "Robert E. Lee",
    difficulty: "medium",
    subsection: "Civil War"
  },
  {
    q: "What battle is considered the turning point of the Civil War?",
    options: ["Antietam", "Gettysburg", "Bull Run", "Chancellorsville"],
    a: "Gettysburg",
    difficulty: "hard",
    subsection: "Civil War"
  },

  // Revolution
  {
    q: "Who was the primary military leader for American forces in the Revolution?",
    options: ["Thomas Jefferson", "George Washington", "Paul Revere", "Alexander Hamilton"],
    a: "George Washington",
    difficulty: "easy",
    subsection: "Revolution"
  },
  {
    q: "What treaty ended the Revolutionary War?",
    options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Yorktown"],
    a: "Treaty of Paris",
    difficulty: "medium",
    subsection: "Revolution"
  },

  // Government
  {
    q: "How many branches are there in the U.S. government?",
    options: ["1", "2", "3", "4"],
    a: "3",
    difficulty: "easy",
    subsection: "Government"
  },
  {
    q: "What are the first ten amendments called?",
    options: ["Preamble", "Articles", "Federalist Papers", "Bill of Rights"],
    a: "Bill of Rights",
    difficulty: "easy",
    subsection: "Government"
  },
  {
    q: "Who interprets laws in the U.S.?",
    options: ["President", "Congress", "Supreme Court", "Senate"],
    a: "Supreme Court",
    difficulty: "medium",
    subsection: "Government"
  },

  // Modern Era
  {
    q: "What was the Cold War?",
    options: ["A war with no battles", "A trade war", "A diplomatic treaty", "A tax revolt"],
    a: "A war with no battles",
    difficulty: "medium",
    subsection: "Modern Era"
  },
  {
    q: "Who was President during 9/11?",
    options: ["Bill Clinton", "George W. Bush", "Barack Obama", "Donald Trump"],
    a: "George W. Bush",
    difficulty: "easy",
    subsection: "Modern Era"
  },
  {
    q: "What year did women gain the right to vote in the U.S.?",
    options: ["1919", "1920", "1925", "1930"],
    a: "1920",
    difficulty: "medium",
    subsection: "Modern Era"
  },

  // Civil Rights
  {
    q: "Who gave the 'I Have a Dream' speech?",
    options: ["Malcolm X", "Frederick Douglass", "Martin Luther King Jr.", "Barack Obama"],
    a: "Martin Luther King Jr.",
    difficulty: "easy",
    subsection: "Civil Rights"
  },
  {
    q: "Which act outlawed discrimination based on race, color, religion, sex, or origin?",
    options: ["Voting Rights Act", "Civil Rights Act of 1964", "Emancipation Proclamation", "Equal Pay Act"],
    a: "Civil Rights Act of 1964",
    difficulty: "hard",
    subsection: "Civil Rights"
  },
  {
    q: "What movement aimed to end racial segregation in the 1950s and 60s?",
    options: ["Labor Movement", "Progressive Era", "Civil Rights Movement", "Temperance Movement"],
    a: "Civil Rights Movement",
    difficulty: "easy",
    subsection: "Civil Rights"
  },
  {
    q: "Who refused to give up her seat on a segregated bus in 1955?",
    options: ["Harriet Tubman", "Rosa Parks", "Shirley Chisholm", "Coretta Scott King"],
    a: "Rosa Parks",
    difficulty: "easy",
    subsection: "Civil Rights"
  },
  {
    q: "What Supreme Court case ended racial segregation in schools?",
    options: ["Roe v. Wade", "Dred Scott v. Sandford", "Brown v. Board of Education", "Plessy v. Ferguson"],
    a: "Brown v. Board of Education",
    difficulty: "medium",
    subsection: "Civil Rights"
  },
  {
    q: "What year was Barack Obama elected President?",
    options: ["2004", "2008", "2012", "2016"],
    a: "2008",
    difficulty: "easy",
    subsection: "Modern Era"
  }
];

// Assumes `questions` is loaded separately
let availableQuestions = [];
let score = 0;
let timeLeft = 30;
let timer;

const correctCounts = {};
const attemptCounts = {};

const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const startBtn = document.getElementById('start');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const progressTitle = document.getElementById('progress-title');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function emojiForSub(sub) {
  return {
    "Founding": "📜",
    "Civil War": "⚔️",
    "Revolution": "🎆",
    "Government": "🏛️",
    "Modern Era": "🕰️",
    "Civil Rights": "✊"
  }[sub] || "📚";
}

function startGame() {
  score = 0;
  timeLeft = 30;
  availableQuestions = shuffle([...questions]);
  startBtn.disabled = true;
  startBtn.style.display = 'none';
  document.getElementById('start-container').style.display = 'none';
  scoreEl.textContent = '';
  choicesEl.innerHTML = '';
  questionEl.textContent = '';
  progressEl.innerHTML = '';
  progressEl.style.display = 'none';
  progressTitle.style.display = 'none';

  const subsections = [...new Set(questions.map(q => q.subsection))];
  subsections.forEach(sub => {
    correctCounts[sub] = 0;
    attemptCounts[sub] = 0;

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.id = `bar-${sub}`;
    bar.innerHTML = `
      <span>${emojiForSub(sub)} ${sub}</span>
      <div class="bar-bg">
        <div class="bar-fill" id="fill-${sub}" style="width: 0%"></div>
      </div>`;
    progressEl.appendChild(bar);
  });

  nextQuestion();

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}`;
    if (timeLeft <= 0) endGame('⏰ Time\'s up!');
  }, 1000);
}

function updateProgressBars() {
  let visibleBars = 0;

  for (const sub in correctCounts) {
    const attempts = attemptCounts[sub];
    const correct = correctCounts[sub];
    const percent = attempts === 0 ? 0 : Math.round((correct / attempts) * 100);
    const bar = document.getElementById(`bar-${sub}`);
    const fill = document.getElementById(`fill-${sub}`);

    if (attempts < 2) {
      bar.style.display = 'none';
      continue;
    }

    bar.style.display = 'block';
    visibleBars++;

    fill.style.width = `${percent}%`;
    fill.textContent = `${percent}%`;

    if (percent >= 80) {
      fill.className = 'bar-fill green';
    } else if (percent >= 50) {
      fill.className = 'bar-fill yellow';
    } else {
      fill.className = 'bar-fill red';
    }
  }

  progressTitle.style.display = visibleBars > 0 ? 'block' : 'none';
}

function hasAchievedMastery() {
  return Object.keys(correctCounts).every(sub => {
    const attempts = attemptCounts[sub];
    const correct = correctCounts[sub];
    const percent = attempts === 0 ? 0 : Math.round((correct / attempts) * 100);
    return attempts >= 2 && percent >= 80;
  });
}

function endGame(message) {
  clearInterval(timer);
  questionEl.textContent = message;
  choicesEl.innerHTML = '';
  startBtn.disabled = false;
  document.getElementById('start-container').style.display = 'flex';
  scoreEl.innerHTML = `🎯 <strong>Your Score:</strong> <span style="font-size: 1.5rem;">${score}</span>`;
  progressEl.style.display = 'block';
  updateProgressBars();
}

function nextQuestion() {
  const remaining = availableQuestions.filter(q => {
    const sub = q.subsection;
    const attempts = attemptCounts[sub];
    const correct = correctCounts[sub];
    const percent = attempts === 0 ? 0 : Math.round((correct / attempts) * 100);
    return attempts < 2 || percent < 80;
  });

  if (remaining.length === 0) {
    if (hasAchievedMastery()) {
      endGame('🎉 Mastery achieved in all topics!');
    } else {
      endGame('📘 You’ve answered all questions but did not achieve mastery in all sections.');
    }
    return;
  }

  const index = Math.floor(Math.random() * remaining.length);
  const question = remaining.splice(index, 1)[0];
  availableQuestions = availableQuestions.filter(q => q !== question);

  questionEl.textContent = question.q;
  choicesEl.innerHTML = '';

  question.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => {
      const sub = question.subsection;
      attemptCounts[sub]++;
      if (option === question.a) {
        correctCounts[sub]++;
        score++;
      }
      nextQuestion();
    });
    choicesEl.appendChild(btn);
  });
}

startBtn.addEventListener('click', startGame);