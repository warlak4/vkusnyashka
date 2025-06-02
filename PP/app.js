// Добавляем стили
const styles = `
  .coupon-section {
    margin: 1rem 0;
    padding: 1rem;
    background: #fff5f9;
    border-radius: 8px;
  }
  
  .coupon-section input {
    padding: 0.5rem;
    border: 1.5px solid #ffb6e6;
    border-radius: 6px;
    margin-right: 0.5rem;
  }
  
  .applied-coupons-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }
  
  .applied-coupons-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background: #fff;
    border: 1px solid #ffb6e6;
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }
  
  .remove-coupon {
    background: none;
    border: none;
    color: #e75480;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0 0.5rem;
  }
  
  .orders-list {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .order-card {
    background: #fff;
    border: 1px solid #ffb6e6;
    border-radius: 8px;
    padding: 1rem;
  }
  
  .order-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ffb6e6;
  }
  
  .order-items {
    display: grid;
    gap: 0.5rem;
  }
  
  .order-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .order-item img {
    border-radius: 6px;
  }
  
  .order-discount {
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid #ffb6e6;
    color: #4CAF50;
  }
  
  .order-coupons {
    font-size: 0.9em;
    color: #666;
    margin-top: 0.3rem;
  }
  
  .password-field {
    position: relative;
  }
  
  .password-tooltip {
    font-size: 0.85em;
    line-height: 1.4;
    max-width: 250px;
  }
  
  .password-tooltip::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffb6e6;
  }
  
  .create-cake-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .cake-builder {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .cake-preview {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    position: sticky;
    top: 2rem;
  }
  
  .cake-image {
    width: 100%;
    height: 300px;
    background: #fff5f9;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .cake-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .cake-price {
    font-size: 1.2em;
    color: #e75480;
    text-align: center;
    font-weight: bold;
  }
  
  .ingredients-section {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .ingredients-section h2 {
    margin: 1.5rem 0 1rem;
    color: #a8006b;
  }
  
  .ingredients-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .ingredient-card {
    background: #fff;
    border: 2px solid #ffb6e6;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .ingredient-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .ingredient-card img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }
  
  .ingredient-card h3 {
    margin: 0.5rem 0;
    font-size: 1em;
    color: #333;
  }
  
  .ingredient-card p {
    color: #e75480;
    font-weight: bold;
    margin: 0;
  }
  
  .selected-ingredients {
    margin-top: 2rem;
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .selected-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    background: #fff5f9;
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }
  
  .selected-item img {
    border-radius: 4px;
  }
  
  .remove-btn {
    background: none;
    border: none;
    color: #e75480;
    cursor: pointer;
    font-size: 1.2em;
    padding: 0 0.5rem;
  }
  
  .add-to-cart-btn {
    background: #e75480;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 6px;
    font-size: 1.1em;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.3s ease;
  }
  
  .add-to-cart-btn:hover {
    background: #d13d6a;
  }

  .promo-carousel {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    overflow: hidden;
  }

  .promo-slides {
    display: flex;
    transition: transform 0.5s ease;
  }

  .promo-slide h3 {
    color: #e75480;
    margin-bottom: 1rem;
    font-size: 1.5em;
  }

  .promo-slide p {
    color: #666;
    margin-bottom: 1rem;
  }

  .promo-slide .promo-price {
    font-size: 1.2em;
    color: #4CAF50;
    font-weight: bold;
  }

  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    color: #e75480;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }

  .carousel-btn:hover {
    background: #fff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  .carousel-btn.prev {
    left: 1rem;
  }

  .carousel-btn.next {
    right: 1rem;
  }

  .set-card {
    min-height: 420px;
  }
  .set-content {
    min-height: 320px;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start;
  }
  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 260px;
    max-width: 300px;
    min-height: 480px;
    background: #fff5f9;
    border-radius: 16px;
    box-shadow: 0 2px 8px #ffe6fa;
    padding: 1.2em 1em 1em 1em;
    margin-bottom: 1.5em;
  }
  .product-card-content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-card-actions {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .product-card-actions button {
    width: 100%;
  }

  .checkout-form {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .checkout-form label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .checkout-form input,
  .checkout-form textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1.5px solid #ffb6e6;
    border-radius: 6px;
    font-size: 1rem;
  }

  .checkout-form textarea {
    min-height: 100px;
    resize: vertical;
  }

  .checkout-form button {
    width: 100%;
    padding: 1rem;
    background: #e75480;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .checkout-form button:hover {
    background: #d13d6a;
  }

  .order-status {
    margin-top: 2rem;
    padding: 1rem;
    background: #fff5f9;
    border-radius: 8px;
  }

  .status-timeline {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    position: relative;
  }

  .status-timeline::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #ffb6e6;
    z-index: 1;
  }

  .status-step {
    position: relative;
    z-index: 2;
    background: #fff;
    padding: 0.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffb6e6;
  }

  .status-step.active {
    background: #e75480;
    border-color: #e75480;
    color: white;
  }

  .status-step.completed {
    background: #4CAF50;
    border-color: #4CAF50;
    color: white;
  }

  .status-label {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  #map {
    height: 300px;
    margin: 1rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .ymaps-2-1-79-map {
    border-radius: 8px !important;
  }

  .ymaps-2-1-79-searchbox {
    margin: 10px !important;
  }

  .ymaps-2-1-79-searchbox-input {
    border: 1.5px solid #ffb6e6 !important;
    border-radius: 6px !important;
    padding: 8px !important;
  }

  .ymaps-2-1-79-searchbox-button {
    background: #e75480 !important;
    border-radius: 6px !important;
  }

  .ymaps-2-1-79-searchbox-button:hover {
    background: #d13d6a !important;
  }

  .courier-panel {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .courier-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .courier-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
  }

  .stat-card h3 {
    color: #e75480;
    margin: 0 0 0.5rem 0;
  }

  .stat-card p {
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
  }

  .orders-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .orders-table th,
  .orders-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ffb6e6;
  }

  .orders-table th {
    background: #fff5f9;
    font-weight: bold;
  }

  .orders-table tr:hover {
    background: #fff5f9;
  }

  .status-badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .status-badge.new { background: #e3f2fd; color: #1976d2; }
  .status-badge.confirmed { background: #fff3e0; color: #f57c00; }
  .status-badge.preparing { background: #e8f5e9; color: #388e3c; }
  .status-badge.delivering { background: #f3e5f5; color: #7b1fa2; }
  .status-badge.completed { background: #e8eaf6; color: #3f51b5; }

  .action-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .action-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
  }

  .action-btn.confirm { background: #4CAF50; color: white; }
  .action-btn.prepare { background: #2196F3; color: white; }
  .action-btn.deliver { background: #9C27B0; color: white; }
  .action-btn.complete { background: #607D8B; color: white; }

  .action-btn:hover {
    opacity: 0.9;
  }

  .courier-login {
    max-width: 400px;
    margin: 4rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .courier-login h2 {
    text-align: center;
    color: #e75480;
    margin-bottom: 2rem;
  }

  .courier-login form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .courier-login input {
    padding: 0.8rem;
    border: 1.5px solid #ffb6e6;
    border-radius: 6px;
    font-size: 1rem;
  }

  .courier-login button {
    padding: 1rem;
    background: #e75480;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .courier-login button:hover {
    background: #d13d6a;
  }

  .hero-section {
    background: linear-gradient(135deg, #fff5f9 0%, #ffe6fa 100%);
    padding: 3rem 2rem;
    border-radius: 16px;
    margin: 2rem 0;
    text-align: center;
    box-shadow: 0 4px 15px rgba(255, 182, 230, 0.15);
  }

  .hero-section h1 {
    font-size: 2.5em;
    color: #a8006b;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
  }

  .hero-section p {
    font-size: 1.2em;
    color: #666;
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .cat-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 0;
    list-style: none;
    margin: 2rem 0;
  }

  .cat-list li {
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .cat-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }

  .cat-ico {
    font-size: 2.5em;
    display: block;
    margin-bottom: 1rem;
  }

  .advantages-section {
    background: #fff;
    padding: 3rem 2rem;
    border-radius: 16px;
    margin: 2rem 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }

  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .advantage-card {
    text-align: center;
    padding: 1.5rem;
    background: #fff5f9;
    border-radius: 12px;
    transition: transform 0.3s;
  }

  .advantage-card:hover {
    transform: translateY(-5px);
  }

  .advantage-icon {
    font-size: 2.5em;
    color: #e75480;
    margin-bottom: 1rem;
  }

  .advantage-card h3 {
    color: #a8006b;
    margin-bottom: 0.5rem;
  }

  .advantage-card p {
    color: #666;
    line-height: 1.6;
  }

  .promo-carousel {
    margin: 3rem 0;
  }


  .promo-slide img {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .promo-slide h3 {
    color: #a8006b;
    font-size: 1.5em;
    margin: 1rem 0;
  }

  .promo-price {
    font-size: 1.3em;
    color: #4CAF50;
    font-weight: bold;
    margin: 1rem 0;
  }


  .nav-brand {
    font-size: 2em;
    font-weight: bold;
    color: #e75480;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .nav-link {
    color: #666;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
  }

  .nav-link:hover {
    color: #e75480;
    background: #fff5f9;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #e75480;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover::after {
    width: 80%;
  }

  .nav-link.active {
    color: #e75480;
    background: #fff5f9;
  }

  .nav-link.active::after {
    width: 80%;
  }

  .cart-icon {
    position: relative;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .cart-icon:hover {
    background: #fff5f9;
  }

  .cart-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #e75480;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid #ffb6e6;
  }

  .user-avatar:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(231, 84, 128, 0.2);
  }

  .user-avatar img {
    width: 24px;
    height: 24px;
  }

  .profile-modal {
    max-width: 400px;
    width: 100%;
  }

  .profile-header {
    text-align: center;
    padding: 1.5rem;
    background: #fff5f9;
    border-radius: 12px 12px 0 0;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #ffb6e6;
  }

  .profile-avatar img {
    width: 48px;
    height: 48px;
  }

  .profile-info {
    padding: 1.5rem;
  }

  .profile-section {
    margin-bottom: 1.5rem;
  }

  .profile-section h3 {
    color: #a8006b;
    margin-bottom: 1rem;
    font-size: 1.1em;
  }

  .profile-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .profile-menu li {
    padding: 0.8rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .profile-menu li:hover {
    background: #fff5f9;
    color: #e75480;
  }

  .profile-menu li i {
    font-size: 1.2em;
  }

  .logout-btn {
    background: #fff5f9;
    color: #e75480;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: 1rem;
  }

  .logout-btn:hover {
    background: #ffe6fa;
  }

  @media (max-width: 768px) {
    .main-nav {
      padding: 1rem;
    }
    
    .nav-brand {
      font-size: 1.2em;
    }
    
    .nav-links {
      gap: 0.5rem;
    }
    
    .nav-link {
      padding: 0.4rem 0.8rem;
      font-size: 0.9em;
    }

    .nav-right {
      gap: 1rem;
    }
  }
`;

