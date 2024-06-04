import http from '@/config/http';

export type TagFindFilters = {
  title?: string;
  email?: string;
};

export type TagFindResponse = {
  id: number;
  title: string;
  email: string;
};

export const find = async (
  filters: TagFindFilters = {}
): Promise<TagFindResponse[]> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const filterList = Object.entries(filters);

    let url = '/tags/';

    filterList?.forEach((filter, index) => {
      const [key, value] = filter;
      url += !index ? `?${key}=${value}` : `&${key}=${value}`;
    });

    const { data } = await http.get(url);

    return data;
  } catch (error) {
    throw error;
  }
};

export type TagSaveData = {
  id?: number;
  title: string;
};

export type TagSaveResponse = {
  id: number;
};

export const save = async (tag: TagSaveData): Promise<TagSaveResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await http.post(`/tags/`, tag);

    return data;
  } catch (error) {
    throw error;
  }
};
