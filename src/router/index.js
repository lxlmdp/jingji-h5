import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const Index  = r => require.ensure([], () => r(require('../views/index/Index')), 'Index')
const JfileList = r => require.ensure([], () => r(require('../views/fileList/JfileList')), 'JfileList')
const Jhome = r => require.ensure([], () => r(require('../views/home/Jhome')), 'Jhome')
const JchangePsw = r => require.ensure([],() => r(require('../views/changePsw/JchangePsw')),'JchangePsw')
const QueryIndex = r => require.ensure([],() => r(require('../views/queryIndex/queryIndex')),'queryIndex')
const TimePeriod = r => require.ensure([],() => r(require('../views/queryIndex/children/timePeriod')),'timePeriod')
const SelectIndex = r => require.ensure([],() => r(require('../views/queryIndex/children/selectIndex')),'selectIndex')


const WorkInfomation = r => require.ensure([],() => r(require('../views/workInformation/wrokInfomation')),'wrokInfomation')
const RunDaily = r => require.ensure([],() => r(require('../views/runDaily/runDaily')),'runDaily')
const Jtext = r => require.ensure([],() => r(require('../views/runDaily/children/Jtext')),'Jtext')
const JtextCon = r => require.ensure([],() => r(require('../views/runDaily/children/JtextCon')),'JtextCon')
const Jreport = r => require.ensure([],() => r(require('../views/runDaily/children/Jreport')),'Jreport')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          redirect: '/index',
        },
        {
          path: '/index',
          component: Index
        },
        {
          path: '/fileList',
          component : JfileList
        },
        {
          path: '/home',
          component: Jhome
        },
        {
          path: '/changePsw',
          component: JchangePsw
        },
        {
          path: '/queryIndex',
          component: QueryIndex
        },
        {
          path: '/workInfomation',
          component: WorkInfomation
        },
        {
          path: '/runDaily',
          component: RunDaily,
          children: [
            {
              path: 'text',
              component: Jtext
            },
            {
              path: 'report',
              component: Jreport
            }
            ]
        },
        {
          path: 'timePeriod',
          component: TimePeriod
        },
        {
          path: 'selectIndex',
          component: SelectIndex
        },
        {
          path: 'textCon',
          component: JtextCon
        }
      ]
    }
  ]
})
