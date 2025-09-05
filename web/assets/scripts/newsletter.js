// newsletter.js

/**
 * Newsletter Module (plain JS)
 * Handles Mailchimp subscription via JSONP
 */

const ui = {
    newsletter: '.js-newsletter',
    subscribeForm: '.js-subscribe-form',
    successMessage: '.js-newsletter-success',
    errorMessage: '#mce-error-response'
};

let initialized = false;

/**
 * Call this once on page load to wire up the newsletter form
 */
export function initNewsletter() {
    if (initialized) return;
    initialized = true;

    const form = document.querySelector(ui.subscribeForm);
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        this.classList.add('is-loading');
        processNewsletterSubscription(this);
    });
}

/**
 * Builds the Mailchimp JSONP URL and injects a <script> tag
 * to perform the request, then handles the response via a callback.
 */
function processNewsletterSubscription(form) {
    let actionUrl = form.getAttribute('action') || '';
    actionUrl = actionUrl.replace('/post?', '/post-json?');

    const callbackName = 'jsonpCallback_' + Date.now();
    const sep = actionUrl.includes('?') ? '&' : '?';
    actionUrl += sep + 'c=' + callbackName;

    // serialize form fields
    const params = Array.from(form.elements)
        .filter((el) => el.name && !el.disabled)
        .map((el) => encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value))
        .join('&');

    const finalUrl = actionUrl + '&' + params;
    const script = document.createElement('script');
    script.src = finalUrl;

    // define the global JSON callback
    window[callbackName] = function (data) {
        // clean up
        document.body.removeChild(script);
        delete window[callbackName];

        form.classList.remove('is-loading');

        if (data.result === 'success') {
            form.style.display = 'none';
            const container = document.querySelector(ui.newsletter);
            if (container) container.classList.add('was-successful');
        } else {
            const errEl = document.querySelector(ui.errorMessage);
            if (errEl) {
                errEl.innerHTML = data.msg;
                errEl.style.display = '';
            }
        }
    };

    document.body.appendChild(script);
}
