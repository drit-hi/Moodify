import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
  increment,
  getDocs,
  addDoc
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export function useMoodSongs(mood) {
  const [songs, setSongs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const q = query(collection(db, "songs"), where("mood", "==", mood));

    const unsub = onSnapshot(q, (snapshot) => {
      setSongs(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, [mood]);

  const voteSong = async (songId) => {
    if (!user) return;

    // 🔍 check if already voted
    const q = query(
      collection(db, "votes"),
      where("userId", "==", user.uid),
      where("songId", "==", songId),
      where("mood", "==", mood)
    );

    const existing = await getDocs(q);

    if (!existing.empty) {
      alert("You already voted for this song!");
      return;
    }

    // ✅ add vote record
    await addDoc(collection(db, "votes"), {
      userId: user.uid,
      songId,
      mood,
    });

    // ✅ increment vote count
    await updateDoc(doc(db, "songs", songId), {
      votes: increment(1),
    });
  };

  return { songs, voteSong };
}