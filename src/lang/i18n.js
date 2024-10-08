import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          salons: "Salons",
          about_us: "About Us",
          reservations: "Reservations",
          favorites: "Favorites",
          news: "News",
          gallery: "gallery",
          resources: "Resources",
          subscribe: "Subscribe to our newsletter to get updates.",
          email_placeholder: "Email Address",
          subscribe_button: "Subscribe",
          quick_links: "Quick Links",
          industries: "Industries",
          home: "Home",
          who_we_are: "Who We Are",
          our_philosophy: "Our Philosophy",
          retail_ecommerce: "Retail & E-Commerce",
          information_technology: "Information Technology",
          finance_insurance: "Finance & Insurance",
          
          register: "Register",
          login: "Login",
          landingPage: {
            pricesSection: {
            choosePlan: "Choose your plan",
            monthly:"Monthly",
            yearly:"Yearly",
            pricingPlan: "Our pricing plan",
            description: "We’re working on a suite of tools to make managing complex systems easier, for everyone for free. We can’t wait to hear what you think.",
            plans: {
                starter: {
                    title :"Starter",
                    
                    price: "FREE",
                    description: "Full access to all features and no credit card required."
                },
                personal: {
                    title: "Personal",
                    price: "free",
                    description: "Unlimited products features and dedicated support channels."
                },
                team: {
                    title: "Team",
                    price: "free",
                    description: "Unlimited products features and dedicated support channels."
                }
            }
        },
            becomeBarber: "Become A Barber 💈",
            welcome: "Book your next haircut",
            description: {
              detail: "Your one-stop solution for all your barber needs."
            },
            getStarted: "Get started for free",
            requestDemo: "Request a demo",
            mainFeatures: "Main features",
            featuresTitle: "A technology-first approach to payments",
            feature1: {
              title: "Get Tourists",
              description: "Attract more tourists with our platform."
            },
            feature2: {
              title: "Handle Online Reservations",
              description: "Manage online bookings seamlessly."
            },
            feature3: {
              title: "Show Your Salon on Our Maps",
              description: "Increase your visibility by appearing on our maps."
            },
            feature4: {
              title: "Professional Dashboard",
              description: "Manage your business with our advanced dashboard."
            },
            readMore: "Read more",
            choosePlan: "Choose your plan",
            pricingPlanTitle: "Our pricing plan",
            pricingPlanDescription: "We’re working on a suite of tools to make managing complex systems easier, for everyone, for free.",
            monthly: "Monthly",
            annually: "Annually",
            upcomingEvents: "Upcoming Events",
            eventTitle: "Tech Summit: Shaping Tomorrow",
            eventDescription: "Join dynamic conversations that will redefine the future.",
            joinNow: "Join now"
          }
        }
      },
      ar: {
        translation: {
          salons: "صالونات",
          about_us: "من نحن",
          reservations: "الحجوزات",
          favorites: "المفضلة",
          news: "الأخبار",
          gallery: " معرض",
          resources: "الموارد",
          register: "التسجيل",
          login: "تسجيل الدخول",
          subscribe: "اشترك في نشرتنا الإخبارية للحصول على التحديثات.",
          email_placeholder: "عنوان البريد الإلكتروني",
          subscribe_button: "اشترك",
          quick_links: "روابط سريعة",
          industries: "الصناعات",
          home: "الرئيسية",
          who_we_are: "من نحن",
          our_philosophy: "فلسفتنا",
          retail_ecommerce: "التجزئة والتجارة الإلكترونية",
          information_technology: "تكنولوجيا المعلومات",
          finance_insurance: "المالية والتأمين",
          landingPage: {
            pricesSection: {
              monthly:"شهري",
              yearly:'سنوي',
            choosePlan: "اختر خطتك",
            pricingPlan: "خطة التسعير لدينا",
            description: "نحن نعمل على مجموعة من الأدوات لتسهيل إدارة الأنظمة المعقدة، للجميع مجاناً. لا يمكننا الانتظار لسماع رأيك.",
            plans: {
                starter: {
                    title: "بداية",
                    price: "مجاني",
                    description: "الوصول الكامل إلى جميع الميزات ولا حاجة لبطاقة ائتمان."
                },
                personal: {
                    title: "شخصي",
                    price: " مجاني",
                    description: "ميزات منتجات غير محدودة وقنوات دعم مخصصة."
                },
                team: {
                    title: "فريق",
                    price: "مجاني ",
                    description: "ميزات منتجات غير محدودة وقنوات دعم مخصصة."
                }
            }
        },
            becomeBarber: "كن حلاقًا 💈",
            welcome: "احجز حلاقة شعرك القادمة",
            description: {
              detail: "حل شامل لجميع احتياجاتك من  الحلاقةالحلاقة الحلاقة."
            },
            getStarted: "ابدأ مجانًا",
            requestDemo: "طلب عرض تجريبي",
            mainFeatures: "الميزات الرئيسية",
            featuresTitle: "نهج تكنولوجي أول للدفع",
            feature1: {
              title: "جذب السياح",
              description: "اجذب المزيد من السياح من خلال منصتنا."
            },
            feature2: {
              title: "إدارة الحجوزات عبر الإنترنت",
              description: "إدارة الحجوزات عبر الإنترنت بسلاسة."
            },
            feature3: {
              title: "عرض صالونك على خرائطنا",
              description: "زيادة رؤيتك بالظهور على خرائطنا."
            },
            feature4: {
              title: "لوحة تحكم احترافية",
              description: "إدارة عملك باستخدام لوحة التحكم المتقدمة لدينا."
            },
            readMore: "اقرأ المزيد",
            choosePlan: "اختر خطتك",
            pricingPlanTitle: "خطة التسعير لدينا",
            pricingPlanDescription: "نعمل على مجموعة من الأدوات لجعل إدارة الأنظمة المعقدة أسهل، للجميع، مجانًا.",
            monthly: "شهري",
            annually: "سنوي",
            upcomingEvents: "الفعاليات القادمة",
            eventTitle: "قمة التكنولوجيا: تشكيل الغد",
            eventDescription: "انضم إلى المحادثات الديناميكية التي ستعيد تعريف المستقبل.",
            joinNow: "انضم الآن"
          }
        }
      },
    }
  });

export default i18n;
