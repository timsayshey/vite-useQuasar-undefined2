import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import { createPinia } from 'pinia'
import quasarIconSet from 'quasar/icon-set/material-icons-outlined'
import {
  Quasar,
  Dialog,
  Notify
} from 'quasar'

export const defineCustomElement = (
  component: any, props: any
) => {
  return VueDefineCustomElement({
    styles: [],
    render: () => h(component, props),
    setup() {
      const pinia = createPinia()
      const app = createApp(undefined as any, props)

      // install plugins

      app.use(pinia)

      const inst = getCurrentInstance()
      // @ts-ignore
      Object.assign(inst.appContext, app._context)
      // @ts-ignore
      Object.assign(inst.provides, app._context.provides)

      app.use(Quasar, {
        plugins: {
          Dialog,
          Notify
        },
        iconSet: quasarIconSet,
        config: {
          extras: [
            'material-icons',
          ]
        }
      })
    },
  })

}