export default {
  foo: state => 'foo',
  baa: state => 'baa',

  foobaa:    (state, getters) => {
    return getters.foo + getters.baa
  },
}
