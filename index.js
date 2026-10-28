const form = document.querySelector("#chat-form");
const input = document.querySelector("#message");
const answer = document.querySelector("#answer");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = input.value.trim();
  if (!message) return;

  answer.textContent = "AI sedang berpikir...";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request gagal");
    }

    answer.textContent = data.answer;
  } catch (error) {
    answer.textContent = `Error: ${error.message}`;
  }
});