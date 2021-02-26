export default (storageKey) => ({ onSet, setSelf }) => {
  const stored = localStorage.getItem(storageKey);

  if (stored) {
    try {
      setSelf(JSON.parse(stored));
    } catch (err) {
      // Do nothing
    }
  }

  onSet((newValue) =>
    localStorage.setItem(storageKey, JSON.stringify(newValue))
  );
};
