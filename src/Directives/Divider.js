const divider = {
  name: 'sdivider',
  bind: function (el, binding, vnode) {
    el.className += ' divider '
    for (let m in binding.modifiers) {
      el.className += m + ' '
    }
  }
}

export default divider
