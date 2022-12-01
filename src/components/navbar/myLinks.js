import { v4 as uuidv4 } from 'uuid';

export const links = [
  {
    id: uuidv4(),
    name: "Мужские",
    submenu: true,
    sublinks: [
      {
        id: uuidv4(),
        Head: "Верхняя одежда",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Badfive", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
      {
        id: uuidv4(),
        Head: "Нижняя одежда",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Badfive", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
      {
        id: uuidv4(),
        Head: "Обувь",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Basketball", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Женские",
    submenu: true,
    sublinks: [
      {
        id: uuidv4(),
        Head: "Верхняя одежда",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Badfive", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
      {
        id: uuidv4(),
        Head: "Нижняя одежда",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Badfive", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
      {
        id: uuidv4(),
        Head: "Обувь",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Basketball", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Детские",
    submenu: true,
    sublinks: [
      {
        id: uuidv4(),
        Head: "Верхняя одежда",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Badfive", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
      {
        id: uuidv4(),
        Head: "Нижняя одежда",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Badfive", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
      {
        id: uuidv4(),
        Head: "Обувь",
        sublink: [
          { name: "Running", link: "/1" },
          { name: "Training", link: "/2" },
          { name: "Wade", link: "/3" },
          { name: "Basketball", link: "/4" },
          { name: "The Trand", link: "/5" },
        ],
      },
    ],
  },
];
