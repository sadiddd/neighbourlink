import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CreateAlertDialog({ open, onOpenChange }: Props) {
  if (!open) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>Create Emergency Alert</Text>
        <Text style={styles.description}>
          This is a placeholder for the alert form.
        </Text>

        {/* TODO: Add real form fields here (title, description, location, etc.) */}

        <Button title="Close" onPress={() => onOpenChange(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
});
