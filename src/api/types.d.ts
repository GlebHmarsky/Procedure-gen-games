declare namespace Components {
  export interface IGames {
    id: number,
    name: string;
    description: string;
    avatarURL: string | null;
  }
  export interface ICreateGame {
    id: number,
    name: string;
    description: string;
    avatarURL: string | null;
  }
}
