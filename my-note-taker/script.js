// Initialize Firebase
firebase.initializeApp({
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
});

// Get elements
const loginButton = document.getElementById('login-btn');
const logoutButton = document.getElementById('logout-btn');
const notesSection = document.getElementById('notes');
const noteListElement = document.getElementById('note-list');
const newNoteButton = document.getElementById('new-note-btn');
const noteEditorSection = document.getElementById('note-editor');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const noteTagSelect = document.getElementById('note-tag');
const saveNoteButton = document.getElementById('save-note-btn');
const deleteNoteButton = document