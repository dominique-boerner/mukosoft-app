import { avatarImages, getRandomAvatar } from "./avatar-helper";

it("should return a random avatar", () => {
  let i = 0;
  // we want to check, if the avatars which are generated really exists
  while (i < 20) {
    const avatar = getRandomAvatar().split("/")[3];
    expect(avatarImages.includes(avatar)).toBeTruthy();
    i++;
  }
});
