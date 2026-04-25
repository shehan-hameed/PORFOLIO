var form = document.getElementById('contact-form');
var successMsg = document.getElementById('success-msg');

function showError(id, msg) {
  var f = document.getElementById(id);
  var s = document.getElementById(id + '-error');
  if (f) f.classList.add('input-error');
  if (s) s.textContent = msg;
}

function clearError(id) {
  var f = document.getElementById(id);
  var s = document.getElementById(id + '-error');
  if (f) f.classList.remove('input-error');
  if (s) s.textContent = '';
}

function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

['name','email','subject','message'].forEach(function(id) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('input', function() { clearError(id); });
});

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name    = document.getElementById('name').value.trim();
    var email   = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    var valid = true;

    ['name','email','subject','message'].forEach(clearError);

    if (!name)             { showError('name', 'Please enter your name.'); valid = false; }
    else if (name.length < 2) { showError('name', 'Name must be at least 2 characters.'); valid = false; }

    if (!email)                 { showError('email', 'Please enter your email.'); valid = false; }
    else if (!isValidEmail(email)) { showError('email', 'Please enter a valid email address.'); valid = false; }

    if (!subject)              { showError('subject', 'Please enter a subject.'); valid = false; }
    else if (subject.length < 3) { showError('subject', 'Subject must be at least 3 characters.'); valid = false; }

    if (!message)               { showError('message', 'Please enter a message.'); valid = false; }
    else if (message.length < 10) { showError('message', 'Message must be at least 10 characters.'); valid = false; }

    if (valid) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }
  });
}

function resetForm() {
  if (form) { form.reset(); ['name','email','subject','message'].forEach(clearError); form.style.display = 'block'; }
  if (successMsg) successMsg.style.display = 'none';
}
