import http from '@/config/http';
import { TagFindResponse } from './tag.service';

export type CustomerFindFilters = [string, unknown];

export type CustomerFindResponse = {
  id: number;
  name: string;
  email: string;
  tags: TagFindResponse[];
};

export const find = async (
  filters: CustomerFindFilters[]
): Promise<CustomerFindResponse[]> => {
  // eslint-disable-next-line no-useless-catch
  try {
    let url = '/customers/';

    if (filters.length > 0) {
      const cleanFilters = filters.filter(
        (filter) => typeof filter[1] === 'string' && filter[1].length
      );

      const concatFilters = cleanFilters.map(
        (filter) => `${filter[0]}=${filter[1]}`
      );
      url = url.concat(`?${concatFilters.join('&')}`);
    }

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
    console.log(error);

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