// Добавляем стили на страницу
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

const products = [
  {
    id: 1,
    name: 'Торт «Наполеон»',
    price: 1200,
    desc: 'Классический торт с заварным кремом.',
    img: 'napoleon.jpg',
    weight: '1 кг',
    ingredients: 'Мука, масло сливочное, молоко, яйца, сахар, ваниль',
    features: 'Слоёный, нежный, домашний',
    tags: ['торты', 'классика', 'кремовые']
  },
  {
    id: 2,
    name: 'Эклеры',
    price: 500,
    desc: 'Воздушные эклеры с кремом.',
    img: 'eclairs.jpg',
    weight: '6 шт (360 г)',
    ingredients: 'Мука, яйца, масло, молоко, сахар, сливки',
    features: 'Классические, свежие',
    tags: ['десерты', 'классика', 'кремовые']
  },
  {
    id: 3,
    name: 'Вареники с вишней',
    price: 400,
    desc: 'Домашние вареники с вишней.',
    img: 'vareniki.jpg',
    weight: '500 г',
    ingredients: 'Мука, вишня, сахар, вода, соль',
    features: 'Вегетарианские, без консервантов',
    tags: ['домашняя кухня', 'вегетарианские']
  },
  {
    id: 4,
    name: 'Торт «Прага»',
    price: 1500,
    desc: 'Шоколадный торт с нежным кремом.',
    img: 'praga.jpg',
    weight: '1.2 кг',
    ingredients: 'Мука, какао, масло, яйца, сахар, сливки',
    features: 'Шоколадный, насыщенный',
    tags: ['торты', 'шоколадные', 'кремовые']
  },
  {
    id: 5,
    name: 'Тирамису',
    price: 600,
    desc: 'Итальянский десерт с кофе и маскарпоне.',
    img: 'tiramisu.jpg',
    weight: '400 г',
    ingredients: 'Маскарпоне, кофе, яйца, сахар, какао',
    features: 'Итальянский, кофейный',
    tags: ['десерты', 'кофейные', 'итальянские']
  },
  {
    id: 6,
    name: 'Пирожное «Картошка»',
    price: 350,
    desc: 'Классическое пирожное из крошек печенья.',
    img: 'kartoshka.jpg',
    weight: '200 г',
    ingredients: 'Печенье, масло, какао, сахар, молоко',
    features: 'Классическое, шоколадное',
    tags: ['десерты', 'шоколадные', 'классика']
  },
  {
    id: 7,
    name: 'Чизкейк',
    price: 800,
    desc: 'Нежный чизкейк с ягодным соусом.',
    img: 'cheesecake.jpg',
    weight: '600 г',
    ingredients: 'Творожный сыр, печенье, сливки, ягоды, сахар',
    features: 'Нежный, ягодный',
    tags: ['десерты', 'сырные', 'ягодные']
  },
  {
    id: 8,
    name: 'Пельмени «Домашние»',
    price: 450,
    desc: 'Домашние пельмени с мясной начинкой.',
    img: 'pelmeni.jpg',
    weight: '500 г',
    ingredients: 'Мука, мясной фарш, лук, соль, перец',
    features: 'Домашние, мясные',
    tags: ['домашняя кухня', 'мясные']
  },
  {
    id: 9,
    name: 'Макаруны',
    price: 550,
    desc: 'Воздушное миндальное печенье с начинкой.',
    img: 'macarons.jpg',
    weight: '6 шт (180 г)',
    ingredients: 'Миндальная мука, яичные белки, сахар, пищевые красители',
    features: 'Воздушные, яркие',
    tags: ['десерты', 'французские', 'безглютеновые']
  },
  {
    id: 10,
    name: 'Торт «Медовик»',
    price: 1300,
    desc: 'Классический медовый торт со сметанным кремом.',
    img: 'medovik.jpg',
    weight: '1 кг',
    ingredients: 'Мука, мед, яйца, сметана, сахар',
    features: 'Медовый, нежный',
    tags: ['торты', 'классика', 'медовые']
  },
  {
    id: 11,
    name: 'Эклеры с шоколадом',
    price: 550,
    desc: 'Воздушные эклеры с шоколадным кремом.',
    img: 'eclairs-chocolate.jpg',
    weight: '6 шт (360 г)',
    ingredients: 'Мука, яйца, масло, молоко, сахар, шоколад',
    features: 'Шоколадные, насыщенные',
    tags: ['десерты', 'шоколадные', 'кремовые']
  },
  {
    id: 12,
    name: 'Торт «Птичье молоко»',
    price: 1400,
    desc: 'Воздушный торт с нежным суфле.',
    img: 'bird-milk.jpg',
    weight: '1 кг',
    ingredients: 'Яйца, сахар, желатин, сливки, шоколад',
    features: 'Воздушный, нежный',
    tags: ['торты', 'суфле', 'классика']
  },
  {
    id: 13,
    name: 'Торт «Красный бархат»',
    price: 1600,
    desc: 'Шоколадный торт с ярким красным цветом и крем-чизом.',
    img: 'red-velvet.jpg',
    weight: '1.2 кг',
    ingredients: 'Мука, какао, пищевой краситель, сливочный сыр, сахар, яйца',
    features: 'Яркий, шоколадный, американский',
    tags: ['торты', 'шоколадные', 'американские', 'кремовые']
  },
  {
    id: 14,
    name: 'Тирамису с малиной',
    price: 650,
    desc: 'Классический тирамису с добавлением свежей малины.',
    img: 'tiramisu-raspberry.jpg',
    weight: '400 г',
    ingredients: 'Маскарпоне, кофе, яйца, сахар, малина, какао',
    features: 'Итальянский, ягодный, кофейный',
    tags: ['десерты', 'итальянские', 'ягодные', 'кофейные']
  },
  {
    id: 15,
    name: 'Пирожное «Картошка» с орехами',
    price: 380,
    desc: 'Классическое пирожное с добавлением грецких орехов.',
    img: 'Kartoshka-nuts.jpg',
    weight: '200 г',
    ingredients: 'Печенье, масло, какао, сахар, молоко, грецкие орехи',
    features: 'Классическое, шоколадное, с орехами',
    tags: ['десерты', 'шоколадные', 'классика', 'с орехами']
  },
  {
    id: 16,
    name: 'Чизкейк Нью-Йорк',
    price: 850,
    desc: 'Классический американский чизкейк с нежным вкусом.',
    img: 'ny-cheesecake.jpg',
    weight: '600 г',
    ingredients: 'Творожный сыр, печенье, сливки, сахар, ваниль',
    features: 'Американский, классический, нежный',
    tags: ['десерты', 'сырные', 'американские', 'классика']
  },
  {
    id: 17,
    name: 'Пельмени с грибами',
    price: 420,
    desc: 'Домашние пельмени с грибной начинкой.',
    img: 'pelmeni-mushrooms.jpg',
    weight: '500 г',
    ingredients: 'Мука, грибы, лук, соль, перец, масло',
    features: 'Домашние, вегетарианские',
    tags: ['домашняя кухня', 'вегетарианские', 'с грибами']
  },
  {
    id: 18,
    name: 'Макаруны с лимоном',
    price: 580,
    desc: 'Воздушные макаруны с лимонной начинкой.',
    img: 'macarons-lemon.jpg',
    weight: '6 шт (180 г)',
    ingredients: 'Миндальная мука, яичные белки, сахар, лимон, пищевые красители',
    features: 'Французские, цитрусовые, яркие',
    tags: ['десерты', 'французские', 'безглютеновые', 'цитрусовые']
  },
  {
    id: 19,
    name: 'Торт «Прага» с вишней',
    price: 1700,
    desc: 'Шоколадный торт с вишневой начинкой.',
    img: 'praga-cherry.jpg',
    weight: '1.2 кг',
    ingredients: 'Мука, какао, масло, яйца, сахар, вишня, сливки',
    features: 'Шоколадный, с вишней, насыщенный',
    tags: ['торты', 'шоколадные', 'кремовые', 'с вишней']
  },
  {
    id: 20,
    name: 'Эклеры с карамелью',
    price: 580,
    desc: 'Воздушные эклеры с карамельным кремом.',
    img: 'eclairs-caramel.jpg',
    weight: '6 шт (360 г)',
    ingredients: 'Мука, яйца, масло, молоко, сахар, карамель',
    features: 'Карамельные, насыщенные',
    tags: ['десерты', 'кремовые', 'карамельные']
  },
  {
    id: 21,
    name: 'Чай зелёный с жасмином',
    price: 250,
    desc: 'Ароматный зелёный чай с цветками жасмина.',
    img: 'tea-jasmine.jpg',
    weight: '100 г',
    ingredients: 'Зелёный чай, жасмин',
    features: 'Ароматный, расслабляющий',
    tags: ['чай']
  },
  {
    id: 22,
    name: 'Чёрный чай с бергамотом',
    price: 230,
    desc: 'Классический чёрный чай с натуральным бергамотом.',
    img: 'tea-earlgrey.jpg',
    weight: '100 г',
    ingredients: 'Чёрный чай, бергамот',
    features: 'Классика, бодрящий',
    tags: ['чай']
  },
  {
    id: 23,
    name: 'Матча латте',
    price: 320,
    desc: 'Японский зелёный чай матча с молоком.',
    img: 'matcha-latte.jpg',
    weight: '250 мл',
    ingredients: 'Матча, молоко, сахар',
    features: 'Японский, молочный',
    tags: ['чай']
  },
  {
    id: 24,
    name: 'Кофе американо',
    price: 180,
    desc: 'Классический американо из свежемолотого кофе.',
    img: 'coffee-americano.jpg',
    weight: '200 мл',
    ingredients: 'Кофе, вода',
    features: 'Классика, бодрящий',
    tags: ['кофе']
  },
  {
    id: 25,
    name: 'Капучино',
    price: 220,
    desc: 'Нежный капучино с молочной пенкой.',
    img: 'coffee-cappuccino.jpg',
    weight: '200 мл',
    ingredients: 'Кофе, молоко',
    features: 'Молочный, нежный',
    tags: ['кофе']
  },
  {
    id: 26,
    name: 'Латте',
    price: 240,
    desc: 'Кофе латте с мягким вкусом и молочной пенкой.',
    img: 'coffee-latte.jpg',
    weight: '250 мл',
    ingredients: 'Кофе, молоко',
    features: 'Молочный, мягкий',
    tags: ['кофе']
  }
];

