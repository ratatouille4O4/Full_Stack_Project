const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/admin/dashboard', adminAuthMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/admin/users', adminAuthMiddleware, (req, res) => {
    res.send('Manage Users Page');
});

app.get('/admin/products', adminAuthMiddleware, (req, res) => {
    res.send('Manage Products Page');
});

app.get('/admin/messages', adminAuthMiddleware, (req, res) => {
    res.send('View Messages Page');
});

app.get('/admin/settings', adminAuthMiddleware, (req, res) => {
    res.send('Settings Page');
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        const token = jwt.sign({ userId: user._id }, 'secretkey');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Registration Route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.send('User registered');
});

// Authentication Middleware
function adminAuthMiddleware(req, res, next) {
    // Logic for admin authentication
    next();
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
