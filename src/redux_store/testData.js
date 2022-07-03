export const buddiesInitialData = {
  uid1: {
    id: "uid1",
    profile: {
      name: "Henry Boyd",
      email: "henryboyd@gmail.com",
      imageURL:
        "https://i2.cinestaan.com/image-bank/1500-1500/196001-197000/196232.jpg",
    },
    progress: {
      time: "13h",
      attended: 188,
      meetings: 119,
      rejected: 41,
    },
    currentWeek: 1,
    isArchived: false,
  },
  uid2: {
    id: "uid2",
    profile: {
      name: "Martha Curtis",
      email: "marthacurtis@gmail.com",
      imageURL:
        "https://img.indiaforums.com/person/480x360/1/0990-ram-charan.jpg?c=7bD5A7",
    },
    progress: {
      time: "10h",
      attended: 120,
      meetings: 109,
      rejected: 4,
    },
    currentWeek: 1,
    isArchived: true,
  },
  uid3: {
    id: "uid3",
    profile: {
      name: "Philip Tucker",
      email: "philiptucker@gmail.com",
      imageURL:
        "https://www.mirchi9.com/wp-content/uploads/2022/01/Rajamouli-Dont-Kill-Industry-For-Your-Selfishness.jpg",
    },
    progress: {
      time: "9h",
      attended: 10,
      meetings: 19,
      rejected: 40,
    },
    currentWeek: 2,
    isArchived: false,
  },
};

export const userInitialData = {
  id: "uid0",
  name: "Bill Bradford",
  role: "Lead UX/UI Designer",
  isActive: true,
  imageURL:
    "https://www.filmibeat.com/img/popcorn/profile_photos/amala-paul-20171129121117-17185.jpg",
};

export const chatInitialData = {
  selectedBuddy: "uid1",
  chat: {
    uid1: [
      {
        uid: "uid0",
        text: "Hi Henryyy",
        time: 1656786600000,
      },

      {
        uid: "uid1",
        text: "Hey",
        time: 1656786600000,
      },
      {
        uid: "uid0",
        text: "How can I help you today?",
        time: 1656786600000,
      },
      {
        uid: "uid1",
        text: "I am Fine",
        time: 1656786600000,
      },
    ],
    uid2: [
      {
        uid: "uid0",
        text: "Hi ",
        time: 1656786600000,
      },

      {
        uid: "uid1",
        text: "Hey",
        time: 1656786600000,
      },
      {
        uid: "uid0",
        text: "How can I help you today?",
        time: 1656786600000,
      },
      {
        uid: "uid1",
        text: "I am Fine",
        time: 1656786600000,
      },
    ],
    uid3: [
      {
        uid: "uid0",
        text: "Hey Martha you know one thing",
        time: 1656786600000,
      },

      {
        uid: "uid1",
        text: "No, You only said that",
        time: 1656786600000,
      },
      {
        uid: "uid0",
        text: "What?",
        time: 1656786600000,
      },
      {
        uid: "uid1",
        text: "Don't you know",
        time: 1656786600000,
      },
    ],
  },
};
