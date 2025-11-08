import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { AlertTriangle, MapPin, Clock } from "lucide-react-native";

import Header from "@/components/ui/acc/Header";
// import BottomNav from "@/components/BottomNav";

type Alert = {
  id: string;
  title: string;
  description: string | null;
  alert_level: string;
  status: string;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
};

export default function Alerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    // TODO: Fetch alerts from your database here
    // Example: fetchAlertsFromDatabase();

    // For now, use dummy data
    const dummyAlerts: Alert[] = [
      {
        id: "1",
        title: "Severe Weather Warning",
        description: "Heavy rain and flooding expected in the area.",
        alert_level: "severe",
        status: "active",
        latitude: null,
        longitude: null,
        created_at: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Community Event",
        description: "Local cleanup event at the park.",
        alert_level: "general",
        status: "active",
        latitude: null,
        longitude: null,
        created_at: new Date().toISOString(),
      },
    ];

    setAlerts(dummyAlerts);

    // TODO: Set up real-time subscriptions here if needed
    // Example: subscribeToAlertChanges((newAlerts) => setAlerts(newAlerts));
  }, []);

  const getAlertColor = (level: string) => {
    switch (level) {
      case "general":
        return styles.success;
      case "moderate":
        return styles.warning;
      case "severe":
        return styles.severe;
      default:
        return styles.muted;
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Active Alerts</Text>
          <Text style={styles.subtitle}>
            Real-time emergency alerts in your community
          </Text>
        </View>

        <View style={styles.mapPlaceholder}>
          <MapPin width={48} height={48} color="#999" />
          <Text style={styles.mapText}>Map view coming soon</Text>
        </View>

        <View style={styles.alertsContainer}>
          {alerts.length === 0 ? (
            <View style={[styles.card, styles.cardCenter]}>
              <Text style={styles.noAlerts}>No active alerts in your area</Text>
            </View>
          ) : (
            alerts.map((alert) => (
              <View key={alert.id} style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardHeaderLeft}>
                    <View
                      style={[
                        styles.iconWrapper,
                        getAlertColor(alert.alert_level),
                      ]}
                    >
                      <AlertTriangle width={20} height={20} color="#fff" />
                    </View>
                    <View style={styles.cardHeaderText}>
                      <Text style={styles.cardTitle}>{alert.title}</Text>
                      <View style={styles.cardMeta}>
                        <Clock width={12} height={12} color="#999" />
                        <Text style={styles.cardMetaText}>
                          {formatDistanceToNow(new Date(alert.created_at), {
                            addSuffix: true,
                          })}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[styles.badge, getAlertColor(alert.alert_level)]}
                  >
                    <Text style={styles.badgeText}>{alert.alert_level}</Text>
                  </View>
                </View>
                {alert.description && (
                  <View style={styles.cardContent}>
                    <Text style={styles.cardDescription}>
                      {alert.description}
                    </Text>
                  </View>
                )}
              </View>
            ))
          )}
        </View>
      </ScrollView>

      {/* <BottomNav /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  main: { paddingHorizontal: 16, paddingBottom: 80, paddingTop: 20 },
  headerSection: { marginBottom: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 14, color: "#666", marginTop: 4 },
  mapPlaceholder: {
    height: 160,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  mapText: { marginTop: 8, color: "#999" },
  alertsContainer: { flex: 1 },
  card: {
    borderRadius: 12,
    backgroundColor: "#fafafa",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardCenter: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardHeaderLeft: { flexDirection: "row", alignItems: "flex-start", flex: 1 },
  iconWrapper: {
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeaderText: { flex: 1, marginLeft: 8 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#000" },
  cardMeta: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  cardMetaText: { fontSize: 12, color: "#666", marginLeft: 4 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
  cardContent: { marginTop: 8 },
  cardDescription: { fontSize: 14, color: "#666" },
  noAlerts: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  // Alert colors
  success: { backgroundColor: "#4ade80" },
  warning: { backgroundColor: "#facc15" },
  severe: { backgroundColor: "#f87171" },
  muted: { backgroundColor: "#ddd" },
});
