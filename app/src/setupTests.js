import '@testing-library/jest-dom/extend-expect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter(),
})

window.matchMedia = () => ({
  addListener: () => {},
  removeListener: () => {},
})

global.console.error = () => {}
global.console.warn = () => {}

window.URL.createObjectURL = () => {}
window.URL.revokeObjectURL = () => {}
