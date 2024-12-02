const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.json());

// Baza danych
const db = new sqlite3.Database('./users.db');

// Tabela użytkowników
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `);
});

// Rejestracja użytkownika
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email i hasło są wymagane' });
    }

    // Hashowanie hasła
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Dodanie użytkownika do bazy
    const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
    db.run(query, [email, hashedPassword], function (err) {
        if (err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                return res.status(409).json({ error: 'Użytkownik już istnieje' });
            }
            return res.status(500).json({ error: 'Błąd serwera' });
        }
        res.status(201).json({ id: this.lastID });
    });
});

// Logowanie użytkownika
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email i hasło są wymagane' });
    }

    // Sprawdzenie czy użytkownik istnieje
    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Błąd serwera' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
        }

        // Weryfikacja hasła
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
        }

        res.json({ message: 'Zalogowano pomyślnie', userId: user.id });
    });
});

// Start serwera
app.listen(port, () => {
    console.log(`Serwis użytkowników działa na http://localhost:${port}`);
});
