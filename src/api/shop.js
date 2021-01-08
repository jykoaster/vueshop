const _items = [
  {
    good_id: '1',
    name: 'aaa',
    src: 'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA',
    type: ' ',
  },
  {
    good_id: '2',
    name: 'bbb',
    src: 'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA',
  },
  {
    good_id: '3',
    name: 'ccc',
    src: 'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA',
  },
  {
    good_id: '4',
    name: 'ddd',
    src: 'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA',
  },
  {
    good_id: '5',
    name: 'eee',
    src: 'https://i.picsum.photos/id/340/500/300.jpg?hmac=fPw17wmK3S9R_KlVBrEhGAGlcpnViHHon_aY6A7DmTA',
  },
]

export default {
  getitems(cb) {
    setTimeout(() => cb(_items), 100)
  },
}
