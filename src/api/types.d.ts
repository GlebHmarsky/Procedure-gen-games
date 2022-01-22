declare namespace Components {
  export interface IProfile {
    id: number,
    name: string;
    description: string;
    avatarURL: string | null;
  }
  export interface ICreateProfile {
    id: number,
    name: string;
    description: string;
    avatarURL: string | null;
  }
}
