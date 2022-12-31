const users = [
  {
    username: 'Aaran',
    email: 'Aaran@email.com',
  },
  {
    username: 'Aaren',
    email: 'Aaren@email.com',
  },
  {
    username: 'Aarez',
    email: 'Aarez@email.com',
  },
  {
    username: 'Aarman',
    email: 'Aarman@email.com',
  },
  {
    username: 'Aaron',
    email: 'Aaron@email.com',
  },
  {
    username: 'Aaron-James',
    email: 'Aaron-James@email.com',
  },
  {
    username: 'Aarron',
    email: 'Aarron@email.com',
  },
  {
    username: 'Aaryan',
    email: 'Aaryan@email.com',
  },
  {
    username: 'Aaryn',
    email: 'Aaryn@email.com',
  },
  {
    username: 'Aayan',
    email: 'Aayan@email.com',
  },
  {
    username: 'Aazaan',
    email: 'Aazaan@email.com',
  },
  {
    username: 'Abaan',
    email: 'Abaan@email.com',
  },
  {
    username: 'Abbas',
    email: 'Abbas@email.com',
  },
  {
    username: 'Abdallah',
    email: 'Abdallah@email.com',
  },
  {
    username: 'Abdalroof',
    email: 'Abdalroof@email.com',
  },
  {
    username: 'Abdihakim',
    email: 'Abdihakim@email.com',
  },
  {
    username: 'Abdirahman',
    email: 'Abdirahman@email.com',
  },
  {
    username: 'Abdisalam',
    email: 'Abdisalam@email.com',
  },
  {
    username: 'Abdul',
    email: 'Abdul@email.com',
  },
  {
    username: 'Abdul-Aziz',
    email: 'Abdul-Aziz@email.com',
  },
  {
    username: 'Abdulbasir',
    email: 'Abdulbasir@email.com',
  },
  {
    username: 'Abdulkadir',
    email: 'Abdulkadir@email.com',
  },
  {
    username: 'Abdulkarem',
    email: 'Abdulkarem@email.com',
  },
  {
    username: 'Ze',
    email: 'Ze@email.com',
  },
  {
    username: 'Zechariah',
    email: 'Zechariah@email.com',
  },
  {
    username: 'Zeek',
    email: 'Zeek@email.com',
  },
  {
    username: 'Zeeshan',
    email: 'Zeeshan@email.com',
  },
  {
    username: 'Zeid',
    email: 'Zeid@email.com',
  },
  {
    username: 'Zein',
    email: 'Zein@email.com',
  },
  {
    username: 'Zen',
    email: 'Zen@email.com',
  },
  {
    username: 'Zendel',
    email: 'Zendel@email.com',
  },
  {
    username: 'Zenith',
    email: 'Zenith@email.com',
  },
  {
    username: 'Zennon',
    email: 'Zennon@email.com',
  },
  {
    username: 'Zeph',
    email: 'Zeph@email.com',
  },
  {
    username: 'Zerah',
    email: 'Zerah@email.com',
  },
  {
    username: 'Zhen',
    email: 'Zhen@email.com',
  },
  {
    username: 'Zhi',
    email: 'Zhi@email.com',
  },
  {
    username: 'Zhong',
    email: 'Zhong@email.com',
  },
  {
    username: 'Zhuo',
    email: 'Zhuo@email.com',
  },
  {
    username: 'Zi',
    email: 'Zi@email.com',
  },
  {
    username: 'Zidane',
    email: 'Zidane@email.com',
  },
  {
    username: 'Zijie',
    email: 'Zijie@email.com',
  },
  {
    username: 'Zinedine',
    email: 'Zinedine@email.com',
  },
  {
    username: 'Zion',
    email: 'Zion@email.com',
  },
  {
    username: 'Zishan',
    email: 'Zishan@email.com',
  },
  {
    username: 'Ziya',
    email: 'Ziya@email.com',
  },
  {
    username: 'Ziyaan',
    email: 'Ziyaan@email.com',
  },
  {
    username: 'Zohaib',
    email: 'Zohaib@email.com',
  },
  {
    username: 'Zohair',
    email: 'Zohair@email.com',
  },
  {
    username: 'Zoubaeir',
    email: 'Zoubaeir@email.com',
  },
  {
    username: 'Zubair',
    email: 'Zubair@email.com',
  },
  {
    username: 'Zubayr',
    email: 'Zubayr@email.com',
  },
  {
    username: 'Zuriel',
    email: 'Zuriel@email.com',
  },
];

const getRandomusername = () => {
  return users[Math.floor(Math.random() * (users.length - 1))].username;
};

const thoughts = [
  {
    thoughtText: 'How to disagree with someone',
    username: getRandomusername(),
  },
  {
    thoughtText: 'iPhone review',
    username: getRandomusername(),
  },
  {
    thoughtText: 'how-to video',
    username: getRandomusername(),
  },
  {
    thoughtText: 'video essay on the history of video games',
    username: getRandomusername(),
  },
  {
    thoughtText: 'How to make money on the App Store',
    username: getRandomusername(),
  },
  {
    thoughtText: 'Learn NextJS in five minutes (Not clickbate)',
    username: getRandomusername(),
  },
  {
    thoughtText: 'Movie trailer',
    username: getRandomusername(),
  },
  {
    thoughtText: 'Hello world',
    username: getRandomusername(),
  },
  {
    thoughtText: 'Another possible solution to the algorithm',
    username: getRandomusername(),
  },
  {
    thoughtText: 'Apology video',
    username: getRandomusername(),
  },
  {
    thoughtText: 'Submission for startup pitch',
    username: getRandomusername(),
  },
];

// const possibleReactions = [
//   'I disagree!',
//   'I tried your algorithm, here were the results',
//   'This was awesome',
//   'Thank you for the great content',
//   'Please check out my video reaction',
//   'Like and subscribe to my channel please',
//   'Reply: The side effects of in app purchases on digital marketplaces',
// ];

// Export the functions for use in seed.js
module.exports = { users, thoughts };