const categories = [
  { name: 'Торты', icon: '🍰', color: '#ffb6e6' },
  { name: 'Десерты', icon: '🧁', color: '#ff8ac6' },
  { name: 'Домашняя кухня', icon: '🥟', color: '#ffd1e6' },
  { name: 'Чай', icon: '🍵', color: '#ffe6fa' },
  { name: 'Кофе', icon: '☕', color: '#ffb6e6' },
];

let cart = [];

// Функции для работы с корзиной в localStorage
function getCart() {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (e) {
    console.error('Failed to get cart from localStorage:', e);
    return [];
  }
}

function setCart(newCart) {
  try {
    localStorage.setItem('cart', JSON.stringify(newCart));
    cart = newCart;
    // Обновляем отображение корзины в навигации после каждого изменения
    renderNav();
  } catch (e) {
    console.error('Failed to set cart in localStorage:', e);
  }
}

// Инициализация корзины при загрузке
cart = getCart();

// Добавляем наборы со скидкой
const sets = [
  {
    id: 'set1',
    name: 'Набор "Сладкоежка"',
    description: 'Идеальный набор для сладкоежек. В набор входит: торт "Наполеон", пирожное "Картошка", зелёный чай с жасмином.',
    discount: 10,
    items: [1, 6, 21],
    img: 'sweet-set.jpg'
  },
  {
    id: 'set2',
    name: 'Набор "Чайная церемония"',
    description: 'Набор для любителей чая. В набор входит: зелёный чай с жасмином, чёрный чай с бергамотом, матча латте.',
    discount: 10,
    items: [21, 22, 23],
    img: 'tea-set.jpg'
  },
  {
    id: 'set3',
    name: 'Набор "Кофейный рай"',
    description: 'Для настоящих ценителей кофе. В набор входит: американо, капучино, латте.',
    discount: 10,
    items: [24, 25, 26],
    img: 'coffee-set.jpg'
  }
];

// Добавляем историю заказов
if (!localStorage.getItem('orders')) {
  localStorage.setItem('orders', JSON.stringify([]));
}

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(defaultUsers));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
}
function setCurrentUser(user) {
  if (user) localStorage.setItem('currentUser', JSON.stringify(user));
  else localStorage.removeItem('currentUser');
}
function logout() {
  setCurrentUser(null);
  renderHome();
}
function showLoginModal() {
  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <h2>Вход</h2>
      <form id="login-form" onsubmit="login(event)">
        <input name="username" placeholder="Логин" required autocomplete="username"><br><br>
        <input name="password" type="password" placeholder="Пароль" required autocomplete="current-password"><br><br>
        <button type="submit">Войти</button>
      </form>
      <div id="login-error" style="color:#e75480;margin-top:0.7rem;"></div>
      <div style="margin-top:1.2rem;font-size:0.95em;color:#a8006b;">Демо: admin/admin123 или user/user123</div>
      <div style="margin-top:1rem;text-align:center;">
        <a href="#" onclick="showRegisterModal(); return false;">Зарегистрироваться</a>
      </div>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}
function login(e) {
  e.preventDefault();
  const username = e.target.username.value.trim();
  const password = e.target.password.value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
      document.getElementById('login-error').textContent = 'Неверный логин или пароль';
      return;
  }
  setCurrentUser(user);
  closeModal();
  renderHome();
}

function showRegisterModal() {
  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <h2>Регистрация</h2>
      <form id="register-form" onsubmit="register(event)">
        <input name="username" placeholder="Логин" required><br><br>
        <div class="password-field">
          <input name="password" type="password" placeholder="Пароль" required oninput="checkPassword(this.value)">
          <div class="password-tooltip" style="display:none;position:absolute;background:#fff;border:1px solid #ffb6e6;border-radius:6px;padding:0.5rem;margin-top:0.3rem;box-shadow:0 2px 4px rgba(0,0,0,0.1);z-index:1000;"></div>
        </div><br>
        <input name="name" placeholder="Ваше имя" required><br><br>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <div id="register-error" style="color:#e75480;margin-top:0.7rem;"></div>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function checkPassword(password) {
  const tooltip = document.querySelector('.password-tooltip');
  const errors = [];
  
  if (password.length < 8) {
    errors.push('Минимум 8 символов');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Нужна хотя бы одна цифра');
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Нужен хотя бы один специальный символ (!@#$%^&*)');
  }
  
  if (errors.length > 0) {
    tooltip.innerHTML = errors.join('<br>');
    tooltip.style.display = 'block';
    tooltip.style.color = '#e75480';
  } else {
    tooltip.innerHTML = 'Пароль соответствует требованиям';
    tooltip.style.display = 'block';
    tooltip.style.color = '#4CAF50';
  }
}

function register(e) {
  e.preventDefault();
  const username = e.target.username.value.trim();
  const password = e.target.password.value;
  const name = e.target.name.value.trim();
  
  // Проверка пароля
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById('register-error').textContent = 'Пароль не соответствует требованиям';
    return;
  }
  
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.some(u => u.username === username)) {
    document.getElementById('register-error').textContent = 'Пользователь с таким логином уже существует';
    return;
  }
  
  users.push({ username, password, role: 'user', name });
  localStorage.setItem('users', JSON.stringify(users));
  setCurrentUser({ username, password, role: 'user', name });
  closeModal();
  renderHome();
}

function syncProducts() {
  let stored = JSON.parse(localStorage.getItem('products') || '[]');
  if (!Array.isArray(stored) || stored.length === 0) {
    // Если в localStorage нет товаров, полностью копируем из кода
    localStorage.setItem('products', JSON.stringify(products));
    console.log('[syncProducts] Каталог полностью скопирован из кода.');
    return;
  }
  let changed = false;
  // Индексируем по id для быстрого поиска
  const storedMap = Object.fromEntries(stored.filter(Boolean).map(p => [p.id, p]));
  const codeMap = Object.fromEntries(products.map(p => [p.id, p]));

  // Добавляем или обновляем товары из кода
  products.forEach(prod => {
    if (!storedMap[prod.id]) {
      stored.push(prod);
      changed = true;
      console.log(`[syncProducts] Добавлен новый товар: ${prod.name}`);
    } else {
      // Если что-то изменилось в товаре — обновляем
      const keys = Object.keys(prod);
      let updated = false;
      for (const key of keys) {
        if (JSON.stringify(storedMap[prod.id][key]) !== JSON.stringify(prod[key])) {
          storedMap[prod.id][key] = prod[key];
          updated = true;
        }
      }
      if (updated) {
        changed = true;
        console.log(`[syncProducts] Обновлён товар: ${prod.name}`);
      }
    }
  });
  // Обновляем массив, чтобы сохранить порядок и только валидные товары
  stored = [
    ...products.map(p => storedMap[p.id]).filter(Boolean),
    ...stored.filter(p => p && !codeMap[p.id]) // пользовательские/старые товары
  ];
  if (changed) {
    localStorage.setItem('products', JSON.stringify(stored));
    console.log('[syncProducts] Каталог синхронизирован.');
  }
}

