const activeElement = (index, activeIndex, setActive) => {
  activeIndex === index ? setActive(null) : setActive(index);
};

export default activeElement;
