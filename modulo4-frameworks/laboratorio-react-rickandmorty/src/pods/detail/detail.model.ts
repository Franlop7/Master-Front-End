export interface MemberDetailEntity {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export const createDefaultMemberDetail = () => ({
  id: "",
  name: "",
  image: "",
  status: "",
  species: "",
  type: "",
  gender: "",
});
