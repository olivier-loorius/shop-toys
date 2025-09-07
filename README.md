# Shop Toys - E-commerce Next.js


Un projet e-commerce développé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Commandes

### Développement
```bash
# Démarrer le serveur de développement
pnpm dev

# Construire le projet
pnpm build

# Démarrer le serveur de production
pnpm start
```

### Qualité du code
```bash
# Linter le code
pnpm lint

# Formater le code avec Prettier
pnpm format
```

## 📁 Structure du projet

```
src/
├── app/                    # App Router Next.js
│   ├── api/               # Routes API
│   │   └── health/        # Endpoint de santé
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── backend/               # Logique backend
│   └── lib/
│       └── health.ts      # Module de santé API
└── frontend/              # Composants frontend
    └── components/
        └── Title.tsx      # Composant titre
```

## 🛠️ Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Prettier** - Formatage de code
- **ESLint** - Linting

## 🌐 Endpoints

- **Frontend** : http://localhost:3000
- **API Health** : http://localhost:3000/api/health

## 📝 Configuration

- **Prettier** : `.prettierrc`
- **ESLint** : `eslint.config.mjs`
- **TypeScript** : `tsconfig.json`
- **Next.js** : `next.config.ts`