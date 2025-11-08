// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import { AlertTriangle, Navigation } from "lucide-react-native";

// import Header from "@/components/ui/acc/Header";
// // TODO: Implement these dialogs as React Native modals
// import CreateAlertDialog from "@/components/ui/acc/CreateAlertDialog";
// import CreateWalkDialog from "@/components/ui/acc/CreateWalkDialog";

// export default function Home() {
//   const [alertDialogOpen, setAlertDialogOpen] = useState(false);
//   const [walkDialogOpen, setWalkDialogOpen] = useState(false);
//   const [authVisible, setAuthVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Header />

//       <ScrollView contentContainerStyle={styles.main}>
//         <View style={styles.centerSection}>
//           <Text style={styles.heading}>Stay Safe Together</Text>
//           <Text style={styles.subheading}>
//             Connect with your community to help and be helped
//           </Text>
//         </View>

//         <View style={styles.buttonGrid}>
//           <TouchableOpacity
//             style={[styles.button, styles.destructiveButton]}
//             onPress={() => setAlertDialogOpen(true)}
//           >
//             <AlertTriangle width={40} height={40} color="#f87171" />
//             <Text style={styles.buttonText}>Create Emergency Alert</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.button, styles.outlineButton]}
//             onPress={() => setWalkDialogOpen(true)}
//           >
//             <Navigation width={40} height={40} color="#3b82f6" />
//             <Text style={styles.buttonText}>Start Walk & Report</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.statusGrid}>
//           <View style={[styles.statusCard, styles.general]}>
//             <View style={[styles.statusDot, styles.generalDot]} />
//             <Text style={styles.statusText}>General Help</Text>
//           </View>
//           <View style={[styles.statusCard, styles.moderate]}>
//             <View style={[styles.statusDot, styles.moderateDot]} />
//             <Text style={styles.statusText}>Moderate</Text>
//           </View>
//           <View style={[styles.statusCard, styles.severe]}>
//             <View style={[styles.statusDot, styles.severeDot]} />
//             <Text style={styles.statusText}>Severe</Text>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Alert Dialog */}
//       <Modal
//         visible={alertDialogOpen}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setAlertDialogOpen(false)}
//       >
//         <CreateAlertDialog
//           open={alertDialogOpen}
//           onOpenChange={setAlertDialogOpen}
//         />
//       </Modal>

//       {/* Walk Dialog */}
//       <Modal
//         visible={walkDialogOpen}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setWalkDialogOpen(false)}
//       >
//         <CreateWalkDialog
//           open={walkDialogOpen}
//           onOpenChange={setWalkDialogOpen}
//         />
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fef3c7" }, // light gradient-ish color
//   main: { paddingHorizontal: 16, paddingVertical: 24, alignItems: "center" },
//   centerSection: { alignItems: "center", marginBottom: 24 },
//   heading: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#111827",
//     textAlign: "center",
//   },
//   subheading: {
//     fontSize: 14,
//     color: "#6b7280",
//     textAlign: "center",
//     marginTop: 4,
//   },
//   buttonGrid: { width: "100%", marginBottom: 32 },
//   button: {
//     height: 128,
//     borderRadius: 12,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     padding: 12,
//   },
//   destructiveButton: { backgroundColor: "#f87171" },
//   outlineButton: {
//     borderWidth: 2,
//     borderColor: "#3b82f6",
//     backgroundColor: "transparent",
//   },
//   buttonText: {
//     marginTop: 8,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#111827",
//     textAlign: "center",
//   },
//   statusGrid: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     marginTop: 16,
//   },
//   statusCard: {
//     flex: 1,
//     alignItems: "center",
//     padding: 12,
//     borderRadius: 12,
//     marginHorizontal: 4,
//     borderWidth: 1,
//   },
//   statusDot: { width: 12, height: 12, borderRadius: 6, marginBottom: 4 },
//   statusText: { fontSize: 12, fontWeight: "500" },
//   general: { backgroundColor: "#d1fae5", borderColor: "#4ade80" },
//   generalDot: { backgroundColor: "#4ade80" },
//   moderate: { backgroundColor: "#fef3c7", borderColor: "#fbbf24" },
//   moderateDot: { backgroundColor: "#fbbf24" },
//   severe: { backgroundColor: "#fee2e2", borderColor: "#f87171" },
//   severeDot: { backgroundColor: "#f87171" },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AlertTriangle, Navigation } from "lucide-react-native";

