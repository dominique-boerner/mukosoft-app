import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class MyDocService {
  readonly MY_DOC_BASE_URL = "https://my-doc.net";

  defaultParams = {
    module: "mydoc",
    sektion: "show_doctor",
    uuid: "",
    return: "json",
  };

  /**
   * Defines a list of cf specific doctors, self-help groups and communities
   */
  MUKO_ID_CATALOG: ReadonlyArray<string> = [
    "b22c3ba0-99e1-11eb-9c65-64652e69642d",
    "ca718dfc-c509-11eb-b6b9-64652e69642d",
    "f8484114-5779-11ec-b3ad-64652e69642d",
    "00051148-dc2e-11e3-9aea-5b61b214e2c0",
  ];

  async getAllUsers(): Promise<any[]> {
    const results: any[] = await Promise.all(
      this.MUKO_ID_CATALOG.map(async (id) => {
        const params = { ...this.defaultParams, uuid: id };
        return await axios
          .get(this.MY_DOC_BASE_URL, { params: params })
          .then((r: any) => r.data)
          .then((responseData: any) => {
            return responseData.success ? responseData : [];
          });
      }),
    ).then((results) => {
      return results.filter((result) => result.success === true);
    });

    return results;
  }

  async getUser(id: string): Promise<any> {
    const params = { ...this.defaultParams, uuid: id };
    return await axios
      .get(this.MY_DOC_BASE_URL, { params: params })
      .then((r: any) => r.data)
      .then((responseData: any) => {
        return responseData;
      });
  }

  async getNews(id: string, sort = "asc"): Promise<any[]> {
    const params = { ...this.defaultParams, uuid: id };
    return await axios
      .get(this.MY_DOC_BASE_URL, { params: params })
      .then((r: any) => r.data)
      .then((responseData: any) => {
        if (responseData.success) {
          return responseData.data.DoctorNewsItems.sort((a: any, b: any) => {
            if (sort === "asc") {
              return (
                new Date(a.updated_at).valueOf() -
                new Date(b.updated_at).valueOf()
              );
            } else if (sort === "desc") {
              return (
                new Date(b.updated_at).valueOf() -
                new Date(a.updated_at).valueOf()
              );
            }
          });
        } else {
          return [];
        }
      });
  }

  async getMembers(id: string): Promise<any[]> {
    const params = { ...this.defaultParams, uuid: id };

    return await axios
      .get(this.MY_DOC_BASE_URL, { params: params })
      .then((r: any) => r.data)
      .then((responseData: any) => {
        return responseData.success ? responseData.data.Employees : [];
      });
  }

  async getImage(id: string): Promise<string> {
    const params = { ...this.defaultParams, uuid: id };

    return await axios
      .get(this.MY_DOC_BASE_URL, { params: params })
      .then((r: any) => r.data)
      .then((responseData: any) => {
        return responseData.success ? responseData.data._image : "";
      });
  }

  async getMultipleNews(ids: string[], sort = "asc"): Promise<any[]> {
    return await Promise.all(
      ids.map(async (id) => {
        const params = { ...this.defaultParams, uuid: id };

        return await axios
          .get(this.MY_DOC_BASE_URL, { params: params })
          .then((r: any) => r.data)
          .then((responseData: any) => {
            return responseData.success
              ? responseData.data.DoctorNewsItems
              : [];
          });
      }),
    ).then((results) =>
      results
        .filter((result) => {
          return result.length > 0;
        })
        .flat(1)
        .sort((a: any, b: any) => {
          if (sort === "asc") {
            return (
              new Date(a.updated_at).valueOf() -
              new Date(b.updated_at).valueOf()
            );
          } else if (sort === "desc") {
            return (
              new Date(b.updated_at).valueOf() -
              new Date(a.updated_at).valueOf()
            );
          }
        }),
    );
  }
}
