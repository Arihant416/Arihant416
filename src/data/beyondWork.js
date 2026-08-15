const poster = (slug) => `/beyond-work/posters/${slug}.webp`;

export const favorites = [
  {
    title: 'Person of Interest',
    image: poster('person-of-interest'),
    signal: 'Three watches',
    note: 'My all-time favourite. It starts as a surveillance thriller and becomes a story about purpose, friendship, and sacrifice. Fusco\'s redemption and John\'s final choice for Harold still land every time.',
  },
  {
    title: 'Supernatural',
    image: poster('supernatural'),
    signal: 'Fifteen seasons, twice',
    note: 'The other all-time favourite. Dean remains my favourite television character, and Crowley becoming an unlikely Winchester ally is the arc I keep returning to.',
  },
  {
    title: 'Haikyu!!',
    image: poster('haikyu'),
    signal: 'Nine watches',
    note: 'My favourite sports anime. The Shiratorizawa match, Hinata\'s growth, and Tsukishima finally having his moment never get old.',
  },
  {
    title: 'One Piece',
    image: poster('one-piece'),
    signal: 'Caught up twice + manga',
    note: 'The length makes sense once its world opens up. I love Luffy\'s freedom, Oda\'s world-building, and, naturally, Zoro.',
  },
  {
    title: 'Naruto',
    image: poster('naruto'),
    signal: 'The formative one',
    note: 'My first long anime after Death Note. Its heroes, villains, mentors, and friendships stayed with me long after the final episode.',
  },
  {
    title: 'Suits',
    image: poster('suits'),
    signal: 'Comfort rewatch',
    note: 'One reel can send me back to it. Mike\'s moral stubbornness, Harvey\'s loyalty, and Louis\'s growth are the reasons I stay.',
  },
  {
    title: 'The Mentalist',
    image: poster('the-mentalist'),
    signal: 'Mystery with warmth',
    note: 'Jane\'s charm, Lisbon\'s steadiness, and a mystery that takes its time. Also, there is no business like Cho business.',
  },
];

export const watchArchive = [
  ['Weak Hero', 'weak-hero'],
  ['Bloodhounds', 'bloodhounds'],
  ['Mercy for None', 'mercy-for-none'],
  ['Loki', 'loki'],
  ['Mirzapur', 'mirzapur'],
  ['The Vampire Diaries', 'the-vampire-diaries'],
  ['Kuroko no Basket', 'kuroko-no-basket'],
  ['Hajime no Ippo', 'hajime-no-ippo'],
  ['Ahiru no Sora', 'ahiru-no-sora'],
  ['Aoashi', 'aoashi'],
  ['House', 'house'],
  ['Friends', 'friends'],
  ['Game of Thrones', 'game-of-thrones'],
  ['How I Met Your Mother', 'how-i-met-your-mother'],
  ['Teen Wolf', 'teen-wolf'],
  ['The Originals', 'the-originals'],
  ['Itaewon Class', 'itaewon-class'],
  ['House of Cards', 'house-of-cards'],
  ['The Recruit', 'the-recruit'],
  ['Dexter', 'dexter'],
  ['Prison Break', 'prison-break'],
  ['The Walking Dead', 'the-walking-dead'],
  ['The Sopranos', 'the-sopranos'],
  ['The Flash', 'the-flash'],
  ['Cowboy Bebop', 'cowboy-bebop'],
  ['Breaking Bad', 'breaking-bad'],
  ['Better Call Saul', 'better-call-saul'],
  ['Ozark', 'ozark'],
  ['Daredevil', 'daredevil'],
  ['The Punisher', 'the-punisher'],
  ['True Detective', 'true-detective'],
  ['Peaky Blinders', 'peaky-blinders'],
  ['Death Note', 'death-note'],
].map(([title, slug]) => ({ title, image: poster(slug) }));

export const filmNotes = [
  {
    title: 'The easy returns',
    films: 'Jaanu · Kal Ho Naa Ho · Swades · Main Hoon Na',
    note: 'Four very different films, all capable of becoming the evening plan the moment a familiar scene appears.',
  },
  {
    title: 'The heroes',
    films: 'Superman · Spider-Man · Batman · Iron Man',
    note: 'Superman comes first, from the older films and Superman Returns to Man of Steel, Snyder\'s Cut, and the animated stories. Batman and Iron Man follow; Spider-Man is always welcome.',
  },
  {
    title: 'Still defending Hulk',
    films: 'Hulk (2003) · The Incredible Hulk',
    note: 'I love both versions, and I will maintain that Marvel toned Hulk down far too much after The Avengers.',
  },
];

export const nowNotes = [
  {
    label: 'Reading',
    title: 'Going deeper on systems.',
    note: 'Working through Designing Data-Intensive Applications and Software Architecture to strengthen the fundamentals behind reliable backend systems.',
  },
  {
    label: 'Exploring',
    title: 'Learning how AI products are built.',
    note: 'Starting with the basics: how useful AI features are tested, integrated, and kept reliable after launch.',
  },
  {
    label: 'Thinking about',
    title: 'A calmer tool for parents.',
    note: 'An early idea for helping parents organize changes they notice and prepare clearer context for a clinician. It is still at the idea stage.',
  },
];

export const wallPosters = [
  favorites[0],
  favorites[1],
  favorites[2],
  favorites[3],
  ...['Weak Hero', 'Mirzapur', 'The Vampire Diaries', 'Loki', 'Kuroko no Basket', 'Hajime no Ippo', 'Bloodhounds', 'Mercy for None']
    .map((title) => watchArchive.find((item) => item.title === title)),
];
