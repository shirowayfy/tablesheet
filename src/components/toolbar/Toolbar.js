import {createToolbar} from '@/components/toolbar/toolbar.template';
import {$} from '@core/dom';
import {ExcelStateComponent} from '@core/ExcelStateComponent';
import {defaultStyles} from '@/constants';

export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyles'],
      ...options
    });
    this.cells = {
      fontSize: '12',
      fontFamily: 'Open Sans',
      sizeList: false,
      fontList: false
    }
  }

  prepare() {
    this.initState(defaultStyles)
  }
  storeChanged(changes) {
    this.setState(changes.currentStyles)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  onClick(event) {
    const $target = $(event.target)
    let value
    if ($target.data.title === 'size') {
      this.setState({sizeList: true})
    } else if ($target.data.title === 'font') {
      this.setState({fontList: true})
    }
    if ($target.data.select) {
      switch ($target.data.select) {
        case 'font':
          value = $target.text()
          this.cells['fontFamily'] = value
          break
        case 'size':
          value = $target.text() + 'px'
          this.cells['fontSize'] = value
          break
      }
      const res = this.cells
      const key = Object.keys(res)
      key.forEach(key => {
        this.setState({[key]: res[key]})
      })
    }
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.$emit('toolbar:applyStyle', value)
    }
  }
}
