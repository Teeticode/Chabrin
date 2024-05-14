import AsyncStorage from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "../utils/Storage";
import { locationInterface, USER } from "@/Screens/protected-routes/home/MainHomeComponent";

// // TODO: Add user type
// type User = LoginSuccessResponse["data"];
export interface USER2 {
    token: string;
    user:  User;
}

export interface User {
    created_at:  Date;
    description: null;
    id:          number;
    updated_at:  Date;
    user_type:   string;
    username:    string;
}
export const HACKER_URL = "https://099b-105-160-38-88.ngrok-free.app/api/"
export interface GetStreamUserDetails {
  token:string,
  email:string
  client_id:any,
  name:string
}
export interface locationMini{
  latitude:any,
  longitude:any,
}
interface UserStore {
  onboarded: boolean;
  setOnboarded: (onboarded: boolean) => void;
  selectedUser:USER;
  locationSet:boolean;
  setLocationSet:(locationSet:boolean)=>void;
  setSelectedUser:(user:USER)=>void;
  location:locationMini,
  setLocation:(location:locationMini)=>void;
  user: USER2
  streamInfo:{token:string, email:string, client_id:any, name:string}|null,
  setGetStreamInfo:(streaUser:GetStreamUserDetails)=>void,
  accessTipsActivated?: boolean;
  setAccessTipsActivated?: (accessTipsActivated: boolean) => void;
  canAccessDashboard: boolean;
  biometricsDetails: {
    isBiometricAvailable: boolean;
    biometricType: "Face ID" | "Touch ID";
  } | null;
  setBiometricsDetails: (biometricsDetails: {
    isBiometricAvailable: boolean;
    biometricType: string | number;
  }) => void;
  hasEnabledBiometrics: boolean;
  setHasEnabledBiometrics: (hasEnabledBiometrics: boolean) => void;
  setCanAccessDashboard: (canAccessDashboard: boolean) => void;
  setUserUser: (user: USER2) => void;
  openRequest:boolean;
  setOpenRequest:(open:boolean)=>void
  getUser: () => any;
  tokens: {
    accessToken: string;
    refreshToken: string;
  } | null;
  setTokens: ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => void;
  getTokens: () => { accessToken: string; refreshToken: string };
  logout: () => void;

}

export const userStore = create(
  persist<UserStore>(
    (set, get) => ({
      canAccessDashboard: false,
      setCanAccessDashboard: (canAccessDashboard: boolean) => {
        set({ canAccessDashboard });
      },
      selectedUser:{
        username:"",
        user_type:"",
        description:""
      },
      setSelectedUser(user) {
        set({selectedUser:user})
      },
      locationSet:false,
      setLocationSet(locationSet) {
        set({locationSet:locationSet})
      },
      openRequest:false,
      setOpenRequest(open) {
        set({openRequest:open})
      },
      location:{
        latitude: -1.286389,
        longitude: 36.817223,
      },
      onboarded: false,
      setLocation(location) {
        set({location:location})
      },
      setOnboarded: (onboarded: boolean) => {
        set({ onboarded });
      },
      user: null,
      setUserUser: (user: any) => {
        set({ user: user });
      },
      getUser: () => {
        return get().user as any;
      },
      streamInfo:null,
      setGetStreamInfo:(streaUser)=> {
        set({streamInfo:streaUser})
      },
      tokens: null,
      setTokens: ({ accessToken, refreshToken }) => {
        set({ tokens: { accessToken, refreshToken } });
      },
      getTokens: () => {
        return get().tokens as { accessToken: string; refreshToken: string };
      },
      accessTipsActivated: false,
      hasEnabledBiometrics: false,
      biometricsDetails: null,
      setBiometricsDetails(biometricsDetails) {
        set({ biometricsDetails });
      },
      setHasEnabledBiometrics: (hasEnabledBiometrics: boolean) => {
        set({ hasEnabledBiometrics });
      },
      setAccessTipsActivated: (accessTipsActivated: boolean) => {
        set({ accessTipsActivated });
      },
      logout: () => {
        set({ tokens: null, user: null });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default userStore;