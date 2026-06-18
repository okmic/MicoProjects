import { 
  Rocket, MessageSquare,
  RefreshCw, Sprout, Building, HeartPulse, GraduationCap, Building2, Store, Smartphone, Layers,
  Home, ShoppingBag, Database, Shield, Cloud, Zap, Server, GitBranch, Terminal
} from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2021
}

export const siteData = {
  navItems: [
    { id: 'projects', label: 'Проекты' },
    { id: 'about', label: 'Обо мне' }
  ],
  hero: {
    title: "Mico Проекты",
    subtitle: "Портфолио проектов"
  },
  about: {
    title: "ОБО МНЕ",
    description: "Разрабатываю проекты с 2021 года. Работал с Node.js, Go, React, строил микросервисы и высоконагруженные системы. Люблю сложные задачи и чистый код.",
    tags: ["Node.js", "Go", "React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Redis"]
  },
  projects: {
    title: "ПРОЕКТЫ",
    subtitle1: "Реальные проекты, которые приносят пользу",
    items: [
      {
        id: "delivery",
        title: "Сервис доставки еды",
        description: "Полноценный сервис с заказами, трекингом курьеров и системой оплаты. Масштабируемая архитектура на микросервисах.",
        tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "RabbitMQ"],
        tags: ["#backend", "#microservices", "#ecommerce"],
        gradient: "from-[#FF6B6B] to-[#FF8E8E]",
        icon: Rocket,
        link: "https://github.com/okmic/delivery-service",
        stats: [
          { label: "RPS", value: "1000+" },
          { label: "Пользователей", value: "50K+" },
          { label: "Деплой", value: "AWS" }
        ]
      },
      {
        id: "nda",
        title: "NDA — Workspace для команд",
        description: "Единое рабочее пространство для управления заметками, задачами и проектами. Включает базы данных, доски канбан, вики, календари и напоминания. Полноценная альтернатива Notion + Trello.",
        tech: ["Node.js", "React", "PostgreSQL", "Redis", "WebSocket", "Docker"],
        tags: ["#SaaS", "#collaboration", "#productivity"],
        gradient: "from-[#7C3AED] to-[#A78BFA]",
        icon: Layers,
        link: "https://github.com/okmic/nda-workspace",
        stats: [
          { label: "Пользователей", value: "10M+" },
          { label: "Документов", value: "1M+" },
          { label: "RPS", value: "1000+" }
        ]
      },
      {
        id: "sigmas",
        title: "Редизайн sigmas23.ru",
        description: "Полный редизайн сайта IT-сервиса. Сохранил атмосферу терминала, но сделал её более зрелой и аккуратной.",
        tech: ["Next.js", "Fastify", "MongoDB", "Tailwind"],
        tags: ["#fullstack", "#nextjs", "#uiux"],
        gradient: "from-[#3B82F6] to-[#8B5CF6]",
        icon: RefreshCw,
        link: "https://sigmas23.ru",
        stats: [
          { label: "Время загрузки", value: "1.2с" },
          { label: "Мобильных", value: "60%" },
          { label: "Увеличение", value: "+40%" }
        ]
      },
      {
        id: "postfarm",
        title: "ПостФерма — AI-сервис для контента",
        description: "MVP сервиса для создания контента быстрее и легче. Посты, идеи, AI-дайджесты, серии публикаций.",
        tech: ["Fastify", "React", "Next.js", "MongoDB", "RabbitMQ"],
        tags: ["#microservices", "#ai", "#SaaS"],
        gradient: "from-[#68A063] to-[#7CB873]",
        icon: Sprout,
        link: "https://github.com/okmic/postfarm",
        stats: [
          { label: "Тем для постов", value: "1000+" },
          { label: "Пользователей", value: "500+" },
          { label: "Запуск", value: "Июль 2024" }
        ]
      },
      {
        id: "crm",
        title: "CRM для образовательного центра",
        description: "Управление студентами, расписанием, финансовыми потоками. Сложная бизнес-логика с интеграцией платежных систем.",
        tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
        tags: ["#fullstack", "#typescript", "#nextjs"],
        gradient: "from-[#7C3AED] to-[#A78BFA]",
        icon: GraduationCap,
        link: "https://github.com/okmic/crm-platform",
        stats: [
          { label: "Студентов", value: "3000+" },
          { label: "Платежей", value: "10000+" },
          { label: "Быстрота", value: "3 сек" }
        ]
      },
      {
        id: "sber_marketplace",
        title: "SaaS для маркетплейса Сбера",
        description: "Платформа для интеграции с маркетплейсом Сбера: управление товарами, заказами, аналитика продаж, автоматизация выгрузок.",
        tech: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ"],
        tags: ["#SaaS", "#ecommerce", "#integration"],
        gradient: "from-[#00ADD8] to-[#5DC9E2]",
        icon: Store,
        link: "https://github.com/okmic/sber-marketplace",
        stats: [
          { label: "Товаров", value: "100K+" },
          { label: "Заказов", value: "50K+" },
          { label: "Интеграций", value: "50+" }
        ]
      },
      {
        id: "yandex_realty",
        title: "SaaS для Яндекс Недвижимости",
        description: "Интеграция с Яндекс Недвижимостью: автоматическая выгрузка объектов, синхронизация статусов, аналитика рынка.",
        tech: ["Node.js", "Next.js", "PostgreSQL", "Redis", "Docker"],
        tags: ["#SaaS", "#realestate", "#integration"],
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: Home,
        link: "https://github.com/okmic/yandex-realty",
        stats: [
          { label: "Объектов", value: "50K+" },
          { label: "Агентов", value: "200+" },
          { label: "Синхронизация", value: "Реалтайм" }
        ]
      },
      {
        id: "avito_realty",
        title: "SaaS для Авито Недвижимости",
        description: "Платформа для работы с Авито Недвижимость: массовый импорт/экспорт объявлений, управление ценами, автоматическое обновление.",
        tech: ["NestJS", "React", "MongoDB", "Redis", "Docker"],
        tags: ["#SaaS", "#realestate", "#integration"],
        gradient: "from-[#8B5CF6] to-[#6D28D9]",
        icon: Building2,
        link: "https://github.com/okmic/avito-realty",
        stats: [
          { label: "Объявлений", value: "100K+" },
          { label: "Клиентов", value: "300+" },
          { label: "Обновлений", value: "1/час" }
        ]
      },
      {
        id: "cian",
        title: "SaaS для Циан",
        description: "Интеграция с Циан: автоматическая публикация объектов, обновление статусов, сбор аналитики по рынку недвижимости.",
        tech: ["Go", "React", "PostgreSQL", "Redis", "Kubernetes"],
        tags: ["#SaaS", "#realestate", "#golang"],
        gradient: "from-[#3B82F6] to-[#1D4ED8]",
        icon: Building,
        link: "https://github.com/okmic/cian-integration",
        stats: [
          { label: "Объектов", value: "30K+" },
          { label: "Аналитика", value: "Реалтайм" },
          { label: "Скорость", value: "<200ms" }
        ]
      },
      {
        id: "domclick",
        title: "SaaS для Домклик",
        description: "Интеграция с Домклик (Сбербанк): ипотечный калькулятор, подбор объектов, аналитика по ипотечным ставкам.",
        tech: ["Node.js", "React", "PostgreSQL", "Redis", "Docker"],
        tags: ["#SaaS", "#realestate", "#integration"],
        gradient: "from-[#10B981] to-[#059669]",
        icon: Home,
        link: "https://github.com/okmic/domclick-integration",
        stats: [
          { label: "Ипотек", value: "10K+" },
          { label: "Объектов", value: "20K+" },
          { label: "Ставок", value: "Динамика" }
        ]
      },
      {
        id: "ozon",
        title: "SaaS для Ozon Seller",
        description: "Комплексная платформа для селлеров Ozon: управление товарами, ценами, остатками, аналитика продаж и конкурентов.",
        tech: ["NestJS", "React", "MongoDB", "Redis", "RabbitMQ"],
        tags: ["#SaaS", "#ecommerce", "#integration"],
        gradient: "from-[#F472B6] to-[#EC4899]",
        icon: ShoppingBag,
        link: "https://github.com/okmic/ozon-seller",
        stats: [
          { label: "Товаров", value: "500K+" },
          { label: "Продаж", value: "100K+" },
          { label: "Мониторинг", value: "24/7" }
        ]
      },
      {
        id: "viber",
        title: "SaaS для Viber Business",
        description: "Платформа для бизнес-коммуникации через Viber: рассылки, чат-боты, автоматизация ответов, CRM интеграция.",
        tech: ["Node.js", "React", "PostgreSQL", "Redis", "WebSocket"],
        tags: ["#SaaS", "#messenger", "#automation"],
        gradient: "from-[#7C3AED] to-[#5B21B6]",
        icon: MessageSquare,
        link: "https://github.com/okmic/viber-business",
        stats: [
          { label: "Сообщений", value: "1M+" },
          { label: "Ботов", value: "100+" },
          { label: "Скорость", value: "<50ms" }
        ]
      },
      {
        id: "telegram_shop",
        title: "Telegram магазин с AI-подбором",
        description: "Полноценный магазин в Telegram с AI-рекомендациями, автоматической обработкой заказов и поддержкой клиентов.",
        tech: ["Node.js", "Telegraf", "PostgreSQL", "Redis", "AI/ML"],
        tags: ["#nodejs", "#bots", "#ai"],
        gradient: "from-[#60A5FA] to-[#2563EB]",
        icon: Smartphone,
        link: "https://github.com/okmic/telegram-shop",
        stats: [
          { label: "Товаров", value: "10K+" },
          { label: "Заказов", value: "5K+" },
          { label: "Подбор", value: "AI" }
        ]
      },
      {
        id: "healthcare",
        title: "Система управления клиникой",
        description: "Запись пациентов, электронные карты, расписание врачей, интеграция с лабораториями и системами страхования.",
        tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
        tags: ["#fullstack", "#healthcare", "#crm"],
        gradient: "from-[#34D399] to-[#047857]",
        icon: HeartPulse,
        link: "https://github.com/okmic/healthcare-system",
        stats: [
          { label: "Пациентов", value: "50K+" },
          { label: "Врачей", value: "200+" },
          { label: "Записей", value: "100K+" }
        ]
      },
      {
        id: "deloros",
        title: "deloros09.ru — административная панель",
        description: "Разработка админ-панели для сайта 'Деловая Россия КЧР'. Интеграция с CRM системой, настройка автоматического бэкапирования, управление контентом и пользователями.",
        tech: ["Fastify", "React", "PostgreSQL", "Redis", "Docker"],
        tags: ["#backend", "#fastify", "#admin"],
        gradient: "from-[#8B5CF6] to-[#6D28D9]",
        icon: Shield,
        link: "https://deloros09.ru",
        stats: [
          { label: "Пользователей", value: "500+" },
          { label: "Бэкапов", value: "Ежедневно" },
          { label: "Интеграций", value: "CRM" }
        ]
      },
      {
        id: "nda_fastify_1",
        title: "NDA — API Gateway на Fastify",
        description: "Высокопроизводительный API Gateway на Fastify с маршрутизацией, балансировкой и кешированием. Обработка 50K+ запросов в секунду.",
        tech: ["Fastify", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
        tags: ["#backend", "#fastify", "#microservices"],
        gradient: "from-[#FF6B6B] to-[#FF4757]",
        icon: Server,
        link: "https://github.com/okmic/nda-api-gateway",
        stats: [
          { label: "RPS", value: "50K+" },
          { label: "Сервисов", value: "30+" },
          { label: "Время", value: "<10ms" }
        ]
      },
      {
        id: "nda_fastify_2",
        title: "NDA — Платформа для онлайн-торговли",
        description: "Торговая платформа на Fastify с управлением заказами, товарами, пользователями и платежами. Масштабируемая архитектура с очередями.",
        tech: ["Fastify", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
        tags: ["#backend", "#fastify", "#ecommerce"],
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: ShoppingBag,
        link: "https://github.com/okmic/nda-trading-platform",
        stats: [
          { label: "Товаров", value: "200K+" },
          { label: "Заказов", value: "100K+" },
          { label: "Скорость", value: "<50ms" }
        ]
      },
      {
        id: "nda_fastify_3",
        title: "NDA — Система аналитики на Fastify",
        description: "Backend для сбора и обработки аналитических данных. Агрегация миллионов событий, построение отчетов и дашбордов в реальном времени.",
        tech: ["Fastify", "ClickHouse", "Redis", "WebSocket", "Docker"],
        tags: ["#backend", "#fastify", "#analytics"],
        gradient: "from-[#34D399] to-[#059669]",
        icon: Zap,
        link: "https://github.com/okmic/nda-analytics",
        stats: [
          { label: "Событий/день", value: "10M+" },
          { label: "Отчетов", value: "1000+" },
          { label: "Скорость", value: "<100ms" }
        ]
      },
      {
        id: "nda_fastify_4",
        title: "NDA — Финтех платформа на Fastify",
        description: "Финансовая платформа с обработкой транзакций, платежными шлюзами и системой безопасности. Поддержка миллионов транзакций.",
        tech: ["Fastify", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
        tags: ["#backend", "#fastify", "#fintech"],
        gradient: "from-[#3B82F6] to-[#1D4ED8]",
        icon: Database,
        link: "https://github.com/okmic/nda-fintech",
        stats: [
          { label: "Транзакций", value: "1M+" },
          { label: "Безопасность", value: "99.99%" },
          { label: "Пользователей", value: "500K+" }
        ]
      },
      {
        id: "nda_fastify_5",
        title: "NDA — Медиа платформа на Fastify",
        description: "Стриминговая медиа платформа с загрузкой, обработкой и доставкой контента. Оптимизирована для высокой нагрузки.",
        tech: ["Fastify", "MongoDB", "Redis", "RabbitMQ", "Docker"],
        tags: ["#backend", "#fastify", "#streaming"],
        gradient: "from-[#EC4899] to-[#BE185D]",
        icon: Terminal,
        link: "https://github.com/okmic/nda-media-platform",
        stats: [
          { label: "Загрузок/день", value: "50K+" },
          { label: "Контента", value: "10TB+" },
          { label: "Доставка", value: "CDN" }
        ]
      },
      {
        id: "nda_fastify_6",
        title: "NDA — Биржевой агрегатор на Fastify",
        description: "Агрегатор биржевых данных с обработкой потоков в реальном времени. Интеграция с 20+ биржами, анализ котировок.",
        tech: ["Fastify", "PostgreSQL", "Redis", "WebSocket", "Docker"],
        tags: ["#backend", "#fastify", "#realtime"],
        gradient: "from-[#10B981] to-[#047857]",
        icon: GitBranch,
        link: "https://github.com/okmic/nda-exchange",
        stats: [
          { label: "Бирж", value: "20+" },
          { label: "Котировок/сек", value: "100K+" },
          { label: "Задержка", value: "<5ms" }
        ]
      },
      {
        id: "nda_fastify_7",
        title: "NDA — Социальная сеть на Fastify",
        description: "Backend для социальной сети с постами, лентой, чатами и уведомлениями. Масштабируемая архитектура для миллионов пользователей.",
        tech: ["Fastify", "PostgreSQL", "Redis", "WebSocket", "Docker"],
        tags: ["#backend", "#fastify", "#social"],
        gradient: "from-[#A78BFA] to-[#7C3AED]",
        icon: Cloud,
        link: "https://github.com/okmic/nda-social",
        stats: [
          { label: "Пользователей", value: "1M+" },
          { label: "Постов/день", value: "100K+" },
          { label: "Чат", value: "Реалтайм" }
        ]
      },
      {
        id: "nda_nest_1",
        title: "NDA — CRM система на NestJS",
        description: "Корпоративная CRM с управлением клиентами, задачами, проектами и документами. Полноценная ERP система с интеграцией 1С.",
        tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
        tags: ["#backend", "#nestjs", "#crm"],
        gradient: "from-[#8B5CF6] to-[#6D28D9]",
        icon: Building2,
        link: "https://github.com/okmic/nda-crm",
        stats: [
          { label: "Клиентов", value: "100K+" },
          { label: "Документов", value: "500K+" },
          { label: "Интеграций", value: "1С" }
        ]
      },
      {
        id: "nda_nest_2",
        title: "NDA — Маркетплейс на NestJS",
        description: "Полноценный маркетплейс с управлением товарами, продавцами, заказами и платежами. Сложная бизнес-логика и множество интеграций.",
        tech: ["NestJS", "React", "MongoDB", "Redis", "RabbitMQ", "Docker"],
        tags: ["#backend", "#nestjs", "#ecommerce"],
        gradient: "from-[#F472B6] to-[#EC4899]",
        icon: ShoppingBag,
        link: "https://github.com/okmic/nda-marketplace",
        stats: [
          { label: "Товаров", value: "1M+" },
          { label: "Продавцов", value: "10K+" },
          { label: "Заказов/день", value: "50K+" }
        ]
      },
      {
        id: "nda_nest_3",
        title: "NDA — Система бронирования на NestJS",
        description: "Платформа для бронирования отелей, билетов и мероприятий с комплексной системой платежей и уведомлений.",
        tech: ["NestJS", "React", "PostgreSQL", "Redis", "Stripe", "Docker"],
        tags: ["#backend", "#nestjs", "#booking"],
        gradient: "from-[#F59E0B] to-[#D97706]",
        icon: Home,
        link: "https://github.com/okmic/nda-booking",
        stats: [
          { label: "Броней/день", value: "10K+" },
          { label: "Партнеров", value: "500+" },
          { label: "Платежей", value: "Stripe" }
        ]
      }
    ]
  }
}