syncProducts();

function getProducts() {
  try {
    const arr = JSON.parse(localStorage.getItem('products') || JSON.stringify(products));
    const valid = Array.isArray(arr) ? arr.filter(p => p && typeof p.id === 'number' && p.name) : [];
    // Если товаров меньше, чем в products из кода — сбрасываем localStorage
    if (valid.length < products.length) {
      localStorage.setItem('products', JSON.stringify(products));
      console.warn('[getProducts] Каталог был повреждён или не полный, восстановлен из кода.');
      return products;
    }
    return valid;
  } catch (e) {
    console.error('Ошибка чтения товаров:', e);
    localStorage.setItem('products', JSON.stringify(products));
    return products;
  }
}
function setProducts(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

function renderNav() {
  const user = getCurrentUser();
  return `
    <nav class="main-nav">
      <div class="nav-top">
        <span class="nav-brand">Вкусняшка</span>
        <div class="nav-right">
          <div class="cart-icon" onclick="renderCart()">
            🛒
            ${cart.length ? `<span class="cart-count">${cart.length}</span>` : ''}
          </div>
          ${user ? 
            `<div class="user-avatar" onclick="showProfileModal()">
              <img src="user-avatar.png" alt="Профиль">
            </div>` :
            `<button class="nav-btn" onclick="showLoginModal()">Войти</button>`
          }
        </div>
      </div>
      <div class="nav-links">
        <a class="nav-link" onclick="renderHome()">Главная</a>
        <a class="nav-link" onclick="renderCatalog()">Каталог</a>
        <a class="nav-link" onclick="renderCreateCake()">Создай свой торт</a>
        <a class="nav-link" onclick="renderSets()">Наборы со скидкой</a>
        <a class="nav-link" onclick="renderAbout()">О компании</a>
        <a class="nav-link" onclick="renderContacts()">Контакты</a>
      </div>
    </nav>
  `;
}

function renderHome() {
  document.title = 'Кондитерская «Вкусняшка»';
  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <div class="hero-section">
      <p>Создаем сладкие шедевры с любовью и заботой о каждом клиенте</p>
    </div>
    ${renderCategories()}
    <div class="advantages-section">
      <h2>Наши преимущества</h2>
      <div class="advantages-grid">
        <div class="advantage-card">
          <div class="advantage-icon">🌿</div>
          <h3>Натуральные ингредиенты</h3>
          <p>Используем только свежие и качественные продукты</p>
        </div>
        <div class="advantage-card">
          <div class="advantage-icon">⭐</div>
          <h3>Высшее качество</h3>
          <p>Строгий контроль на всех этапах приготовления</p>
        </div>
        <div class="advantage-card">
          <div class="advantage-icon">❤️</div>
          <h3>Забота о клиентах</h3>
          <p>Индивидуальный подход к каждому заказу</p>
        </div>
      </div>
    </div>
    <div class="promo-carousel">
      <button class="carousel-btn prev" id="promo-prev">❮</button>
      <div class="promo-slide" id="promo-slide-content"></div>
      <button class="carousel-btn next" id="promo-next">❯</button>
    </div>
    ${renderReviewsBlock()}
    <div id="modal-root"></div>
  `;
  selectStar(selectedStars);
  initSimplePromoCarousel();
}

function renderCategories() {
  return `
    <section>
      <h2>Категории</h2>
      <ul class="cat-list">
        ${categories.map(cat => `
          <li style="background:${cat.color};cursor:pointer;" onclick="openCategoryFilter('${cat.name.toLowerCase()}')"><span class="cat-ico">${cat.icon}</span><span>${cat.name}</span></li>
        `).join('')}
      </ul>
    </section>
  `;
}

function openCategoryFilter(tag) {
  renderCatalog(tag);
  setTimeout(() => filterByTag(tag), 0);
}

function renderCatalog(tagFilter = null) {
  document.title = 'Каталог - Кондитерская «Вкусняшка»';
  const products = getProducts();
  // Get all unique tags
  const allTags = [...new Set(products.flatMap(p => p.tags || []))];
  window.currentTagFilter = tagFilter || null;
  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <h1>Каталог</h1>
    <div class="search-box">
      <input type="text" id="search-input" placeholder="Поиск по названию или тегам..." oninput="handleSearch()">
    </div>
    <div class="tag-filter">
      <h3>Фильтр по тегам:</h3>
      <div class="tag-buttons">
        ${allTags.map(tag => `
          <button class="tag-btn" onclick="filterByTag('${tag}')">${tag}</button>
        `).join('')}
        <button class="tag-btn clear" onclick="clearTagFilter()">Сбросить</button>
      </div>
    </div>
    <div class="products-container">
      <ul class="products">
        ${products.map(p => `
          <li class="product-card">
            <div class="product-card-content">
              <img src="${p.img}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover;">
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
              <p class="price">${p.price} ₽</p>
              <p class="weight">${p.weight}</p>
              <div class="product-tags">
                ${(p.tags || []).map(tag => `<span class="product-tag">${tag}</span>`).join('')}
              </div>
            </div>
            <div class="product-card-actions">
              <button onclick="openAddToCartModal(${p.id})">Добавить в корзину</button>
              <button onclick="openProductModal(${p.id})">Подробнее</button>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
    <div id="modal-root"></div>
  `;
  if (tagFilter) {
    setTimeout(() => filterByTag(tagFilter), 0);
  }
}

let currentTagFilter = null;
function filterByTag(tag) {
  currentTagFilter = tag;
  const products = getProducts();
  const filteredProducts = products.filter(p => (p.tags || []).includes(tag));
  document.querySelector('.products').innerHTML = filteredProducts.map(p => `
    <li class="product-card">
      <div class="product-card-content">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover;">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p class="price">${p.price} ₽</p>
        <p class="weight">${p.weight}</p>
        <div class="product-tags">
          ${(p.tags || []).map(tag => `<span class="product-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="product-card-actions">
        <button onclick="openAddToCartModal(${p.id})">Добавить в корзину</button>
        <button onclick="openProductModal(${p.id})">Подробнее</button>
      </div>
    </li>
  `).join('');
  // Update active state of tag buttons
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === tag);
  });
}
function clearTagFilter() {
  currentTagFilter = null;
  renderCatalog();
}

function openProductModal(id) {
  const products = getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;
  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <img src="${p.img}" alt="${p.name}" width="220" style="display:block;margin:0 auto 1rem;">
      <h2>${p.name}</h2>
      <p><b>Описание:</b> ${p.desc}</p>
      <p><b>Состав:</b> ${p.ingredients}</p>
      <p><b>Особенности:</b> ${p.features}</p>
      <p><b>Вес/объём:</b> ${p.weight}</p>
      <p><b>Цена:</b> <span style="color:#e75480;font-size:1.2em;">${p.price} ₽</span></p>
      <label style="display:block;margin:1em 0 0.7em 0;">Количество: <input id="product-qty" type="number" min="1" max="20" value="1" style="width:60px;padding:0.2em 0.5em;border-radius:6px;border:1.5px solid #ffb6e6;"></label>
      <button onclick="addToCartWithQty(${p.id})">Добавить в корзину</button>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) modalRoot.innerHTML = '';
  document.body.style.overflow = '';
}

function renderProduct(id) {
  // Не используется, оставлено для совместимости
}

function addToCart(id) {
  cart.push(id);
  setCart(cart);
}

function addToCartWithQty(id) {
  const qty = Math.max(1, Math.min(20, Number(document.getElementById('product-qty').value) || 1));
  for (let i = 0; i < qty; i++) cart.push(id);
  setCart(cart);
  closeModal();
}

