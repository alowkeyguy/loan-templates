// babel

define([
  'C',
  'vue',
  'js/common/request',
  // 'js/activities-component/components/navbar',
  // 'js/components/ui/Modal',
], function (C, Vue, Request, NavBar, Modal) {
  'use strict'

  return new Vue({
    el: '#app',
    components: {
      // 'com-modal': Modal,
      // 'nav-bar': NavBar
    },
    data () {
      return {
        
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        Request({
          url: C.Api('MMS_URL'),
          method: C.Api(''),
          bizContent: {}
        }).then(res => {
          // to do
        })
      },
      goBack () {
        C.Native.back()
      },
    }
  })
})
