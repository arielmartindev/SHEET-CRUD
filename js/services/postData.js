let scriptURL = "https://script.google.com/macros/s/AKfycbxgd7aNP3F454-vnxZ_wqlaK2Z8JY08anxu9jjOx47FJ7hs-dj7hlyMiEKcUdFg22GX/exec"
let form = document.forms['submit-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then((res) => {
        console.log(res)
        if(res.status === 200) {
            form.reset();
            //alert('Datos registrados correctamente')

            // Simulate a mouse click:
            //window.location.href = "index.html"

            // Simulate an HTTP redirect:
            window.location.replace("index.html");
        }
    })
    .catch((error) => {
        console.error('Error', error.message)
    })
})