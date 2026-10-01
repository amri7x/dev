import React, { useState } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { tweetsData as initialTweetsData } from '../src/data';
import { type Tweet } from '../src/types';

// Komponen Tombol Submit terpisah untuk mendukung useFormStatus (React 19)
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      id="tweet-btn"
      className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 py-1.5 rounded-full text-sm cursor-pointer transition-colors disabled:bg-sky-300 disabled:cursor-not-allowed"
    >
      {pending ? 'Posting...' : 'Tweet'}
    </button>
  );
}

export default function App() {
  const [tweets, setTweets] = useState<Tweet[]>(initialTweetsData as Tweet[]);
  // Melacak state untuk membuka/menutup accordion balasan (replies) per tweet berdasarkan uuid
  const [openReplies, setOpenReplies] = useState<Record<string, boolean>>({});

  // Fungsi untuk menangani Like
  const handleLikeClick = (tweetId: string) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.uuid === tweetId) {
          return {
            ...tweet,
            likes: tweet.isLiked ? tweet.likes - 1 : tweet.likes + 1,
            isLiked: !tweet.isLiked,
          };
        }
        return tweet;
      })
    );
  };

  // Fungsi untuk menangani Retweet
  const handleRetweetClick = (tweetId: string) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.uuid === tweetId) {
          return {
            ...tweet,
            retweets: tweet.isRetweeted ? tweet.retweets - 1 : tweet.retweets + 1,
            isRetweeted: !tweet.isRetweeted,
          };
        }
        return tweet;
      })
    );
  };

  // Fungsi untuk membuka/menutup panel komentar
  const handleReplyClick = (tweetId: string) => {
    setOpenReplies((prev) => ({
      ...prev,
      [tweetId]: !prev[tweetId],
    }));
  };

  // Fungsi Action Form untuk membuat Tweet baru (React 19 Action)
  const handleTweetAction = async (previousState: unknown, formData: FormData) => {
    const tweetText = formData.get('tweetText') as string;

    if (!tweetText || tweetText.trim() === '') {
      return { success: false };
    }

    const newTweet: Tweet = {
      handle: '@Scrimba',
      profilePic: 'images/scrimbalogo.png',
      likes: 0,
      retweets: 0,
      tweetText: tweetText,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4(),
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
    return { success: true };
  };

  const [, formAction] = useActionState(handleTweetAction, null);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen border-x border-gray-200 text-gray-900 font-sans">
      {/* Header Form Input Tweet */}
      <header className="border-b border-gray-200 p-4">
        <form action={formAction} className="flex gap-3">
          <img
            src="images/scrimbalogo.png"
            className="w-12 h-12 rounded-full object-cover"
            alt="Profile"
          />
          <div className="flex-1">
            <textarea
              id="tweet-input"
              name="tweetText"
              rows={3}
              placeholder="What's happening?"
              className="w-full resize-none border-none focus:outline-none text-lg placeholder-gray-400"
              required
            />
            <div className="flex justify-end items-center mt-2 pt-2 border-t border-gray-100">
              <SubmitButton />
            </div>
          </div>
        </form>
      </header>

      {/* Feed List */}
      <main id="feed">
        {tweets.map((tweet) => {
          const isRepliesOpen = openReplies[tweet.uuid] || false;

          return (
            <div key={tweet.uuid} className="border-b border-gray-200 p-4 transition-colors hover:bg-gray-50/50">
              <div className="flex gap-3">
                <img
                  src={tweet.profilePic}
                  className="w-12 h-12 rounded-full object-cover"
                  alt="User Avatar"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{tweet.handle}</p>
                  <p className="text-gray-800 mt-1 mb-3 whitespace-pre-wrap">{tweet.tweetText}</p>
                  
                  {/* Tweet Action Details */}
                  <div className="flex justify-between max-w-xs text-gray-500 text-sm">
                    {/* Reply Button */}
                    <button
                      onClick={() => handleReplyClick(tweet.uuid)}
                      className="flex items-center gap-1.5 hover:text-sky-500 transition-colors cursor-pointer"
                    >
                      <i className="fa-regular fa-comment-dots"></i>
                      <span>{tweet.replies.length}</span>
                    </button>

                    {/* Like Button */}
                    <button
                      onClick={() => handleLikeClick(tweet.uuid)}
                      className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                        tweet.isLiked ? 'text-rose-500' : 'hover:text-rose-500'
                      }`}
                    >
                      <i className={`fa-solid fa-heart ${tweet.isLiked ? 'liked text-rose-500' : ''}`}></i>
                      <span>{tweet.likes}</span>
                    </button>

                    {/* Retweet Button */}
                    <button
                      onClick={() => handleRetweetClick(tweet.uuid)}
                      className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                        tweet.isRetweeted ? 'text-emerald-500' : 'hover:text-emerald-500'
                      }`}
                    >
                      <i className={`fa-solid fa-retweet ${tweet.isRetweeted ? 'retweeted text-emerald-500' : ''}`}></i>
                      <span>{tweet.retweets}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Replies Section (Accordion) */}
              <div id={`replies-${tweet.uuid}`} className={`${isRepliesOpen ? 'block' : 'hidden'} mt-3 pl-12 space-y-3`}>
                {tweet.replies.map((reply, index) => (
                  <div key={index} className="flex gap-3 pt-3 border-t border-gray-100">
                    <img
                      src={reply.profilePic}
                      className="w-8 h-8 rounded-full object-cover"
                      alt="Reply Avatar"
                    />
                    <div>
                      <p className="font-bold text-sm text-gray-900">{reply.handle}</p>
                      <p className="text-sm text-gray-700 mt-0.5">{reply.tweetText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}