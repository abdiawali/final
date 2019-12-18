import Vue from 'vue'
import Router from 'vue-router'
import RecordForm from './components/RecordForm.vue'
import RecordTable from './components/RecordTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RecordForm',
      component: RecordForm
    },
    {
      path: '/RecordTable',
      name: 'RecordTable',
      component: RecordTable
    }
  ]
})