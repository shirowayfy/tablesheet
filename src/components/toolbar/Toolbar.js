import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    });
  }

  toHTML() {
    return `
      <div class="button">
                <i class="material-icons">
                    format_align_left
                </i>
            </div>

            <div class="button">
                <i class="material-icons">
                    format_align_center
                </i>
            </div>

            <div class="button">
                <i class="material-icons">
                    format_align_right
                </i>
            </div>

            <div class="button">
                <i class="material-icons">
                    format_bold
                </i>
            </div>

            <div class="button">
                <i class="material-icons">
                    format_italic
                </i>
            </div>

            <div class="button">
                <i class="material-icons">
                    format_underline
                </i>
            </div>

            <div class="button__list">

                <div class="current">12</div>

                <ul class="size-list">
                    <li class="size-list__item">13</li>
                    <li class="size-list__item">14</li>
                    <li class="size-list__item">15</li>
                    <li class="size-list__item">16</li>

                </ul>
            </div>

            <div class="button__fonts">
                <div class="current">Roboto</div>

                <ul class="fonts-list">
                    <li class="fonts-list__item">Ninito</li>
                    <li class="fonts-list__item">Georgia</li>
                    <li class="fonts-list__item">Another</li>
                    <li class="fonts-list__item">Another</li>
                </ul>
            </div>
    `
  }

  onClick(event) {
    console.log(event.target)
  }
}
