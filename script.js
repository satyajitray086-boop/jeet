/**
 * Portfolio Interactive Scripts
 * Handles Theme Toggling, Profile Data Customization, Category Filtering, and Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Set Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     Theme Management (Dark / Light)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio_theme', newTheme);
    });
  }

  /* ==========================================================================
     Mobile Navigation Drawer
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close mobile nav when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     Profile State & Live Customizer
     ========================================================================== */
  const defaultProfile = {
    name: 'Satyajit Ray',
    age: '22',
    tagline: 'Explorer • Builder • Problem Solver',
    location: 'India',
    bio: 'I am an energetic individual passionate about solving real-world problems and creating engaging experiences. Balancing continuous self-improvement with a genuine appreciation for arts, technology, and philosophy, I strive to bring dedication, originality, and resilience to everything I do.',
    email: 'satyajitray@example.com',
    web3key: ''
  };

  function getProfileData() {
    const stored = localStorage.getItem('portfolio_profile');
    if (stored) {
      try {
        return { ...defaultProfile, ...JSON.parse(stored) };
      } catch (e) {
        console.error('Failed to parse saved profile data:', e);
      }
    }
    return defaultProfile;
  }

  function getInitials(name) {
    if (!name) return 'SR';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function renderProfile(data) {
    // Hero & Title displays
    const displayHeroName = document.getElementById('display-hero-name');
    const displayStatName = document.getElementById('display-stat-name');
    const displayStatAge = document.getElementById('display-stat-age');
    const displayCardName = document.getElementById('display-card-name');
    const displayCardTagline = document.getElementById('display-card-tagline');
    const displayInfoFullname = document.getElementById('display-info-fullname');
    const displayInfoAge = document.getElementById('display-info-age');
    const displayInfoLocation = document.getElementById('display-info-location');
    const displayStatMetricAge = document.getElementById('display-stat-metric-age');
    const displayAboutBio = document.getElementById('display-about-bio');
    const displayFooterName = document.getElementById('display-footer-name');
    const logoName = document.getElementById('logo-name');
    const avatarInitials = document.getElementById('avatar-initials');
    const contactEmailLink = document.getElementById('contact-email-link');
    const contactEmailText = document.getElementById('contact-email-text');
    const contactLocationText = document.getElementById('contact-location-text');

    const initials = getInitials(data.name);

    if (displayHeroName) displayHeroName.textContent = data.name;
    if (displayStatName) displayStatName.textContent = data.name;
    if (displayStatAge) displayStatAge.textContent = `${data.age} Years`;
    if (displayCardName) displayCardName.textContent = data.name;
    if (displayCardTagline) displayCardTagline.textContent = data.tagline;
    if (displayInfoFullname) displayInfoFullname.textContent = data.name;
    if (displayInfoAge) displayInfoAge.textContent = data.age;
    if (displayInfoLocation) displayInfoLocation.textContent = data.location;
    if (displayStatMetricAge) displayStatMetricAge.textContent = data.age;
    if (displayAboutBio) displayAboutBio.textContent = data.bio;
    if (displayFooterName) displayFooterName.textContent = data.name;
    if (logoName) logoName.textContent = initials;
    if (avatarInitials) avatarInitials.textContent = initials;

    if (contactEmailLink) contactEmailLink.href = `mailto:${data.email}`;
    if (contactEmailText) contactEmailText.textContent = data.email;
    if (contactLocationText) contactLocationText.textContent = data.location;

    // Update document title
    document.title = `Portfolio | ${data.name}`;
  }

  // Populate inputs in modal
  function populateModalInputs(data) {
    const inputName = document.getElementById('input-name');
    const inputAge = document.getElementById('input-age');
    const inputTagline = document.getElementById('input-tagline');
    const inputLocation = document.getElementById('input-location');
    const inputBio = document.getElementById('input-bio');
    const inputEmail = document.getElementById('input-email');
    const inputWeb3Key = document.getElementById('input-web3key');

    if (inputName) inputName.value = data.name;
    if (inputAge) inputAge.value = data.age;
    if (inputTagline) inputTagline.value = data.tagline;
    if (inputLocation) inputLocation.value = data.location;
    if (inputBio) inputBio.value = data.bio;
    if (inputEmail) inputEmail.value = data.email;
    if (inputWeb3Key) inputWeb3Key.value = data.web3key || '';
  }

  // Initial load
  const currentProfile = getProfileData();
  renderProfile(currentProfile);

  /* ==========================================================================
     Customizer Modal Controls
     ========================================================================== */
  const editModal = document.getElementById('edit-modal');
  const quickEditBtn = document.getElementById('quick-edit-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const editForm = document.getElementById('portfolio-edit-form');
  const resetDefaultsBtn = document.getElementById('reset-defaults-btn');

  function openModal() {
    populateModalInputs(getProfileData());
    editModal.classList.add('active');
  }

  function closeModal() {
    editModal.classList.remove('active');
  }

  if (quickEditBtn) quickEditBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  if (editModal) {
    editModal.addEventListener('click', (e) => {
      if (e.target === editModal) closeModal();
    });
  }

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const updatedData = {
        name: document.getElementById('input-name').value.trim() || defaultProfile.name,
        age: document.getElementById('input-age').value.trim() || defaultProfile.age,
        tagline: document.getElementById('input-tagline').value.trim() || defaultProfile.tagline,
        location: document.getElementById('input-location').value.trim() || defaultProfile.location,
        bio: document.getElementById('input-bio').value.trim() || defaultProfile.bio,
        email: document.getElementById('input-email').value.trim() || defaultProfile.email,
        web3key: document.getElementById('input-web3key') ? document.getElementById('input-web3key').value.trim() : '',
      };

      localStorage.setItem('portfolio_profile', JSON.stringify(updatedData));
      renderProfile(updatedData);
      closeModal();
    });
  }

  if (resetDefaultsBtn) {
    resetDefaultsBtn.addEventListener('click', () => {
      localStorage.removeItem('portfolio_profile');
      renderProfile(defaultProfile);
      populateModalInputs(defaultProfile);
      closeModal();
    });
  }

  /* ==========================================================================
     Hobbies Filter Handling
     ========================================================================== */
  const hobbyFilterButtons = document.querySelectorAll('#hobby-filters .filter-btn');
  const hobbyCards = document.querySelectorAll('.hobby-card');

  hobbyFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      hobbyFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      hobbyCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     Achievements Filter Handling
     ========================================================================== */
  const achievementFilterButtons = document.querySelectorAll('#achievement-filters .filter-btn');
  const achievementItems = document.querySelectorAll('.timeline-item');

  achievementFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      achievementFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      achievementItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'flex';
          item.style.animation = 'fadeIn 0.35s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     Copy Email to Clipboard
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyTooltip = document.getElementById('copy-tooltip');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = getProfileData().email || 'satyajitray@example.com';
      navigator.clipboard.writeText(email).then(() => {
        if (copyTooltip) copyTooltip.textContent = 'Copied!';
        copyEmailBtn.style.color = 'var(--success)';
        copyEmailBtn.style.borderColor = 'var(--success)';

        setTimeout(() => {
          if (copyTooltip) copyTooltip.textContent = 'Copy';
          copyEmailBtn.style.color = '';
          copyEmailBtn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }

  /* ==========================================================================
     Contact Form Handler
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formStatusAlert = document.getElementById('form-status-alert');
  const submitContactBtn = document.getElementById('submit-contact-btn');
  const directMailtoBtn = document.getElementById('direct-mailto-btn');

  function showFormAlert(type, message) {
    if (!formStatusAlert) return;
    formStatusAlert.className = `form-status-alert ${type}`;
    formStatusAlert.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
      <span>${message}</span>
    `;
    formStatusAlert.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !subject || !message) {
        showFormAlert('error', 'Please fill in all required fields.');
        return;
      }

      const btnText = document.getElementById('btn-text');
      const originalText = btnText ? btnText.textContent : 'Send Message';
      if (btnText) btnText.textContent = 'Sending...';
      if (submitContactBtn) submitContactBtn.disabled = true;

      const profile = getProfileData();
      const web3FormsKey = profile.web3key;

      if (web3FormsKey) {
        // Send real email via Web3Forms API
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: name,
            email: email,
            subject: subject,
            message: message,
            from_name: `${name} (via Portfolio)`
          })
        })
        .then(res => res.json())
        .then(result => {
          if (btnText) btnText.textContent = originalText;
          if (submitContactBtn) submitContactBtn.disabled = false;
          if (result.success) {
            showFormAlert('success', `Thank you, ${name}! Your message has been sent to my inbox. I will reply to ${email} soon.`);
            contactForm.reset();
          } else {
            showFormAlert('error', result.message || 'Error sending message. Try clicking "Open in Email App".');
          }
        })
        .catch(() => {
          if (btnText) btnText.textContent = originalText;
          if (submitContactBtn) submitContactBtn.disabled = false;
          showFormAlert('error', 'Connection issue. Please use the "Open in Email App" button.');
        });
      } else {
        // Fallback / Demo & Mailto assistant
        setTimeout(() => {
          if (btnText) btnText.textContent = originalText;
          if (submitContactBtn) submitContactBtn.disabled = false;

          showFormAlert('success', `Thank you, ${name}! Your message is ready. Click "Open in Email App" to dispatch it directly, or set a free Web3Forms key in the Customizer for automated delivery.`);
          contactForm.reset();

          setTimeout(() => {
            if (formStatusAlert) formStatusAlert.style.display = 'none';
          }, 8000);
        }, 800);
      }
    });
  }

  // Direct Mailto button action
  if (directMailtoBtn) {
    directMailtoBtn.addEventListener('click', () => {
      const name = document.getElementById('contact-name') ? document.getElementById('contact-name').value.trim() : '';
      const email = document.getElementById('contact-email') ? document.getElementById('contact-email').value.trim() : '';
      const subject = document.getElementById('contact-subject') ? document.getElementById('contact-subject').value.trim() : 'Hello from Portfolio';
      const message = document.getElementById('contact-message') ? document.getElementById('contact-message').value.trim() : '';

      const targetEmail = getProfileData().email || 'satyajitray@example.com';
      const bodyContent = `Name: ${name || 'Visitor'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message || 'Hi Satyajit, I visited your portfolio!'}`;

      const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
      window.location.href = mailtoUrl;
    });
  }

  /* ==========================================================================
     Active Navbar Link on Scroll
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
