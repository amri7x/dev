export interface Reply {
  handle: string;
  profilePic: string;
  tweetText: string;
}

export interface Tweet {
  handle: string;
  profilePic: string;
  likes: number;
  retweets: number;
  tweetText: string;
  replies: Reply[];
  isLiked: boolean;
  isRetweeted: boolean;
  uuid: string;
}