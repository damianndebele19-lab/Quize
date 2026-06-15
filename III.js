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

  // Check if all inputs are filled
  for (let q in answers) {
    const input = document.getElementById(q);
    if (input.value.trim() === "") {
      alert("⚠️ Please answer all questions before submitting!");
      return; // stop submission
    }
  }

  // Evaluate answers
  for (let q in answers) {
    const input = document.getElementById(q);
    const userAnswer = input.value.trim().toLowerCase();
    const result = document.getElementById("r" + q.substring(1));

    if (userAnswer === answers[q].toLowerCase()) {
      result.textContent = `✅ Correct! The answer is "${answers[q]}".`;
      result.style.color = "green";
      score++;
    } else {
      result.textContent = `❌ Wrong! The correct answer is "${answers[q]}".`;
      result.style.color = "red";
    }

    // Disable input after submission
    input.disabled = true;
  }

  const prize = document.getElementById("prize");
  const finishBtn = document.getElementById("finish-btn");

  if (score === total) {
    prize.textContent = `🎉 You got ${score}/${total}! You win 🌸 Flowers and the party prize: "Vularing izibunu on the party"!`;
  } else {
    prize.textContent = `You got ${score}/${total} correct. Try again next time to win the prize!`;
  }

  // Disable the submit button so they can't try again
  finishBtn.disabled = true;
  finishBtn.style.background = "#aaa";
  finishBtn.style.cursor = "not-allowed";
}