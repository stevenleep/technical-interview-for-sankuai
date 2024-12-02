export type UserModel = {
  // ⽤户id
  id: number;
  // ⽤户 name
  name: string;
  // ⽤户是否禁⽤：true 禁⽤，false 启⽤
  disabled: boolean;
};

// 类型工具：将BackendUser转换为FrontendUser
type BackendToFrontendUserMapper<
  BackendModel extends Object,
  TMappings extends Record<string, string>
> = {
  [K in keyof TMappings as K extends keyof BackendModel
    ? TMappings[K]
    : never]: K extends keyof BackendModel ? BackendModel[K] : never;
};

export type BackendUser = UserModel;
export type FrontendUser = BackendToFrontendUserMapper<
  BackendUser,
  { id: "value"; name: "label" }
>;
