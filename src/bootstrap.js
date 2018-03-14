import app from './app'
import helpers from './helpers'

helpers.$on(window, 'load', app.onLoad)
helpers.$on(window, 'hashchange', app.onLoad)
