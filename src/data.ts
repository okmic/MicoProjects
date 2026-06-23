import { 
  Rocket,
  RefreshCw, Sprout, HeartPulse, GraduationCap, Building2, Store, Smartphone, Layers,
  Home, ShoppingBag, Database, Shield, Zap, Server, Terminal
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
        tags: ["#backend", "#microservices", "#ecommerce", "Node.js", "PostgreSQL", "Redis", "Docker"],
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
        tags: ["#SaaS", "#collaboration", "#productivity", "Node.js", "React", "PostgreSQL", "Redis", "WebSocket"],
        gradient: "from-[#7C3AED] to-[#A78BFA]",
        icon: Layers,
        link: "https://github.com/okmic",
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
        tags: ["#fullstack", "#nextjs", "#uiux", "Node.js", "MongoDB", "Tailwind"],
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
        tags: ["#microservices", "#ai", "#SaaS", "Node.js", "React", "MongoDB", "RabbitMQ"],
        gradient: "from-[#68A063] to-[#7CB873]",
        icon: Sprout,
        link: "https://okmic.github.io/GetPostFarm/",
        stats: [
          { label: "Сервисы", value: "4+" },
          { label: "Пользователей", value: "50+" },
          { label: "Запуск", value: "Июль 2026" }
        ]
      },
      {
        id: "crm",
        title: "CRM для образовательного центра",
        description: "Управление студентами, расписанием, финансовыми потоками. Сложная бизнес-логика с интеграцией платежных систем.",
        tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
        tags: ["#fullstack", "#typescript", "#nextjs", "React", "TypeScript", "PostgreSQL", "Tailwind"],
        gradient: "from-[#7C3AED] to-[#A78BFA]",
        icon: GraduationCap,
        link: "https://github.com/okmic",
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
        tags: ["#nodejs", "#SaaS", "#ecommerce", "#integration", "Node.js", "React", "PostgreSQL", "Redis"],
        gradient: "from-[#00ADD8] to-[#5DC9E2]",
        icon: Store,
        link: "https://github.com/okmic",
        stats: [
          { label: "Товаров", value: "100K+" },
          { label: "Заказов", value: "50K+" },
          { label: "Интеграций", value: "50+" }
        ]
      },
      {
        id: "yandex_realty",
        title: "SaaS для Яндекс Недвижимости FEED",
        description: "Интеграция с Яндекс Недвижимостью: автоматическая выгрузка объектов, синхронизация статусов, аналитика рынка.",
        tech: ["Node.js", "Next.js", "PostgreSQL", "Redis", "Docker"],
        tags: ["#nodejs", "#SaaS", "#realestate", "#integration", "Node.js", "PostgreSQL", "Redis", "Docker"],
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: Home,
        link: "https://github.com/okmic",
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
        tags: ["#SaaS", "#realestate", "#integration", "Node.js", "React", "MongoDB", "Redis"],
        gradient: "from-[#8B5CF6] to-[#6D28D9]",
        icon: Building2,
        link: "https://github.com/okmic",
        stats: [
          { label: "Объявлений", value: "100K+" },
          { label: "Клиентов", value: "300+" },
          { label: "Обновлений", value: "1/час" }
        ]
      },
      {
        id: "telegram_shop",
        title: "NDA Telegram магазин с AI-подбором",
        description: "Полноценный магазин в Telegram с AI-рекомендациями, автоматической обработкой заказов и поддержкой клиентов.",
        tech: ["Node.js", "Telegraf", "PostgreSQL", "Redis", "AI/ML"],
        tags: ["#nodejs", "#bots", "#ai", "Node.js", "PostgreSQL", "Redis", "AI/ML"],
        gradient: "from-[#60A5FA] to-[#2563EB]",
        icon: Smartphone,
        link: "https://github.com/okmic",
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
        tags: ["#fullstack", "#healthcare", "#crm", "React", "Node.js", "PostgreSQL", "Redis"],
        gradient: "from-[#34D399] to-[#047857]",
        icon: HeartPulse,
        link: "https://github.com/okmic",
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
        tags: ["#backend", "#fastify", "#admin", "Node.js", "React", "PostgreSQL", "Redis"],
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
        tags: ["#backend", "#fastify", "#microservices", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
        gradient: "from-[#FF6B6B] to-[#FF4757]",
        icon: Server,
        link: "https://github.com/okmic",
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
        tags: ["#backend", "#fastify", "#ecommerce", "Node.js", "PostgreSQL", "Redis", "RabbitMQ"],
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: ShoppingBag,
        link: "https://github.com/okmic",
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
        tags: ["#backend", "#fastify", "#analytics", "Node.js", "ClickHouse", "Redis", "WebSocket"],
        gradient: "from-[#34D399] to-[#059669]",
        icon: Zap,
        link: "https://github.com/okmic",
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
        tags: ["#backend", "#fastify", "#fintech", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
        gradient: "from-[#3B82F6] to-[#1D4ED8]",
        icon: Database,
        link: "https://github.com/okmic",
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
        tags: ["#backend", "#fastify", "#streaming", "Node.js", "MongoDB", "Redis", "RabbitMQ"],
        gradient: "from-[#EC4899] to-[#BE185D]",
        icon: Terminal,
        link: "https://github.com/okmic",
        stats: [
          { label: "Загрузок/день", value: "50K+" },
          { label: "Контента", value: "10TB+" },
          { label: "Доставка", value: "CDN" }
        ]
      },
      {
        id: "nda_nest_1",
        title: "NDA — CRM система на NestJS",
        description: "Корпоративная CRM с управлением клиентами, задачами, проектами и документами. Полноценная ERP система с интеграцией 1С.",
        tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
        tags: ["#backend", "#nestjs", "#crm", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
        gradient: "from-[#8B5CF6] to-[#6D28D9]",
        icon: Building2,
        link: "https://github.com/okmic",
        stats: [
          { label: "Клиентов", value: "100K+" },
          { label: "Документов", value: "500K+" },
          { label: "Интеграций", value: "1С" }
        ]
      },
      {
        id: "nda_nest_3",
        title: "NDA — Система бронирования на NestJS",
        description: "Платформа для бронирования отелей, билетов и мероприятий с комплексной системой платежей и уведомлений.",
        tech: ["NestJS", "React", "PostgreSQL", "Redis", "Stripe", "Docker"],
        tags: ["#backend", "#nestjs", "#booking", "Node.js", "React", "PostgreSQL", "Redis", "Stripe"],
        gradient: "from-[#F59E0B] to-[#D97706]",
        icon: Home,
        link: "https://github.com/okmic",
        stats: [
          { label: "Броней/день", value: "10K+" },
          { label: "Партнеров", value: "500+" },
          { label: "Платежей", value: "Stripe" }
        ]
      }
    ]
  }
}
