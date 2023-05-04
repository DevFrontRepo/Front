import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import   {Login}   from '../../pages/Auth/Login';
import  { RegisterClient }  from '../../pages/Auth/RegisterClient';
import  { RegisterVendor }  from '../../pages/Auth/RegisterVendor';
import { IGenericResponse } from './types'
import { userApi } from './userApi';

const BASE_URL = 'http:/'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/auth/`,
  }),
  endpoints: (builder) => ({

    // endpoint pour le sign up du client
    registerUser: builder.mutation<IGenericResponse, RegisterClient>({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
        };
      },
    }),

    // endpoint du sign up du restaurateur
    // registerUserVendor: builder.mutation<IGenericResponse, RegisterVendor>({
    //     query(data) {
    //       return {
    //         url: 'register',
    //         method: 'POST',
    //         body: data,
    //       };
    //     },
    //   }),


    // endpoint pour le sign in du client et du restaurateur
    loginUser: builder.mutation<{ access_token: string; status: string }, Login>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),


    // endpoint pour la verification de l'email
    verifyEmail: builder.mutation<IGenericResponse, { verificationCode: string }>({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: 'GET',
        };
      },
    }),


    // endpoint pour la deconnexion
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
} = authApi;
