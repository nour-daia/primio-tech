# Primio Tech — Team Portfolio

موقع تعريفي لفريق **Primio Tech** مبني بـ React + Vite مع Tailwind CSS v4 (CDN) وهوية بصرية موحّدة.

---

## التشغيل | Getting Started

```bash
cd primio-tech
npm install
npm run dev
```

افتح المتصفح على: `http://localhost:5173`

### أوامر إضافية

| Command | Description |
|---------|-------------|
| `npm run build` | بناء نسخة الإنتاج |
| `npm run preview` | معاينة نسخة الإنتاج محلياً |

---

## الهوية البصرية | Visual Identity

| اللون | Hex | الاستخدام |
|-------|-----|-----------|
| Dark Navy | `#0A0E1A` | الخلفية الأساسية (~70%) |
| Electric Blue | `#2563EB` | أزرار، روابط، تمييز (~15%) |
| Neon Purple | `#7C3AED` | تدرجات، badges (~10%) |
| Neon Cyan | `#00D4FF` | highlights، hover (~5%) |
| Dark Slate | `#1E293B` | بطاقات، surfaces |
| Blue Black | `#111827` | footer، inputs |
| Soft White | `#F8FAFC` | النصوص |

الألوان معرّفة في `index.html` داخل `@theme` لـ Tailwind، مع تدرجات في المكوّنات (`from-electric to-purple`).

---

## هيكل المشروع | Project Structure

```
primio-tech/
├── index.html              # Tailwind CDN + @theme colors
├── src/
│   ├── App.jsx             # تجميع الأقسام
│   ├── index.css           # scroll, animations, utilities
│   ├── config/
│   │   └── site.js         # إعدادات الموقع + WhatsApp
│   ├── data/
│   │   ├── team.js         # أعضاء الفريق
│   │   ├── services.js     # الخدمات
│   │   └── projects.js     # المشاريع
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ui/             # مكوّنات قابلة لإعادة الاستخدام
│   │       ├── Button.jsx
│   │       ├── SectionTitle.jsx
│   │       ├── SocialLinks.jsx
│   │       └── TeamCard.jsx
│   └── assets/             # صور وشعار
```

---

## التعديلات الشائعة | Common Edits

### 1. إضافة عضو فريق جديد

عدّل `src/data/team.js`:

```js
{
  id: "unique-id",
  name: "Member Name",
  role: "Job Title",
  bio: "Short bio here.",
  image: "/path/to/photo.jpg", // اختياري — بدون صورة تظهر الأحرف الأولى
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username", // اختياري
  },
}
```

### 2. تحديث رقم WhatsApp

عدّل `src/config/site.js`:

```js
whatsapp: {
  number: "9665XXXXXXXX",  // بدون + أو مسافات
  message: "Hello Primio Tech team!",
},
```

### 3. تعديل الخدمات أو المشاريع

- الخدمات: `src/data/services.js`
- المشاريع: `src/data/projects.js` (استبدل الصور من `src/assets/`)

### 4. معلومات الموقع والتنقل

- `src/config/site.js` — الاسم، الوصف، البريد، روابط القائمة

---

## التقنيات | Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** via CDN (`@tailwindcss/browser@4`)
- **Framer Motion** — حركات خفيفة عند التمرير والتفاعل
- **React Icons** — أيقونات

---

## الأقسام | Sections

1. **Hero** — مقدمة الفريق + CTA
2. **About** — نبذة عن الفريق
3. **Services** — الخدمات
4. **Portfolio** — معرض المشاريع
5. **Team** — بطاقات الأعضاء
6. **Contact** — نموذج + زر WhatsApp
7. **Footer** — روابط وحقوق النشر

---

## Responsive Design

التصميم mobile-first باستخدام Tailwind breakpoints:

- `sm:` — 640px+
- `md:` — 768px+
- `lg:` — 1024px+

القائمة تتحول إلى drawer على الشاشات الصغيرة.

---

## الأداء | Performance

- صور `loading="lazy"` في Portfolio و About
- مكوّنات منفصلة لتحميل منطقي
- حركات `viewport={{ once: true }}` لتشغيل مرة واحدة فقط
- Tailwind CDN للتطوير السريع — للإنتاج يمكن الانتقال لـ `@tailwindcss/vite` لتحسين الحجم

---

## التقييم | Checklist

- [x] هوية بصرية موحّدة (ألوان + تدرجات + شعار)
- [x] قسم فريق قابل للتوسع
- [x] زر WhatsApp (رقم placeholder)
- [x] Responsive كامل
- [x] مكوّنات قابلة لإعادة الاستخدام
- [x] حركات خفيفة (Framer Motion)
- [x] README توثيقي

---

Built with ❤️ by Primio Tech
