const _items = [
  {
    good_id: '1',
    name: 'aaa',
    detail: 'detail of aaa',
    src: [
      'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
      'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
    ],
  },
  {
    good_id: '2',
    name: 'bbb',
    detail: 'detail of bbb',
    src: [
      'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
      'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
    ],
  },
  {
    good_id: '3',
    name: 'ccc',
    detail: 'detail of ccc',
    src: [
      'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
      'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
    ],
  },
  {
    good_id: '4',
    name: 'ddd',
    detail: 'detail of ddd',
    src: [
      'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
      'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
    ],
  },
  {
    good_id: '5',
    name: 'eee',
    detail: 'detail of eee',
    src: [
      'https://i.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo',
      'https://i.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA',
    ],
  },
]

export default {
  detail(id) {
    let detail = _items.find((element) => element.good_id == id)
    return detail
  },
}
