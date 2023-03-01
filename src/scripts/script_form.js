const form = document.querySelector("form");
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const { name, email, message } = event.target;

    const endpoint = "https://6nsdq0bs21.execute-api.eu-central-1.amazonaws.com/Prod/send";

    const body = JSON.stringify({
        toEmails: ["niewolinski@protonmail.com"],
        subject: "Mail from niewolinsky.dev",
        message: `Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`
    });
    const requestOptions = {
        method: "POST",
        body
    };

    fetch(endpoint, requestOptions)
        .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            document.getElementById("result-text").innerText = "Email sent successfully!";
            name.value = "";
            email.value = "";
            message.value = "";
        });
});