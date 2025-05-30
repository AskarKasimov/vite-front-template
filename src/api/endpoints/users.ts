import { http } from '../http';
import { UserDTO } from '@/entities/user/types';

export const userApi = {
  getUserById: (id: string): Promise<UserDTO> =>
    http.get<UserDTO>(`/users/${id}`),
  getUsers: (): Promise<UserDTO[]> => http.get<UserDTO[]>(`/users`),
};
