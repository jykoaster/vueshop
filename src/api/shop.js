const _items = [
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
]

export default {
  getitems(cb) {
    setTimeout(() => cb(_items), 100)
  },
}
