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
    
    const testCommunityId = "690fc32ae44fecc70f115df8"; // Use your actual community ID
    socket.emit("joinCommunity", testCommunityId);
    console.log(`Joined community room: ${testCommunityId}`);
    console.log("Waiting for new members...\n");
});

socket.on("newMember", (payload) => {
    console.log("🔔 New Member Joined!");
    console.log("Details:", payload);
    console.log("-------------------\n");
});

socket.on("disconnect", () => {
    console.log("❌ Disconnected from server");
});

// Keep the Node process running
process.stdin.resume();