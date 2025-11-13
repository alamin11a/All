// script.js - সব লজিক এখানে
const emotes = [
  { id: "909000075", name: "Cobra Rising", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000075.png" },
  { id: "909000063", name: "Ak Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000063.png" },
  { id: "909035007", name: "Shotgun Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909035007.png" },
  { id: "909000068", name: "Scar Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000068.png" },
  { id: "909000085", name: "XM8 Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000085.png" },
  { id: "909038012", name: "G18 Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909038012.png" },
  { id: "909035012", name: "AN94 Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909035012.png" },
  { id: "909033002", name: "MP5 Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909033002.png" },
  { id: "909051003", name: "M60 Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051003.png" },
  { id: "909037011", name: "Fist Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909037011.png" },
  { id: "909000081", name: "M10 Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000081.png" },
  { id: "909000090", name: "Famasa Max", img: "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000090.png" }
];

const API_URL = "https://emote-psi.vercel.app/api/join";

// গ্রিড লোড
function loadEmotes() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  emotes.forEach(emote => {
    const card = document.createElement('div');
    card.className = 'emote-card';
    card.innerHTML = `
      <img src="${emote.img}" alt="${emote.name}" onerror="this.src='https://via.placeholder.com/80/333/fff?text=?'">
      <div class="emote-name">${emote.name}</div>
      <div class="emote-id">ID: ${emote.id}</div>
      <button class="send-btn" onclick="sendEmote('${emote.id}')">Send</button>
    `;
    grid.appendChild(card);
  });
}

// সেন্ড ফাংশন
async function sendEmote(id) {
  const tc = document.getElementById('teamCode').value.trim();
  const u1 = document.getElementById('uid1').value.trim();
  const u2 = document.getElementById('uid2').value.trim();
  const u3 = document.getElementById('uid3').value.trim();
  const u4 = document.getElementById('uid4').value.trim();

  if (!u1) {
    showResult("UID 1 is required!", "error");
    return;
  }

  const url = `${API_URL}?tc=${tc}&emote_id=${id}&uid1=${u1}&uid2=${u2}&uid3=${u3}&uid4=${u4}`;
  try {
    await fetch(url);
    showResult(`Emote ${id} sent successfully!`, "success");
    showNotif("সেন্ড সফল!");
  } catch {
    showResult("Failed to send emote.", "error");
  }
}

function showResult(msg, type) {
  const box = document.getElementById('resultBox');
  box.textContent = msg;
  box.className = `result-box ${type}`;
}

function showNotif(msg) {
  const n = document.getElementById('notif');
  n.textContent = msg;
  n.style.opacity = '1';
  setTimeout(() => n.style.opacity = '0', 2000);
}

// লোড হওয়ার সাথে গ্রিড
window.onload = loadEmotes;
