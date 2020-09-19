import {storage} from '@core/utils';

function toHTML(key) {
  const model = storage(key)
  const id = key.split(':')[1]
  return `
    <li class="db__record">
        <a href="#excel/${id}">${model.title}</a>
        <strong>
            ${new Date(model.openedDate).toLocaleDateString()}
            ${new Date(model.openedDate).toLocaleTimeString()}
        </strong>
        <span class="material-icons delete"
              data-id="excel:${id}"
              data-type="delete">
            <cite translate="no">delete</cite>
        </span>
    </li>
  `
}
function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}
export function createRecordsTable() {
  const keys = getAllKeys()
  if (!keys.length) {
    return `<div class="none">
                <span>Создайте свою первую таблицу</span>
                <div class="material-icons table-block">
                    table_view
                </div>
            </div>`
  }
  return `
        <div class="db__list-header">
            <span>Название</span>
            <span>Дата открытия</span>
        </div>
    
        <ul class="db__list">
            ${keys.map(toHTML).join('')}
        </ul>
  `
}
