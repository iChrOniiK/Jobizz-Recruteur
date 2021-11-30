export { default as AboutUs } from '../../components/AboutUs.vue'
export { default as Features } from '../../components/Features.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Pres } from '../../components/Pres.vue'
export { default as Team } from '../../components/Team.vue'
export { default as Timeline } from '../../components/Timeline.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
