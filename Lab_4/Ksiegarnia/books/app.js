const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware do obsługi JSON
app.use(bodyParser.json());

// Połączenie z bazą danych SQLite
const db = new sqlite3.Database('./books.db', (err) => {
    if (err) {
        console.error('Błąd połączenia z bazą danych:', err.message);
    } else {
        console.log('Połączono z bazą danych SQLite.');
    }
});

// Tabela books
db.run(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        year INTEGER NOT NULL
    )
`);


// Pobranie wszystkich książek
app.get('/api/books', (req, res) => {
    db.all('SELECT * FROM books', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Pobranie jednej książki po ID
app.get('/api/books/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM books WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.json(row);
        }
    });
});

// Dodanie nowej książki
app.post('/api/books', (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(400).json({ error: 'Missing title, author, or year' });
    }
    db.run(
        'INSERT INTO books (title, author, year) VALUES (?, ?, ?)',
        [title, author, year],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ id: this.lastID });
            }
        }
    );
});

// Usunięcie książki
app.delete('/api/books/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM books WHERE id = ?', [id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.status(200).json({ message: 'Book deleted' });
        }
    });
});

// Start serwera
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
