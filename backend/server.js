require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const communityRoutes = require('./routes/community')
const announcementRoutes = require('./routes/announcement')
const http = require('http')
const { Server } = require('socket.io')

const app = express() //Express app

// Enable CORS so the frontend can make requests
app.use(cors({
    origin: process.env.FRONTEND_URL || '*', // allow local tests / set FRONTEND_URL in production
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
        origin: process.env.FRONTEND_URL || '*', // allow local tests
        methods:['GET', 'POST']
    }
});

app.set('io', io)

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id)

    // debug: log any incoming events
    socket.onAny((event, ...args) => {
        console.log(`Socket ${socket.id} event:`, event, args)
    })

    // join community room
    socket.on('joinCommunity', (communityId) => {
        if (!communityId) {
            console.log('joinCommunity called without id by', socket.id)
            return
        }
        const room = `community_${communityId}`
        socket.join(room)
        console.log(`Socket ${socket.id} joined room ${room}`)
    })

    socket.on('disconnect', (reason) => {
        console.log('Client disconnected:', socket.id, 'reason:', reason)
    })
});

// API routes
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