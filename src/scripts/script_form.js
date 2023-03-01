const form = document.querySelector("form");
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const { name, email, message } = event.target;

    const endpoint =
        "https://w3xi70pyx9.execute-api.eu-central-1.amazonaws.com/default/sendEmailNode";

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
                error;
        });
});