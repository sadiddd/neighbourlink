const { io } = require("socket.io-client");

const socket = io("http://localhost:4000", {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttempts: 10
});

socket.on("connect_error", (error) => {
    console.log("Connection Error:", error);
});

socket.on("connect", () => {
    console.log("\n=== Socket Test Client ===");
    console.log("Connected with ID:", socket.id);

    // IMPORTANT: set this to the exact community id you use in Postman
    const testCommunityId = "690fd035f41bb8cbf5271678"; // <- replace with your community _id
    console.log("Joining community room for id:", testCommunityId);
    socket.emit("joinCommunity", testCommunityId);
    console.log(`Emitted joinCommunity for ${testCommunityId}`);
    console.log("Waiting for announcements...\n");
});

socket.on("announcementCreated", (payload) => {
    console.log("📢 New announcement received:");
    console.log(payload);
});

socket.on("newMember", (payload) => {
    console.log("🔔 New member joined:");
    console.log(payload);
});

socket.on("disconnect", () => {
    console.log("❌ Disconnected from server");
});

process.stdin.resume();