function renderCart() {
  document.title = 'Корзина | Вкусняшка';
  if (cart.length === 0) {
      document.getElementById('app').innerHTML = `
        ${renderNav()}
        <h1>Корзина</h1>
        <p>Ваша корзина пуста.</p>
        <div id="modal-root"></div>
      `;
      return;
  }
  const products = getProducts();
  const grouped = {};
  cart.forEach(id => {
    grouped[id] = (grouped[id] || 0) + 1;
  });
  const items = Object.entries(grouped).map(([id, qty]) => {
    const p = products.find(x => x.id === Number(id));
    return p ? { ...p, qty } : null;
  }).filter(Boolean);

  // Добавляем поле для ввода купона
  const couponInput = `
    <div class="coupon-section">
      <input type="text" id="coupon-input" placeholder="Введите код купона">
      <button onclick="applyCoupon()">Применить купон</button>
    </div>
    <div id="applied-coupons"></div>
  `;

  // Рассчитываем скидки
  let total = items.reduce((sum, p) => sum + p.price * p.qty, 0);
  let discount = 0;
  let appliedCoupons = JSON.parse(localStorage.getItem('appliedCoupons') || '[]');
  
  // Применяем скидки
  appliedCoupons.forEach(coupon => {
    if (coupon.type === 'total') {
      discount += total * (coupon.discount / 100);
    } else if (coupon.type === 'product') {
      const product = items.find(p => p.id === coupon.productId);
      if (product) {
        discount += product.price * product.qty * (coupon.discount / 100);
      }
    }
  });

  const finalTotal = total - discount;

  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <h1>Корзина</h1>
    ${couponInput}
    <ul class="cart-list">
      ${items.map(p => `
        <li>
          <img src="${p.img}" alt="${p.name}" width="70" style="border-radius:10px;margin-right:1em;vertical-align:middle;">
          <img src="${p.img}" alt="${p.name}" width="70" style="border-radius:10px;margin-right:1em;vertical-align:middle;">
          <b>${p.name}</b><br>
          <span style="color:#e75480;">
            ${discount > 0 ? `<span style="text-decoration:line-through;">${p.price} ₽</span> ${Math.round(p.price * (1 - appliedCoupons.find(c => c.type === 'product' && c.productId === p.id)?.discount / 100 || 0))} ₽` : `${p.price} ₽`}
          </span>
          <div class="cart-qty-row">
            <button class="cart-qty-btn" onclick="decreaseCartQty(${p.id})">−</button>
            <span class="cart-qty">${p.qty}</span>
            <button class="cart-qty-btn" onclick="increaseCartQty(${p.id})">+</button>
          </div>
          <button class="cart-del-btn" onclick="removeFromCart(${p.id})">Удалить</button>
        </li>
      `).join('')}
    </ul>
    <div class="cart-total">
      <p>Итого: ${discount > 0 ? `<span style="text-decoration:line-through;">${total} ₽</span> ${Math.round(finalTotal)} ₽` : `${total} ₽`}</p>
      ${discount > 0 ? `<p style="color:#4CAF50;">Ваша экономия: ${Math.round(discount)} ₽</p>` : ''}
    </div>
    <button onclick="checkout()">Оформить заказ</button>
    <div id="modal-root"></div>
  `;

  // Отображаем примененные купоны
  const appliedCouponsDiv = document.getElementById('applied-coupons');
  if (appliedCoupons.length > 0) {
    appliedCouponsDiv.innerHTML = `
      <h3>Примененные купоны:</h3>
      <ul class="applied-coupons-list">
        ${appliedCoupons.map(coupon => `
          <li>
            ${coupon.code} - ${coupon.description}
            <button onclick="removeCoupon('${coupon.code}')" class="remove-coupon">×</button>
          </li>
        `).join('')}
      </ul>
    `;
  }
}

function decreaseCartQty(id) {
  const idx = cart.lastIndexOf(id);
  if (idx !== -1) cart.splice(idx, 1);
  setCart(cart);
  renderCart();
}
function increaseCartQty(id) {
  const count = cart.filter(x => x === id).length;
  if (count < 20) cart.push(id);
  setCart(cart);
  renderCart();
}
function removeFromCart(id) {
  for (let i = cart.length - 1; i >= 0; i--) {
    if (cart[i] === id) cart.splice(i, 1);
  }
  setCart(cart);
  renderCart();
}

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

function showCheckoutForm() {
  const user = getCurrentUser();
  if (!user) {
    alert('Пожалуйста, войдите в систему для оформления заказа');
    showLoginModal();
    return;
  }

  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" style="max-width:800px;" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <h2>Оформление заказа</h2>
      <form id="checkout-form" class="checkout-form" onsubmit="processOrder(event)">
        <label>Имя получателя:
          <input type="text" name="name" value="${user.name}" required>
        </label>
        <label>Телефон:
          <input type="tel" name="phone" pattern="[0-9]{11}" placeholder="89991234567" required>
        </label>
        <label>Адрес доставки:
          <input type="text" name="address" id="address-input" required>
        </label>
        <div id="map"></div>
        <label>Комментарий к заказу:
          <textarea name="comment" placeholder="Например: позвонить за час до доставки"></textarea>
        </label>
        <button type="submit">Оформить заказ</button>
      </form>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Инициализация карты
  initMap();
}

function initMap() {
  // Проверяем, загружен ли API Яндекс Карт
  if (!window.ymaps) {
    // Добавляем скрипт Яндекс Карт
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=2a65bf46-e1d7-47b7-bb7f-82d80ea0a0ea&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      ymaps.ready(initYandexMap);
    };
    document.head.appendChild(script);
  } else {
    ymaps.ready(initYandexMap);
  }
}

function initYandexMap() {
  const mapDiv = document.getElementById('map');
  const addressInput = document.getElementById('address-input');
  
  // Создаем карту
  const map = new ymaps.Map(mapDiv, {
    center: [55.76, 37.64], // Москва
    zoom: 10,
    controls: ['zoomControl', 'fullscreenControl']
  });

  // Создаем поисковую строку
  const searchControl = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#search',
      boundedBy: map.getBounds(),
      noPlacemark: true
    }
  });

  map.controls.add(searchControl);

  // Добавляем геокодер
  const geocoder = ymaps.geocode;

  // Обработчик изменения адреса в поле ввода
  addressInput.addEventListener('change', function() {
    const address = this.value;
    if (address) {
      geocoder(address).then(function(res) {
        const firstGeoObject = res.geoObjects.get(0);
        if (firstGeoObject) {
          const coordinates = firstGeoObject.geometry.getCoordinates();
          map.setCenter(coordinates, 15);
          
          // Удаляем предыдущую метку
          map.geoObjects.removeAll();
          
          // Добавляем новую метку
          const placemark = new ymaps.Placemark(coordinates, {
            balloonContent: address
          });
          map.geoObjects.add(placemark);
        }
      });
    }
  });

  // Обработчик клика по карте
  map.events.add('click', function(e) {
    const coords = e.get('coords');
    
    // Получаем адрес по координатам
    geocoder(coords).then(function(res) {
      const firstGeoObject = res.geoObjects.get(0);
      if (firstGeoObject) {
        const address = firstGeoObject.getAddressLine();
        addressInput.value = address;
        
        // Удаляем предыдущую метку
        map.geoObjects.removeAll();
        
        // Добавляем новую метку
        const placemark = new ymaps.Placemark(coords, {
          balloonContent: address
        });
        map.geoObjects.add(placemark);
      }
    });
  });
}

function processOrder(e) {
  e.preventDefault();
  const form = e.target;
  const user = getCurrentUser();
  
  const orderData = {
    userId: user.username,
    name: form.name.value,
    phone: form.phone.value,
    address: form.address.value,
    comment: form.comment.value,
    items: cart.map(id => {
      const product = getProducts().find(p => p.id === id);
      return {
        id: product.id,
        name: product.name,
        price: product.price
      };
    }),
    status: ORDER_STATUSES.NEW,
    date: new Date().toISOString(),
    total: calculateOrderTotal()
  };

  // Сохраняем заказ
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(orderData);
  localStorage.setItem('orders', JSON.stringify(orders));

  // Очищаем корзину
  cart = [];
  localStorage.removeItem('appliedCoupons');

  closeModal();
  showOrderStatus(orderData);
  renderHome();
}

function calculateOrderTotal() {
  const products = getProducts();
  const grouped = {};
  cart.forEach(id => {
    grouped[id] = (grouped[id] || 0) + 1;
  });
  const items = Object.entries(grouped).map(([id, qty]) => {
    const p = products.find(x => x.id === Number(id));
    return p ? { ...p, qty } : null;
  }).filter(Boolean);

  let total = items.reduce((sum, p) => sum + p.price * p.qty, 0);
  let discount = 0;
  let appliedCoupons = JSON.parse(localStorage.getItem('appliedCoupons') || '[]');
  
  appliedCoupons.forEach(coupon => {
    if (coupon.type === 'total') {
      discount += total * (coupon.discount / 100);
    } else if (coupon.type === 'product') {
      const product = items.find(p => p.id === coupon.productId);
      if (product) {
        discount += product.price * product.qty * (coupon.discount / 100);
      }
    }
  });

  return total - discount;
}

function showOrderStatus(order) {
  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" style="max-width:800px;" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <h2>Статус заказа</h2>
      <div class="order-status">
        <div class="status-timeline">
          ${Object.values(ORDER_STATUSES).map((status, index) => `
            <div class="status-step ${order.status === status ? 'active' : 
              Object.values(ORDER_STATUSES).indexOf(order.status) > index ? 'completed' : ''}">
              ${index + 1}
              <span class="status-label">${ORDER_STATUS_LABELS[status]}</span>
            </div>
          `).join('')}
        </div>
        <div class="order-details">
          <h3>Детали заказа:</h3>
          <p><strong>Номер заказа:</strong> ${order.date}</p>
          <p><strong>Статус:</strong> ${ORDER_STATUS_LABELS[order.status]}</p>
          <p><strong>Адрес доставки:</strong> ${order.address}</p>
          <p><strong>Телефон:</strong> ${order.phone}</p>
          <p><strong>Сумма заказа:</strong> ${order.total} ₽</p>
          ${order.comment ? `<p><strong>Комментарий:</strong> ${order.comment}</p>` : ''}
        </div>
      </div>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}

// Обновляем функцию checkout
function checkout() {
  showCheckoutForm();
}

function renderAbout() {
  document.title = 'О компании | Вкусняшка';
  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <h1>О компании</h1>
    <p>Мы — семейная кондитерская с любовью к натуральным продуктам и качеству.</p>
    <div id="modal-root"></div>
  `;
}

