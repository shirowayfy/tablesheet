const fonts = ['Open Sans', 'Roboto', 'Nunito', 'Montserrat', 'Oswald']

function createListItem(fonts, button) {
  const list = []
  fonts.forEach(el => {
    const value = {fontFamily: el}
    list.push(`<li class="fonts-list__item
        ${button.icon === el ? 'active' : ''}"
         data-select="font"
         data-type="button"
         data-value='${JSON.stringify(value)}'
        >${el}</li>`)
  })
  return list.join('')
}

function createSizeItem(button) {
  let value
  const list = []
  for (let i = 10; i <= 16; i++) {
    value = {fontSize: i + `px`}
    list.push(`
        <li class="size-list__item
        ${+button.icon === i ? 'active' : ''}" data-select="size"
        data-type="button"
        data-value='${JSON.stringify(value)}'
        >${i}</li>`
    )
  }

  return list.join('')
}

function toButton(button) {
  const meta = `
      data-type="button"
      data-value='${JSON.stringify(button.value)}'
  `
  if (button.type === 'size-list') {
    return `
    <div class="button__list" data-set="main">
        <div class="current" data-title="size">
            ${button['icon']}
        </div>
  
         <ul
          class="size-list
          ${button.active ? 'active' : ''}
          " data-list="list"
          >
            ${createSizeItem(button)}
         </ul>
    </div>
    `
  } else if (button.type === 'fonts-list') {
    return `
    <div class="button__fonts" data-set="main"> 
         <div class="current"  data-title="font">
            ${button['icon'].replace(/"/g, '')}
          </div>

         <ul class="fonts-list
         ${button.active ? 'active' : ''}
         " data-list="list">
            ${createListItem(fonts, button)}
        </ul>
    </div>
    `
  }
  return `
    <div class="button ${button.active ? 'active' : ''}" ${meta}>
        <i class="material-icons" ${meta}>
            ${button.icon}
        </i>
    </div>
  `
}

export function createToolbar(s) {
  const buttons = [
    {
      icon: 'format_align_left',
      active: s['textAlign'] === 'left',
      value: {textAlign: 'left'}
    },
    {
      icon: 'format_align_center',
      active: s['textAlign'] === 'center',
      value: {textAlign: 'center'}
    },
    {
      icon: 'format_align_right',
      active: s['textAlign'] === 'right',
      value: {textAlign: 'right'}
    },
    {
      icon: 'format_bold',
      active: s['fontWeight'] === 'bold',
      value: {fontWeight: s['fontWeight'] === 'bold' ? 'normal' : 'bold'}
    },
    {
      icon: 'format_italic',
      active: s['fontStyle'] === 'italic',
      value: {fontStyle: s['fontStyle'] === 'italic' ? 'normal' : 'italic'}
    },
    {
      icon: 'format_underline',
      active: s['textDecoration'] === 'underline',
      value: {textDecoration: s['textDecoration'] === 'underline'
                ? 'none'
                : 'underline'
              }
    },
    {
      icon: s['fontSize'].slice(0, 2) || '12',
      type: 'size-list',
      active: !!s['sizeList'],
      value: {fontSize: s['fontSize']}
    },
    {
      icon: s['fontFamily'] || 'Open Sans',
      type: 'fonts-list',
      active: !!s['fontList'],
      value: {fontFamily: s['fontFamily']}
    }
  ]
  return buttons.map(toButton).join('')
}
