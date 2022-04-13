import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Free Time',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia ratione tempora aliquid accusantium nisi rem, quidem deleniti vel fugit eum reprehenderit illum natus. Sit sunt at exercitationem necessitatibus magnam!',
    imageUrl: '/assets/placeimg_500_300_arch4.jpg',
    contractTypeId: 3,
    contractSignedOn: '2013-08-04T22:39:41.473Z',
    budget: 5463,
    isActive: false
  }),
  new Project({
    id: 2,
    name: 'Art and love',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia ratione tempora aliquid accusantium nisi rem, quidem deleniti vel fugit eum reprehenderit illum natus. Sit sunt at exercitationem necessitatibus magnam!',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    contractTypeId: 4,
    contractSignedOn: '2012-08-06T21:21:31.419Z',
    budget: 9138,
    isActive: true
  }),
  new Project({
    id: 3,
    name: 'Metropoly',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia ratione tempora aliquid accusantium nisi rem, quidem deleniti vel fugit eum reprehenderit illum natus. Sit sunt at exercitationem necessitatibus magnam!',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 6,
    contractSignedOn: '2016-06-26T18:24:01.706Z',
    budget: 2929,
    isActive: true
  }),
  new Project({
    id: 4,
    name: 'Gallery',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia ratione tempora aliquid accusantium nisi rem, quidem deleniti vel fugit eum reprehenderit illum natus. Sit sunt at exercitationem necessitatibus magnam!',
    imageUrl: '/assets/placeimg_500_300_arch5.jpg',
    contractTypeId: 4,
    contractSignedOn: '2013-05-26T01:10:42.344Z',
    budget: 4560,
    isActive: true
  }),
  new Project({
    id: 5,
    name: 'New York',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia ratione tempora aliquid accusantium nisi rem, quidem deleniti vel fugit eum reprehenderit illum natus. Sit sunt at exercitationem necessitatibus magnam!',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 2,
    contractSignedOn: '2009-12-18T21:46:47.944Z',
    budget: 8188,
    isActive: true
  }),
  new Project({
    id: 6,
    name: 'Peace',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia ratione tempora aliquid accusantium nisi rem, quidem deleniti vel fugit eum reprehenderit illum natus. Sit sunt at exercitationem necessitatibus magnam!',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    contractTypeId: 3,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 5407,
    isActive: false
  })
];
