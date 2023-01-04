(() => {
let inputEmails = document.querySelectorAll('.form-input');
let forms = document.querySelectorAll('.intro-form, .access-form');

function updateInvalidStatus(e) {
	e.target.classList.add('invalid');
	document.getElementById(e.target.dataset.errorid).classList.remove('hidden');
}

function updateInvalidStatusOnInput(e) {
	if (e.target.validity.valid) {
		e.target.classList.remove('invalid');
		document.getElementById(e.target.dataset.errorid).classList.add('hidden');
	}
}

function validateOnSubmit(e) {
	if (e.target.checkValidity()) {
		// Remove the visual invalid states for the heck of it
		e.target.classList.remove('invalid');
		let errorId = e.target.querySelector('.form-input').dataset.errorid;
		document.getElementById(errorId).classList.add('hidden');

		// Send data to server for server-side verification
	} else {
		// Form invalid - Prevent form from submitting
		e.preventDefault();
	}
}

for (let i = 0; i < inputEmails.length; ++i) {
	inputEmails[i].addEventListener('invalid', updateInvalidStatus, false);
	inputEmails[i].addEventListener('input', updateInvalidStatusOnInput, false);
	forms[i].addEventListener('submit', validateOnSubmit, false);
	// Disable built-in form validation. If JavaScript is disabled, it will fallback.
	forms[i].setAttribute('novalidate', 'novalidate');
}
})();