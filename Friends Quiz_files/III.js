// friends.js
const answers = {
  q1: "tribal chief",
  q2: "playing soccer",
  q3: "angry bird",
  q4: "goalkeeper",
  q5: "green mamba",
  q6: "snokonoko",
  q7: "laughing",
  q8: "khanyi mbau"
};

function submitResults() {
  let score = 0;
  let total = Object.keys(answers).length;

  for (let q in answers) {
    const userAnswer = document.getElementById(q).value.trim().toLowerCase();
    const result = document.getElementById("r" + q.substring(1));

    if (userAnswer === answers[q].toLowerCase()) {
      result.textContent = `✅ Correct! The answer is "${answers[q]}".`;
      result.style.color = "green";
      score++;
    } else {
      result.textContent = `❌ Wrong! The correct answer is "${answers[q]}".`;
      result.style.color = "red";
    }
  }

  const prize = document.getElementById("prize");
  if (score === total) {
    prize.textContent = `🎉 You got ${score}/${total}! You win 🌸 Flowers and the party prize: "Vularing izibunu on the party"!`;
  } else {
    prize.textContent = `You got ${score}/${total} correct. Try again to win the prize!`;
  }
}


