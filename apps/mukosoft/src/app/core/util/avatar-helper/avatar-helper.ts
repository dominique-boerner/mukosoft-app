export const avatarImages: string[] = [
  "bear.png",
  "cat.png",
  "fox.png",
  "giraffe.png",
  "wolf.png",
];

export function getRandomAvatar() {
  const BASE_PATH = "./assets/avatars";

  const randomNumber = Math.floor(Math.random() * avatarImages.length);
  const randomImage = avatarImages[randomNumber];

  return `${BASE_PATH}/${randomImage}`;
}
