
document.getElementById('send-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messageContainer = document.getElementById('message-container');
        const newMessage = document.createElement('div');
        newMessage.className = 'd-flex flex-row mb-3';
        newMessage.innerHTML = `
            <div class="rounded-circle me-3" style="width: 45px; height: 45px; background: #ccc;"></div>
            <div>
                <p class="small p-2 mb-1 rounded-3 bg-body-tertiary">${messageText}</p>
                <p class="small text-muted mb-0">Just now</p>
            </div>
        `;
        messageContainer.appendChild(newMessage);
        messageInput.value = '';
    }
});

// Theme toggle 
document.getElementById('theme-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
});