function renderContacts() {
  document.title = 'Контакты | Вкусняшка';
  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <h1>Контакты</h1>
    <p>Телефон: +7 (900) 123-45-67</p>
    <p>Email: info@vkusnyashka.ru</p>
    <p>Адрес: г. Москва, ул. Пряничная, 1</p>
    <div id="modal-root"></div>
  `;
}

// --- ADMIN PANEL ---
function renderAdminPanel() {
  document.title = 'Панель админа | Вкусняшка';
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  const products = getProducts();
  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <h1>Панель администратора</h1>
    <h2>Отзывы пользователей</h2>
    <ul class="reviews-list">
      ${reviews.length ? reviews.map((r, idx) => `
        <li>
          <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <div class="review-text">${r.text}</div>
          <button class="review-del" onclick="deleteReview(${idx})">Удалить</button>
        </li>
      `).join('') : '<li>Нет отзывов</li>'}
    </ul>
    <h2 style="margin-top:2.5rem;">Товары</h2>
    <ul class="admin-products-list">
      ${products.map((p, idx) => `
        <li>
          <img src="${p.img}" alt="${p.name}" width="60" style="border-radius:8px;margin-right:1em;vertical-align:middle;">
          <b>${p.name}</b> — <span style="color:#e75480;">${p.price} ₽</span>
          <button class="admin-edit-btn" onclick="openEditProductModal(${p.id})">Редактировать</button>
        </li>
      `).join('')}
    </ul>
    <div id="modal-root"></div>
  `;
}
function deleteReview(idx) {
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  reviews.splice(idx, 1);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  renderAdminPanel();
}
function openEditProductModal(id) {
  const products = getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;
  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <h2>Редактировать товар</h2>
      <form id="edit-product-form" onsubmit="saveProductEdit(event,${id})">
        <label>Название:<br><input name="name" value="${p.name}" required></label><br><br>
        <label>Цена (₽):<br><input name="price" type="number" min="1" value="${p.price}" required></label><br><br>
        <label>Описание:<br><textarea name="desc" required>${p.desc}</textarea></label><br><br>
        <label>Состав:<br><input name="ingredients" value="${p.ingredients}" required></label><br><br>
        <label>Особенности:<br><input name="features" value="${p.features}" required></label><br><br>
        <label>Вес/объём:<br><input name="weight" value="${p.weight}" required></label><br><br>
        <label>Картинка (имя файла):<br><input name="img" value="${p.img}" required></label><br><br>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}
function saveProductEdit(e, id) {
  e.preventDefault();
  const products = getProducts();
  const idx = products.findIndex(x => x.id === id);
  if (idx === -1) return;
  const f = e.target;
  products[idx] = {
    ...products[idx],
    name: f.name.value,
    price: Number(f.price.value),
    desc: f.desc.value,
    ingredients: f.ingredients.value,
    features: f.features.value,
    weight: f.weight.value,
    img: f.img.value
  };
  setProducts(products);
  closeModal();
  renderAdminPanel();
}
// --- END ADMIN PANEL ---

function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase().trim();
  const products = getProducts();
  
  if (!searchTerm) {
    if (currentTagFilter) {
      filterByTag(currentTagFilter);
    } else {
      renderCatalog();
    }
    return;
  }

  const filteredProducts = products.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(searchTerm);
    const descMatch = p.desc.toLowerCase().includes(searchTerm);
    const tagMatch = (p.tags || []).some(tag => tag.toLowerCase().includes(searchTerm));
    return nameMatch || descMatch || tagMatch;
  });

  document.querySelector('.products').innerHTML = filteredProducts.map(p => `
    <li>
      <img src="${p.img}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover;">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p class="price">${p.price} ₽</p>
      <p class="weight">${p.weight}</p>
      <div class="product-tags">
        ${(p.tags || []).map(tag => `<span class="product-tag">${tag}</span>`).join('')}
      </div>
      <button onclick="openProductModal(${p.id})">Подробнее</button>
    </li>
  `).join('');
}

function renderReviewsBlock() {
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  if (!reviews.length) return '<section><h2>Отзывы</h2><p>Пока нет отзывов. Будьте первым!</p>' + renderReviewForm() + '</section>';
  return `
    <section>
      <h2>Отзывы</h2>
      <ul class="reviews-list">
        ${reviews.map(r => `
          <li>
            <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
            <div class="review-text">${r.text}</div>
          </li>
        `).join('')}
      </ul>
      ${renderReviewForm()}
    </section>
  `;
}

function renderReviewForm() {
  const user = getCurrentUser();
  if (!user) {
      return `<div class="review-login-msg">Чтобы оставить отзыв, <a onclick="showLoginModal()">войдите в аккаунт</a>.</div>`;
  }
  return `
    <form id="review-form" class="review-form" onsubmit="submitReview(event)">
      <label>Ваша оценка:
        <span id="star-select">
          ${[1,2,3,4,5].map(i => `<span class="star" data-star="${i}" onclick="selectStar(${i})">☆</span>`).join('')}
        </span>
      </label><br>
      <textarea name="review" required placeholder="Ваш отзыв..." maxlength="300"></textarea><br>
      <button type="submit">Оставить отзыв</button>
    </form>
  `;
}

let selectedStars = 0;
function selectStar(n) {
  selectedStars = n;
  const stars = document.querySelectorAll('#star-select .star');
  stars.forEach((el, i) => {
    el.textContent = i < n ? '★' : '☆';
  });
}

function submitReview(e) {
  e.preventDefault();
  const text = e.target.review.value.trim();
  const stars = selectedStars || 5;
  if (!text) return;
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  reviews.unshift({ text, stars });
  localStorage.setItem('reviews', JSON.stringify(reviews));
  selectedStars = 0;
  renderHome();
}

function applyCoupon() {
  const couponCode = document.getElementById('coupon-input').value.trim().toUpperCase();
  const coupon = coupons.find(c => c.code === couponCode);
  
  if (!coupon) {
    alert('Неверный код купона');
    return;
  }

  let appliedCoupons = JSON.parse(localStorage.getItem('appliedCoupons') || '[]');
  if (appliedCoupons.some(c => c.code === couponCode)) {
    alert('Этот купон уже применен');
    return;
  }

  appliedCoupons.push(coupon);
  localStorage.setItem('appliedCoupons', JSON.stringify(appliedCoupons));
  document.getElementById('coupon-input').value = '';
  renderCart();
}

function removeCoupon(code) {
  let appliedCoupons = JSON.parse(localStorage.getItem('appliedCoupons') || '[]');
  appliedCoupons = appliedCoupons.filter(c => c.code !== code);
  localStorage.setItem('appliedCoupons', JSON.stringify(appliedCoupons));
  renderCart();
}

