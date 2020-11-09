function handleScroll(id) {
  console.log(id);
  const element = document.querySelector(id);
  element.scrollIntoView({ behavior: 'smooth' });
}

export default handleScroll;
