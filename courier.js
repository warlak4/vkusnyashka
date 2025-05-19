// Статусы заказа
const ORDER_STATUSES = {
    NEW: 'new',
    CONFIRMED: 'confirmed',
    PREPARING: 'preparing',
    DELIVERING: 'delivering',
    COMPLETED: 'completed'
};

const ORDER_STATUS_LABELS = {
    [ORDER_STATUSES.NEW]: 'Новый',
    [ORDER_STATUSES.CONFIRMED]: 'Подтверждён',
    [ORDER_STATUSES.PREPARING]: 'Готовится',
    [ORDER_STATUSES.DELIVERING]: 'Доставляется',
    [ORDER_STATUSES.COMPLETED]: 'Выполнен'
};

// Тестовые курьеры
const defaultCouriers = [
    { username: 'courier1', password: 'courier123', name: 'Иван Петров' },
    { username: 'courier2', password: 'courier123', name: 'Анна Сидорова' }
];

// Инициализация курьеров в localStorage
if (!localStorage.getItem('couriers')) {
    localStorage.setItem('couriers', JSON.stringify(defaultCouriers));
}

// Функции для работы с текущим курьером
function getCurrentCourier() {
    return JSON.parse(localStorage.getItem('currentCourier') || 'null');
}

function setCurrentCourier(courier) {
    if (courier) localStorage.setItem('currentCourier', JSON.stringify(courier));
    else localStorage.removeItem('currentCourier');
}

// Функция входа
function courierLogin(e) {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value;
    const couriers = JSON.parse(localStorage.getItem('couriers') || '[]');
    const courier = couriers.find(c => c.username === username && c.password === password);
    
    if (!courier) {
        document.getElementById('login-error').textContent = 'Неверный логин или пароль';
        return;
    }
    
    setCurrentCourier(courier);
    renderCourierPanel();
}

// Функция выхода
function courierLogout() {
    setCurrentCourier(null);
    renderLoginForm();
}

// Функция обновления статуса заказа
function updateOrderStatus(orderDate, newStatus) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const orderIndex = orders.findIndex(o => o.date === orderDate);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        localStorage.setItem('orders', JSON.stringify(orders));
        renderCourierPanel();
    }
}

// Функция отображения формы входа
function renderLoginForm() {
    document.getElementById('app').innerHTML = `
        <div class="courier-login">
            <h2>Вход для курьеров</h2>
            <form id="login-form" onsubmit="courierLogin(event)">
                <input name="username" placeholder="Логин" required>
                <input name="password" type="password" placeholder="Пароль" required>
                <button type="submit">Войти</button>
            </form>
            <div id="login-error" class="error-message"></div>
            <div class="demo-credentials">
                Демо: courier1/courier123 или courier2/courier123
            </div>
        </div>
    `;
}

// Функция отображения панели курьера
function renderCourierPanel() {
    const courier = getCurrentCourier();
    if (!courier) {
        renderLoginForm();
        return;
    }

    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const stats = {
        new: orders.filter(o => o.status === ORDER_STATUSES.NEW).length,
        confirmed: orders.filter(o => o.status === ORDER_STATUSES.CONFIRMED).length,
        preparing: orders.filter(o => o.status === ORDER_STATUSES.PREPARING).length,
        delivering: orders.filter(o => o.status === ORDER_STATUSES.DELIVERING).length,
        completed: orders.filter(o => o.status === ORDER_STATUSES.COMPLETED).length
    };

    document.getElementById('app').innerHTML = `
        <div class="courier-panel">
            <div class="courier-header">
                <h1>Панель курьера</h1>
                <div>
                    <span class="user-badge">${courier.name}</span>
                    <button onclick="courierLogout()" class="nav-btn">Выйти</button>
                </div>
            </div>

            <div class="courier-stats">
                <div class="stat-card">
                    <h3>Новые заказы</h3>
                    <p>${stats.new}</p>
                </div>
                <div class="stat-card">
                    <h3>Подтверждённые</h3>
                    <p>${stats.confirmed}</p>
                </div>
                <div class="stat-card">
                    <h3>Готовятся</h3>
                    <p>${stats.preparing}</p>
                </div>
                <div class="stat-card">
                    <h3>Доставляются</h3>
                    <p>${stats.delivering}</p>
                </div>
                <div class="stat-card">
                    <h3>Выполненные</h3>
                    <p>${stats.completed}</p>
                </div>
            </div>

            <table class="orders-table">
                <thead>
                    <tr>
                        <th>№ Заказа</th>
                        <th>Дата</th>
                        <th>Клиент</th>
                        <th>Адрес</th>
                        <th>Телефон</th>
                        <th>Сумма</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    ${orders.map(order => `
                        <tr>
                            <td>${order.date}</td>
                            <td>${new Date(order.date).toLocaleString()}</td>
                            <td>${order.name}</td>
                            <td>${order.address}</td>
                            <td>${order.phone}</td>
                            <td>${order.total} ₽</td>
                            <td>
                                <span class="status-badge ${order.status}">
                                    ${ORDER_STATUS_LABELS[order.status]}
                                </span>
                            </td>
                            <td class="action-buttons">
                                ${order.status === ORDER_STATUSES.NEW ? 
                                    `<button class="action-btn confirm" onclick="updateOrderStatus('${order.date}', '${ORDER_STATUSES.CONFIRMED}')">Подтвердить</button>` : ''}
                                ${order.status === ORDER_STATUSES.CONFIRMED ? 
                                    `<button class="action-btn prepare" onclick="updateOrderStatus('${order.date}', '${ORDER_STATUSES.PREPARING}')">Готовить</button>` : ''}
                                ${order.status === ORDER_STATUSES.PREPARING ? 
                                    `<button class="action-btn deliver" onclick="updateOrderStatus('${order.date}', '${ORDER_STATUSES.DELIVERING}')">Доставить</button>` : ''}
                                ${order.status === ORDER_STATUSES.DELIVERING ? 
                                    `<button class="action-btn complete" onclick="updateOrderStatus('${order.date}', '${ORDER_STATUSES.COMPLETED}')">Завершить</button>` : ''}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const courier = getCurrentCourier();
    if (courier) {
        renderCourierPanel();
    } else {
        renderLoginForm();
    }
}); 