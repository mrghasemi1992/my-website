// @flow
function handleScroll(id: string): void {
  const element = document.querySelector(id);
  element && element.scrollIntoView({ behavior: 'smooth' });
}

export default handleScroll;
