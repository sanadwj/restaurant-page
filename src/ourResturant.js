const main = () => {
  const main = document.createElement('div');
  main.setAttribute('id', 'mainDiv');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'main');
  mainDiv.innerHTML = ' <h4>In 1979, Mrs. Flavia Romero took her Italian roots and planted them in Amman by establishing Romero Restaurant.</h4>\n<h4> In 1988, the legacy created by Romero was handed over to Mr. Zaid Goussous, whose passion and love for fine cuisine continues to drive his inspiration today.</h4>\n<h4> Goussous had successfully maintained a small piece of Italy in the heart of our beloved Amman with its enchanting ambience and indulging cuisine.</h4>\n <h5>Indulge your senses in a unique fine dining experience at Romero Group outlets and enjoy collecting points with each visit.</h5>\n <h5>You can choose between obtaining My Romero Rewards Card or My Romero Rewards Mobile Application; can be downloaded from App Store – IOS & Google Play – Android. You can use My Romero Rewards anytime of the year at any Romero Group outlet around Jordan.</h5>\n <h5>Accumulated points can be redeemed at any outlet, in Jordan, owned & managed by Romero Group.</h5> ';
  main.appendChild(mainDiv);
  return main;
};

export default main;
