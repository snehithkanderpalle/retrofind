// ---------- LOGIN & SIGNUP ----------
function showSignup() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
}
function showLogin() {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

function signup() {
  let name = document.getElementById("signup-name").value;
  let email = document.getElementById("signup-email").value;
  let pass = document.getElementById("signup-password").value;

  if (name && email && pass) {
    localStorage.setItem("user", JSON.stringify({ name, email, pass }));
    alert("Signup successful! Please login.");
    showLogin();
  } else {
    alert("Please fill all fields");
  }
}

function login() {
  let email = document.getElementById("login-email").value;
  let pass = document.getElementById("login-password").value;
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.pass === pass) {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    alert("Invalid credentials or user not found.");
  }
}

// ---------- SONGS & COMMENTS ----------
function addSong(language) {
  let title = document.getElementById("song-title").value;
  let artist = document.getElementById("song-artist").value;
  let link = document.getElementById("song-link").value;

  if (!title || !artist || !link) {
    alert("Please fill all fields");
    return;
  }

  let songsList = document.getElementById("songs-list");

  let card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = `
    <h3>${title}</h3>
    <p><em>${artist}</em></p>
    <iframe src="${link}" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
    <div class="comment-box">
      <input type="text" placeholder="Add a comment" onkeypress="if(event.key==='Enter'){addComment(this)}">
      <div class="comments"></div>
    </div>
  `;

  songsList.appendChild(card);

  // Clear form
  document.getElementById("song-title").value = "";
  document.getElementById("song-artist").value = "";
  document.getElementById("song-link").value = "";
}

function addComment(input) {
  let text = input.value;
  if (!text) return;
  let commentsDiv = input.nextElementSibling;

  let comment = document.createElement("div");
  comment.className = "comment";
  comment.textContent = text;

  commentsDiv.appendChild(comment);
  input.value = "";
}
