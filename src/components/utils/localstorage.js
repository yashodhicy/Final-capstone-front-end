export const save = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const retrive = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const clearSession = (name) => {
  localStorage.removeItem(name)
}
