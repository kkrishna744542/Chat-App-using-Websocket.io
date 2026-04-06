const socket = io();
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const userList = document.getElementById('user-list');

const name = prompt('What is your name?') || 'Anonymous';
appendMessage('You joined');
socket.emit('new-user', name);

// Listen for incoming messages
socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
});

// Update the UI when a user connects/disconnects
socket.on('user-connected', name => {
    appendMessage(`${name} connected`, 'system');
});

socket.on('update-user-list', users => {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user;
        userList.append(li);
    });
});

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
});

function appendMessage(message, type = 'user') {
    const messageElement = document.createElement('div');
    messageElement.style.margin = '5px 0';
    messageElement.style.color = type === 'system' ? 'gray' : 'black';
    messageElement.innerText = message;
    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}