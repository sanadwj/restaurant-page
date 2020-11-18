const main = () => {
  const main = document.createElement('div');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'main');
  mainDiv.innerHTML = 'Restaurant has been successfully owned and operated since 1984 and welcomes you to drop by and join the locals in our fun and friendly atmosphere. We are located close to the beach in Santa Barbara, California.\n Our goal is to offer great homemade food at a reasonable price while maintaining great quality and service. Enjoy a selection of appetizers, sandwiches, fresh seafood, steak, pastas, fresh salads, homemade desserts and daily specials, including everything from classic favorites to modern cuisine. We offer a full bar.\n Come join us for breakfast, lunch or dinner and dine on our outdoor patio or in the newly remodeled dining room.';
  main.appendChild(mainDiv);
  return main;
};

export default main;
