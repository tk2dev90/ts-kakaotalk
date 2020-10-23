// create top links
appendChild('#ts-kakao-main-sidebar-top', createElementsWithJSON([
  // friends
  {
    name: 'a',
    attributes: {
      href: '',
      title: '친구',
    },
    children: [
      {
        name: 'img',
        attributes: {
          src: 'image/person.svg',
          alt: 'person',
        },
      },
    ]
  },
  // chat
  {
    name: 'a',
    attributes: {
      href: '',
      title: '채팅',
    },
    children: [
      {
        name: 'img',
        attributes: {
          src: 'image/chat-bubble.svg',
          alt: 'chat-bubble',
        },
      },
    ]
  },
  // more
  {
    name: 'a',
    attributes: {
      href: '',
      title: '더보기',
    },
    children: [
      {
        name: 'img',
        attributes: {
          src: 'image/more.svg',
          alt: 'more',
        },
      },
    ]
  },
]));

// create bottom links
appendChild('#ts-kakao-main-sidebar-bottom', createElementsWithJSON([
  // shop
  {
    name: 'a',
    attributes: {
      href: '',
      title: '카카오 이모티콘샵',
    },
    children: [
      {
        name: 'img',
        attributes: {
          src: 'image/smile.svg',
          alt: 'smile',
        },
      },
    ],
  },
  // alert
  {
    name: 'a',
    attributes: {
      href: '',
      title: '설정',
    },
    children: [
      {
        name: 'img',
        attributes: {
          src: 'image/bell.svg',
          alt: 'bell',
        },
      },
    ],
  },
  // settings
  {
    name: 'a',
    attributes: {
      href: '',
      title: '설정',
    },
    children: [
      {
        name: 'img',
        attributes: {
          src: 'image/settings.svg',
          alt: 'settings',
        },
      },
    ],
  },
]));
