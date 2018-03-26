import 'todomvc-app-css/index.css'
import './app.css'
import {$on} from './helpers'
import {updateTodo} from './todo'

export function onLoad() {
  updateTodo()
  const toggleGraphButton = document.querySelector('.toggle-graph')
  $on(
    toggleGraphButton,
    'click',
    () => {
      console.log('click')
    },
  )
}
