// ── PHOTO UPLOAD ──
const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const photoPlaceholder = document.getElementById('photoPlaceholder');

photoInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    photoPreview.src = e.target.result;
    photoPreview.style.display = 'block';
    photoPlaceholder.style.display = 'none';
  };
  reader.readAsDataURL(file);
});

// ── MODAL FUNCTIONS ──
function openHobbyModal() {
  document.getElementById('hobbyModal').classList.add('open');
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(function (m) {
    m.classList.remove('open');
  });
}

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(function (m) {
  m.addEventListener('click', function (e) {
    if (e.target === m) {
      closeModals();
    }
  });
});

// ── ADD HOBBY ──
function addHobby() {
  const emoji = document.getElementById('hobbyEmoji').value.trim() || '⭐';
  const name = document.getElementById('hobbyName').value.trim();
  if (!name) return;

  const grid = document.getElementById('hobbiesGrid');
  const addBtn = grid.querySelector('.add-hobby');

  const card = document.createElement('div');
  card.className = 'hobby-card';
  card.innerHTML =
    '<span class="hobby-icon">' + emoji + '</span>' +
    '<div class="hobby-name">' + name + '</div>';

  grid.insertBefore(card, addBtn);

  document.getElementById('hobbyEmoji').value = '';
  document.getElementById('hobbyName').value = '';
  closeModals();
}

// ── KEYBOARD SHORTCUT: ESC closes modals ──
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModals();
  }
});
