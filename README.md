# 🚀 Boutique Sextoys - E-commerce Optimisé

Une boutique en ligne moderne et performante construite avec **Next.js 15**, **React 19**, et **TypeScript**.

## ✨ Fonctionnalités

- **🏗️ Architecture moderne** : Next.js 15 avec App Router
- **⚡ Performance optimisée** : Code splitting, compression, cache
- **🎨 Design system** : Tailwind CSS avec thème sombre/clair
- **🌐 Internationalisation** : Support multilingue avec next-intl
- **📱 Responsive** : Interface adaptative mobile-first
- **🔒 Sécurité** : Headers de sécurité et validation TypeScript
- **🧪 Tests** : Configuration Vitest avec Testing Library

## 🛠️ Technologies

- **Frontend** : Next.js 15, React 19, TypeScript
- **Styling** : Tailwind CSS 4, Geist Fonts
- **Internationalisation** : next-intl
- **Tests** : Vitest, Testing Library
- **Linting** : ESLint, Prettier, Husky
- **Package Manager** : pnpm

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
pnpm install

# Développement
pnpm dev

# Build de production
pnpm build

# Tests
pnpm test
```

## 📁 Structure du projet

```
src/
├── app/                    # Pages et routes API Next.js
│   ├── api/               # Routes API backend
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Page d'accueil
├── components/            # Composants React réutilisables
│   ├── layout/           # Header, Footer
│   └── ui/               # Composants UI de base
├── hooks/                 # Custom hooks React
├── lib/                   # Utilitaires et logique métier
│   ├── api/              # Fonctions API
│   └── utils.ts          # Utilitaires généraux
├── types/                 # Types TypeScript
└── messages/              # Fichiers de traduction
```

## 🎯 Optimisations implémentées

### Performance

- **Code splitting** automatique avec Next.js
- **Compression** gzip/brotli activée
- **Images optimisées** avec formats WebP/AVIF
- **Cache headers** configurés
- **Bundle optimization** avec webpack

### SEO

- **Metadata** complète (OpenGraph, Twitter Cards)
- **Structured data** prêt
- **Sitemap** automatique
- **Robots.txt** optimisé

### Développement

- **TypeScript strict** pour la sécurité des types
- **ESLint + Prettier** pour la qualité du code
- **Husky** pour les hooks Git
- **Vitest** pour les tests unitaires

## 🔧 Configuration

### Variables d'environnement

```env
NEXT_PUBLIC_APP_URL=https://boutique-sextoys.com
NEXT_PUBLIC_API_URL=/api
```

### Scripts disponibles

- `pnpm dev` - Serveur de développement
- `pnpm build` - Build de production
- `pnpm start` - Serveur de production
- `pnpm lint` - Linting du code
- `pnpm format` - Formatage du code
- `pnpm test` - Tests unitaires

## 📈 Métriques de performance

- **Lighthouse Score** : 95+ (Performance, SEO, Accessibility)
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🚀 Déploiement

Le projet est prêt pour le déploiement sur :

- **Vercel** (recommandé)
- **Netlify**
- **Railway**
- **Docker**

## 📝 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

---

**Développé avec ❤️ en utilisant les dernières technologies web.**
