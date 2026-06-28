import { 
  Rocket, RefreshCw, Sprout, HeartPulse, GraduationCap, Building2, Store, Smartphone, Layers,
  Home, ShoppingBag, Database, Shield, Server, Terminal, 
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
        description: "Полноценный сервис с заказами, трекингом курьеров и системой оплаты. Масштабируемая архитектура на микросервисах с очередями и кешированием.",
        tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "RabbitMQ"],
        tags: ["#backend", "#microservices", "#ecommerce"],
        gradient: "from-[#FF6B6B] to-[#FF4757]",
        icon: Rocket,
        link: "",
        stats: [
          { label: "RPS", value: "1000+" },
          { label: "Пользователей", value: "50K+" },
          { label: "Деплой", value: "AWS" }
        ]
      },
      {
        id: "nda_workspace",
        title: "NDA Workspace — для команд",
        description: "Единое рабочее пространство для управления заметками, задачами и проектами. Включает базы данных, доски канбан, вики, календари и напоминания.",
        tech: ["Node.js", "React", "PostgreSQL", "Redis", "WebSocket", "Docker"],
        tags: ["#SaaS", "#collaboration", "#productivity"],
        gradient: "from-[#7C3AED] to-[#A78BFA]",
        icon: Layers,
        link: "",
        stats: [
          { label: "Команд", value: "100+" },
          { label: "Документов", value: "10K+" },
          { label: "RPS", value: "500+" }
        ]
      },
      {
        id: "sigmas",
        title: "Редизайн sigmas23.ru",
        description: "Полный редизайн сайта IT-сервиса с сохранением атмосферы терминала. Улучшена навигация, оптимизирована производительность и адаптивность.",
        tech: ["Next.js", "Fastify", "MongoDB", "Tailwind"],
        tags: ["#fullstack", "#nextjs", "#uiux"],
        gradient: "from-[#3B82F6] to-[#60A5FA]",
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
        title: "ПостФерма — AI-контент",
        description: "Сервис для создания контента быстрее и легче. Посты, идеи, AI-дайджесты, серии публикаций. Автоматическая генерация текстов и заголовков.",
        tech: ["Fastify", "React", "Next.js", "MongoDB", "RabbitMQ"],
        tags: ["#microservices", "#ai", "#SaaS"],
        gradient: "from-[#68A063] to-[#7CB873]",
        icon: Sprout,
        link: "https://okmic.github.io/GetPostFarm/",
        stats: [
          { label: "Сервисов", value: "4+" },
          { label: "Пользователей", value: "50+" },
          { label: "Запуск", value: "Июль 2026" }
        ]
      },
      {
        id: "crm",
        title: "CRM для образовательного центра",
        description: "Управление студентами, расписанием, финансовыми потоками. Интеграция с платежными системами и генерация отчетов.",
        tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
        tags: ["#fullstack", "#typescript", "#crm"],
        gradient: "from-[#10B981] to-[#34D399]",
        icon: GraduationCap,
        link: "",
        stats: [
          { label: "Студентов", value: "300+" },
          { label: "Платежей", value: "1000+" },
          { label: "Экранов", value: "15+" }
        ]
      },
      {
        id: "sber_marketplace",
        title: "Платежный шлюз для Сбера",
        description: "Интеграция с эквайрингом Сбера: оплата, проверка транзакций, аналитика, автоматизация выгрузок и отчетов.",
        tech: ["Node.js", "PostgreSQL", "Redis", "RabbitMQ"],
        tags: ["#nodejs", "#fintech", "#integration"],
        gradient: "from-[#00ADD8] to-[#5DC9E2]",
        icon: Store,
        link: "",
        stats: [
          { label: "SSL", value: "Secure" },
          { label: "Сервисов", value: "3+" },
          { label: "Интеграций", value: "3+" }
        ]
      },
      {
        id: "yandex_realty",
        title: "Яндекс Недвижимость FEED",
        description: "Автоматическая выгрузка объектов, синхронизация статусов, аналитика рынка. Интеграция с CRM для риелторов.",
        tech: ["Node.js", "Next.js", "PostgreSQL", "Redis", "Docker"],
        tags: ["#nodejs", "#SaaS", "#realestate"],
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: Home,
        link: "",
        stats: [
          { label: "Объектов", value: "50K+" },
          { label: "Агентов", value: "10+" },
          { label: "Синхронизация", value: "Реалтайм" }
        ]
      },
      {
        id: "developers_realty",
        title: "Агрегатор недвижимости",
        description: "Массовый импорт/экспорт объявлений с Авито, Яндекс, Циан. Управление ценами, автоматическое обновление статусов.",
        tech: ["NestJS", "React", "PostgreSQL", "Redis", "Docker"],
        tags: ["#SaaS", "#realestate", "#integration"],
        gradient: "from-[#8B5CF6] to-[#6D28D9]",
        icon: Building2,
        link: "",
        stats: [
          { label: "Объявлений", value: "100K+" },
          { label: "Интеграций", value: "10+" },
          { label: "Обновлений", value: "1/час" }
        ]
      },
      {
        id: "telegram_shop",
        title: "Telegram Shop с AI",
        description: "Полноценный магазин в Telegram с AI-рекомендациями, автоматической обработкой заказов и поддержкой клиентов.",
        tech: ["Node.js", "Telegraf", "PostgreSQL", "Redis", "AI/ML"],
        tags: ["#nodejs", "#bots", "#ai"],
        gradient: "from-[#60A5FA] to-[#2563EB]",
        icon: Smartphone,
        link: "",
        stats: [
          { label: "Товаров", value: "1K+" },
          { label: "Заказов", value: "300+" },
          { label: "Подбор", value: "AI" }
        ]
      },
      {
        id: "healthcare",
        title: "Система управления клиникой",
        description: "Запись пациентов, электронные карты, расписание врачей, интеграция с лабораториями и страховыми компаниями.",
        tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
        tags: ["#fullstack", "#healthcare", "#crm"],
        gradient: "from-[#34D399] to-[#059669]",
        icon: HeartPulse,
        link: "",
        stats: [
          { label: "Пациентов", value: "5K+" },
          { label: "Врачей", value: "200+" },
          { label: "Записей", value: "10K+" }
        ]
      },
      {
        id: "deloros",
        title: "deloros09.ru — админ-панель",
        description: "Административная панель для 'Деловая Россия КЧР'. Интеграция с CRM, автоматическое бэкапирование, управление контентом и пользователями.",
        tech: ["Fastify", "React", "PostgreSQL", "Redis", "Docker"],
        tags: ["#backend", "#fastify", "#admin"],
        gradient: "from-[#4F46E5] to-[#6366F1]",
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
        title: "NDA API Gateway",
        description: "Высокопроизводительный API Gateway на Fastify с маршрутизацией, балансировкой и кешированием. Обработка 15K+ запросов в секунду.",
        tech: ["Fastify", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
        tags: ["#backend", "#fastify", "#microservices"],
        gradient: "from-[#DC2626] to-[#EF4444]",
        icon: Server,
        link: "",
        stats: [
          { label: "RPS", value: "15K+" },
          { label: "Сервисов", value: "30+" },
          { label: "Время", value: "<10ms" }
        ]
      },
      {
        id: "nda_fastify_2",
        title: "NDA Торговая платформа",
        description: "Торговая платформа на Fastify с управлением заказами, товарами и пользователями. Масштабируемая архитектура с очередями.",
        tech: ["Fastify", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
        tags: ["#backend", "#fastify", "#ecommerce"],
        gradient: "from-[#F59E0B] to-[#D97706]",
        icon: ShoppingBag,
        link: "",
        stats: [
          { label: "Товаров", value: "2K+" },
          { label: "Заказов", value: "10K+" },
          { label: "Скорость", value: "<50ms" }
        ]
      },
      {
        id: "nda_fastify_4",
        title: "NDA Финтех платформа",
        description: "Финансовая платформа с обработкой транзакций и платежными шлюзами. Архитектура, выдерживающая миллионы транзакций.",
        tech: ["Fastify", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
        tags: ["#backend", "#fastify", "#fintech"],
        gradient: "from-[#2563EB] to-[#1D4ED8]",
        icon: Database,
        link: "",
        stats: [
          { label: "Сервисов", value: "15+" },
          { label: "Безопасность", value: "99.99%" },
          { label: "Репликаций", value: "10+" }
        ]
      },
      {
        id: "nda_fastify_5",
        title: "NDA Медиа платформа",
        description: "Стриминговая медиа платформа с загрузкой и доставкой контента. Оптимизирована для высокой нагрузки и работы с S3.",
        tech: ["Fastify", "MongoDB", "Redis", "RabbitMQ", "Docker", "S3"],
        tags: ["#backend", "#fastify", "#streaming"],
        gradient: "from-[#EC4899] to-[#DB2777]",
        icon: Terminal,
        link: "",
        stats: [
          { label: "Загрузок/день", value: "5K+" },
          { label: "Контента", value: "1TB+" },
          { label: "Доставка", value: "CDN" }
        ]
      },
      {
        id: "nda_nest_1",
        title: "NDA CRM система",
        description: "Корпоративная CRM с управлением клиентами, задачами и документами. Полноценная ERP система с интеграцией 1С.",
        tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker"],
        tags: ["#backend", "#nestjs", "#crm"],
        gradient: "from-[#8B5CF6] to-[#7C3AED]",
        icon: Building2,
        link: "",
        stats: [
          { label: "Клиентов", value: "10K+" },
          { label: "Документов", value: "60K+" },
          { label: "Интеграций", value: "1С" }
        ]
      },
      {
        id: "nda_nest_3",
        title: "NDA Система бронирования",
        description: "Платформа для бронирования отелей и мероприятий с комплексной системой платежей и уведомлений через Stripe.",
        tech: ["NestJS", "React", "PostgreSQL", "Redis", "Stripe", "Docker"],
        tags: ["#backend", "#nestjs", "#booking"],
        gradient: "from-[#F59E0B] to-[#B45309]",
        icon: Home,
        link: "",
        stats: [
          { label: "Админ Панель", value: "5+" },
          { label: "Партнеров", value: "500+" },
          { label: "Платежей", value: "Stripe" }
        ]
      }
    ]
  }
}