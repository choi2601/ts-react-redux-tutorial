import { ActionType } from 'typesafe-actions';
import { GitHubProfile } from '../../api/github';
import { AsyncState } from '../../lib/reducerUtils';
import * as actions from './actions';

export type GithubAction = ActionType<typeof actions>;
// export type GitHubState = {
//     userProfile: {
//         loading: boolean;
//         data: GitHubProfile | null;
//         error: Error | null;
//     }
// }
export type GitHubState = {
    userProfile: AsyncState<GitHubProfile, Error>;
}