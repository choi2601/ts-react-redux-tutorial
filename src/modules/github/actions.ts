import { createStandardAction, createAsyncAction, PayloadAction } from "typesafe-actions";
import { GitHubProfile } from "../../api/github";
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(GET_USER_PROFILE_SUCCESS)<GitHubProfile>();
// export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();

// export const getUserProfileAsync = createAsyncAction(
//     GET_USER_PROFILE,
//     GET_USER_PROFILE_SUCCESS,
//     GET_USER_PROFILE_ERROR
// )<PayloadAction<any, any>, GitHubProfile, AxiosError>();

//payload가 아무것도 받지 않는 경우애는 undefined가 아닌 PayloadAction<any, any>를 넣어줘야 오류 없이 작동이 됬음

export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<string, GitHubProfile, AxiosError>();


