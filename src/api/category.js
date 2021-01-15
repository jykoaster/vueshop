const _category = [
  {
    name: 'Hot',
    id: 1,
    child: [
      {
        name: 'level2hot1',
        id: 1,
        child: [
          { name: 'level3hot1', id: 1 },
          { name: 'level3hot2', id: 2 },
        ],
      },
      {
        name: 'level2hot2',
        id: 2,
        child: [
          { name: 'level3hot3', id: 1 },
          { name: 'level3hot4', id: 2 },
        ],
      },
      {
        name: 'level2hot3',
        id: 3,
        child: [
          { name: 'level3hot1', id: 1 },
          { name: 'level3hot2', id: 2 },
        ],
      },
      {
        name: 'level2hot4',
        id: 4,
        child: [
          { name: 'level3hot1', id: 1 },
          { name: 'level3hot2', id: 2 },
        ],
      },
    ],
  },
  {
    name: 'NEW',
    id: 2,
    child: [
      {
        name: 'level2new',
        id: 1,
        child: [
          { name: 'level3new', id: 1 },
          { name: 'level3new2', id: 2 },
          { name: 'level3new3', id: 3 },
          { name: 'level3new4', id: 4 },
          { name: 'level3new5', id: 5 },
        ],
      },
      {
        name: 'level2new',
        id: 2,
        child: [
          { name: 'level3new', id: 1 },
          { name: 'level3new2', id: 2 },
        ],
      },
    ],
  },
  {
    name: 'MAN',
    id: 3,
    child: [
      {
        name: 'level2man',
        id: 1,
        child: [
          { name: 'level3man', id: 1 },
          { name: 'level3man2', id: 2 },
        ],
      },
      {
        name: 'level2man',
        id: 2,
        child: [
          { name: 'level3man', id: 1 },
          { name: 'level3man2', id: 2 },
        ],
      },
    ],
  },
  {
    name: 'WOMAN',
    id: 4,
    child: [
      {
        name: 'level2woman',
        id: 1,
        child: [
          { name: 'level3woman', id: 1 },
          { name: 'level3woman2', id: 2 },
        ],
      },
      {
        name: 'level2woman',
        id: 2,
        child: [
          { name: 'level3woman', id: 1 },
          { name: 'level3woman2', id: 2 },
        ],
      },
    ],
  },
]
export default {
  getcategory() {
    return _category
  },
}
