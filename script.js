function submitForm() {
    const name = document.getElementById('name').value;
    const roomType = document.getElementById('roomType').value;
    const messType = document.getElementById('messType').value;
    const gymType = document.getElementById('gymType').value;

    localStorage.setItem('userName', name);
    localStorage.setItem('roomType', roomType);
    localStorage.setItem('messType', messType);
    localStorage.setItem('gymType', gymType);

    window.location.href = 'certificate.html';
}

document.addEventListener("DOMContentLoaded", () => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        document.getElementById("name").value = storedUsername;
    }
});

function redirectToBooking() {
    const userType = document.getElementById('userType').value;
    
    if (userType === "") {
        alert("Please select a category.");
    } else {
        window.location.href = `booking.html?type=${userType}`;
    }
}
window.onload = function() {
    const name = localStorage.getItem('userName');
    const room = localStorage.getItem('roomType');
    const mess = localStorage.getItem('messType');
    const gym = localStorage.getItem('gymType');
    const date = new Date().toLocaleDateString();

    if (room && mess && gym) {
        document.getElementById('certName').innerText = name;
        document.getElementById('certRoom').innerText = room;
        document.getElementById('certMess').innerText = mess;
        document.getElementById('certGym').innerText = gym;
        document.getElementById('certDate').innerText = date;
    }
}

function downloadImage() {
    const certificate = document.getElementById('certificate');
    const downloadButtons = document.getElementById('download-buttons');
    
    downloadButtons.style.display = 'none';
    
    html2canvas(certificate).then(canvas => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        downloadButtons.style.display = 'flex';
    });
}

function submitQuery(event) {
    event.preventDefault(); 

    const query = document.getElementById('queryInput').value;
    const responseMessage = document.getElementById('responseMessage'); 

    responseMessage.innerHTML = `<strong>Thank you!</strong> Your query has been submitted: "${query}". We will get back to you shortly.`;

    document.getElementById('queryForm').reset();

}
        window.onclick = function(event) {
            if (!event.target.matches('.user-menu button')) {
                if (userOptions.style.display === 'block') {
                    userOptions.style.display = 'none';
                }
            }
            if (event.target === signInModal) {
                closeModal();
            }
        };

        function showSignInModal() {
            signInModal.style.display = 'flex';
        }

        function closeModal() {
            signInModal.style.display = 'none';
        }

        function signIn() {
            const username = document.getElementById('username').value;
            if (username) {
                document.getElementById('userButton').textContent = username;
                logoutButton.style.display = 'block'; 
                closeModal(); 
                userOptions.style.display = 'none'; 
            } else {
                alert("Please enter a name.");
            }
        }

        function logout() {
            document.getElementById('userButton').textContent = "User";
            logoutButton.style.display = 'none'; 
            userOptions.style.display = 'none'; 
        }
        function toggleUserMenu() {
            const userOptions = document.getElementById("user-options");
            userOptions.style.display = userOptions.style.display === "none" ? "block" : "none";
        }
        
        function signIn() {
            document.getElementById("signInModal").style.display = "block";
            document.getElementById("user-options").style.display = "none";
        }
        
        function closeModal() {
            document.getElementById("signInModal").style.display = "none";
        }
        
        function submitUsername() {
            const username = document.getElementById("usernameInput").value;
            if (username) {
                localStorage.setItem("username", username); 
                document.getElementById("user-menu").children[0].innerText = username;
                document.getElementById("user-options").innerHTML = `
                    <button onclick="logout()">Logout</button>
                    <button onclick="rateUs()">Rate Us</button>
                `;
                closeModal();
            }
        }
        
        function logout() {
            document.getElementById("user-menu").children[0].innerText = "User";
            document.getElementById("user-options").innerHTML = `
                <button onclick="signIn()">Sign In</button>
                <button onclick="rateUs()">Rate Us</button>
            `;
        }
        
        function rateUs() {
            alert("Thank you for your feedback!");
        }
        
        window.onclick = function(event) {
            const modal = document.getElementById("signInModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        
