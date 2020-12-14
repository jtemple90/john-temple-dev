const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('user-form');
    const btn = document.getElementById('button');
    const status = document.getElementById('status');

    function success() {
        form.reset();
        btn.style = "display: none";
        status.innerHTML = 'Thank You';
    }

    function error() {
        status.innerHTML = 'Oops! There was a problem.';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
}