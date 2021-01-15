const _category = [
  {
    name: 'Hot',
    id: 1,
    child: [
      {
        name: 'level2hot1',
        id: 1,
        child: [
          {
            name: 'level3hot1',
            id: 1,
            items: [
              {
                good_id: '1',
                name: 'aaa',
                src: 'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
                img400: 'https://i.picsum.photos/id/536/400/400.jpg?hmac=wu7t-QYafcXEcr_x4DAS5ttcIFwQXkMxk7z3w9APM8o',
              },
              {
                good_id: '2',
                name: 'bbb',
                src: 'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
                img400: 'https://i.picsum.photos/id/536/400/400.jpg?hmac=wu7t-QYafcXEcr_x4DAS5ttcIFwQXkMxk7z3w9APM8o',
              },
              {
                good_id: '3',
                name: 'ccc',
                src: 'https://i.picsum.photos/id/831/200/200.jpg?hmac=AANxS9u4DeDj11ZED76-Rss_Un2ervq4KBoDKOOu4aI',
                img400: 'https://i.picsum.photos/id/536/400/400.jpg?hmac=wu7t-QYafcXEcr_x4DAS5ttcIFwQXkMxk7z3w9APM8o',
              },
            ],
          },
          {
            name: 'level3hot2',
            id: 2,
            items: [
              {
                good_id: '4',
                name: 'ddd',
                src: 'https://i.picsum.photos/id/493/200/200.jpg?hmac=gTkCS4bzTaN0S0X4DVmbvEYkY0QxwyorqWjnxVNHtgg',
                img400: 'https://i.picsum.photos/id/536/400/400.jpg?hmac=wu7t-QYafcXEcr_x4DAS5ttcIFwQXkMxk7z3w9APM8o',
              },
              {
                good_id: '5',
                name: 'eee',
                src: 'https://i.picsum.photos/id/534/200/200.jpg?hmac=fFEUULhOfD3o0WvBKAcTIKeSps59JC49BsTEBu5Z3eI',
                img400: 'https://i.picsum.photos/id/536/400/400.jpg?hmac=wu7t-QYafcXEcr_x4DAS5ttcIFwQXkMxk7z3w9APM8o',
              },
            ],
          },
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
