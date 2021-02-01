const _items = [
  {
    good_id: '1',
    name: 'aaa',
    src: 'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
  },
  {
    good_id: '2',
    name: 'bbb',
    src: 'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
  },
  {
    good_id: '3',
    name: 'ccc',
    src: 'https://i.picsum.photos/id/831/200/200.jpg?hmac=AANxS9u4DeDj11ZED76-Rss_Un2ervq4KBoDKOOu4aI',
  },
  {
    good_id: '4',
    name: 'ddd',
    src: 'https://i.picsum.photos/id/493/200/200.jpg?hmac=gTkCS4bzTaN0S0X4DVmbvEYkY0QxwyorqWjnxVNHtgg',
  },
  {
    good_id: '5',
    name: 'eee',
    src: 'https://i.picsum.photos/id/534/200/200.jpg?hmac=fFEUULhOfD3o0WvBKAcTIKeSps59JC49BsTEBu5Z3eI',
  },
]
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
              },
              {
                good_id: '2',
                name: 'bbb',
                src: 'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
              },
              {
                good_id: '3',
                name: 'ccc',
                src: 'https://i.picsum.photos/id/831/200/200.jpg?hmac=AANxS9u4DeDj11ZED76-Rss_Un2ervq4KBoDKOOu4aI',
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
              },
              {
                good_id: '5',
                name: 'eee',
                src: 'https://i.picsum.photos/id/534/200/200.jpg?hmac=fFEUULhOfD3o0WvBKAcTIKeSps59JC49BsTEBu5Z3eI',
              },
            ],
          },
        ],
      },
      {
        name: 'level2hot2',
        id: 2,
        child: [
          {
            name: 'level3hot3',
            id: 1,
            items: [
              {
                good_id: '1',
                name: 'aaa',
                src: 'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
              },
              {
                good_id: '2',
                name: 'bbb',
                src: 'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
              },
              {
                good_id: '3',
                name: 'ccc',
                src: 'https://i.picsum.photos/id/831/200/200.jpg?hmac=AANxS9u4DeDj11ZED76-Rss_Un2ervq4KBoDKOOu4aI',
              },
            ],
          },
          {
            name: 'level3hot4',
            id: 2,
            items: [
              {
                good_id: '1',
                name: 'aaa',
                src: 'https://i.picsum.photos/id/297/200/200.jpg?hmac=elahxndleNOPlIfCfcZuJFmS-MkvvkXnQozwsyqF-FU',
              },
              {
                good_id: '2',
                name: 'bbb',
                src: 'https://i.picsum.photos/id/461/200/200.jpg?hmac=OfKixfjCbSjC-h3P78PbMNsJqVCnAClKqNmrUCONSw4',
              },
              {
                good_id: '3',
                name: 'ccc',
                src: 'https://i.picsum.photos/id/182/200/200.jpg?hmac=MkR-XEPoojVUql6ALw3mXJhEU63027NZxRXsRqavT24',
              },
            ],
          },
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
  getitems(cate1, cate2, cate3) {
    let pusharray = []
    const res = _category.find((element) => element.id == cate1)
    if (res) {
      const res2 = res.child.find((element) => element.id == cate2)
      if (res2) {
        const res3 = res2.child.find((element) => element.id == cate3)
        if (res3) {
          if (!res3.items || res3.items.length == 0) {
            return ['nores']
          }
          return res3.items
        } else {
          res2.child.map((element) => {
            if (element.items) {
              element.items.map((item) => {
                pusharray.push(item)
              })
            }
          })
          if (!pusharray || pusharray.length == 0) {
            return ['nores']
          }
          return pusharray
        }
      }
    }
  },
  getallitems() {
    return _items
  },
}
