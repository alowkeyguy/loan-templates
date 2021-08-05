// babel

define([
  'C',
  'vue',
  'js/common/request',
  <%_ for (var i=0; i<dependenciesJs.length; i++){ _%>
  '<%= dependenciesJs[i] %>',
  <%_ } _%>
], function (C, Vue, Request <%_ for (var i=0;i<cbArg.length;i++){,<%= cbArg[i] %> } %>) {
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
