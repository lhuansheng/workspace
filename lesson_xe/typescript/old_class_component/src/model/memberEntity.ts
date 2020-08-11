// 从后端获取的信息必须拥有的一些信息
export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}