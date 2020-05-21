exports.tagCategories = {
  music: {
    backgroundColor: '#FFD39F',
    color: '#B06000',
  },
  software: {
    backgroundColor: '#BFF49F',
    color: '#2F7C00',
  },
  misc: {
    backgroundColor: '#95C6FF',
    color: '#00479B',
  },
};

exports.getTagSizeFromString = (size) => {
  switch (size) {
    case 'S':
      return {
        width: 50,
        height: 15,
        fontSize: 9,
      };
    case 'L':
      return {
        width: 150,
        height: 30,
        fontSize: 18,
      };
    default:
      return {
        width: 100,
        height: 20,
        fontSize: 11,
      };
  }
};
