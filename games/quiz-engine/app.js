// Тестти базадан тартуу
async function loadQuiz(category, subject) {
  const dbRef = firebase.database().ref(`quizzes/${category}/${subject}`);
  const snapshot = await dbRef.once('value');
  const quizData = snapshot.val();
  renderQuiz(quizData);
}

// Тестти экранга чыгаруу (UI)
function renderQuiz(data) {
  const container = document.getElementById('quiz-container');
  data.forEach((q, index) => {
    container.innerHTML += `
      <div class="question">
        <p>${index + 1}. ${q.question}</p>
        <button onclick="checkAnswer('${q.correct}')">A: ${q.a}</button>
        <button onclick="checkAnswer('${q.correct}')">B: ${q.b}</button>
      </div>
    `;
  });
}
