require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const communityRoutes = require('./routes/community')
<<<<<<< HEAD
const http = require('http')            
const { Server } = require('socket.io')
=======
const announcementRoutes = require('./routes/announcement')

>>>>>>> b3a9417aa2ca9dc3d614244b8af386806646c2a8

const app = express() //Express app

// Enable CORS so the frontend can make requests
app.use(cors({
    origin: '', // frontend URL
    methods: ['GET','POST','DELETE','PUT','PATCH'],
    credentials: true
}))

// Middleware
app.use(express.json())

// Log incoming requests (middleware)
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Create HTTP server and Socket.IO server
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        methods:['GET', 'POST']
    }
});

app.set('io', io)

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id)

    socket.on('joinCommunity', (communityId) => { 
        console.log(`Attempting to join room: ${communityId}`); // Add debug log
        socket.join(`community_${communityId}`);
        console.log(`Successfully joined room: community_${communityId}`); // Add debug log
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id)
    })
});

//TODO, define API routes
app.use('/api/user', userRoutes)
app.use('/api/community', communityRoutes)
app.use('/api/announcements', announcementRoutes)

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const port = process.env.PORT || 4000
        server.listen(port, () => {
            console.log('Backend running on port', port)
        })
    })
    .catch(err => console.log(err))
