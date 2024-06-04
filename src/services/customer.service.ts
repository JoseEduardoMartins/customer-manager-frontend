import http from '@/config/http';

export type CustomerFindFilters = {
  name?: string;
  email?: string;
};

export type CustomerFindResponse = {
  id: number;
  name: string;
  email: string;
};

export const find = async (
  filters: CustomerFindFilters = {}
): Promise<CustomerFindResponse[]> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const filterList = Object.entries(filters);

    let url = '/customers/';

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

export const findById = async (id: number): Promise<CustomerFindResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await http.get(`/customers/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export type CustomerSaveData = {
  id?: number;
  name: string;
  email: string;
};

export type CustomerSaveResponse = {
  id: number;
};

export const save = async (
  customer: CustomerSaveData
): Promise<CustomerSaveResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await http.post(`/customers/`, customer);

    return data;
  } catch (error) {
    throw error;
  }
};

export type CustomerUpdateData = {
  name?: string;
  email?: string;
};

export const update = async (
  id: number,
  customer: CustomerUpdateData
): Promise<void> => {
  // eslint-disable-next-line no-useless-catch
  try {
    await http.put(`/customers/${id}`, customer);
  } catch (error) {
    throw error;
  }
};

export const remove = async (id: number): Promise<void> => {
  // eslint-disable-next-line no-useless-catch
  try {
    await http.delete(`/customers/${id}`);
  } catch (error) {
    throw error;
  }
};
