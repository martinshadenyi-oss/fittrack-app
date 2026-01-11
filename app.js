document.body.innerHTML = `
<h2 style="text-align:center;">FitTrack</h2>
<p style="text-align:center;">Habit-based weight loss</p>

<button onclick="notify()">🔔 Daily Reminder</button>

<p><strong>Weekly Weight Check</strong></p>
<input type="number" id="weight" placeholder="Enter weight (kg)" />
<button onclick="saveWeight()">Save</button>

<p id="last"></p>
`;

function notify() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else {
    new Notification("FitTrack", {
      body: "Don't forget your habits today 💪"
    });
  }
}

function saveWeight() {
  const w = document.getElementById("weight").value;
  localStorage.setItem("weight", w);
  document.getElementById("last").innerText = "Last weight: " + w + " kg";
}

document.getElementById("last").innerText =
  localStorage.getItem("weight")
    ? "Last weight: " + localStorage.getItem("weight") + " kg"
    : "";
