export interface MemberDetailEntity {
  id: string;
  login: string;
  company: string;
  bio: string;
}

export const createDefaultMemberDetail = () => ({
  id: '',
  login: '',
  company: '',
  bio: '',
});
