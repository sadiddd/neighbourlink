// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   KeyboardAvoidingView,
//   Platform,
//   Modal,
// } from "react-native";

// import { Shield } from "lucide-react-native";

// type AuthModalProps = {
//   visible: boolean;
//   onClose: () => void;
// };

// export default function AuthModal({ visible, onClose }: AuthModalProps) {
//   const [mode, setMode] = useState<"login" | "signup">("login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAuth = async () => {
//     setLoading(true);
//     try {
//       if (mode === "signup") {
//         // TODO: Add signup logic here
//         console.log("Signing up:", { email, password, fullName });
//       } else {
//         // TODO: Add login logic here
//         console.log("Logging in:", { email, password });
//       }

//       // TODO: Navigate or update app state after successful auth
//       onClose();
//     } catch (error: any) {
//       console.log("Error:", error.message || error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : undefined}
//         style={styles.overlay}
//       >
//         <View style={styles.card}>
//           <View style={styles.iconWrapper}>
//             <Shield size={24} color="#3b82f6" />
//           </View>

//           <Text style={styles.title}>
//             {mode === "login" ? "Welcome Back" : "Join SafeNeighbor"}
//           </Text>
//           <Text style={styles.description}>
//             {mode === "login"
//               ? "Sign in to your account"
//               : "Create an account to protect your community"}
//           </Text>

//           <View style={styles.form}>
//             {mode === "signup" && (
//               <View style={styles.inputGroup}>
//                 <Text style={styles.label}>Full Name</Text>
//                 <TextInput
//                   placeholder="John Doe"
//                   style={styles.input}
//                   value={fullName}
//                   onChangeText={setFullName}
//                 />
//               </View>
//             )}

//             <View style={styles.inputGroup}>
//               <Text style={styles.label}>Email</Text>
//               <TextInput
//                 placeholder="you@example.com"
//                 style={styles.input}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 value={email}
//                 onChangeText={setEmail}
//               />
//             </View>

//             <View style={styles.inputGroup}>
//               <Text style={styles.label}>Password</Text>
//               <TextInput
//                 placeholder="••••••••"
//                 style={styles.input}
//                 secureTextEntry
//                 value={password}
//                 onChangeText={setPassword}
//               />
//             </View>

//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleAuth}
//               disabled={loading}
//             >
//               {loading ? (
//                 <ActivityIndicator color="#fff" />
//               ) : (
//                 <Text style={styles.buttonText}>
//                   {mode === "login" ? "Sign In" : "Sign Up"}
//                 </Text>
//               )}
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => setMode(mode === "login" ? "signup" : "login")}
//               style={{ marginTop: 12 }}
//             >
//               <Text style={styles.switchText}>
//                 {mode === "login"
//                   ? "Don't have an account? Sign up"
//                   : "Already have an account? Sign in"}
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={onClose}
//               style={{ marginTop: 16, alignSelf: "center" }}
//             >
//               <Text style={{ color: "#ef4444", fontWeight: "bold" }}>
//                 Close
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   card: {
//     width: "100%",
//     maxWidth: 400,
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 24,
//   },
//   iconWrapper: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     backgroundColor: "#dbecff",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     textAlign: "center",
//     color: "#6b7280",
//     marginBottom: 16,
//   },
//   form: { marginTop: 8 },
//   inputGroup: { marginBottom: 12 },
//   label: { fontSize: 12, marginBottom: 4, color: "#374151" },
//   input: {
//     borderWidth: 1,
//     borderColor: "#d1d5db",
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//   },
//   button: {
//     backgroundColor: "#ef4444",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 8,
//   },
//   buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
//   switchText: {
//     textAlign: "center",
//     color: "#3b82f6",
//     textDecorationLine: "underline",
//     fontSize: 14,
//   },
// });

// //again
// // AuthModal.tsx
// import React from "react";
// import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

// type AuthModalProps = {
//   visible: boolean;
//   onClose: () => void;
// };

// export default function AuthModal({ visible, onClose }: AuthModalProps) {
//   return (
//     <Modal
//       visible={visible}
//       animationType="slide"
//       transparent
//       onRequestClose={onClose}
//     >
//       <View style={styles.overlay}>
//         <View style={styles.modalContent}>
//           <Text style={styles.heading}>Log In / Sign Up</Text>
//           {/* TODO: Add form inputs here */}
//           <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//             <Text style={styles.closeText}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.4)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContent: {
//     width: "90%",
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 12,
//   },
//   heading: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
//   closeButton: { marginTop: 12, alignSelf: "flex-end" },
//   closeText: { color: "#007AFF", fontWeight: "bold" },
// });

import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

type AuthModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function AuthModal({ visible, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { login } = useAuth();

  const API_BASE = "http://localhost:4000/api/user";

  const handleAuth = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      if (mode === "signup") {
        const { data } = await axios.post(`${API_BASE}/signup`, {
          email,
          password,
        });
        console.log("Signup success", data);
        // If backend returns token on signup, log the user in
        if (data?.token) {
          await login(data);
        }
        onClose();
      } else {
        const { data } = await axios.post(`${API_BASE}/login`, {
          email,
          password,
        });
        console.log("Login success:", data);
        // Expect server to return { email, token, ... }
        if (data) {
          await login(data);
        }
        onClose();
      }
    } catch (err: any) {
      console.log(err.response?.data || err.message);
      setErrorMsg(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {mode === "login" ? "Log In" : "Sign Up"}
          </Text>

          {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleAuth}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                {mode === "login" ? "Log In" : "Sign Up"}
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setMode(mode === "login" ? "signup" : "login")}
          >
            <Text style={styles.switchText}>
              {mode === "login"
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  switchText: { textAlign: "center", color: "#007AFF", marginVertical: 8 },
  closeButton: { marginTop: 8, alignItems: "center" },
  closeText: { color: "#f87171", fontWeight: "bold" },
  error: { color: "#f87171", textAlign: "center", marginBottom: 8 },
});