import Header from "@/components/ui/acc/Header";
import CreateAlertDialog from "@/components/ui/acc/CreateAlertDialog";
import CreateWalkDialog from "@/components/ui/acc/CreateWalkDialog";
import AuthModal from "@/app/AuthModal"; // <-- import modal

export default function Home() {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [walkDialogOpen, setWalkDialogOpen] = useState(false);
  const [authVisible, setAuthVisible] = useState(false); // controls auth modal

  return (
    <View style={styles.container}>
      {/* Pass modal triggers to Header */}
      <Header
        onLogin={() => setAuthVisible(true)}
        onSignUp={() => setAuthVisible(true)}
      />

      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.centerSection}>
          <Text style={styles.heading}>Stay Safe Together</Text>
          <Text style={styles.subheading}>
            Connect with your community to help and be helped
          </Text>
        </View>

        <View style={styles.buttonGrid}>
          <TouchableOpacity
            style={[styles.button, styles.destructiveButton]}
            onPress={() => setAlertDialogOpen(true)}
          >
            <AlertTriangle width={40} height={40} color="#f87171" />
            <Text style={styles.buttonText}>Create Emergency Alert</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.outlineButton]}
            onPress={() => setWalkDialogOpen(true)}
          >
            <Navigation width={40} height={40} color="#3b82f6" />
            <Text style={styles.buttonText}>Start Walk & Report</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statusGrid}>
          <View style={[styles.statusCard, styles.general]}>
            <View style={[styles.statusDot, styles.generalDot]} />
            <Text style={styles.statusText}>General Help</Text>
          </View>
          <View style={[styles.statusCard, styles.moderate]}>
            <View style={[styles.statusDot, styles.moderateDot]} />
            <Text style={styles.statusText}>Moderate</Text>
          </View>
          <View style={[styles.statusCard, styles.severe]}>
            <View style={[styles.statusDot, styles.severeDot]} />
            <Text style={styles.statusText}>Severe</Text>
          </View>
        </View>
      </ScrollView>

      {/* Alert Dialog */}
      <Modal
        visible={alertDialogOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setAlertDialogOpen(false)}
      >
        <CreateAlertDialog
          open={alertDialogOpen}
          onOpenChange={setAlertDialogOpen}
        />
      </Modal>

      {/* Walk Dialog */}
      <Modal
        visible={walkDialogOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setWalkDialogOpen(false)}
      >
        <CreateWalkDialog
          open={walkDialogOpen}
          onOpenChange={setWalkDialogOpen}
        />
      </Modal>

      {/* Auth Modal */}
      <AuthModal visible={authVisible} onClose={() => setAuthVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fef3c7" },
  main: { paddingHorizontal: 16, paddingVertical: 24, alignItems: "center" },
  centerSection: { alignItems: "center", marginBottom: 24 },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  subheading: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 4,
  },
  buttonGrid: { width: "100%", marginBottom: 32 },
  button: {
    height: 128,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    padding: 12,
  },
  destructiveButton: { backgroundColor: "#f87171" },
  outlineButton: {
    borderWidth: 2,
    borderColor: "#3b82f6",
    backgroundColor: "transparent",
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  statusGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  statusCard: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 4,
    borderWidth: 1,
  },
  statusDot: { width: 12, height: 12, borderRadius: 6, marginBottom: 4 },
  statusText: { fontSize: 12, fontWeight: "500" },
  general: { backgroundColor: "#d1fae5", borderColor: "#4ade80" },
  generalDot: { backgroundColor: "#4ade80" },
  moderate: { backgroundColor: "#fef3c7", borderColor: "#fbbf24" },
  moderateDot: { backgroundColor: "#fbbf24" },
  severe: { backgroundColor: "#fee2e2", borderColor: "#f87171" },
  severeDot: { backgroundColor: "#f87171" },
});