function renderOrderHistory() {
  const user = getCurrentUser();
  if (!user) {
    alert('Пожалуйста, войдите в систему для просмотра истории заказов');
    showLoginModal();
    return;
  }

  const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    .filter(order => order.userId === user.username)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <h1>История заказов</h1>
    ${orders.length ? `
      <div class="orders-list">
        ${orders.map(order => `
          <div class="order-card">
            <div class="order-header">
              <span>Заказ от ${new Date(order.date).toLocaleDateString()}</span>
              <span>Итого: ${order.total} ₽</span>
            </div>
            <div class="status-timeline" style="margin:1rem 0;">
              ${Object.values(ORDER_STATUSES).map((status, index) => `
                <div class="status-step ${order.status === status ? 'active' : 
                  Object.values(ORDER_STATUSES).indexOf(order.status) > index ? 'completed' : ''}">
                  ${index + 1}
                  <span class="status-label">${ORDER_STATUS_LABELS[status]}</span>
                </div>
              `).join('')}
            </div>
            <div class="order-items">
              ${order.items.map(item => `
                <div class="order-item">
                  <img src="${item.img}" alt="${item.name}" width="50">
                  <span>${item.name} × ${item.qty}</span>
                  <span>${item.price * item.qty} ₽</span>
                </div>
              `).join('')}
            </div>
            <div class="order-details" style="margin-top:1rem;padding-top:1rem;border-top:1px solid #ffb6e6;">
              <p><strong>Адрес доставки:</strong> ${order.address}</p>
              <p><strong>Телефон:</strong> ${order.phone}</p>
              ${order.comment ? `<p><strong>Комментарий:</strong> ${order.comment}</p>` : ''}
            </div>
            <button onclick="showOrderStatus(${JSON.stringify(order)})" style="margin-top:1rem;">Подробнее</button>
          </div>
        `).join('')}
      </div>
    ` : '<p>У вас пока нет заказов</p>'}
    <div id="modal-root"></div>
  `;
}

// Запуск приложения
cart = getCart();
renderHome();

window.openCategoryFilter = openCategoryFilter;
window.renderCatalog = renderCatalog;
window.filterByTag = filterByTag;
window.clearTagFilter = clearTagFilter;
window.handleSearch = handleSearch;

// --- ВРУЧНУЮ УДАЛЯЕМ УНИКАЛЬНЫЕ ТЕГИ ---
products.forEach(p => {
  if (p.tags) {
    p.tags = p.tags.filter(tag => ![
      'медовые', 'суфле', 'с орехами', 'с вишней', 'цитрусовые', 'матча', 'американские', 'ягодные', 'сырные', 'французские', 'безглютеновые', 'итальянские', 'кофейные', 'жасминовый', 'бергамот', 'чёрный', 'молочный', 'мягкий', 'японский', 'расслабляющий', 'яркие', 'яркий', 'классический', 'с грибами', 'мясные', 'вегетарианские'
    ].includes(tag));
  }
});
// --- END ВРУЧНУЮ УДАЛЯЕМ УНИКАЛЬНЫЕ ТЕГИ ---

// --- АВТОМАТИЧЕСКАЯ СИНХРОНИЗАЦИЯ КАТАЛОГА ---
localStorage.setItem('products', JSON.stringify(products));
// --- END ---

const cakeIngredients = {
  bases: [
    { id: 1, name: 'Шоколадный бисквит', price: 500, img: 'chocolate-base.jpg' },
    { id: 2, name: 'Ванильный бисквит', price: 450, img: 'vanilla-base.jpg' },
    { id: 3, name: 'Медовый бисквит', price: 550, img: 'honey-base.jpg' },
    { id: 4, name: 'Красный бархат', price: 600, img: 'red-velvet-base.jpg' }
  ],
  creams: [
    { id: 1, name: 'Заварной крем', price: 300, img: 'custard-cream.jpg' },
    { id: 2, name: 'Сливочный крем', price: 350, img: 'butter-cream.jpg' },
    { id: 3, name: 'Шоколадный крем', price: 400, img: 'chocolate-cream.jpg' },
    { id: 4, name: 'Сметанный крем', price: 300, img: 'sour-cream.jpg' }
  ],
  fillings: [
    { id: 1, name: 'Свежие ягоды', price: 400, img: 'berries.jpg' },
    { id: 2, name: 'Шоколадная крошка', price: 200, img: 'chocolate-chips.jpg' },
    { id: 3, name: 'Фруктовое пюре', price: 300, img: 'fruit-puree.jpg' },
    { id: 4, name: 'Орехи', price: 350, img: 'nuts.jpg' }
  ],
  decorations: [
    { id: 1, name: 'Шоколадная глазурь', price: 250, img: 'chocolate-glaze.jpg' },
    { id: 2, name: 'Свежие цветы', price: 400, img: 'fresh-flowers.jpg' },
    { id: 3, name: 'Марципан', price: 300, img: 'marzipan.jpg' },
    { id: 4, name: 'Сахарная посыпка', price: 150, img: 'sugar-sprinkles.jpg' }
  ]
};

function renderCreateCake() {
  document.title = 'Создай свой торт | Вкусняшка';
  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <div class="create-cake-container">
      <h1>Создай свой торт</h1>
      <div class="cake-builder">
        <div class="cake-preview">
          <div class="cake-image">
            <img src="default-cake.jpg" alt="Ваш торт" id="cake-preview-img">
          </div>
          <div class="cake-price">
            Итого: <span id="cake-total-price">0</span> ₽
          </div>
        </div>
        
        <div class="ingredients-section">
          <h2>Основа</h2>
          <div class="ingredients-grid">
            ${cakeIngredients.bases.map(base => `
              <div class="ingredient-card" onclick="selectIngredient('base', ${base.id})">
                <img src="${base.img}" alt="${base.name}">
                <h3>${base.name}</h3>
                <p>${base.price} ₽</p>
              </div>
            `).join('')}
          </div>

          <h2>Крем</h2>
          <div class="ingredients-grid">
            ${cakeIngredients.creams.map(cream => `
              <div class="ingredient-card" onclick="selectIngredient('cream', ${cream.id})">
                <img src="${cream.img}" alt="${cream.name}">
                <h3>${cream.name}</h3>
                <p>${cream.price} ₽</p>
              </div>
            `).join('')}
          </div>

          <h2>Начинка</h2>
          <div class="ingredients-grid">
            ${cakeIngredients.fillings.map(filling => `
              <div class="ingredient-card" onclick="selectIngredient('filling', ${filling.id})">
                <img src="${filling.img}" alt="${filling.name}">
                <h3>${filling.name}</h3>
                <p>${filling.price} ₽</p>
              </div>
            `).join('')}
          </div>

          <h2>Украшение</h2>
          <div class="ingredients-grid">
            ${cakeIngredients.decorations.map(decoration => `
              <div class="ingredient-card" onclick="selectIngredient('decoration', ${decoration.id})">
                <img src="${decoration.img}" alt="${decoration.name}">
                <h3>${decoration.name}</h3>
                <p>${decoration.price} ₽</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="selected-ingredients">
        <h2>Выбранные ингредиенты</h2>
        <div id="selected-items"></div>
        <button onclick="addCustomCakeToCart()" class="add-to-cart-btn">Добавить в корзину</button>
      </div>
    </div>
    <div id="modal-root"></div>
  `;
}

let selectedIngredients = {
  base: null,
  cream: null,
  filling: null,
  decoration: null
};

function selectIngredient(type, id) {
  const ingredient = cakeIngredients[type + 's'].find(i => i.id === id);
  selectedIngredients[type] = ingredient;
  updateSelectedIngredients();
  updateCakePreview();
  calculateTotalPrice();
}

function updateSelectedIngredients() {
  const container = document.getElementById('selected-items');
  container.innerHTML = Object.entries(selectedIngredients)
    .filter(([_, ingredient]) => ingredient !== null)
    .map(([type, ingredient]) => `
      <div class="selected-item">
        <img src="${ingredient.img}" alt="${ingredient.name}" width="50">
        <span>${ingredient.name}</span>
        <span>${ingredient.price} ₽</span>
        <button onclick="removeIngredient('${type}')" class="remove-btn">×</button>
      </div>
    `).join('');
}

function removeIngredient(type) {
  selectedIngredients[type] = null;
  updateSelectedIngredients();
  updateCakePreview();
  calculateTotalPrice();
}

function calculateTotalPrice() {
  const total = Object.values(selectedIngredients)
    .filter(ingredient => ingredient !== null)
    .reduce((sum, ingredient) => sum + ingredient.price, 0);
  document.getElementById('cake-total-price').textContent = total;
}

function updateCakePreview() {
  // Здесь можно добавить логику обновления превью торта
  // в зависимости от выбранных ингредиентов
}

function addCustomCakeToCart() {
  const user = getCurrentUser();
  if (!user) {
    alert('Пожалуйста, войдите в систему для добавления торта в корзину');
    showLoginModal();
    return;
  }

  if (Object.values(selectedIngredients).some(i => i === null)) {
    alert('Пожалуйста, выберите все ингредиенты для торта');
    return;
  }

  const customCake = {
    id: Date.now(), // Уникальный ID для кастомного торта
    name: 'Кастомный торт',
    price: Object.values(selectedIngredients).reduce((sum, i) => sum + i.price, 0),
    desc: `Торт с ${selectedIngredients.base.name}, ${selectedIngredients.cream.name}, ${selectedIngredients.filling.name} и ${selectedIngredients.decoration.name}`,
    img: 'custom-cake.jpg',
    weight: '1 кг',
    ingredients: Object.values(selectedIngredients).map(i => i.name).join(', '),
    features: 'Индивидуальный дизайн',
    tags: ['торты', 'кастомные']
  };

  // Добавляем кастомный торт в products и localStorage
  const products = getProducts();
  products.push(customCake);
  setProducts(products);
  cart.push(customCake.id);

  // Сброс выбранных ингредиентов
  selectedIngredients = { base: null, cream: null, filling: null, decoration: null };
  updateSelectedIngredients();
  updateCakePreview();
  calculateTotalPrice();

  alert('Торт добавлен в корзину!');
  renderCart();
}

function renderSets() {
  document.title = 'Наборы со скидкой | Вкусняшка';
  document.getElementById('app').innerHTML = `
    ${renderNav()}
    <div class="sets-container">
      <h1>Наборы со скидкой</h1>
      <div class="sets-grid">
        ${sets.map(set => {
          const setItems = set.items.map(id => products.find(p => p.id === id));
          const totalPrice = setItems.reduce((sum, item) => sum + item.price, 0);
          const discountPrice = totalPrice * (1 - set.discount / 100);
          return `
            <div class="set-card">
              <div class="set-image">
                <img src="${set.img}" alt="${set.name}">
                <div class="set-discount-badge">-${set.discount}%</div>
              </div>
              <div class="set-content">
                <h2>${set.name}</h2>
                <p>${set.description}</p>
                <div class="set-price">
                  <div class="old-price">${totalPrice} ₽</div>
                  <div class="new-price">${Math.round(discountPrice)} ₽</div>
                  <div class="savings">Экономия: ${Math.round(totalPrice - discountPrice)} ₽</div>
                </div>
                <button onclick="openSetDetailsModal('${set.id}')" class="add-set-btn">Подробнее</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    <div id="modal-root"></div>
  `;
}

function openSetDetailsModal(setId) {
  const set = sets.find(s => s.id === setId);
  if (!set) return;
  const setItems = set.items.map(id => products.find(p => p.id === id));
  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <h2>${set.name}</h2>
      <p>${set.description}</p>
      <div style="margin:1em 0 0.5em 0;font-weight:bold;">Состав набора:</div>
      <div style="display:flex;gap:2em;flex-wrap:wrap;justify-content:center;">
        ${setItems.map(item => `
          <div style="background:#fff5f9;border-radius:12px;padding:1.2em 1.2em;box-shadow:0 2px 8px #ffe6fa;min-width:220px;max-width:260px;text-align:center;min-height:260px;display:flex;flex-direction:column;justify-content:center;margin-bottom:2em;">
            <img src="${item.img}" alt="${item.name}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;">
            <div style="font-size:1.08em;margin:0.7em 0 0.3em 0;font-weight:bold;">${item.name}</div>
            <div style="color:#e75480;font-size:1.15em;">${item.price} ₽</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function addToCartWithQtyModal(id) {
  const qty = Math.max(1, Math.min(20, Number(document.getElementById('product-qty-modal').value) || 1));
  for (let i = 0; i < qty; i++) cart.push(id);
  closeModal();
}

function addSetToCart(setId) {
  const user = getCurrentUser();
  if (!user) {
    alert('Пожалуйста, войдите в систему для добавления набора в корзину');
    showLoginModal();
    return;
  }

  const set = sets.find(s => s.id === setId);
  if (!set) return;

  set.items.forEach(itemId => {
    cart.push(itemId);
  });

  alert('Набор добавлен в корзину!');
  renderCart();
} 

// === КАРУСЕЛЬ АКЦИЙ ===
// ... existing code ...
const promotions = [
  {
    title: 'Скидка 20% на все торты',
    description: 'При заказе от 2000 рублей',
    price: 'от 960 ₽',
    image: 'promo-cake.jpg',
    items: [1, 4, 10, 12, 13, 19] // id тортов
  },
  {
    title: 'Набор "Сладкоежка"',
    description: 'Торт + 6 пирожных + чай',
    price: '1500 ₽',
    image: 'promo-set.jpg',
    items: [1, 6, 21] // пример: торт, пирожное, чай
  },
  {
    title: 'Бесплатная доставка',
    description: 'При заказе от 3000 рублей',
    price: '0 ₽',
    image: 'promo-delivery.jpg',
    items: []
  },
  {
    title: 'Подарок к заказу',
    description: 'Бесплатный десерт при заказе от 4000 рублей',
    price: '0 ₽',
    image: 'promo-gift.jpg',
    items: [2, 5, 9] // пример: десерты
  }
];
// ... existing code ...
function showPromoSlide(index, direction = 0) {
  const promo = promotions[index];
  const slide = document.getElementById('promo-slide-content');
  if (!slide) return;
  slide.style.opacity = 0;
  setTimeout(() => {
    let itemsHtml = '';
    if (promo.items && promo.items.length > 0) {
      const promoProducts = getProducts().filter(p => promo.items.includes(p.id));
      itemsHtml = `<div class="promo-products">
        <h4 style="margin:1.2em 0 0.5em 0;color:#a8006b;">Товары по акции:</h4>
        <div class="promo-products-list" style="display:flex;gap:1.2em;justify-content:center;flex-wrap:wrap;">
          ${promoProducts.map(prod => `
            <div class="promo-product-card" style="background:#fff;border-radius:8px;padding:0.7em 1em;box-shadow:0 2px 8px #ffe6fa;min-width:120px;max-width:150px;">
              <img src="${prod.img}" alt="${prod.name}" style="width:100%;height:70px;object-fit:cover;border-radius:6px;">
              <div style="font-size:0.98em;margin:0.5em 0 0.2em 0;font-weight:bold;">${prod.name}</div>
              <div style="color:#e75480;font-size:1.1em;">${prod.price} ₽</div>
            </div>
          `).join('')}
        </div>
      </div>`;
    }
    slide.innerHTML = `
      <img src="${promo.image}" alt="${promo.title}" style="max-width:220px;max-height:120px;display:block;margin:0 auto 1rem;">
      <h3>${promo.title}</h3>
      <p>${promo.description}</p>
      <div class="promo-price">${promo.price}</div>
      ${itemsHtml}
    `;
    slide.style.opacity = 1;
  }, 200);
}
// ... existing code ...

// === СТИЛИ ДЛЯ КАРУСЕЛИ ===
const promoCarouselStyles = `
  .promo-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff5f9;
    border-radius: 12px;
    margin: 2rem auto 2rem auto;
    max-width: 700px;
    min-height: 220px;
    position: relative;
    box-shadow: 0 2px 8px rgba(255,182,230,0.08);
  }
  .promo-slide {
    flex: 1 1 0%;
    min-width: 0;
    text-align: center;
    transition: opacity 0.3s;
    padding: 1.5rem 1rem;
  }
  .carousel-btn {
    background: #fff;
    border: 2px solid #ffb6e6;
    color: #e75480;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.5em;
    cursor: pointer;
    margin: 0 0.5rem;
    transition: background 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.07);
    z-index: 2;
  }
  .carousel-btn:hover {
    background: #ffe6fa;
  }
`;
const promoStyleSheet = document.createElement('style');
promoStyleSheet.textContent = promoCarouselStyles;
document.head.appendChild(promoStyleSheet);

// === КАРУСЕЛЬНЫЕ ФУНКЦИИ ===
let currentPromoIndex = 0;

function initSimplePromoCarousel() {
  showPromoSlide(currentPromoIndex);
  document.getElementById('promo-prev').onclick = function() {
    currentPromoIndex = (currentPromoIndex - 1 + promotions.length) % promotions.length;
    showPromoSlide(currentPromoIndex, -1);
  };
  document.getElementById('promo-next').onclick = function() {
    currentPromoIndex = (currentPromoIndex + 1) % promotions.length;
    showPromoSlide(currentPromoIndex, 1);
  };
}

function showPromoSlide(index, direction = 0) {
  const promo = promotions[index];
  const slide = document.getElementById('promo-slide-content');
  if (!slide) return;
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.innerHTML = `
      <img src="${promo.image}" alt="${promo.title}" style="max-width:220px;max-height:120px;display:block;margin:0 auto 1rem;">
      <h3>${promo.title}</h3>
      <p>${promo.description}</p>
      <div class="promo-price">${promo.price}</div>
    `;
    slide.style.opacity = 1;
  }, 200);
}

// После объявления всех функций:
window.selectIngredient = selectIngredient;
window.updateSelectedIngredients = updateSelectedIngredients;
window.updateCakePreview = updateCakePreview;
window.calculateTotalPrice = calculateTotalPrice;
window.addCustomCakeToCart = addCustomCakeToCart;
window.openAddToCartModal = openAddToCartModal;
window.addToCartWithQtyModal = addToCartWithQtyModal;
window.openProductModal = openProductModal;

// ... existing code ...
window.renderCreateCake = renderCreateCake;
// ... existing code ...

function showProfileModal() {
  const user = getCurrentUser();
  if (!user) return;

  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window profile-modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <div class="profile-header">
        <div class="profile-avatar">
          <img src="user-avatar.png" alt="Аватар">
        </div>
        <h2>${user.name}</h2>
        <p>${user.role === 'admin' ? 'Администратор' : 'Пользователь'}</p>
      </div>
      <div class="profile-info">
        <div class="profile-section">
          <h3>Меню</h3>
          <ul class="profile-menu">
            <li onclick="renderOrderHistory(); closeModal();">
              <i>📋</i> История заказов
            </li>
            <li onclick="showEditProfileModal(); closeModal();">
              <i>⚙️</i> Настройки профиля
            </li>
            ${user.role === 'admin' ? `
              <li onclick="renderAdminPanel(); closeModal();">
                <i>👑</i> Панель администратора
              </li>
            ` : ''}
          </ul>
        </div>
        <button class="logout-btn" onclick="logout(); closeModal();">Выйти</button>
      </div>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function showEditProfileModal() {
  const user = getCurrentUser();
  if (!user) return;

  let modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-window" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal()">×</button>
      <h2>Настройки профиля</h2>
      <form id="edit-profile-form" onsubmit="saveProfileEdit(event)">
        <label>Имя:<br>
          <input name="name" value="${user.name}" required>
        </label><br><br>
        <label>Логин:<br>
          <input name="username" value="${user.username}" required>
        </label><br><br>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  `;
  modal.onclick = closeModal;
  document.getElementById('modal-root').appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function saveProfileEdit(e) {
  e.preventDefault();
  const user = getCurrentUser();
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const userIndex = users.findIndex(u => u.username === user.username);
  
  if (userIndex === -1) return;

  const newName = e.target.name.value.trim();
  const newUsername = e.target.username.value.trim();

  // Проверяем, не занят ли новый логин
  if (newUsername !== user.username && users.some(u => u.username === newUsername)) {
    alert('Этот логин уже занят');
    return;
  }

  users[userIndex] = {
    ...users[userIndex],
    name: newName,
    username: newUsername
  };

  localStorage.setItem('users', JSON.stringify(users));
  setCurrentUser(users[userIndex]);
  closeModal();
  renderHome();
}
