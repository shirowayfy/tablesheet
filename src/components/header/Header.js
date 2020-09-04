import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    });
  }

  toHTML() {
    return `
      <div class="header__input">

                <input type="text" class="input" value="New Table">

                <i class="material-icons">
                    tab
                </i>

            </div>

            <div class="nav">
                <div class="button">Delete</div>
                <div class="button">Exit</div>
            </div>
    `
  }
}
