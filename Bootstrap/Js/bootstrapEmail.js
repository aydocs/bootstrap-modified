document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const data = {
        mailAcoounts:"Your E-Mail Address",
        messages: message,
        section: [
            {
                fields: {
                    Topic: subject,
                    messages: message,
                },
                partitionName: "User Message",
            },
            {
                fields: {
                    "Full Name": name,
                    "Email Address": email,
                    "Phone": "",
                },
                partitionName: "Contact Information",
            },
        ],
    };
// The API URL is constructed by appending the necessary parameters encoded as a query string.
// The encodeURIComponent function is used to ensure that special characters in the data are safely encoded.
    const url = `Your API URL${encodeURIComponent(
        JSON.stringify(data)
    )}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13",
            },
        });

        const statusMessage = document.getElementById("statusMessage");

        if (response.status === 200) {
            // Success message
            statusMessage.classList.remove("dark");
            statusMessage.classList.add("darkS");
            statusMessage.textContent = "Email successfully sent!";
            statusMessage.style.display = "block";
            document.getElementById("contactForm").reset();
        } else {
            // Error message
            statusMessage.classList.remove("dange");
            statusMessage.classList.add("danger");
            statusMessage.textContent = "Email could not be sent. Please try again.";
            statusMessage.style.display = "block";
        }

        // Hide the status message after 5 seconds
        setTimeout(() => {
            statusMessage.style.display = "none";
        }, 5000);
        
    } catch (error) {
        // Error message for network or other errors
        const statusMessage = document.getElementById("statusMessage");
        statusMessage.classList.remove("dark");
        statusMessage.classList.add("danger");
        statusMessage.textContent = "An error occurred, please try again.";
        statusMessage.style.display = "block";

        // Hide the status message after 5 seconds
        setTimeout(() => {
            statusMessage.style.display = "none";
        }, 5000);

        console.error(error);
    }
});


// Developed By Aydocs
// GitHub Repository: https://github.com/aydocs
//
// Project: Bootstrap Modified Version
// Description: This project is a customized and enhanced version of the popular Bootstrap framework. It includes modifications and additional features for better responsiveness, modern design components, and extended utility classes to streamline the development of modern web applications.
//
// License: MIT License (https://opensource.org/licenses/MIT)
// Date: 13 March 2025
// Version: 1.0.0
// 
// If you have any questions, suggestions, or issues, feel free to open an issue or create a pull request at:
// https://github.com/aydocs/bootstrap-modified