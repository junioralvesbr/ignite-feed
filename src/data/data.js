const data = [
  {
    id: 1,
    author: {
      name: 'Junior Alves',
      avatar: 'https://github.com/junioralvesbr.png',
      role: 'front-end'
    },
    content: [
      { type: 'paragraph', post: 'Fala galeraa 👋' },
      { type: 'paragraph', post: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', link: 'github.com/junioralvesbr' },
    ],
    links: ['#novoprojeto', '#nlw', '#rocketseat'],
    publishedAt: new Date("2022-03-15T10:00:00")
  },
  {
    id: 2,
    author: {
      name: 'Diego',
      avatar: 'https://github.com/diego3g.png',
      role: 'fullStack'
    },
    content: [
      { type: 'paragraph', post: 'Fala galeraa 👋' },
      { type: 'paragraph', post: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', link: 'github.com/diego3g' },
    ],
    links: ['#novoprojeto', '#nlw', '#rocketseat'],
    publishedAt: new Date("2023-01-20T20:10:00")
  },
  {
    id: 3,
    author: {
      name: 'Marco Bruno',
      avatar: 'https://github.com/marcobrunodev.png',
      role: 'fullStack'
    },
    content: [
      { type: 'paragraph', post: 'Fala galeraa 👋' },
      { type: 'paragraph', post: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', link: 'github.com/marcobrunodev' },
    ],
    links: ['#novoprojeto', '#nlw', '#colabcode'],
    publishedAt: new Date("2020-12-27T12:45:00")
  },
]

export default data