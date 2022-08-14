export function getRandomAvatar() {
  const BASE_PATH = './assets/avatars';
  const images: string[] = [
    'bear.png',
    'cat.png',
    'fox.png',
    'giraffe.png',
    'wolf.png',
  ];

  const randomNumber = Math.floor(Math.random() * images.length);
  const randomImage = images[randomNumber];

  return `${BASE_PATH}/${randomImage}`;
}
