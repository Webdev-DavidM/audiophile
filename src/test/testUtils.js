export const locateByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
