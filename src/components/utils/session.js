import { retrive } from "./localstorage";

export const sessionParamsGenerator = () => {
  const session = retrive("session");
  if (!session) return "";
  return `?access-token=${session["access-token"]}&client=${session.client}&uid=${session.uid}`;
};
