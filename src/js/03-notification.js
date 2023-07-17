import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELEY = 3000;
let timeoutId = null;
const refs = {
  notification: document.querySelector('.js-alert'),
};


refs.notification.addEventListener("click", onNotificationClick)

showNotification();

function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() { 
  refs.notification.classList.add("is-visible");
  timeoutId = setTimeout(() => {
    console.log('Нужно закрыть alert');
    hideNotification();
  }, NOTIFICATION_DELEY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
  
}
