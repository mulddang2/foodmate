export interface AllPostCardType {
  groupId: number;
  memberId: number;
  nickname: string;
  image: string;
  title: string;
  name: string;
  food: string;
  date: string;
  time: string;
  maximum: number;
  current: number;
  storeName: string;
  storeAddress: string;
  createdDate: string;
}

export interface PostCardType {
  groupId: number;
  memberId: number;
  nickname: string;
  image: string;
  title: string;
  name: string;
  content: string;
  food: string;
  date: string;
  time: string;
  maximum: number;
  current: number;
  storeName: string;
  storeAddress: string;
  latitude: string;
  longitude: string;
  createdDate: string;
  chatRoomId: number;
}

export interface CommentsType {
  commentId: number;
  memberId: number;
  nickname: string;
  image: string;
  content: string;
  createdDate: string;
  replies?: ReplyType[];
}

export interface ReplyType {
  replyId: number;
  memberId: number;
  nickname: string;
  image: string;
  content: string;
  createdDate: string;
}

export interface CreateGroupType {
  authorization: string;
  title: string;
  name: string;
  content: string;
  food: string;
  date: string;
  time: Date;
  maximum: number;
  storeName: string;
  storeAddress: string;
  latitude: string;
  longitude: string;
}
