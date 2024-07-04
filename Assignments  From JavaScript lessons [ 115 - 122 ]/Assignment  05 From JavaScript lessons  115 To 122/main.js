const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const { title: t } = game;
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

const { developer: d } = game;
console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

let {
  o = Object.keys(game.releases)[0],
  u = game.releases["Oath In Felghana"][0],
  j = game.releases["Oath In Felghana"][1],
} = game;
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

const { a1 = Object.keys(game.releases)[1] } = game;
console.log(`Although I Love ${a1}`);
// Although I Love Ark Of Napishtim

const {
  a2 = Object.keys(game.releases)[1],
  u_price = game.releases["Ark Of Napishtim"]["US"],
} = game;
console.log(`${a2} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

const {
  a = Object.keys(game.releases)[1],
  j_price = game.releases["Ark Of Napishtim"]["JAP"],
} = game;
console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

const {
  releases: { Origin: or },
} = game;
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
