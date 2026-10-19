Trò chuyện với Gemini

Chỉ xóa bỏ các nội dung về chuyển đổi ngôn ngữ. Còn lại giữ nguyên. Làm sạch nội dung và chỉ cần copy paste
HTML

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cửa Hàng Online</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
            top: 0 !important;
            overflow-x: hidden; /* Ngăn chặn triệt để mọi hành vi tràn ngang vô ý */
        }
        @keyframes cart-pop {
            0% { transform: scale(1); }
            30% { transform: scale(1.4) rotate(-10deg); }
            50% { transform: scale(1.2) rotate(10deg); }
            70% { transform: scale(1.3) rotate(-5deg); }
            100% { transform: scale(1); }
        }
        .cart-animate-pop {
            animation: cart-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes badge-pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
            50% { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
        }
        .badge-pulse-active {
            animation: badge-pulse 1.5s infinite ease-in-out;
        }
        .cart-ripple {
            position: relative;
        }
        .cart-ripple::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 2px solid #0d9488;
            opacity: 0;
            transform: scale(1);
            transition: all 0.5s ease-out;
            pointer-events: none;
        }
        .cart-ripple.trigger::after {
            opacity: 1;
            transform: scale(1.8);
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 flex flex-col min-h-screen w-full">

    <header class="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
            
            <a href="#" class="inline-flex items-center gap-1.5 sm:gap-3 h-full shrink-0">
                <img src="./image/logo.png" alt="Apalu Store Logo" class="h-14 sm:h-16 w-auto object-contain">
                <span class="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 tracking-wide to-[#001F3F]">
                    Apalu-Store
                </span>
            </a>
                   
            <nav id="main-nav" class="hidden md:flex space-x-6 font-medium text-sm text-[#001F3F]">
                <a href="#" class="nav-item active relative group px-3 py-2 inline-block transform hover:-translate-y-0.5 transition-all duration-300 text-[#001F3F]/60 [&.active]:text-[#001F3F] [&.active]:font-bold">
                    Trang chủ
                    <span class="absolute bottom-0 left-3 right-3 h-[2px] bg-[#001F3F] transform scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100 transition-transform duration-300"></span>
                </a>

                <a href="#products-section" class="nav-item relative group px-3 py-2 inline-block transform hover:-translate-y-0.5 transition-all duration-300 text-[#001F3F]/60 [&.active]:text-[#001F3F] [&.active]:font-bold">
                    Sản phẩm
                    <span class="absolute bottom-0 left-3 right-3 h-[2px] bg-[#001F3F] transform scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100 transition-transform duration-300"></span>
                </a>

                <a href="#contact-section" class="nav-item relative group px-3 py-2 inline-block transform hover:-translate-y-0.5 transition-all duration-300 text-[#001F3F]/60 [&.active]:text-[#001F3F] [&.active]:font-bold">
                    Liên hệ
                    <span class="absolute bottom-0 left-3 right-3 h-[2px] bg-[#001F3F] transform scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100 transition-transform duration-300"></span>
                </a>
            </nav>

            <script>
                document.querySelectorAll('#main-nav .nav-item').forEach(item => {
                    item.addEventListener('click', function(e) {
                        const currentActive = document.querySelector('#main-nav .nav-item.active');
                        if (currentActive) {
                            currentActive.classList.remove('active');
                        }
                        this.classList.add('active');
                    });
                });
            </script>
            
            <div class="flex items-center space-x-1.5 sm:space-x-3 h-10 shrink-0">
                
                <button id="cart-toggle-btn" class="cart-ripple group relative h-9 w-9 sm:h-10 sm:w-10 bg-gray-50 hover:bg-teal-50 rounded-xl border border-gray-200 text-gray-700 hover:text-teal-600 transition-all duration-300 focus:outline-none shadow-sm flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-bag-shopping text-base sm:text-lg transition-transform group-hover:scale-110"></i>
                    <span id="cart-badge" class="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] sm:text-[10px] min-w-[16px] sm:min-w-[18px] h-4 sm:h-4.5 px-1 rounded-full flex items-center justify-center font-extrabold border border-white shadow-md transition-all duration-300 scale-0">0</span>
                </button>

                <div class="flex items-center justify-center space-x-1 sm:space-x-1.5 h-full bg-white text-gray-700 px-2 sm:px-3.5 rounded-xl border border-gray-200 text-[11px] sm:text-xs shadow-sm shrink-0">
                    <span class="text-sm sm:text-base">🇻🇳</span>
                    <span class="hidden md:inline max-w-[60px] truncate">Việt Nam</span>
                    <span id="selected-clock-time" class="text-[#001F3F] font-mono font-bold tracking-tight text-[11px] sm:text-xs">00:00:00</span>
                </div>

            </div>
        </div>
    </header>

    <section class="bg-[#2e1d4d] bg-cover bg-center bg-no-repeat text-white py-16 sm:py-28 px-4 text-center relative overflow-hidden w-full flex flex-col items-center justify-center min-h-[580px] sm:min-h-[700px]"
                style="background-image: url('image/background.jpeg');">
            
            <div class="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
                <div class="absolute inset-0 bg-indigo-950/20 mix-blend-multiply"></div>

                <div class="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-pink-400/[0.1] blur-[100px]"></div>

                <div class="relative w-[290px] h-[290px] sm:w-[500px] sm:h-[500px] flex items-center justify-center animate-[spin_30s_linear_infinite]">
                    
                    <svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="neon-glow-cancer" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        <g filter="url(#neon-glow-cancer)" stroke="#ffffff" stroke-width="5">
                            <path d="M 160,100 A 60,60 0 0,0 70,48" stroke-linecap="round" /> 
                            <path d="M 40,100 A 60,60 0 0,0 130,152" stroke-linecap="round" /> 
                            
                            <circle cx="68" cy="74" r="24" />                    
                            <circle cx="132" cy="126" r="24" /> 
                        </g>
                    </svg>

                    <div class="absolute inset-[-15px] rounded-full border border-white/10 border-dashed scale-105 animate-[spin_50s_linear_infinite_reverse]"></div> 
                </div>
            </div>

            <div class="max-w-3xl mx-auto relative z-10 flex flex-col items-center space-y-6 sm:space-y-8">

                <span class="bg-purple-500/25 backdrop-blur-md border border-purple-400/30 text-purple-100 text-xs sm:text-sm md:text-base font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full uppercase tracking-widest inline-flex items-center gap-2 shadow-sm">
                    <span>Bộ Sưu Tập 2026</span>
                </span>
                
                <h1 class="text-2xl sm:text-5xl font-serif font-bold tracking-tight leading-tight px-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-100 to-purple-200">
                    Trải nghiệm mua sắm Online tại Apalu-Store
                </h1>
                
                <div class="pt-2">
                    <a href="#products-section" class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-extrabold text-xs sm:text-sm px-8 sm:px-12 py-3.5 sm:py-4 rounded-full shadow-lg shadow-purple-950/40 hover:from-pink-400 hover:to-indigo-400 transition duration-300 inline-block transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide">
                        Mua Hàng Ngay 🌊
                    </a>
                </div>
            </div>

            <svg class="absolute bottom-0 left-0 w-full h-12 sm:h-24 text-gray-50 opacity-100 z-10 pointer-events-none" viewBox="0 0 1440 74" fill="currentColor" preserveAspectRatio="none">
                <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,32C960,43,1056,53,1152,58.7L1248,64L1344,64L1440,58.7L1440,74L1344,74L1248,74L1152,74L1056,74L964,74L864,74L768,74L672,74L576,74L480,74L384,74L288,74L192,74L96,74L48,74L0,74Z"></path>
            </svg>
    </section>

    <main id="products-section" class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 border-b border-gray-200 pb-5">
            <div>
                <h2 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Sản Phẩm Nổi Bật</h2>
                <p class="text-xs sm:text-sm text-gray-500 mt-0.5">Hiển thị 6 sản phẩm mỗi trang trên tổng số 30 sản phẩm</p>
            </div>
            <div id="page-indicator" class="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1.5 rounded-md"></div>
        </div>

        <div id="product-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px] transition-all duration-300"></div>

        <div class="flex justify-center items-center space-x-2 mt-10 sm:mt-12">
            <button id="prev-btn" class="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed">
                <i class="fa-solid fa-chevron-left mr-1"></i> Trước
            </button>
            <div id="pagination-numbers" class="flex space-x-1"></div>
            <button id="next-btn" class="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed">
                Sau <i class="fa-solid fa-chevron-right ml-1"></i>
            </button>
        </div>
    </main>

    <section id="contact-section" class="bg-gray-50 border-t border-gray-200 py-8 sm:py-10 px-4 w-full">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div class="space-y-4 sm:space-y-5 flex flex-col justify-between">
                <div>
                    <h2 class="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight mb-1.5">Thông Tin Liên Hệ & Thanh Toán</h2>
                    <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Gặp bất cứ khó khăn nào? Hãy liên hệ trực tiếp với chúng tôi theo thông tin chi tiết bên dưới:</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="p-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center space-x-2.5 hover:border-teal-500 transition-all duration-300 group">
                        <div class="bg-teal-50 text-teal-600 p-2.5 rounded-lg text-base group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="font-bold text-xs text-gray-500 tracking-tight">Địa chỉ cửa hàng</h4>
                            <p class="text-xs sm:text-sm text-gray-900 font-bold mt-0.5 truncate xs:whitespace-normal">21 Lê Văn Lương, Thanh Xuân, HN</p>
                        </div>
                    </div>

                    <div class="p-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center space-x-2.5 hover:border-teal-500 transition-all duration-300 group">
                        <div class="bg-teal-50 text-teal-600 p-2.5 rounded-lg text-base group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                            <i class="fa-solid fa-comments"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="font-bold text-xs text-gray-500 tracking-tight">Tư vấn Zalo 24/7</h4>
                            <p class="text-sm sm:text-base mt-0.5 font-mono">
                                <a href="https://zalo.me/0942135506" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:text-teal-700 hover:underline font-black tracking-wide">0942 135 506</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-xl border-2 border-teal-600/20 shadow-sm relative overflow-hidden bg-gradient-to-br from-white to-teal-50/10">
                    <div class="absolute top-0 left-0 w-1.5 h-full bg-teal-600"></div>
                    <h4 class="font-bold text-xs sm:text-sm text-teal-800 uppercase tracking-wider mb-3 flex items-center whitespace-nowrap">
                        <i class="fa-solid fa-credit-card mr-2 text-xs shrink-0"></i>Thông Tin Thanh Toán Chuyển Khoản
                    </h4>
                    
                    <div class="flex flex-col sm:flex-row gap-4 items-center">
                        <div class="flex-grow space-y-2.5 w-full text-xs sm:text-sm">
                            <div class="flex justify-between items-center py-1 border-b border-gray-100">
                                <span class="text-gray-500 font-medium">Ngân hàng:</span>
                                <span class="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">TPBANK (TPB)</span>
                            </div>
                            <div class="flex justify-between items-center py-1 border-b border-gray-100 gap-1">
                                <span class="text-gray-500 font-medium shrink-0">Số tài khoản:</span>
                                <div class="flex items-center space-x-2 justify-end">
                                    <button onclick="copySTK()" class="text-[10px] bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-2 py-1 rounded border border-teal-200 transition-all active:scale-95 flex items-center gap-1 shrink-0">
                                        <i class="fa-regular fa-copy"></i> <span id="copy-btn-text">Copy</span>
                                    </button>
                                    <span id="stk-text" class="font-mono font-black text-teal-600 text-sm sm:text-lg tracking-normal whitespace-nowrap">02738162203</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center py-1">
                                <span class="text-gray-500 font-medium">Chủ tài khoản:</span>
                                <span class="font-extrabold text-gray-900 uppercase tracking-wide">DANG QUOC DUNG</span>
                            </div>
                        </div>
                        <div class="w-full sm:w-auto h-auto bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center overflow-hidden group">
                            <img src="image/QR CODE.png" alt="Mã QR Thanh Toán" class="max-w-[140px] sm:max-w-[180px] w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col space-y-3 w-full min-h-[260px] sm:min-h-[330px] lg:h-auto">
                <form id="map-search-form" class="flex items-center bg-white border border-gray-300 rounded-xl p-1 shadow-sm focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/10 transition-all duration-300">
                    <div class="pl-2.5 text-gray-400 text-xs sm:text-sm"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <input type="text" id="map-search-input" placeholder="Tìm kiếm vị trí trên bản đồ..." value="21 Lê Văn Lương, Thanh Xuân, Hà Nội" class="w-full pl-1.5 pr-2 py-1.5 text-xs bg-transparent border-0 focus:outline-none text-gray-800 font-medium">
                    <button type="submit" class="bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-lg transition shadow-sm shrink-0">Tìm kiếm</button>
                </form>
                <div class="flex-grow rounded-xl overflow-hidden shadow-sm border border-gray-200 relative min-h-[220px]">
                    <iframe id="google-map-iframe" src="https://maps.google.com/maps?q=21%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng,%20Thanh%20Xu%C3%A2n,%20H%C3%A0%20N%E1%BB%99i&t=&z=15&ie=UTF8&iwloc=&output=embed" class="absolute inset-0 w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-900 text-gray-400 text-[10px] sm:text-xs py-5 border-t border-gray-800 text-center w-full">
        <div class="max-w-7xl mx-auto px-4">
            <p>© Thank You & See You Soon ©</p>
        </div>
    </footer>

    <div id="cart-modal" class="fixed inset-0 bg-black/50 z-50 flex justify-end opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="bg-white w-full max-w-md h-full shadow-2xl flex flex-col translate-x-full transition-transform duration-300" id="cart-modal-content">
            <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center"><i class="fa-solid fa-bag-shopping mr-2 text-teal-600"></i> Giỏ Hàng Của Bạn</h3>
                <button id="cart-close-btn" class="text-gray-400 hover:text-gray-600 p-1 rounded-lg text-lg"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div id="cart-items-list" class="flex-grow p-4 overflow-y-auto space-y-4"></div>
            <div class="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
                <div class="flex justify-between items-center text-xs sm:text-sm font-semibold text-gray-900">
                    <span>Tổng tiền thanh toán:</span>
                    <span id="cart-total-price" class="text-teal-600 text-base sm:text-lg font-extrabold">0 đ</span>
                </div>
                <button id="checkout-btn" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 sm:py-3 rounded-xl shadow-lg transition flex items-center justify-center space-x-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-paper-plane"></i>
                    <span>Gửi Đơn Hàng Qua Zalo</span>
                </button>
            </div>
        </div>
    </div>

    <script>
        const selectedClockTime = document.getElementById('selected-clock-time');

        const products = [
            { id: 1, name: "Áo thun thêu sao vàng", category: "Thời trang", priceNumber: 350000, price: "350.000 đ", image: "image/aovietnam.jpg", badge: "Bán chạy" },
            { id: 2, name: "Áo polo thêu hình lân", category: "Thời trang", priceNumber: 450000, price: "450.000 đ", image: "image/vong.jpg", badge: "Mới" },
            { id: 3, name: "Áo polo thể thao", category: "Thời trang", priceNumber: 350000, price: "350.000 đ", image: "image/vong1.jpg", badge: "Mới" },
            { id: 4, name: "Quần áo dài thể thao", category: "Thời trang", priceNumber: 1000000, price: "1.000.000 đ", image: "", badge: "Mới" },
            { id: 5, name: "Thảm tập Yoga", category: "Dụng cụ thể thao", priceNumber: 320000, price: "320.000 đ", image: "", badge: null },
            { id: 6, name: "Bộ dụng cụ trị liệu cơ bắp ( 5 món )", category: "Dụng cụ thể thao - Chăm sóc sức khỏe", priceNumber: 5000000, price: "5.000.000 đ", image: "", badge: null },
            { id: 7, name: "Túi đựng thể thao", category: "Dụng cụ thể thao", priceNumber: 250000, price: "250.000 đ", image: "", badge: null },
            { id: 8, name: "Charm/Nhẫn bạc cạo gió", category: "Phụ kiện", priceNumber: 5500000, price: "5.500.000 đ", image: "", badge: "Mới" },
            { id: 9, name: "Bản đồ quả địa cầu", category: "Phụ kiện", priceNumber: 800000, price: "800.000 đ", image: "", badge: "Bán chạy" },
            { id: 10, name: "Vòng tay chỉ ngũ sắc gắn đá phong thủy", category: "Phụ kiện", priceNumber: 320000, price: "320.000 đ", image: "", badge: null },
            { id: 11, name: "Vòng tay chỉ ngũ sắc gắn đá phong thủy", category: "Phụ kiện", priceNumber: 320000, price: "320.000 đ", image: "", badge: null },
            { id: 12, name: "10 hũ coffee hòa tan nước nóng/lạnh", category: "Phụ kiện", priceNumber: 200000, price: "200.000 đ", image: "", badge: null }
        ];

        let cart = [];
        const itemsPerPage = 6;
        let currentPage = 1;
        const totalPages = Math.ceil(products.length / itemsPerPage);

        const productContainer = document.getElementById('product-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const paginationNumbers = document.getElementById('pagination-numbers');
        const pageIndicator = document.getElementById('page-indicator');
        
        const cartToggleBtn = document.getElementById('cart-toggle-btn');
        const cartModal = document.getElementById('cart-modal');
        const cartModalContent = document.getElementById('cart-modal-content');
        const cartCloseBtn = document.getElementById('cart-close-btn');
        const cartBadge = document.getElementById('cart-badge');
        const cartItemsList = document.getElementById('cart-items-list');
        const cartTotalPrice = document.getElementById('cart-total-price');
        const checkoutBtn = document.getElementById('checkout-btn');

        function displayProducts(page) {
            productContainer.style.opacity = '0';
            productContainer.style.transform = 'translateY(8px)';

            setTimeout(() => {
                productContainer.innerHTML = '';
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const paginatedProducts = products.slice(startIndex, endIndex);

                paginatedProducts.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col group";
                    
                    productCard.innerHTML = `
                        <div class="relative overflow-hidden bg-gray-100 pt-[75%]">
                            <img src="${product.image}" alt="${product.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                            ${product.badge ? `<span class="absolute top-2.5 left-2.5 bg-red-500 text-white font-semibold text-[9px] px-2 py-0.5 rounded-full uppercase shadow-sm">${product.badge}</span>` : ''}
                            <button onclick="addToCart(${product.id})" class="absolute bottom-2.5 right-2.5 bg-white/90 hover:bg-teal-600 hover:text-white p-2 rounded-xl shadow-md transition-all opacity-100 sm:opacity-0 group-hover:opacity-100 translate-y-0 sm:translate-y-2 group-hover:translate-y-0 text-gray-700 z-10">
                                <i class="fa-solid fa-cart-plus text-sm"></i>
                            </button>
                        </div>
                        <div class="p-4 flex-grow flex flex-col justify-between space-y-2.5">
                            <div>
                                <span class="text-[10px] font-semibold uppercase tracking-wider text-teal-600">${product.category}</span>
                                <h3 class="font-bold text-gray-950 mt-0.5 group-hover:text-teal-600 transition text-xs sm:text-sm line-clamp-1">${product.name}</h3>
                            </div>
                            <div class="flex items-center justify-between pt-2 border-t border-gray-50">
                                <span class="font-extrabold text-teal-600 text-lg sm:text-xl">${product.price}</span>
                                <span class="text-[10px] text-yellow-500 flex items-center space-x-1">
                                    <img src="image/murom.svg" alt="D.Libu" class="w-20 h-20 object-contain">
                                </span>
                            </div>
                        </div>
                    `;
                    productContainer.appendChild(productCard);
                });

                productContainer.style.opacity = '1';
                productContainer.style.transform = 'translateY(0)';
                updatePaginationControls();
            }, 150); 
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) { existingItem.quantity += 1; } else { cart.push({ ...product, quantity: 1 }); }
            updateCartUI();
            
            cartToggleBtn.classList.remove('cart-animate-pop', 'trigger');
            void cartToggleBtn.offsetWidth; 
            cartToggleBtn.classList.add('cart-animate-pop', 'trigger');
            setTimeout(() => { cartToggleBtn.classList.remove('trigger'); }, 500);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        function changeQuantity(productId, delta) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) { removeFromCart(productId); } else { updateCartUI(); }
            }
        }

        function updateCartUI() {
            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartBadge.innerText = totalCount;

            if (totalCount > 0) {
                cartBadge.classList.remove('scale-0');
                cartBadge.classList.add('scale-100', 'badge-pulse-active');
                cartToggleBtn.classList.add('border-teal-400', 'bg-teal-50/50');
            } else {
                cartBadge.classList.remove('scale-100', 'badge-pulse-active');
                cartBadge.classList.add('scale-0');
                cartToggleBtn.classList.remove('border-teal-400', 'bg-teal-50/50');
            }

            if (cart.length === 0) {
                cartItemsList.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-gray-400 space-y-2 py-12">
                        <i class="fa-solid fa-basket-shopping text-4xl text-gray-300"></i>
                        <p class="text-xs">Giỏ hàng trống rỗng</p>
                    </div>`;
                cartTotalPrice.innerText = '0 đ';
                checkoutBtn.disabled = true;
                checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
                return;
            }

            checkoutBtn.disabled = false;
            checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            cartItemsList.innerHTML = '';
            
            let totalAmount = 0;
            cart.forEach(item => {
                totalAmount += item.priceNumber * item.quantity;
                const itemRow = document.createElement('div');
                itemRow.className = "flex items-center space-x-3 p-3 bg-gray-50 border border-gray-100 rounded-xl";
                itemRow.innerHTML = `
                    <img src="${item.image}" class="w-14 h-14 object-cover rounded-lg bg-white shrink-0 border border-gray-200">
                    <div class="flex-grow min-w-0">
                        <h4 class="text-xs font-bold text-gray-900 truncate">${item.name}</h4>
                        <p class="text-[11px] text-teal-600 font-extrabold mt-0.5">${item.price}</p>
                        <div class="flex items-center space-x-2 mt-1">
                            <button onclick="changeQuantity(${item.id}, -1)" class="w-4 h-4 bg-white border border-gray-300 rounded text-[10px] flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100">-</button>
                            <span class="text-[11px] font-semibold text-gray-800 w-3 text-center">${item.quantity}</span>
                            <button onclick="changeQuantity(${item.id}, 1)" class="w-4 h-4 bg-white border border-gray-300 rounded text-[10px] flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 p-2 text-xs transition"><i class="fa-regular fa-trash-can"></i></button>
                `;
                cartItemsList.appendChild(itemRow);
            });
            cartTotalPrice.innerText = totalAmount.toLocaleString('vi-VN') + ' đ';
        }

        function openCart() {
            cartModal.classList.remove('pointer-events-none', 'opacity-0');
            cartModalContent.classList.remove('translate-x-full');
        }

        function closeCart() {
            cartModal.classList.add('pointer-events-none', 'opacity-0');
            cartModalContent.classList.add('translate-x-full');
        }

        cartToggleBtn.addEventListener('click', openCart);
        cartCloseBtn.addEventListener('click', closeCart);
        cartModal.addEventListener('click', (e) => { if(e.target === cartModal) closeCart(); });

        checkoutBtn.addEventListener('click', () => {
            let message = "Xin chào Apalu-Store, tôi muốn đặt mua:\n";
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} (SL: ${item.quantity}) - Giá: ${item.price}\n`;
            });
            message += `Tổng cộng: ${cartTotalPrice.innerText}`;
            window.open(`https://zalo.me/0942135506?text=${encodeURIComponent(message)}`, '_blank');
        });

        function updatePaginationControls() {
            pageIndicator.innerText = `Trang ${currentPage} / ${totalPages}`;
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === totalPages;

            paginationNumbers.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.innerText = i;
                pageButton.className = `w-7 h-7 sm:w-9 sm:h-9 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    currentPage === i 
                    ? 'bg-teal-600 text-white shadow-md' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    displayProducts(currentPage);
                    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
                });
                paginationNumbers.appendChild(pageButton);
            }
        }

        prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; displayProducts(currentPage); } });
        nextBtn.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; displayProducts(currentPage); } });

        function updateClocks() {
            const now = new Date();
            const optionsActive = { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            if (selectedClockTime) { 
                selectedClockTime.innerText = now.toLocaleTimeString('en-GB', optionsActive); 
            }
        }

        setInterval(updateClocks, 1000);
        updateClocks();

        function copySTK() {
            const stk = document.getElementById('stk-text').innerText;
            navigator.clipboard.writeText(stk).then(() => {
                const btnText = document.getElementById('copy-btn-text');
                btnText.innerText = "Đã chép!";
                setTimeout(() => { btnText.innerText = "Copy"; }, 2000);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            displayProducts(currentPage);
        });
    </script>
</body>
</html>

Bổ sung thêm logo cờ và thời gian 195 quốc gia theo giờ nước sở tại

Dưới đây là mã nguồn HTML hoàn chỉnh đã được tích hợp danh sách 195 quốc gia với logo cờ và thời gian thực theo giờ nước sở tại (có kèm ô tìm kiếm nhanh trong menu thả xuống). Bạn có thể sao chép và dán trực tiếp:
HTML

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cửa Hàng Online</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
            top: 0 !important;
            overflow-x: hidden;
        }
        @keyframes cart-pop {
            0% { transform: scale(1); }
            30% { transform: scale(1.4) rotate(-10deg); }
            50% { transform: scale(1.2) rotate(10deg); }
            70% { transform: scale(1.3) rotate(-5deg); }
            100% { transform: scale(1); }
        }
        .cart-animate-pop {
            animation: cart-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes badge-pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
            50% { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
        }
        .badge-pulse-active {
            animation: badge-pulse 1.5s infinite ease-in-out;
        }
        .cart-ripple {
            position: relative;
        }
        .cart-ripple::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 2px solid #0d9488;
            opacity: 0;
            transform: scale(1);
            transition: all 0.5s ease-out;
            pointer-events: none;
        }
        .cart-ripple.trigger::after {
            opacity: 1;
            transform: scale(1.8);
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 flex flex-col min-h-screen w-full">

    <header class="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
            
            <a href="#" class="inline-flex items-center gap-1.5 sm:gap-3 h-full shrink-0">
                <img src="./image/logo.png" alt="Apalu Store Logo" class="h-14 sm:h-16 w-auto object-contain">
                <span class="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 tracking-wide to-[#001F3F]">
                    Apalu-Store
                </span>
            </a>
                   
            <nav id="main-nav" class="hidden md:flex space-x-6 font-medium text-sm text-[#001F3F]">
                <a href="#" class="nav-item active relative group px-3 py-2 inline-block transform hover:-translate-y-0.5 transition-all duration-300 text-[#001F3F]/60 [&.active]:text-[#001F3F] [&.active]:font-bold">
                    Trang chủ
                    <span class="absolute bottom-0 left-3 right-3 h-[2px] bg-[#001F3F] transform scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100 transition-transform duration-300"></span>
                </a>

                <a href="#products-section" class="nav-item relative group px-3 py-2 inline-block transform hover:-translate-y-0.5 transition-all duration-300 text-[#001F3F]/60 [&.active]:text-[#001F3F] [&.active]:font-bold">
                    Sản phẩm
                    <span class="absolute bottom-0 left-3 right-3 h-[2px] bg-[#001F3F] transform scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100 transition-transform duration-300"></span>
                </a>

                <a href="#contact-section" class="nav-item relative group px-3 py-2 inline-block transform hover:-translate-y-0.5 transition-all duration-300 text-[#001F3F]/60 [&.active]:text-[#001F3F] [&.active]:font-bold">
                    Liên hệ
                    <span class="absolute bottom-0 left-3 right-3 h-[2px] bg-[#001F3F] transform scale-x-0 group-hover:scale-x-100 group-[.active]:scale-x-100 transition-transform duration-300"></span>
                </a>
            </nav>

            <script>
                document.querySelectorAll('#main-nav .nav-item').forEach(item => {
                    item.addEventListener('click', function(e) {
                        const currentActive = document.querySelector('#main-nav .nav-item.active');
                        if (currentActive) {
                            currentActive.classList.remove('active');
                        }
                        this.classList.add('active');
                    });
                });
            </script>
            
            <div class="flex items-center space-x-1.5 sm:space-x-3 h-10 shrink-0">
                
                <button id="cart-toggle-btn" class="cart-ripple group relative h-9 w-9 sm:h-10 sm:w-10 bg-gray-50 hover:bg-teal-50 rounded-xl border border-gray-200 text-gray-700 hover:text-teal-600 transition-all duration-300 focus:outline-none shadow-sm flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-bag-shopping text-base sm:text-lg transition-transform group-hover:scale-110"></i>
                    <span id="cart-badge" class="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] sm:text-[10px] min-w-[16px] sm:min-w-[18px] h-4 sm:h-4.5 px-1 rounded-full flex items-center justify-center font-extrabold border border-white shadow-md transition-all duration-300 scale-0">0</span>
                </button>

                <!-- Đồng hồ & Danh sách 195 quốc gia -->
                <div class="relative inline-block text-left h-9 sm:h-10" id="country-clock-wrapper">
                    <button id="country-clock-btn" class="flex items-center justify-center space-x-1 sm:space-x-1.5 h-full bg-white hover:bg-gray-50 text-gray-700 px-2 sm:px-3.5 rounded-xl border border-gray-200 transition font-medium focus:outline-none text-[11px] sm:text-xs shadow-sm shrink-0">
                        <span id="selected-clock-icon" class="text-sm sm:text-base">🇻🇳</span>
                        <span id="selected-clock-name" class="hidden md:inline max-w-[90px] truncate">Việt Nam</span>
                        <span id="selected-clock-time" class="text-[#001F3F] font-mono font-bold tracking-tight text-[11px] sm:text-xs">00:00:00</span>
                        <i class="fa-solid fa-chevron-down text-[8px] sm:text-[9px] text-gray-400 opacity-80"></i>
                    </button>
    
                    <div id="country-clock-menu" class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 pointer-events-none transition-all duration-200 z-50 py-2 origin-top-right">
                        <div class="px-3 pb-2 border-b border-gray-100">
                            <input type="text" id="country-search-input" placeholder="Tìm kiếm quốc gia..." class="w-full px-2.5 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 font-medium text-gray-800">
                        </div>
                        <div id="country-clock-list" class="max-h-64 overflow-y-auto py-1">
                            <!-- Danh sách quốc gia được load bằng JS -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>

    <section class="bg-[#2e1d4d] bg-cover bg-center bg-no-repeat text-white py-16 sm:py-28 px-4 text-center relative overflow-hidden w-full flex flex-col items-center justify-center min-h-[580px] sm:min-h-[700px]"
                style="background-image: url('image/background.jpeg');">
            
            <div class="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
                <div class="absolute inset-0 bg-indigo-950/20 mix-blend-multiply"></div>

                <div class="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-pink-400/[0.1] blur-[100px]"></div>

                <div class="relative w-[290px] h-[290px] sm:w-[500px] sm:h-[500px] flex items-center justify-center animate-[spin_30s_linear_infinite]">
                    
                    <svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="neon-glow-cancer" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        <g filter="url(#neon-glow-cancer)" stroke="#ffffff" stroke-width="5">
                            <path d="M 160,100 A 60,60 0 0,0 70,48" stroke-linecap="round" /> 
                            <path d="M 40,100 A 60,60 0 0,0 130,152" stroke-linecap="round" /> 
                            
                            <circle cx="68" cy="74" r="24" />                    
                            <circle cx="132" cy="126" r="24" /> 
                        </g>
                    </svg>

                    <div class="absolute inset-[-15px] rounded-full border border-white/10 border-dashed scale-105 animate-[spin_50s_linear_infinite_reverse]"></div> 
                </div>
            </div>

            <div class="max-w-3xl mx-auto relative z-10 flex flex-col items-center space-y-6 sm:space-y-8">

                <span class="bg-purple-500/25 backdrop-blur-md border border-purple-400/30 text-purple-100 text-xs sm:text-sm md:text-base font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full uppercase tracking-widest inline-flex items-center gap-2 shadow-sm">
                    <span>Bộ Sưu Tập 2026</span>
                </span>
                
                <h1 class="text-2xl sm:text-5xl font-serif font-bold tracking-tight leading-tight px-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-100 to-purple-200">
                    Trải nghiệm mua sắm Online tại Apalu-Store
                </h1>
                
                <div class="pt-2">
                    <a href="#products-section" class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-extrabold text-xs sm:text-sm px-8 sm:px-12 py-3.5 sm:py-4 rounded-full shadow-lg shadow-purple-950/40 hover:from-pink-400 hover:to-indigo-400 transition duration-300 inline-block transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide">
                        Mua Hàng Ngay 🌊
                    </a>
                </div>
            </div>

            <svg class="absolute bottom-0 left-0 w-full h-12 sm:h-24 text-gray-50 opacity-100 z-10 pointer-events-none" viewBox="0 0 1440 74" fill="currentColor" preserveAspectRatio="none">
                <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,32C960,43,1056,53,1152,58.7L1248,64L1344,64L1440,58.7L1440,74L1344,74L1248,74L1152,74L1056,74L964,74L864,74L768,74L672,74L576,74L480,74L384,74L288,74L192,74L96,74L48,74L0,74Z"></path>
            </svg>
    </section>

    <main id="products-section" class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 border-b border-gray-200 pb-5">
            <div>
                <h2 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Sản Phẩm Nổi Bật</h2>
                <p class="text-xs sm:text-sm text-gray-500 mt-0.5">Hiển thị 6 sản phẩm mỗi trang trên tổng số 30 sản phẩm</p>
            </div>
            <div id="page-indicator" class="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1.5 rounded-md"></div>
        </div>

        <div id="product-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px] transition-all duration-300"></div>

        <div class="flex justify-center items-center space-x-2 mt-10 sm:mt-12">
            <button id="prev-btn" class="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed">
                <i class="fa-solid fa-chevron-left mr-1"></i> Trước
            </button>
            <div id="pagination-numbers" class="flex space-x-1"></div>
            <button id="next-btn" class="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed">
                Sau <i class="fa-solid fa-chevron-right ml-1"></i>
            </button>
        </div>
    </main>

    <section id="contact-section" class="bg-gray-50 border-t border-gray-200 py-8 sm:py-10 px-4 w-full">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div class="space-y-4 sm:space-y-5 flex flex-col justify-between">
                <div>
                    <h2 class="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight mb-1.5">Thông Tin Liên Hệ & Thanh Toán</h2>
                    <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Gặp bất cứ khó khăn nào? Hãy liên hệ trực tiếp với chúng tôi theo thông tin chi tiết bên dưới:</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="p-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center space-x-2.5 hover:border-teal-500 transition-all duration-300 group">
                        <div class="bg-teal-50 text-teal-600 p-2.5 rounded-lg text-base group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="font-bold text-xs text-gray-500 tracking-tight">Địa chỉ cửa hàng</h4>
                            <p class="text-xs sm:text-sm text-gray-900 font-bold mt-0.5 truncate xs:whitespace-normal">21 Lê Văn Lương, Thanh Xuân, HN</p>
                        </div>
                    </div>

                    <div class="p-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center space-x-2.5 hover:border-teal-500 transition-all duration-300 group">
                        <div class="bg-teal-50 text-teal-600 p-2.5 rounded-lg text-base group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                            <i class="fa-solid fa-comments"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="font-bold text-xs text-gray-500 tracking-tight">Tư vấn Zalo 24/7</h4>
                            <p class="text-sm sm:text-base mt-0.5 font-mono">
                                <a href="https://zalo.me/0942135506" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:text-teal-700 hover:underline font-black tracking-wide">0942 135 506</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-xl border-2 border-teal-600/20 shadow-sm relative overflow-hidden bg-gradient-to-br from-white to-teal-50/10">
                    <div class="absolute top-0 left-0 w-1.5 h-full bg-teal-600"></div>
                    <h4 class="font-bold text-xs sm:text-sm text-teal-800 uppercase tracking-wider mb-3 flex items-center whitespace-nowrap">
                        <i class="fa-solid fa-credit-card mr-2 text-xs shrink-0"></i>Thông Tin Thanh Toán Chuyển Khoản
                    </h4>
                    
                    <div class="flex flex-col sm:flex-row gap-4 items-center">
                        <div class="flex-grow space-y-2.5 w-full text-xs sm:text-sm">
                            <div class="flex justify-between items-center py-1 border-b border-gray-100">
                                <span class="text-gray-500 font-medium">Ngân hàng:</span>
                                <span class="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">TPBANK (TPB)</span>
                            </div>
                            <div class="flex justify-between items-center py-1 border-b border-gray-100 gap-1">
                                <span class="text-gray-500 font-medium shrink-0">Số tài khoản:</span>
                                <div class="flex items-center space-x-2 justify-end">
                                    <button onclick="copySTK()" class="text-[10px] bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-2 py-1 rounded border border-teal-200 transition-all active:scale-95 flex items-center gap-1 shrink-0">
                                        <i class="fa-regular fa-copy"></i> <span id="copy-btn-text">Copy</span>
                                    </button>
                                    <span id="stk-text" class="font-mono font-black text-teal-600 text-sm sm:text-lg tracking-normal whitespace-nowrap">02738162203</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center py-1">
                                <span class="text-gray-500 font-medium">Chủ tài khoản:</span>
                                <span class="font-extrabold text-gray-900 uppercase tracking-wide">DANG QUOC DUNG</span>
                            </div>
                        </div>
                        <div class="w-full sm:w-auto h-auto bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center overflow-hidden group">
                            <img src="image/QR CODE.png" alt="Mã QR Thanh Toán" class="max-w-[140px] sm:max-w-[180px] w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col space-y-3 w-full min-h-[260px] sm:min-h-[330px] lg:h-auto">
                <form id="map-search-form" class="flex items-center bg-white border border-gray-300 rounded-xl p-1 shadow-sm focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/10 transition-all duration-300">
                    <div class="pl-2.5 text-gray-400 text-xs sm:text-sm"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <input type="text" id="map-search-input" placeholder="Tìm kiếm vị trí trên bản đồ..." value="21 Lê Văn Lương, Thanh Xuân, Hà Nội" class="w-full pl-1.5 pr-2 py-1.5 text-xs bg-transparent border-0 focus:outline-none text-gray-800 font-medium">
                    <button type="submit" class="bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-lg transition shadow-sm shrink-0">Tìm kiếm</button>
                </form>
                <div class="flex-grow rounded-xl overflow-hidden shadow-sm border border-gray-200 relative min-h-[220px]">
                    <iframe id="google-map-iframe" src="https://maps.google.com/maps?q=21%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng,%20Thanh%20Xu%C3%A2n,%20H%C3%A0%20N%E1%BB%99i&t=&z=15&ie=UTF8&iwloc=&output=embed" class="absolute inset-0 w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-900 text-gray-400 text-[10px] sm:text-xs py-5 border-t border-gray-800 text-center w-full">
        <div class="max-w-7xl mx-auto px-4">
            <p>© Thank You & See You Soon ©</p>
        </div>
    </footer>

    <div id="cart-modal" class="fixed inset-0 bg-black/50 z-50 flex justify-end opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="bg-white w-full max-w-md h-full shadow-2xl flex flex-col translate-x-full transition-transform duration-300" id="cart-modal-content">
            <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center"><i class="fa-solid fa-bag-shopping mr-2 text-teal-600"></i> Giỏ Hàng Của Bạn</h3>
                <button id="cart-close-btn" class="text-gray-400 hover:text-gray-600 p-1 rounded-lg text-lg"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div id="cart-items-list" class="flex-grow p-4 overflow-y-auto space-y-4"></div>
            <div class="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
                <div class="flex justify-between items-center text-xs sm:text-sm font-semibold text-gray-900">
                    <span>Tổng tiền thanh toán:</span>
                    <span id="cart-total-price" class="text-teal-600 text-base sm:text-lg font-extrabold">0 đ</span>
                </div>
                <button id="checkout-btn" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 sm:py-3 rounded-xl shadow-lg transition flex items-center justify-center space-x-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-paper-plane"></i>
                    <span>Gửi Đơn Hàng Qua Zalo</span>
                </button>
            </div>
        </div>
    </div>

    <script>
        // Danh sách 195 quốc gia và vùng lãnh thổ kèm cờ và múi giờ tiêu chuẩn
        const countriesList = [
            { name: "Afghanistan", flag: "🇦🇫", tz: "Asia/Kabul" },
            { name: "Ai Cập", flag: "🇪🇬", tz: "Africa/Cairo" },
            { name: "Albania", flag: "🇦🇱", tz: "Europe/Tirane" },
            { name: "Algérie", flag: "🇩🇿", tz: "Africa/Algiers" },
            { name: "Andorra", flag: "🇦🇩", tz: "Europe/Andorra" },
            { name: "Angola", flag: "🇦🇴", tz: "Africa/Luanda" },
            { name: "Anh", flag: "🇬🇧", tz: "Europe/London" },
            { name: "Antigua và Barbuda", flag: "🇦🇬", tz: "America/Antigua" },
            { name: "Ả Rập Xê Út", flag: "🇸🇦", tz: "Asia/Riyadh" },
            { name: "Argentina", flag: "🇦🇷", tz: "America/Argentina/Buenos_Aires" },
            { name: "Armenia", flag: "🇦🇲", tz: "Asia/Yerevan" },
            { name: "Úc (Sydney)", flag: "🇦🇺", tz: "Australia/Sydney" },
            { name: "Áo", flag: "🇦🇹", tz: "Europe/Vienna" },
            { name: "Azerbaijan", flag: "🇦🇿", tz: "Asia/Baku" },
            { name: "Ấn Độ", flag: "🇮🇳", tz: "Asia/Kolkata" },
            { name: "Bahamas", flag: "🇧🇸", tz: "America/Nassau" },
            { name: "Bahrain", flag: "🇧🇭", tz: "Asia/Bahrain" },
            { name: "Bangladesh", flag: "🇧🇩", tz: "Asia/Dhaka" },
            { name: "Barbados", flag: "🇧🇧", tz: "America/Barbados" },
            { name: "Belarus", flag: "🇧🇾", tz: "Europe/Minsk" },
            { name: "Bỉ", flag: "🇧🇪", tz: "Europe/Brussels" },
            { name: "Belize", flag: "🇧🇿", tz: "America/Belize" },
            { name: "Benin", flag: "🇧🇯", tz: "Africa/Porto-Novo" },
            { name: "Bhutan", flag: "🇧🇹", tz: "Asia/Thimphu" },
            { name: "Bolivia", flag: "🇧🇴", tz: "America/La_Paz" },
            { name: "Bosnia và Herzegovina", flag: "🇧🇦", tz: "Europe/Sarajevo" },
            { name: "Botswana", flag: "🇧🇼", tz: "Africa/Gaborone" },
            { name: "Brazil", flag: "🇧🇷", tz: "America/Sao_Paulo" },
            { name: "Brunei", flag: "🇧🇳", tz: "Asia/Brunei" },
            { name: "Bulgaria", flag: "🇧🇬", tz: "Europe/Sofia" },
            { name: "Burkina Faso", flag: "🇧🇫", tz: "Africa/Ouagadougou" },
            { name: "Burundi", flag: "🇧🇮", tz: "Africa/Bujumbura" },
            { name: "Cameroon", flag: "🇨🇲", tz: "Africa/Douala" },
            { name: "Canada (Toronto)", flag: "🇨🇦", tz: "America/Toronto" },
            { name: "Cabo Verde", flag: "🇨🇻", tz: "Atlantic/Cape_Verde" },
            { name: "Chad", flag: "🇹🇩", tz: "Africa/Ndjamena" },
            { name: "Chile", flag: "🇨🇱", tz: "America/Santiago" },
            { name: "Colombia", flag: "🇨🇴", tz: "America/Bogota" },
            { name: "Comoros", flag: "🇰🇲", tz: "Indian/Comoro" },
            { name: "Congo", flag: "🇨🇬", tz: "Africa/Brazzaville" },
            { name: "Costa Rica", flag: "🇨🇷", tz: "America/Costa_Rica" },
            { name: "Bờ Biển Ngà", flag: "🇨🇮", tz: "Africa/Abidjan" },
            { name: "Croatia", flag: "🇭🇷", tz: "Europe/Zagreb" },
            { name: "Cuba", flag: "🇨🇺", tz: "America/Havana" },
            { name: "Síp", flag: "🇨🇾", tz: "Asia/Nicosia" },
            { name: "Cộng hòa Séc", flag: "🇨🇿", tz: "Europe/Prague" },
            { name: "Đan Mạch", flag: "🇩🇰", tz: "Europe/Copenhagen" },
            { name: "Djibouti", flag: "🇩🇯", tz: "Africa/Djibouti" },
            { name: "Dominica", flag: "🇩🇲", tz: "America/Dominica" },
            { name: "Cộng hòa Dominica", flag: "🇩🇴", tz: "America/Santo_Domingo" },
            { name: "Ecuador", flag: "🇪🇨", tz: "America/Guayaquil" },
            { name: "El Salvador", flag: "🇸🇻", tz: "America/El_Salvador" },
            { name: "Guinea Xích Đạo", flag: "🇬🇶", tz: "Africa/Malabo" },
            { name: "Eritrea", flag: "🇪🇷", tz: "Africa/Asmara" },
            { name: "Estonia", flag: "🇪🇪", tz: "Europe/Tallinn" },
            { name: "Eswatini", flag: "🇸🇿", tz: "Africa/Mbabane" },
            { name: "Ethiopia", flag: "🇪🇹", tz: "Africa/Addis_Ababa" },
            { name: "Fiji", flag: "🇫🇯", tz: "Pacific/Fiji" },
            { name: "Phần Lan", flag: "🇫🇮", tz: "Europe/Helsinki" },
            { name: "Pháp", flag: "🇫🇷", tz: "Europe/Paris" },
            { name: "Gabon", flag: "🇬🇦", tz: "Africa/Libreville" },
            { name: "Gambia", flag: "🇬🇲", tz: "Africa/Banjul" },
            { name: "Georgia", flag: "🇬🇪", tz: "Asia/Tbilisi" },
            { name: "Đức", flag: "🇩🇪", tz: "Europe/Berlin" },
            { name: "Ghana", flag: "🇬🇭", tz: "Africa/Accra" },
            { name: "Hy Lạp", flag: "🇬🇷", tz: "Europe/Athens" },
            { name: "Grenada", flag: "🇬🇩", tz: "America/Grenada" },
            { name: "Guatemala", flag: "🇬🇹", tz: "America/Guatemala" },
            { name: "Guinea", flag: "🇬🇳", tz: "Africa/Conakry" },
            { name: "Guinea-Bissau", flag: "🇬🇼", tz: "Africa/Bissau" },
            { name: "Guyana", flag: "🇬🇾", tz: "America/Guyana" },
            { name: "Haiti", flag: "🇭🇹", tz: "America/Port-au-Prince" },
            { name: "Honduras", flag: "🇭🇳", tz: "America/Tegucigalpa" },
            { name: "Hungary", flag: "🇭🇺", tz: "Europe/Budapest" },
            { name: "Iceland", flag: "🇮🇸", tz: "Atlantic/Reykjavik" },
            { name: "Indonesia", flag: "🇮🇩", tz: "Asia/Jakarta" },
            { name: "Iran", flag: "🇮🇷", tz: "Asia/Tehran" },
            { name: "Iraq", flag: "🇮🇶", tz: "Asia/Baghdad" },
            { name: "Ireland", flag: "🇮🇪", tz: "Europe/Dublin" },
            { name: "Israel", flag: "🇮🇱", tz: "Asia/Jerusalem" },
            { name: "Ý", flag: "🇮🇹", tz: "Europe/Rome" },
            { name: "Jamaica", flag: "🇯🇲", tz: "America/Jamaica" },
            { name: "Nhật Bản", flag: "🇯🇵", tz: "Asia/Tokyo" },
            { name: "Jordan", flag: "🇯🇴", tz: "Asia/Amman" },
            { name: "Kazakhstan", flag: "🇰🇿", tz: "Asia/Almaty" },
            { name: "Kenya", flag: "🇰🇪", tz: "Africa/Nairobi" },
            { name: "Kiribati", flag: "🇰🇮", tz: "Pacific/Tarawa" },
            { name: "Kuwait", flag: "🇰🇼", tz: "Asia/Kuwait" },
            { name: "Kyrgyzstan", flag: "🇰🇬", tz: "Asia/Bishkek" },
            { name: "Lào", flag: "🇱🇦", tz: "Asia/Vientiane" },
            { name: "Latvia", flag: "🇱🇻", tz: "Europe/Riga" },
            { name: "Lebanon", flag: "🇱🇧", tz: "Asia/Beirut" },
            { name: "Lesotho", flag: "🇱🇸", tz: "Africa/Maseru" },
            { name: "Liberia", flag: "🇱🇷", tz: "Africa/Monrovia" },
            { name: "Libya", flag: "🇱🇾", tz: "Africa/Tripoli" },
            { name: "Liechtenstein", flag: "🇱🇮", tz: "Europe/Vaduz" },
            { name: "Litva", flag: "🇱🇹", tz: "Europe/Vilnius" },
            { name: "Luxembourg", flag: "🇱🇺", tz: "Europe/Luxembourg" },
            { name: "Madagascar", flag: "🇲🇬", tz: "Indian/Antananarivo" },
            { name: "Malawi", flag: "🇲🇼", tz: "Africa/Blantyre" },
            { name: "Malaysia", flag: "🇲🇾", tz: "Asia/Kuala_Lumpur" },
            { name: "Maldives", flag: "🇲🇻", tz: "Indian/Maldives" },
            { name: "Mali", flag: "🇲🇱", tz: "Africa/Bamako" },
            { name: "Malta", flag: "🇲🇹", tz: "Europe/Malta" },
            { name: "Quần đảo Marshall", flag: "🇲🇭", tz: "Pacific/Majuro" },
            { name: "Mauritania", flag: "🇲🇷", tz: "Africa/Nouakchott" },
            { name: "Mauritius", flag: "🇲🇺", tz: "Indian/Mauritius" },
            { name: "Mexico", flag: "🇲🇽", tz: "America/Mexico_City" },
            { name: "Micronesia", flag: "🇫🇲", tz: "Pacific/Pohnpei" },
            { name: "Moldova", flag: "🇲🇩", tz: "Europe/Chisinau" },
            { name: "Monaco", flag: "🇲🇨", tz: "Europe/Monaco" },
            { name: "Mông Cổ", flag: "🇲🇳", tz: "Asia/Ulaanbaatar" },
            { name: "Montenegro", flag: "🇲🇪", tz: "Europe/Podgorica" },
            { name: "Maroc", flag: "🇲🇦", tz: "Africa/Casablanca" },
            { name: "Mozambique", flag: "🇲🇿", tz: "Africa/Maputo" },
            { name: "Myanmar", flag: "🇲🇲", tz: "Asia/Yangon" },
            { name: "Namibia", flag: "🇳🇦", tz: "Africa/Windhoek" },
            { name: "Nauru", flag: "🇳🇷", tz: "Pacific/Nauru" },
            { name: "Nepal", flag: "🇳🇵", tz: "Asia/Kathmandu" },
            { name: "Hà Lan", flag: "🇳🇱", tz: "Europe/Amsterdam" },
            { name: "New Zealand", flag: "🇳🇿", tz: "Pacific/Auckland" },
            { name: "Nicaragua", flag: "🇳🇮", tz: "America/Managua" },
            { name: "Niger", flag: "🇳🇪", tz: "Africa/Niamey" },
            { name: "Nigeria", flag: "🇳🇬", tz: "Africa/Lagos" },
            { name: "CHDCND Triều Tiên", flag: "🇰🇵", tz: "Asia/Pyongyang" },
            { name: "Bắc Macedonia", flag: "🇲🇰", tz: "Europe/Skopje" },
            { name: "Na Uy", flag: "🇳🇴", tz: "Europe/Oslo" },
            { name: "Oman", flag: "🇴🇲", tz: "Asia/Muscat" },
            { name: "Pakistan", flag: "🇵🇰", tz: "Asia/Karachi" },
            { name: "Palau", flag: "🇵🇼", tz: "Pacific/Palau" },
            { name: "Panama", flag: "🇵🇦", tz: "America/Panama" },
            { name: "Papua New Guinea", flag: "🇵🇬", tz: "Pacific/Port_Moresby" },
            { name: "Paraguay", flag: "🇵🇾", tz: "America/Asuncion" },
            { name: "Peru", flag: "🇵🇪", tz: "America/Lima" },
            { name: "Philippines", flag: "🇵🇭", tz: "Asia/Manila" },
            { name: "Ba Lan", flag: "🇵🇱", tz: "Europe/Warsaw" },
            { name: "Bồ Đào Nha", flag: "🇵🇹", tz: "Europe/Lisbon" },
            { name: "Qatar", flag: "🇶🇦", tz: "Asia/Qatar" },
            { name: "Romania", flag: "🇷🇴", tz: "Europe/Bucharest" },
            { name: "Nga (Moscow)", flag: "🇷🇺", tz: "Europe/Moscow" },
            { name: "Rwanda", flag: "🇷🇼", tz: "Africa/Kigali" },
            { name: "Saint Kitts và Nevis", flag: "🇰🇳", tz: "America/St_Kitts" },
            { name: "Saint Lucia", flag: "🇱🇨", tz: "America/St_Lucia" },
            { name: "Saint Vincent và Grenadines", flag: "🇻🇨", tz: "America/St_Vincent" },
            { name: "Samoa", flag: "🇼🇸", tz: "Pacific/Apia" },
            { name: "San Marino", flag: "🇸🇲", tz: "Europe/San_Marino" },
            { name: "Sao Tome và Principe", flag: "🇸🇹", tz: "Africa/Sao_Tome" },
            { name: "Senegal", flag: "🇸🇳", tz: "Africa/Dakar" },
            { name: "Serbia", flag: "🇷🇸", tz: "Europe/Belgrade" },
            { name: "Seychelles", flag: "🇸🇨", tz: "Indian/Mahe" },
            { name: "Sierra Leone", flag: "🇸🇱", tz: "Africa/Freetown" },
            { name: "Singapore", flag: "🇸🇬", tz: "Asia/Singapore" },
            { name: "Slovakia", flag: "🇸🇰", tz: "Europe/Bratislava" },
            { name: "Slovenia", flag: "🇸🇮", tz: "Europe/Ljubljana" },
            { name: "Quần đảo Solomon", flag: "🇸🇧", tz: "Pacific/Guadalcanal" },
            { name: "Somalia", flag: "🇸🇴", tz: "Africa/Mogadishu" },
            { name: "Nam Phi", flag: "🇿🇦", tz: "Africa/Johannesburg" },
            { name: "Hàn Quốc", flag: "🇰🇷", tz: "Asia/Seoul" },
            { name: "Nam Sudan", flag: "🇸🇸", tz: "Africa/Juba" },
            { name: "Tây Ban Nha", flag: "🇪🇸", tz: "Europe/Madrid" },
            { name: "Sri Lanka", flag: "🇱🇰", tz: "Asia/Colombo" },
            { name: "Sudan", flag: "🇸🇩", tz: "Africa/Khartoum" },
            { name: "Suriname", flag: "🇸🇷", tz: "America/Paramaribo" },
            { name: "Thụy Điển", flag: "🇸🇪", tz: "Europe/Stockholm" },
            { name: "Thụy Sĩ", flag: "🇨🇭", tz: "Europe/Zurich" },
            { name: "Syria", flag: "🇸🇾", tz: "Asia/Damascus" },
            { name: "Đài Loan", flag: "🇹🇼", tz: "Asia/Taipei" },
            { name: "Tajikistan", flag: "🇹🇯", tz: "Asia/Dushanbe" },
            { name: "Tanzania", flag: "🇹🇿", tz: "Africa/Dar_es_Salaam" },
            { name: "Thái Lan", flag: "🇹🇭", tz: "Asia/Bangkok" },
            { name: "Timor-Leste", flag: "🇹🇱", tz: "Asia/Dili" },
            { name: "Togo", flag: "🇹🇬", tz: "Africa/Lome" },
            { name: "Tonga", flag: "🇹🇴", tz: "Pacific/Tongatapu" },
            { name: "Trinidad và Tobago", flag: "🇹🇹", tz: "America/Port_of_Spain" },
            { name: "Tunisia", flag: "🇹🇳", tz: "Africa/Tunis" },
            { name: "Thổ Nhĩ Kỳ", flag: "🇹🇷", tz: "Europe/Istanbul" },
            { name: "Turkmenistan", flag: "🇹🇲", tz: "Asia/Ashgabat" },
            { name: "Tuvalu", flag: "🇹🇻", tz: "Pacific/Funafuti" },
            { name: "Uganda", flag: "🇺🇬", tz: "Africa/Kampala" },
            { name: "Ukraina", flag: "🇺🇦", tz: "Europe/Kiev" },
            { name: "UAE", flag: "🇦🇪", tz: "Asia/Dubai" },
            { name: "Uruguay", flag: "🇺🇾", tz: "America/Montevideo" },
            { name: "Uzbekistan", flag: "🇺🇿", tz: "Asia/Tashkent" },
            { name: "Vanuatu", flag: "🇻🇺", tz: "Pacific/Efate" },
            { name: "Thành Vatican", flag: "🇻🇦", tz: "Europe/Vatican" },
            { name: "Venezuela", flag: "🇻🇪", tz: "America/Caracas" },
            { name: "Việt Nam", flag: "🇻🇳", tz: "Asia/Ho_Chi_Minh" },
            { name: "Yemen", flag: "🇾🇪", tz: "Asia/Aden" },
            { name: "Zambia", flag: "🇿🇲", tz: "Africa/Lusaka" },
            { name: "Zimbabwe", flag: "🇿🇼", tz: "Africa/Harare" }
        ];

        let activeTimezone = 'Asia/Ho_Chi_Minh';

        const clockBtn = document.getElementById('country-clock-btn');
        const clockMenu = document.getElementById('country-clock-menu');
        const selectedClockIcon = document.getElementById('selected-clock-icon');
        const selectedClockName = document.getElementById('selected-clock-name');
        const selectedClockTime = document.getElementById('selected-clock-time');
        const countrySearchInput = document.getElementById('country-search-input');
        const countryClockList = document.getElementById('country-clock-list');

        clockBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clockMenu.classList.toggle('opacity-0');
            clockMenu.classList.toggle('pointer-events-none');
        });

        document.addEventListener('click', (e) => {
            if (!document.getElementById('country-clock-wrapper').contains(e.target)) {
                clockMenu.classList.add('opacity-0');
                clockMenu.classList.add('pointer-events-none');
            }
        });

        function renderCountryList(filter = '') {
            countryClockList.innerHTML = '';
            const filtered = countriesList.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
            
            if (filtered.length === 0) {
                countryClockList.innerHTML = `<div class="px-3 py-2 text-xs text-gray-400 text-center">Không tìm thấy quốc gia</div>`;
                return;
            }

            filtered.forEach(c => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = "w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 text-left transition text-xs";
                const safeId = 'time-prev-' + c.tz.replace(/[\/]/g, '-');
                btn.innerHTML = `
                    <span class="flex items-center space-x-2 truncate"><span class="text-base">${c.flag}</span> <span class="truncate font-medium">${c.name}</span></span>
                    <span class="font-mono text-gray-400 text-[11px] shrink-0" id="${safeId}">00:00</span>
                `;
                btn.onclick = () => {
                    activeTimezone = c.tz;
                    selectedClockIcon.innerHTML = c.flag;
                    selectedClockName.innerText = c.name;
                    updateClocks();
                    clockMenu.classList.add('opacity-0');
                    clockMenu.classList.add('pointer-events-none');
                };
                countryClockList.appendChild(btn);
            });
            updateClocks();
        }

        countrySearchInput.addEventListener('input', (e) => {
            renderCountryList(e.target.value);
        });

        const products = [
            { id: 1, name: "Áo thun thêu sao vàng", category: "Thời trang", priceNumber: 350000, price: "350.000 đ", image: "image/aovietnam.jpg", badge: "Bán chạy" },
            { id: 2, name: "Áo polo thêu hình lân", category: "Thời trang", priceNumber: 450000, price: "450.000 đ", image: "image/vong.jpg", badge: "Mới" },
            { id: 3, name: "Áo polo thể thao", category: "Thời trang", priceNumber: 350000, price: "350.000 đ", image: "image/vong1.jpg", badge: "Mới" },
            { id: 4, name: "Quần áo dài thể thao", category: "Thời trang", priceNumber: 1000000, price: "1.000.000 đ", image: "", badge: "Mới" },
            { id: 5, name: "Thảm tập Yoga", category: "Dụng cụ thể thao", priceNumber: 320000, price: "320.000 đ", image: "", badge: null },
            { id: 6, name: "Bộ dụng cụ trị liệu cơ bắp ( 5 món )", category: "Dụng cụ thể thao - Chăm sóc sức khỏe", priceNumber: 5000000, price: "5.000.000 đ", image: "", badge: null },
            { id: 7, name: "Túi đựng thể thao", category: "Dụng cụ thể thao", priceNumber: 250000, price: "250.000 đ", image: "", badge: null },
            { id: 8, name: "Charm/Nhẫn bạc cạo gió", category: "Phụ kiện", priceNumber: 5500000, price: "5.500.000 đ", image: "", badge: "Mới" },
            { id: 9, name: "Bản đồ quả địa cầu", category: "Phụ kiện", priceNumber: 800000, price: "800.000 đ", image: "", badge: "Bán chạy" },
            { id: 10, name: "Vòng tay chỉ ngũ sắc gắn đá phong thủy", category: "Phụ kiện", priceNumber: 320000, price: "320.000 đ", image: "", badge: null },
            { id: 11, name: "Vòng tay chỉ ngũ sắc gắn đá phong thủy", category: "Phụ kiện", priceNumber: 320000, price: "320.000 đ", image: "", badge: null },
            { id: 12, name: "10 hũ coffee hòa tan nước nóng/lạnh", category: "Phụ kiện", priceNumber: 200000, price: "200.000 đ", image: "", badge: null }
        ];

        let cart = [];
        const itemsPerPage = 6;
        let currentPage = 1;
        const totalPages = Math.ceil(products.length / itemsPerPage);

        const productContainer = document.getElementById('product-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const paginationNumbers = document.getElementById('pagination-numbers');
        const pageIndicator = document.getElementById('page-indicator');
        
        const cartToggleBtn = document.getElementById('cart-toggle-btn');
        const cartModal = document.getElementById('cart-modal');
        const cartModalContent = document.getElementById('cart-modal-content');
        const cartCloseBtn = document.getElementById('cart-close-btn');
        const cartBadge = document.getElementById('cart-badge');
        const cartItemsList = document.getElementById('cart-items-list');
        const cartTotalPrice = document.getElementById('cart-total-price');
        const checkoutBtn = document.getElementById('checkout-btn');

        function displayProducts(page) {
            productContainer.style.opacity = '0';
            productContainer.style.transform = 'translateY(8px)';

            setTimeout(() => {
                productContainer.innerHTML = '';
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const paginatedProducts = products.slice(startIndex, endIndex);

                paginatedProducts.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col group";
                    
                    productCard.innerHTML = `
                        <div class="relative overflow-hidden bg-gray-100 pt-[75%]">
                            <img src="${product.image}" alt="${product.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                            ${product.badge ? `<span class="absolute top-2.5 left-2.5 bg-red-500 text-white font-semibold text-[9px] px-2 py-0.5 rounded-full uppercase shadow-sm">${product.badge}</span>` : ''}
                            <button onclick="addToCart(${product.id})" class="absolute bottom-2.5 right-2.5 bg-white/90 hover:bg-teal-600 hover:text-white p-2 rounded-xl shadow-md transition-all opacity-100 sm:opacity-0 group-hover:opacity-100 translate-y-0 sm:translate-y-2 group-hover:translate-y-0 text-gray-700 z-10">
                                <i class="fa-solid fa-cart-plus text-sm"></i>
                            </button>
                        </div>
                        <div class="p-4 flex-grow flex flex-col justify-between space-y-2.5">
                            <div>
                                <span class="text-[10px] font-semibold uppercase tracking-wider text-teal-600">${product.category}</span>
                                <h3 class="font-bold text-gray-950 mt-0.5 group-hover:text-teal-600 transition text-xs sm:text-sm line-clamp-1">${product.name}</h3>
                            </div>
                            <div class="flex items-center justify-between pt-2 border-t border-gray-50">
                                <span class="font-extrabold text-teal-600 text-lg sm:text-xl">${product.price}</span>
                                <span class="text-[10px] text-yellow-500 flex items-center space-x-1">
                                    <img src="image/murom.svg" alt="D.Libu" class="w-20 h-20 object-contain">
                                </span>
                            </div>
                        </div>
                    `;
                    productContainer.appendChild(productCard);
                });

                productContainer.style.opacity = '1';
                productContainer.style.transform = 'translateY(0)';
                updatePaginationControls();
            }, 150); 
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) { existingItem.quantity += 1; } else { cart.push({ ...product, quantity: 1 }); }
            updateCartUI();
            
            cartToggleBtn.classList.remove('cart-animate-pop', 'trigger');
            void cartToggleBtn.offsetWidth; 
            cartToggleBtn.classList.add('cart-animate-pop', 'trigger');
            setTimeout(() => { cartToggleBtn.classList.remove('trigger'); }, 500);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        function changeQuantity(productId, delta) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) { removeFromCart(productId); } else { updateCartUI(); }
            }
        }

        function updateCartUI() {
            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartBadge.innerText = totalCount;

            if (totalCount > 0) {
                cartBadge.classList.remove('scale-0');
                cartBadge.classList.add('scale-100', 'badge-pulse-active');
                cartToggleBtn.classList.add('border-teal-400', 'bg-teal-50/50');
            } else {
                cartBadge.classList.remove('scale-100', 'badge-pulse-active');
                cartBadge.classList.add('scale-0');
                cartToggleBtn.classList.remove('border-teal-400', 'bg-teal-50/50');
            }

            if (cart.length === 0) {
                cartItemsList.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-gray-400 space-y-2 py-12">
                        <i class="fa-solid fa-basket-shopping text-4xl text-gray-300"></i>
                        <p class="text-xs">Giỏ hàng trống rỗng</p>
                    </div>`;
                cartTotalPrice.innerText = '0 đ';
                checkoutBtn.disabled = true;
                checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
                return;
            }

            checkoutBtn.disabled = false;
            checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            cartItemsList.innerHTML = '';
            
            let totalAmount = 0;
            cart.forEach(item => {
                totalAmount += item.priceNumber * item.quantity;
                const itemRow = document.createElement('div');
                itemRow.className = "flex items-center space-x-3 p-3 bg-gray-50 border border-gray-100 rounded-xl";
                itemRow.innerHTML = `
                    <img src="${item.image}" class="w-14 h-14 object-cover rounded-lg bg-white shrink-0 border border-gray-200">
                    <div class="flex-grow min-w-0">
                        <h4 class="text-xs font-bold text-gray-900 truncate">${item.name}</h4>
                        <p class="text-[11px] text-teal-600 font-extrabold mt-0.5">${item.price}</p>
                        <div class="flex items-center space-x-2 mt-1">
                            <button onclick="changeQuantity(${item.id}, -1)" class="w-4 h-4 bg-white border border-gray-300 rounded text-[10px] flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100">-</button>
                            <span class="text-[11px] font-semibold text-gray-800 w-3 text-center">${item.quantity}</span>
                            <button onclick="changeQuantity(${item.id}, 1)" class="w-4 h-4 bg-white border border-gray-300 rounded text-[10px] flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 p-2 text-xs transition"><i class="fa-regular fa-trash-can"></i></button>
                `;
                cartItemsList.appendChild(itemRow);
            });
            cartTotalPrice.innerText = totalAmount.toLocaleString('vi-VN') + ' đ';
        }

        function openCart() {
            cartModal.classList.remove('pointer-events-none', 'opacity-0');
            cartModalContent.classList.remove('translate-x-full');
        }

        function closeCart() {
            cartModal.classList.add('pointer-events-none', 'opacity-0');
            cartModalContent.classList.add('translate-x-full');
        }

        cartToggleBtn.addEventListener('click', openCart);
        cartCloseBtn.addEventListener('click', closeCart);
        cartModal.addEventListener('click', (e) => { if(e.target === cartModal) closeCart(); });

        checkoutBtn.addEventListener('click', () => {
            let message = "Xin chào Apalu-Store, tôi muốn đặt mua:\n";
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} (SL: ${item.quantity}) - Giá: ${item.price}\n`;
            });
            message += `Tổng cộng: ${cartTotalPrice.innerText}`;
            window.open(`https://zalo.me/0942135506?text=${encodeURIComponent(message)}`, '_blank');
        });

        function updatePaginationControls() {
            pageIndicator.innerText = `Trang ${currentPage} / ${totalPages}`;
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === totalPages;

            paginationNumbers.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.innerText = i;
                pageButton.className = `w-7 h-7 sm:w-9 sm:h-9 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    currentPage === i 
                    ? 'bg-teal-600 text-white shadow-md' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    displayProducts(currentPage);
                    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
                });
                paginationNumbers.appendChild(pageButton);
            }
        }

        prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; displayProducts(currentPage); } });
        nextBtn.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; displayProducts(currentPage); } });

        function updateClocks() {
            const now = new Date();
            const optionsActive = { timeZone: activeTimezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            if (selectedClockTime) { 
                selectedClockTime.innerText = now.toLocaleTimeString('en-GB', optionsActive); 
            }

            countriesList.forEach(c => {
                const safeId = 'time-prev-' + c.tz.replace(/[\/]/g, '-');
                const element = document.getElementById(safeId);
                if (element) {
                    const opt = { timeZone: c.tz, hour: '2-digit', minute: '2-digit', hour12: false };
                    element.innerText = now.toLocaleTimeString('en-GB', opt);
                }
            });
        }

        setInterval(updateClocks, 1000);

        function copySTK() {
            const stk = document.getElementById('stk-text').innerText;
            navigator.clipboard.writeText(stk).then(() => {
                const btnText = document.getElementById('copy-btn-text');
                btnText.innerText = "Đã chép!";
                setTimeout(() => { btnText.innerText = "Copy"; }, 2000);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            displayProducts(currentPage);
            renderCountryList();
        });
    </script>
</body>
</html>

Xóa chuyển đổi ngôn ngữ trong languages.js và giữ lại những thứ tương thích với file index.html. Sau khi làm sạch file languages.js xuất nội dung chỉ cần copy paste
JavaScript

// Kho dữ liệu ngôn ngữ tinh gọn chỉ giữ lại tiếng Việt cho index.html
const translations = {
    vi: {
        nav_home: "Trang chủ",
        nav_products: "Sản phẩm",
        nav_contact: "Liên hệ",
        hero_badge: "Bộ Sưu Tập 2026",
        hero_title: "Trải nghiệm mua sắm Online tại Apalu-Store",
        hero_btn: "Mua Hàng Ngay 🌊",
        section_title: "Sản Phẩm Nổi Bật",
        section_desc: "Hiển thị 6 sản phẩm mỗi trang trên tổng số 30 sản phẩm",
        page_text: "Trang",
        btn_prev: "<i class='fa-solid fa-chevron-left mr-1'></i> Trước",
        btn_next: "Sau <i class='fa-solid fa-chevron-right ml-1'></i>",
        contact_title: "Thông Tin Liên Hệ & Thanh Toán",
        contact_desc: "Gặp bất cứ khó khăn nào? Hãy liên hệ trực tiếp với chúng tôi theo thông tin chi tiết bên dưới:",
        contact_address_title: "Địa chỉ cửa hàng",
        contact_address_detail: "21 Lê Văn Lương, Thanh Xuân, HN",
        contact_zalo: "Tư vấn Zalo 24/7",
        payment_title: "<i class='fa-solid fa-credit-card mr-2 text-xs shrink-0'></i>Thông Tin Thanh Toán Chuyển Khoản",
        payment_bank: "Ngân hàng:",
        payment_acc_num: "Số tài khoản:",
        payment_acc_holder: "Chủ tài khoản:",
        map_btn: "Tìm kiếm",
        map_placeholder: "Tìm kiếm vị trí trên bản đồ...",
        cart_title: "<i class='fa-solid fa-bag-shopping mr-2 text-teal-600'></i> Giỏ Hàng Của Bạn",
        cart_empty: "Giỏ hàng trống rỗng",
        cart_total_text: "Tổng tiền thanh toán:",
        cart_checkout_btn: "<i class='fa-solid fa-paper-plane'></i> Gửi Đơn Hàng Qua Zalo",
        zalo_msg_prefix: "Xin chào Apalu-Store, tôi muốn đặt mua các sản phẩm:\n",
        zalo_msg_total: "Tổng cộng: ",
        cat_fashion: "Thời trang",
        cat_sports: "Dụng cụ thể thao",
        cat_health: "Dụng cụ thể thao - Chăm sóc sức khỏe",
        cat_accessories: "Phụ kiện",
        badge_banchay: "Bán chạy",
        badge_moi: "Mới",
        p1: "Áo thun thêu sao vàng",
        p2: "Áo polo thêu hình lân",
        p3: "Áo polo thể thao",
        p4: "Quần áo dài thể thao",
        p5: "Thảm tập Yoga",
        p6: "Bộ dụng cụ trị liệu cơ bắp ( 5 món )",
        p7: "Túi đựng thể thao",
        p8: "Charm/Nhẫn bạc cạo gió",
        p9: "Bản đồ quả địa cầu",
        p10: "Vòng tay chỉ ngũ sắc gắn đá phong thủy",
        p11: "Vòng tay chỉ ngũ sắc gắn đá phong thủy",
        p12: "10 hũ coffee hòa tan nước nóng/lạnh"
    }
};

function updateContent(lang) {
    const currentLang = 'vi';
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    const mapInput = document.getElementById('map-search-input');
    if (mapInput && translations[currentLang] && translations[currentLang]['map_placeholder']) {
        mapInput.placeholder = translations[currentLang]['map_placeholder'];
    }

    document.documentElement.lang = currentLang;

    if (typeof displayProducts === 'function' && typeof currentPage !== 'undefined') {
        displayProducts(currentPage);
    }
    if (typeof updateCartUI === 'function') {
        updateCartUI();
    }
}

function getLocalizedProduct(product, lang) {
    const localized = { ...product };
    const currentLang = 'vi';
    const langSet = translations[currentLang];
    if (!langSet) return localized;

    if (langSet[`p${product.id}`]) {
        localized.name = langSet[`p${product.id}`];
    }
    if (product.category === "Thời trang" && langSet['cat_fashion']) localized.category = langSet['cat_fashion'];
    else if (product.category === "Dụng cụ thể thao" && langSet['cat_sports']) localized.category = langSet['cat_sports'];
    else if (product.category === "Dụng cụ thể thao - Chăm sóc sức khỏe" && langSet['cat_health']) localized.category = langSet['cat_health'];
    else if (product.category === "Phụ kiện" && langSet['cat_accessories']) localized.category = langSet['cat_accessories'];

    if (product.badge === "Bán chạy" && langSet['badge_banchay']) localized.badge = langSet['badge_banchay'];
    else if (product.badge === "Mới" && langSet['badge_moi']) localized.badge = langSet['badge_moi'];

    return localized;
}

