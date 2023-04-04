const logForm = document.querySelector('.log');

const getFormData = (form) => {
    let ob = {};
    let data = new FormData(form);
    for (let [key, value] of data.entries()) {
        ob[key] = value;
    }
    return ob;
}
logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData(logForm);
    console.log(data);
    const harcum = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const patasxan = await harcum.json();
    if (patasxan.oka === true) {
        location.replace('/home/index.html');
    } else {
        alert('Sxal es grel kam loginy kam paroly');
    }
});