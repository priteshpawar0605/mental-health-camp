document.getElementById("registerButton").addEventListener("click", function() {
    // Open the Google Form in a new tab
    window.open("YOUR_GOOGLE_FORM_LINK_HERE", "_blank");
  
    // Reveal the WhatsApp Link Card
    document.getElementById("whatsappLink").classList.remove("hidden");
  
    // Optionally, scroll to the WhatsApp link
    document.getElementById("whatsappLink").scrollIntoView({ behavior: "smooth" });
  });
<script>
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    if(link.href && !link.href.startsWith('#') && link.target !== '_blank'){
      e.preventDefault();
      document.body.classList.remove('fade-page');
      document.body.style.opacity = '0';
      setTimeout(() => window.location = link.href, 300);
    }
  });
});
// Theme toggle
const toggle = document.getElementById('themeToggle');
const elements = [
  document.body,
  document.querySelector('header'),
  ...document.querySelectorAll('.hero, .content, .card, button, .join-link, footer')
];

if (localStorage.getItem('dimMode') === 'true') {
  toggle.checked = true;
  elements.forEach(el => el.classList.add('dim-mode'));
}

toggle.addEventListener('change', () => {
  const dim = toggle.checked;
  elements.forEach(el => el.classList.toggle('dim-mode', dim));
  localStorage.setItem('dimMode', dim);
});

// Sidebar
let sidebarOpen = false;
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebarOpen) {
    sidebar.style.width = "0";
    sidebarOpen = false;
  } else {
    sidebar.style.width = "250px";
    sidebarOpen = true;
  }
}

// Profile Edit
function showProfileEdit() {
  document.getElementById('profileModal').style.display = 'block';
}

function closeProfileEdit() {
  document.getElementById('profileModal').style.display = 'none';
}

function saveProfile() {
  const name = document.getElementById('newUserName').value;
  const avatar = document.getElementById('newUserAvatar').value;

  localStorage.setItem('mindspaceUserName', name);
  localStorage.setItem('mindspaceUserAvatar', avatar);

  updateProfile();
  closeProfileEdit();
}

function updateProfile() {
  const name = localStorage.getItem('mindspaceUserName') || 'Hello, Teen!';
  const avatar = localStorage.getItem('mindspaceUserAvatar') || 'https://i.ibb.co/2k0J4Mn/default-avatar.png';

  document.getElementById('userName').innerText = name;
  document.getElementById('userAvatar').src = avatar;
  document.getElementById('headerAvatar').src = avatar;
}

document.addEventListener('DOMContentLoaded', updateProfile);
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal-close');

  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    modal.style.display = 'block';  // Show modal only on first visit
    localStorage.setItem('hasVisited', 'true');
  }

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

</script>
