// babel

define([
  <@ for (var i = 0; i < requireJs.length; i++) { @>
    "<%= requireJs[i] %>"
  <@ } @>
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
