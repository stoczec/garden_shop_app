1. **App hosted on:**
   https://garden-shop-app.vercel.app/
   Загрузка может занять время(бесплатный хостинг!)

2. **Backend hosted on:**
   https://telran-project-backend-y5gf.onrender.com/ <br>
   Для запуска с локального сервера, нужно изменить значение BASEURL = 'http://localhost:3333/'.<br>
   Директория файла: \src\assets\constants\URL.js
3. **Installed library**

   **@reduxjs/toolkit react-redux :** предоставляет удобные средства для управления состоянием;<br>
   **react-router-dom :** предоставляет маршрутизацию (навигацию);<br>
   **react-hook-form :** для управления формами;<br>
   \*\*axios :\*\* для выполнения HTTP-запросов из JavaScript-приложений. Она предоставляет удобный способ взаимодействия с веб-серверами и получения или отправки данных.<br>

   _Стилизация:_ <br>
   **styled-components :** для создания стилизованных компонентов с помощью CSS в JavaScript;<br>
   **@ant-design/icons :** предоставляет набор иконок;<br>
   **antd :** это библиотека компонентов для пользовательского интерфейса;<br>
   **react-toastify :** для вывода всплывающих уведомлений (тостов);<br>
   **hamburger-react :** то библиотека компонентов, предназначенных для создания анимированных гамбургер-меню.

4. **Функционал**

   - Header:
     - Logo - переход на главную страницу;
     - NavMenu - переходы на соответствующие страницы;
     - Cart Logo - переход на страницу Корзины.
   - Footer:

     - Contact - logo соц. сетей, переход на соответствую соц. сеть на новой вкладке;
     - Address - ссылка с адресом, переход на google maps на новую вкладку;
     - Map - интерактивная карта.

   - Main Page:
     -' Special Offers' section: - button 'Special Offers' - переход на страницу с товарами со скидкой.
     - 'Get a discount' section:
       - button 'Get a discount' - отправляет данные из input. Валидация - true. Формат - +49XXXXXXXXXXX.
         При успешной отправке появляется сообщение 'You got a 5% discount!'.
         При неуспешной отправке появляется сообщение 'Error sending the POST request:' + номер оибки.
