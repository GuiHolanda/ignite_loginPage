## Initial configuration

Create the project with vite:

```bash
npm create vite@latest
```

Instal the dependencies :

```bash
npm i
```

Instal Tailwind, Postcss and Autoprefixer:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Create the files tailwind.config e o postcss.config with:

```bash
npx tailwindcss init -p
```

change the content's directory in the tailwind.config

content: ['./src/**/*.tsx'],

Intall storybook

```bash
npx sb init --builder @storybook/builder-vite --use-npm
```
