import React, { useState, useEffect } from 'react';

import JsonTree from '../treeView/jsonTree';
import '../treeView/jsonTree.css';

const ViewTest = (props) => {
  const [setLoading] = useState(false);
  // const [data, setData] = useState({});
  const data = [
    {
      _id: '5cfc038a19e0a6ca597d3257',
      index: 0,
      guid: '23149292-ba33-478a-b6a4-21aa7467c0d8',
      isActive: false,
      balance: '$1,781.02',
      picture: 'http://placehold.it/32x32',
      age: 25,
      eyeColor: 'green',
      name: 'Durham Weaver',
      gender: 'male',
      company: 'POOCHIES',
      email: 'durhamweaver@poochies.com',
      phone: '+1 (936) 517-3157',
      address: '258 Eastern Parkway, Galesville, Palau, 8794',
      about: 'Magna cupidatat ea velit in cupidatat nulla laboris anim. Enim reprehenderit deserunt Lorem duis dolore laborum ea sunt velit non occaecat et. Elit aliqua ex do cupidatat velit id voluptate ea consectetur qui consequat in. Occaecat eu incididunt occaecat et ea magna non. Pariatur deserunt amet dolor quis ex amet sit id do eiusmod fugiat minim irure id. Reprehenderit cupidatat quis laboris veniam culpa eiusmod irure irure do cupidatat. Officia elit pariatur pariatur magna labore aute id veniam dolor deserunt.\r\n',
      registered: '2016-12-31T11:50:54 +05:00',
      latitude: -83.159903,
      longitude: -94.226187,
      tags: [
        'Lorem',
        'voluptate',
        'sint',
        'irure',
        'irure',
        'voluptate',
        'quis',
      ],
      friends: [
        {
          id: 0,
          name: 'Fisher Dominguez',
        },
        {
          id: 1,
          name: 'Shannon Fuentes',
        },
        {
          id: 2,
          name: 'Orr Goodman',
        },
      ],
      greeting: 'Hello, Durham Weaver! You have 6 unread messages.',
      favoriteFruit: 'banana',
    },
    {
      _id: '5cfc038adf191ce8d2a36cc2',
      index: 1,
      guid: '41ece5ce-1944-41a4-9b31-c1385d13bdc0',
      isActive: true,
      balance: '$3,567.06',
      picture: 'http://placehold.it/32x32',
      age: 32,
      eyeColor: 'brown',
      name: 'Janell Mcmillan',
      gender: 'female',
      company: 'MACRONAUT',
      email: 'janellmcmillan@macronaut.com',
      phone: '+1 (888) 547-3683',
      address: '118 Saratoga Avenue, Itmann, Wisconsin, 2125',
      about: 'Cupidatat minim irure quis quis aute nisi est. Consectetur excepteur aliqua dolore in ipsum aute aliqua sunt exercitation. Nostrud sunt deserunt sint amet. Ad qui elit ut id duis cillum laborum ex occaecat incididunt non ex sit exercitation. Velit incididunt id duis eu consequat. Pariatur eu pariatur fugiat proident laborum voluptate est.\r\n',
      registered: '2018-05-21T10:29:51 +04:00',
      latitude: -63.488049,
      longitude: -147.630589,
      tags: [
        'Lorem',
        'sunt',
        'eiusmod',
        'proident',
        'deserunt',
        'consequat',
        'eiusmod',
      ],
      friends: [
        {
          id: 0,
          name: 'Rogers Combs',
        },
        {
          id: 1,
          name: 'Daniels Dunlap',
        },
        {
          id: 2,
          name: 'Myers Newton',
        },
      ],
      greeting: 'Hello, Janell Mcmillan! You have 3 unread messages.',
      favoriteFruit: 'banana',
    },
    {
      _id: '5cfc038a5efeba1c1dc19aa6',
      index: 2,
      guid: '7caf10c5-13b7-43fb-b943-bf0506b3efc1',
      isActive: true,
      balance: '$3,484.24',
      picture: 'http://placehold.it/32x32',
      age: 32,
      eyeColor: 'brown',
      name: 'Vega Bennett',
      gender: 'male',
      company: 'ZOXY',
      email: 'vegabennett@zoxy.com',
      phone: '+1 (829) 418-2650',
      address: '818 Crawford Avenue, Cobbtown, Marshall Islands, 8275',
      about: 'Proident duis culpa aliqua cillum qui elit aute do. Esse incididunt excepteur reprehenderit qui veniam laborum commodo id nostrud ex labore exercitation ipsum. Ipsum dolore pariatur amet laborum minim ea. Amet do eu cupidatat irure fugiat id proident commodo pariatur nisi. Magna sunt ea et fugiat et irure qui labore fugiat proident dolore consequat consequat. Consectetur est elit consequat pariatur dolor minim et cupidatat elit fugiat consectetur officia adipisicing. Anim amet ex ipsum ipsum elit voluptate incididunt do esse et esse Lorem.\r\n',
      registered: '2017-04-24T04:01:25 +04:00',
      latitude: 37.07711,
      longitude: -15.498175,
      tags: [
        'consequat',
        'occaecat',
        'ullamco',
        'qui',
        'est',
        'officia',
        'cillum',
      ],
      friends: [
        {
          id: 0,
          name: 'Charles Walsh',
        },
        {
          id: 1,
          name: 'Medina Lancaster',
        },
        {
          id: 2,
          name: 'Randall Guerra',
        },
      ],
      greeting: 'Hello, Vega Bennett! You have 6 unread messages.',
      favoriteFruit: 'banana',
    },
    {
      _id: '5cfc038a446edfde3da5cdfb',
      index: 3,
      guid: '64d2400a-e0aa-4ae2-af0f-a6876ee860d0',
      isActive: false,
      balance: '$3,680.63',
      picture: 'http://placehold.it/32x32',
      age: 27,
      eyeColor: 'blue',
      name: 'Trisha Dawson',
      gender: 'female',
      company: 'WAAB',
      email: 'trishadawson@waab.com',
      phone: '+1 (931) 434-2622',
      address: '103 Lynch Street, Elrama, Montana, 3094',
      about: 'Occaecat ullamco deserunt velit eu. Tempor exercitation veniam duis minim deserunt incididunt aute eu irure culpa consequat dolor aliquip. Minim quis aliquip do est do excepteur pariatur veniam. Nulla sunt ipsum quis eiusmod aliquip laborum. Mollit duis veniam qui aliquip. Nulla quis incididunt commodo eu eiusmod ipsum.\r\n',
      registered: '2015-05-24T11:51:44 +04:00',
      latitude: -26.547163,
      longitude: 48.642857,
      tags: [
        'aliquip',
        'commodo',
        'consectetur',
        'ullamco',
        'et',
        'eu',
        'consectetur',
      ],
      friends: [
        {
          id: 0,
          name: 'Cortez Bradley',
        },
        {
          id: 1,
          name: 'Dianne Michael',
        },
        {
          id: 2,
          name: 'Loretta Rodgers',
        },
      ],
      greeting: 'Hello, Trisha Dawson! You have 2 unread messages.',
      favoriteFruit: 'apple',
    },
    {
      _id: '5cfc038aa88732edfb0cd254',
      index: 4,
      guid: '71dc7a55-64b1-4cd2-839f-60c18fabb998',
      isActive: false,
      balance: '$1,681.55',
      picture: 'http://placehold.it/32x32',
      age: 21,
      eyeColor: 'brown',
      name: 'Jacobs Barrera',
      gender: 'male',
      company: 'ENVIRE',
      email: 'jacobsbarrera@envire.com',
      phone: '+1 (873) 403-3402',
      address: '735 Channel Avenue, Sutton, American Samoa, 2964',
      about: 'Incididunt culpa quis dolor et ea eu officia excepteur labore eiusmod quis cillum cillum. Cupidatat eiusmod laboris aute sunt fugiat cupidatat aute dolor velit ipsum magna Lorem nostrud veniam. Eu id proident qui consequat qui incididunt. Magna officia voluptate ipsum non aute exercitation sint ad. Consectetur anim nulla eu amet tempor veniam ullamco ullamco consequat aliquip dolor aliqua adipisicing irure.\r\n',
      registered: '2014-07-14T03:12:01 +04:00',
      latitude: 59.477283,
      longitude: -136.208247,
      tags: [
        'et',
        'incididunt',
        'minim',
        'culpa',
        'nulla',
        'nostrud',
        'aliquip',
      ],
      friends: [
        {
          id: 0,
          name: 'Carver Moreno',
        },
        {
          id: 1,
          name: 'Figueroa Diaz',
        },
        {
          id: 2,
          name: 'Fran Park',
        },
      ],
      greeting: 'Hello, Jacobs Barrera! You have 10 unread messages.',
      favoriteFruit: 'banana',
    },
  ];
  const renderTree = (div) => {
    const tree = JsonTree.create(data, div);
  };

  useEffect(() => {
    console.log('mounted');
    const test = document.getElementById('tree');
    console.log('test get : ', test);
    renderTree(test);
  });

  return (
    <section className='wrapper' id='tree' >
      <p>TEST VIEWS</p>
      {/*
        Request bar
        Data canvas
      */}
    </section>
  );
};

export default ViewTest;
