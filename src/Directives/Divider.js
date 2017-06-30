const divider = {
  name: 'divider',
  bind: function (el, binding, vnode) {
    el.className += ' divider '
    for (let m in binding.modifiers) {
      el.className += m + ' '
    }
  }
}

export default divider
