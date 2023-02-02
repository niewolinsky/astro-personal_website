const toggleSwitch = document.querySelector('input[type="checkbox"]') //ELEMENT: toggle switch for darkmode/lightmode

// EVENT LISTENERS & HANDLERS //
toggleSwitch.onchange = function (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    const { name, email, message } = event.target;

    // Use your API endpoint URL you copied from the previous step
    const endpoint =
        "https://w3xi70pyx9.execute-api.eu-central-1.amazonaws.com/default/sendEmailNode";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
        senderName: name.value,
        senderEmail: email.value,
        message: message.value
    });
    const requestOptions = {
        method: "POST",
        body
    };

    fetch(endpoint, requestOptions)
        .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
        })
        .then((response) => {
            document.getElementById("result-text").innerText =
                "Email sent successfully!";
        })
        .catch((error) => {
            document.getElementById("result-text").innerText =
                "An unkown error occured.";
        });
});