import { MemberEntity } from '../../model';
import { members } from './mockData';
// : Promise 要求返回 promise
// <> 当promise解决后，要求 memebers 为  MemberEntity[] 类型
const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};