export type firebaseUserData = {
  uid: string,
  displayName: string,
  photoURL: string,
  selfIntroduction: string,
}

export type firebasePostData = {
  id: string,
  uid: string,
  imgurl: string,
  title: string,
  stars: {
    uid: string,
    star: number,
  }[],
  tags: string[],
}