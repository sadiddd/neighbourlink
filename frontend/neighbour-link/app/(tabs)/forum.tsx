import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
} from "react-native";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, Clock, Plus } from "lucide-react-native";

import Header from "@/components/ui/acc/Header";

type Announcement = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

export default function Forum() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement | null>(null);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchAnnouncements();

    // TODO: Setup real-time subscription here if needed
    // Example: subscribeToAnnouncements((newAnnouncements) => setAnnouncements(newAnnouncements));
  }, []);

  const fetchAnnouncements = async () => {
    // TODO: Fetch announcements from your database here
    // Example: const data = await fetchAnnouncementsFromDatabase();
    // setAnnouncements(data);

    // Dummy data for testing
    const dummyData: Announcement[] = [
      {
        id: "1",
        title: "Garage Sale This Saturday",
        content: "Join us for a garage sale at Main Street Park!",
        created_at: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Community Cleanup",
        content:
          "We are organizing a cleanup event at the riverbank. Volunteers welcome!",
        created_at: new Date().toISOString(),
      },
    ];
    setAnnouncements(dummyData);
  };

  const handleCreateAnnouncement = () => {
    // TODO: Insert announcement into database here
    // Example: await insertAnnouncementToDatabase({ title, content });

    // For now, just add to local state
    const newAnnouncement: Announcement = {
      id: Math.random().toString(),
      title,
      content,
      created_at: new Date().toISOString(),
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setTitle("");
    setContent("");
    setCreateModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.title}>Community Forum</Text>
            <Text style={styles.subtitle}>
              Share events and announcements with your neighbors
            </Text>
          </View>
          <TouchableOpacity
            style={styles.postButton}
            onPress={() => setCreateModalVisible(true)}
          >
            <Plus width={16} height={16} color="#fff" />
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.announcementsContainer}>
          {announcements.length === 0 ? (
            <View style={[styles.card, styles.cardCenter]}>
              <Text style={styles.noAnnouncements}>
                No announcements yet. Be the first to post!
              </Text>
            </View>
          ) : (
            announcements.map((announcement) => (
              <TouchableOpacity
                key={announcement.id}
                style={styles.card}
                onPress={() => setSelectedAnnouncement(announcement)}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.cardHeaderLeft}>
                    <View style={styles.iconWrapper}>
                      <MessageSquare width={20} height={20} color="#3b82f6" />
                    </View>
                    <View style={styles.cardHeaderText}>
                      <Text style={styles.cardTitle}>{announcement.title}</Text>
                      <View style={styles.cardMeta}>
                        <Clock width={12} height={12} color="#666" />
                        <Text style={styles.cardMetaText}>
                          {formatDistanceToNow(
                            new Date(announcement.created_at),
                            { addSuffix: true }
                          )}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.cardDescription} numberOfLines={2}>
                    {announcement.content}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>

      {/* Create Announcement Modal */}
      <Modal
        visible={createModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Announcement</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Details"
              value={content}
              onChangeText={setContent}
              multiline
            />
            <Button
              title="Create Announcement"
              onPress={handleCreateAnnouncement}
            />
            <Button
              title="Cancel"
              color="#999"
              onPress={() => setCreateModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

      {/* View Announcement Modal */}
      <Modal
        visible={!!selectedAnnouncement}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedAnnouncement?.title}</Text>
            <Text style={styles.modalMeta}>
              {selectedAnnouncement &&
                formatDistanceToNow(new Date(selectedAnnouncement.created_at), {
                  addSuffix: true,
                })}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedAnnouncement?.content}
            </Text>
            <Button
              title="Close"
              color="#999"
              onPress={() => setSelectedAnnouncement(null)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  main: { paddingHorizontal: 16, paddingBottom: 80, paddingTop: 20 },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#000" },
  subtitle: { fontSize: 14, color: "#666", marginTop: 4 },
  postButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b82f6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  postButtonText: { color: "#fff", fontWeight: "bold", marginLeft: 4 },
  announcementsContainer: { flex: 1 },
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
  noAnnouncements: { fontSize: 14, color: "#666", textAlign: "center" },
  cardHeader: { flexDirection: "row", alignItems: "flex-start" },
  cardHeaderLeft: { flexDirection: "row", alignItems: "flex-start", flex: 1 },
  iconWrapper: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#e0f2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeaderText: { flex: 1, marginLeft: 8 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#000" },
  cardMeta: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  cardMetaText: { fontSize: 12, color: "#666", marginLeft: 4 },
  cardContent: { marginTop: 8 },
  cardDescription: { fontSize: 14, color: "#666" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  modalMeta: { fontSize: 12, color: "#666", marginBottom: 8 },
  modalDescription: { fontSize: 14, color: "#666", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
});
