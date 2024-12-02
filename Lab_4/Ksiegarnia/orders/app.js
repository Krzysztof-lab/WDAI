const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

// Middleware do obsługi JSON
app.use(bodyParser.json());

// Połączenie z bazą danych SQLite
const db = new sqlite3.Database('./orders.db', (err) => {
    if (err) {
        console.error('Błąd połączenia z bazą danych:', err.message);
    } else {
        console.log('Połączono z bazą danych SQLite (zamówienia).');
    }
});

// Tabela orders
db.run(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        book_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        status TEXT DEFAULT 'active'
    )
`);

// 1. Pobranie wszystkich zamówień użytkownika
app.get('/api/orders/:userId', (req, res) => {
    const { userId } = req.params;

    db.all('SELECT * FROM orders WHERE user_id = ?', [userId], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// 2. Dodanie zamówienia
app.post('/api/orders', async (req, res) => {
    const { user_id, book_id, quantity } = req.body;

    if (!user_id || !book_id || !quantity) {
        return res.status(400).json({ error: 'Missing user_id, book_id, or quantity' });
    }

    try {
        // Sprawdzenie, czy książka istnieje w serwisie książek
        const bookServiceUrl = `http://localhost:3000/api/books/${book_id}`;
        const bookResponse = await axios.get(bookServiceUrl);

        if (!bookResponse.data) {
            return res.status(404).json({ error: 'Book not found' });
        }

        // Dodanie zamówienia do bazy danych
        db.run(
            'INSERT INTO orders (user_id, book_id, quantity) VALUES (?, ?, ?)',
            [user_id, book_id, quantity],
            function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.status(201).json({ id: this.lastID });
                }
            }
        );
    } catch (error) {
        res.status(500).json({ error: 'Error communicating with book service' });
    }
});

// 3. Usunięcie zamówienia
app.delete('/api/orders/:orderId', (req, res) => {
    const { orderId } = req.params;

    db.run('DELETE FROM orders WHERE id = ?', [orderId], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            res.status(200).json({ message: 'Order deleted' });
        }
    });
});

// 4. Aktualizacja zamówienia
app.patch('/api/orders/:orderId', (req, res) => {
    const { orderId } = req.params;
    const { quantity, status } = req.body;

    if (!quantity && !status) {
        return res.status(400).json({ error: 'Missing quantity or status to update' });
    }

    const updates = [];
    const values = [];

    if (quantity) {
        updates.push('quantity = ?');
        values.push(quantity);
    }
    if (status) {
        updates.push('status = ?');
        values.push(status);
    }

    values.push(orderId);

    db.run(
        `UPDATE orders SET ${updates.join(', ')} WHERE id = ?`,
        values,
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (this.changes === 0) {
                res.status(404).json({ error: 'Order not found' });
            } else {
                res.status(200).json({ message: 'Order updated' });
            }
        }
    );
});

// Start serwera
app.listen(port, () => {
    console.log(`Serwer zamówień działa na http://localhost:${port}`);
});
