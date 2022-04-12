import create, { SetState } from "zustand";
import { persist } from 'zustand/middleware';

interface User {
  username: string;
  email: string;
  password: string;
}

interface StoreState {
  user: User;
  login: ({ username, email, password }: User) => void;
  logout: () => void;
}

const store = (set: SetState<StoreState>) => ({
  user: {
    username: '',
    email: '',
    password: ''
  },
  login: (data: User) => set(() => {
    const { username, email, password } = data;

    return {
      user: { username, email, password }
    }
  }),
  logout: () => set(() => ({
    user: {
      username: '',
      email: '',
      password: '',
    }
  }))
})

export const useStore = 
  create(persist(store, { name: '@zustand-app' }));