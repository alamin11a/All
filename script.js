// script.js - 100% Working Send + Tabs + Notification
const emotes = [
  {"id":"909051014","name":"puffy ride","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051014.png"},
  {"id":"909050009","name":"(circle)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909050009.png"},
  {"id":"909051013","name":"petals","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051013.png"},
  {"id":"909051012","name":"bow","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051012.png"},
  {"id":"909051010","name":"moterbike","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051010.png"},
  {"id":"909051004","name":"shower","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051004.png"},
  {"id":"909051002","name":"dream","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051002.png"},
  {"id":"909051001","name":"angelic","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051001.png"},
  {"id":"909048015","name":"paint","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909048015.png"},
  {"id":"909044015","name":"sword","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909044015.png"},
  {"id":"909041008","name":"flar","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909041008.png"},
  {"id":"909049003","name":"(owl)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909049003.png"},
  {"id":"909050008","name":"thor","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909050008.png"},
  {"id":"909049001","name":"(bigdill)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909049001.png"},
  {"id":"909041013","name":"(cs gm)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909041013.png"},
  {"id":"909050014","name":"(map read)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909050014.png"},
  {"id":"909050015","name":"(tomato)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909050015.png"},
  {"id":"909050002","name":"(ninja summon)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909050002.png"},
  {"id":"909042007","name":"(100 lvl)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909042007.png"},
  {"id":"909050028","name":"(auraboat)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909050028.png"},
  {"id":"909049012","name":"(flying guns)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909049012.png"},
  {"id":"909000045","name":"(I heart you)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000045.png"},
  {"id":"909000034","name":"(pirate flag)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000034.png"},
  {"id":"909000012","name":"(push up)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000012.png"},
  {"id":"909000020","name":"(devil move)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000020.png"},
  {"id":"909000008","name":"(shoot dance)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000008.png"},
  {"id":"909000006","name":"(chicken)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000006.png"},
  {"id":"909000014","name":"(THRONE)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000014.png"},
  {"id":"909000010","name":"(rose)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000010.png"},
  {"id":"909038004","name":"(valentine heart)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909038004.png"},
  {"id":"909034001","name":"(rampage book)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909034001.png"},
  {"id":"909049017","name":"(guild flag)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909049017.png"},
  {"id":"909040004","name":"(fish)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909040004.png"},
  {"id":"909041003","name":"(inosuke)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909041003.png"},
  {"id":"909041012","name":"(br grandmaster)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909041012.png"},
  {"id":"909049010","name":"(evo p90)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909049010.png"},
  {"id":"909051003","name":"(evo m60) new","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909051003.png"},
  {"id":"909033002","name":"(evo mp5)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909033002.png"},
  {"id":"909041005","name":"(evo groza)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909041005.png"},
  {"id":"909038010","name":"(thompson evo)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909038010.png"},
  {"id":"909039011","name":"(evo M10 red)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909039011.png"},
  {"id":"909040010","name":"(evo mp40 blue)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909040010.png"},
  {"id":"909000081","name":"(evo m10 green)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000081.png"},
  {"id":"909000085","name":"(evo xm8)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000085.png"},
  {"id":"909000063","name":"(evo ak)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000063.png"},
  {"id":"909000075","name":"(evo mp40)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000075.png"},
  {"id":"909033001","name":"(evo m4A1)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909033001.png"},
  {"id":"909000090","name":"(evo famas)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000090.png"},
  {"id":"909000068","name":"(evo scar)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000068.png"},
  {"id":"909000098","name":"(evo ump)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909000098.png"},
  {"id":"909035007","name":"(evo m18)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909035007.png"},
  {"id":"909037011","name":"(evo fist)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909037011.png"},
  {"id":"909038012","name":"(evo g18)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909038012.png"},
  {"id":"909035012","name":"(evo AN94)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909035012.png"},
  {"id":"909042008","name":"(evo Woodpecker)","img":"https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/909042008.png"}
];

const API_URL = "https://emote-psi.vercel.app/api/join";

// ট্যাব সুইচ
function showTab(tab) {
  const allBtn = document.getElementById('all-tab');
  const evoBtn = document.getElementById('evo-tab');

  if (tab === 'all') {
    allBtn.classList.add('active');
    evoBtn.classList.remove('active');
    renderEmotes(emotes);
  } else {
    evoBtn.classList.add('active');
    allBtn.classList.remove('active');
    const evoEmotes = emotes.filter(e => e.name.toLowerCase().includes('evo'));
    renderEmotes(evoEmotes);
  }
}

// ইমোট রেন্ডার + Send বাটন লিসেনার
function renderEmotes(list) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  list.forEach(emote => {
    const card = document.createElement('div');
    card.className = 'emote-card';
    card.innerHTML = `
      <img src="${emote.img}" alt="${emote.name}" onerror="this.src='https://via.placeholder.com/80/333/fff?text=?'">
      <div class="emote-name">${emote.name}</div>
      <div class="emote-id">ID: ${emote.id}</div>
      <button class="send-btn" data-id="${emote.id}">Send</button>
    `;
    grid.appendChild(card);
  });

  // Send বাটনে ক্লিক লিসেনার
  document.querySelectorAll('.send-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      sendEmote(id);
    });
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
    const response = await fetch(url);
    if (response.ok) {
      showResult(`Emote ${id} sent successfully!`, "success");
      showNotif("সেন্ড সফল!");
    } else {
      showResult("Failed: Server error.", "error");
    }
  } catch (err) {
    showResult("Network error. Check internet.", "error");
  }
}

function showResult(msg, type) {
  const box = document.getElementById('resultBox');
  box.textContent = msg;
  box.className = `result-box ${type}`;
}

function showNotif(msg) {
  const notif = document.createElement('div');
  notif.textContent = msg;
  notif.style.cssText = `
    position:fixed; bottom:20px; right:20px; background:#27ae60; color:#fff; 
    padding:12px 24px; border-radius:50px; font-weight:bold; z-index:10000;
    opacity:0; transition:opacity 0.4s;
  `;
  document.body.appendChild(notif);
  setTimeout(() => notif.style.opacity = '1', 100);
  setTimeout(() => {
    notif.style.opacity = '0';
    setTimeout(() => document.body.removeChild(notif), 400);
  }, 2000);
}

// লোড হওয়ার সাথে All ট্যাব
window.onload = () => {
  showTab('all');
};
