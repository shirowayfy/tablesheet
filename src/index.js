import './scss/index.scss'
import {Router} from '@core/routes/Router';
import {DashboardPage} from '@/pages/DashboardPage';
import {ExcelPage} from '@/pages/ExcelPage';

window.onload = () => {
  const $preloader = document.querySelector('.preloader')
  $preloader.style.display = 'none'
  setTimeout(() => {
    new Router('#app', {
      dashboard: DashboardPage,
      excel: ExcelPage
    }, 100)
  })
}

