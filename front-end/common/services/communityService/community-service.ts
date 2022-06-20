import { GetResult, Storage } from "@capacitor/storage";

export default class CommunityService {
  static readonly STORAGE_KEY_FAVORITES = "favorites";
  static readonly COMMUNITY_ENDPOINT = "http://localhost:9000/v1/my-doc/users";
  static readonly NEWS_ENDPOINT = "http://localhost:9000/v1/my-doc/news";

  static instance: CommunityService | null = null;

  static getInstance() {
    if (CommunityService.instance == null) {
      CommunityService.instance = new CommunityService();
    }

    return this.instance;
  }

  async addToFavourite(id: string): Promise<void> {
    const favorites = await this.getFavourites();
    let toAdd = [id];

    if (favorites.value) {
      toAdd = [...JSON.parse(favorites.value), id];
    }

    return Storage.set({
      key: CommunityService.STORAGE_KEY_FAVORITES,
      value: JSON.stringify(toAdd),
    });
  }

  async getFavourites(): Promise<GetResult> {
    return Storage.get({
      key: CommunityService.STORAGE_KEY_FAVORITES,
    });
  }

  async isFavourite(id: string): Promise<boolean> {
    const favourites = await this.getFavourites();

    if (favourites.value) {
      return JSON.parse(favourites.value).includes(id);
    } else {
      return false;
    }
  }

  async removeFromFavourite(id: string) {
    const favourites = await this.getFavourites();

    if (favourites.value) {
      const filteredFav = JSON.parse(favourites.value).filter(
        (favId: string) => favId !== id
      );
      Storage.set({
        key: CommunityService.STORAGE_KEY_FAVORITES,
        value: JSON.stringify(filteredFav),
      });
    }
  }

  getCommunity() {
    return fetch(CommunityService.COMMUNITY_ENDPOINT);
  }

  async getNews(ids: string[]) {
    const requestString = ids.map((id) => `${id},`);
    return fetch(
      `${CommunityService.NEWS_ENDPOINT}?ids=${requestString}&sort=desc`
    );
  }
}
