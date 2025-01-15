// src/components/DiscussionPage.tsx

import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  doc,
  onSnapshot,
  collection,
  addDoc,
  query,
  orderBy,
  updateDoc,
  serverTimestamp,
  increment,
  Timestamp,
  Firestore,
} from 'firebase/firestore';
import { firestore, signInWithGoogle } from './firebaseconfig';
import { AuthContext } from './AuthContext';

// Interfaces for types
interface Reply {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: Timestamp | null;
}

interface Discussion {
  id: string;
  title: string;
  description: string;
  repliesCount: number;
  createdAt: Timestamp | null;
  authorId: string;
  authorName: string;
}

const DiscussionPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // Note the '?' indicating that id can be undefined
  const { user } = useContext(AuthContext);
  const [discussion, setDiscussion] = useState<Discussion | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [newReply, setNewReply] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      console.error('No discussion ID provided in URL');
      navigate('/'); // Redirect or handle appropriately
      return;
    }

    // Get a reference to the discussion document
    const discussionRef = doc(firestore, 'discussions', id);

    // Listen to the discussion document
    const unsubscribeDiscussion = onSnapshot(discussionRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setDiscussion({
          id: docSnapshot.id,
          ...(docSnapshot.data() as Omit<Discussion, 'id'>),
        });
      } else {
        setDiscussion(null);
      }
    });

    // Get a reference to the replies collection
    const repliesRef = collection(discussionRef, 'replies');

    // Query to order replies
    const repliesQuery = query(repliesRef, orderBy('createdAt', 'asc'));

    // Listen to the replies collection
    const unsubscribeReplies = onSnapshot(repliesQuery, (snapshot) => {
      const repliesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Reply, 'id'>),
      }));
      setReplies(repliesData);
    });

    return () => {
      unsubscribeDiscussion();
      unsubscribeReplies();
    };
  }, [id, navigate]);

  // Handle posting a new reply
  const handlePostReply = async () => {
    if (newReply.trim() === '') {
      alert('Please enter a reply.');
      return;
    }

    if (!user) {
      alert('Please sign in to post a reply.');
      return;
    }

    if (!id) {
      console.error('No discussion ID provided');
      return;
    }

    const reply: Omit<Reply, 'id'> = {
      authorId: user.uid,
      authorName: user.displayName || 'Anonymous',
      content: newReply,
      createdAt: serverTimestamp() as Timestamp,
    };

    try {
      const discussionRef = doc(firestore, 'discussions', id);
      const repliesRef = collection(discussionRef, 'replies');

      await addDoc(repliesRef, reply);

      // Update repliesCount
      await updateDoc(discussionRef, {
        repliesCount: increment(1),
      });

      setNewReply('');
    } catch (error) {
      console.error('Error posting reply: ', error);
    }
  };

  if (discussion === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h2 className="text-2xl text-gray-800">Discussion not found.</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800">{discussion.title}</h2>
      <p className="text-gray-600 mt-2">{discussion.description}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Replies ({discussion.repliesCount})
        </h3>
        <ul className="mt-4 space-y-4">
          {replies.map((reply) => (
            <li key={reply.id} className="border-b pb-4">
              <div className="flex justify-between">
                <span className="text-gray-800 font-medium">
                  {reply.authorName}
                </span>
                <span className="text-sm text-gray-600">
                  {reply.createdAt
                    ? reply.createdAt.toDate().toLocaleString()
                    : 'Just now'}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{reply.content}</p>
            </li>
          ))}
        </ul>
        {user ? (
          <>
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Write your reply here..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              rows={4}
            ></textarea>
            <button
              onClick={handlePostReply}
              className="mt-4 px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
            >
              Post Reply
            </button>
          </>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="mt-4 px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900"
          >
            Sign In to Reply
          </button>
        )}
      </div>
    </div>
  );
};

export default DiscussionPage;