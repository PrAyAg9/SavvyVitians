// src/components/CommunityPage.tsx
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { firestore, signInWithGoogle, signOut } from "./firebaseconfig";
import { AuthContext } from "../pages/AuthContext";
import TrendingTopics from "../components/TrendingTopics";
import RecentDiscussions from "../components/RecentDiscussions";
import DiscussionPage from "./DiscussionPage";
import SignUpPage from "../components/SignUpPage";
import SignInPage from "../components/SignInPage";
// yaha se railway ka dal dena auth backend ke liye

// Interfaces for types
interface Discussion {
  id: string;
  title: string;
  description: string;
  repliesCount: number;
  createdAt: Timestamp | null;
  authorId: string;
  authorName: string;
}

const CommunityPage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); // Add useNavigate if needed jab usko railway se liye 

  // Fetch discussions from Firestore
  useEffect(() => {
    const discussionsRef = collection(firestore, "discussions");
    const discussionsQuery = query(
      discussionsRef,
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(discussionsQuery, (snapshot) => {
      const discussionsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Discussion, "id">),
      }));
      setDiscussions(discussionsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Handle new discussion input changes
  const handleNewDiscussionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewDiscussion((prev) => ({ ...prev, [name]: value }));
  };

  // Post a new discussion
  const handlePostDiscussion = async () => {
    if (!newDiscussion.title || !newDiscussion.description) {
      alert("Please fill in both fields to post a discussion.");
      return;
    }

    if (!user) {
      alert("Please sign in to post a discussion.");
      return;
    }

    const newDisc: Omit<Discussion, "id"> = {
      title: newDiscussion.title,
      description: newDiscussion.description,
      repliesCount: 0,
      createdAt: serverTimestamp() as Timestamp,
      authorId: user.uid,
      authorName: user.displayName || "Anonymous",
    };

    try {
      await addDoc(collection(firestore, "discussions"), newDisc);
      setNewDiscussion({ title: "", description: "" });
      alert("New discussion posted!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };


  const trendingTopics = [...discussions]
    .sort((a, b) => b.repliesCount - a.repliesCount)
    .slice(0, 5);


  const sampleTrendingTopics = [
    { id: "1", title: "#nextexamprep", repliesCount: 0 },
    { id: "2", title: "#placementdrive2025", repliesCount: 0 },
    { id: "3", title: "#campusfest", repliesCount: 0 },
  ];


  const currentDiscussion = discussions[0];

  // Sample recent discussion to display if none are available
  const sampleRecentDiscussion: Discussion = {
    id: "sample1",
    title: "How to prepare for upcoming exams?",
    description: "Share your tips and resources for exam preparation.",
    repliesCount: 0,
    createdAt: null,
    authorId: "sampleUser",
    authorName: "Anonymous",
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Community Hub
        </h1>
        <p className="text-gray-600 text-center mt-4">
          Join discussions, share knowledge, and connect with fellow students.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {/* Join Our Community */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Join Our Community
            </h3>
            <p className="text-gray-600 mt-2">
              Connect with fellow students, share experiences, and discuss
              course-related topics. You can even talk anonymously!
            </p>
            {user ? (
              currentDiscussion && (
                <>
                  <p className="text-gray-800 mt-4 font-medium">
                    Current Discussion:{" "}
                    <Link
                      to={`/discussion/${currentDiscussion.id}`}
                      className="text-blue-800 hover:underline"
                    >
                      {currentDiscussion.title}
                    </Link>
                  </p>
                  <Link
                    to={`/discussion/${currentDiscussion.id}`}
                    className="mt-4 inline-block px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
                  >
                    Join Discussion
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">
                    {currentDiscussion.repliesCount} students participating
                  </p>
                </>
              )
            ) : (
              <>
                <p className="text-gray-800 mt-4 font-medium">
                  Sign up now to join the conversation and connect with your peers.
                </p>
                <Link
                  to="/signin"
                  className="mt-4 inline-block px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
                >
                  Sign Up Now
                </Link>
              </>
            )}
          </div>

          {/* Trending Topics */}
          <TrendingTopics
            topics={
              user && trendingTopics.length > 0
                ? trendingTopics
                : sampleTrendingTopics
            }
          />

          {/* Start a New Discussion */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
            {user ? (
              <>
                <h3 className="text-lg font-semibold text-gray-800">
                  Start a New Discussion
                </h3>
                <input
                  type="text"
                  name="title"
                  value={newDiscussion.title}
                  onChange={handleNewDiscussionChange}
                  placeholder="Discussion Title"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                />
                <textarea
                  name="description"
                  value={newDiscussion.description}
                  onChange={handleNewDiscussionChange}
                  placeholder="What would you like to discuss?"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                  rows={4}
                ></textarea>
                <button
                  onClick={handlePostDiscussion}
                  className="mt-4 px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
                >
                  Post Discussion
                </button>
                <button
                  onClick={signOut}
                  className="mt-2 px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-800">
                  Sign In to Start a Discussion
                </h3>
                <Link
                  to="/signin"
                  className="mt-4 inline-block px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
                >
                  Sign In
                </Link>
                <p className="mt-2 text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-blue-800 hover:underline"
                  >
                    Sign Up Now
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Recent Discussions */}
        <div className="mt-12">
          {loading ? (
            <p className="text-center">Loading discussions...</p>
          ) : user && discussions.length > 0 ? (
            <RecentDiscussions
              discussions={discussions.slice(0, visibleCount)}
              onLoadMore={handleLoadMore}
              hasMore={visibleCount < discussions.length}
            />
          ) : (
            // Display sample recent discussion for non-signed-in users
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Discussions
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="border-b pb-4">
                  <Link to="/signin">
                    <div className="flex justify-between">
                      <h4 className="text-gray-800 font-medium">
                        {sampleRecentDiscussion.title}
                      </h4>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-gray-600">
                        {sampleRecentDiscussion.description}
                      </p>
                      <span className="text-sm text-gray-600">
                        {sampleRecentDiscussion.repliesCount} replies
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
              <p className="mt-4 text-center">
                <Link
                  to="/signin"
                  className="text-blue-800 hover:underline"
                >
                  Sign Up Now
                </Link>{" "}
                to view and join discussions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
