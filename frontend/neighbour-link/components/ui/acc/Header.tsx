// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import AuthModal from "@/app/AuthModal";

// type HeaderProps = {
//   onLogin?: () => void;
//   onSignUp?: () => void;
// };

// export default function Header({ onLogin, onSignUp }: HeaderProps) {
//   const [authmodalOpen, setAuthModalOpen] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Left: App Name / Logo */}
//       <Text style={styles.logo}>NeighbourLink</Text>

//       {/* Right: Login / Sign Up Buttons */}
//       <View style={styles.buttons}>
//         <TouchableOpacity style={styles.button} onPress={onLogin}>
//           <Text style={styles.buttonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.signUpButton]}
//           onPress={onSignUp}
//         >
//           <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: "#fff",
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },
//   logo: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   buttons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   button: {
//     marginLeft: 12,
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//     backgroundColor: "#007AFF", // blue
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 14,
//   },
//   signUpButton: {
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#007AFF",
//   },
//   signUpText: {
//     color: "#007AFF",
//   },
// });

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AuthModal from "@/app/AuthModal";

export default function Header() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <View>
      {/* Header */}
      <View style={styles.container}>
        {/* Left: App Name / Logo */}
        <Text style={styles.logo}>NeighbourLink</Text>

        {/* Right: Login / Sign Up Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setAuthModalOpen(true)}
          >
            <Text style={styles.buttonText}>Log In / Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Auth Modal */}
      {authModalOpen && (
        <AuthModal
          visible={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
