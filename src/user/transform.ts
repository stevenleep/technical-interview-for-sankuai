import { BackendUser, FrontendUser } from "./UserModel";

const mappings = {
  id: "value",
  name: "label",
};

function filterUser(user: BackendUser): boolean {
  return !user.disabled;
}

export function transform(users?: BackendUser[]): FrontendUser[] {
  if (!Array.isArray(users)) {
    return [];
  }
  return users?.filter(filterUser).map((user) => {
    return Object.entries(mappings).reduce(
      (result, [backendProp, frontendProp]) => {
        Reflect.set(result, frontendProp, Reflect.get(user, backendProp));
        return result;
      },
      {} as FrontendUser
    );
  });
}
