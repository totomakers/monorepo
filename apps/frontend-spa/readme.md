# Frontend SPA

Let's use [Vite](https://vitejs.dev/) with [React](https://fr.reactjs.org/) 

## Why not Svelte, Preact, or Solid ?  

I miss too much libs, and i don't want waste time (and money 🤑)

What i miss ?:
+ Animation with [framer-motion](https://www.framer.com/motion/)
+ Headless select [Downshift](https://www.downshift-js.com/)
+ GraphQL code generation [Codegen](https://www.graphql-code-generator.com/)
+ Form easy with [react-hook-form](https://react-hook-form.com/)

But don't be sad, if you have time (really) you can use a new shiny framework \o/

## GraphQL

Graphql is mandatory for me, i can't live with typechecking.
If you like REST, take a look at [tRPC](https://trpc.io/) but i love GraphQL !

This is my 10 reasons why:

+ Typing
+ Generated documentation
+ Scalar
+ FileUpload
+ Directive
+ Easy maintenance with Fragment et [Colocating](https://www.apollographql.com/docs/react/data/fragments/#colocating-fragments)
+ Incredible performance (no more underfeching or hover feching)
+ "Easy" optimistic response
+ Realtime with Subscription
+ ... need more ?

Try avoid apollo, because [the quiet shiny guy](https://formidable.com/open-source/urql/) deserve better

## Css-in-JS

### 💀 [vanilla-extract](https://vanilla-extract.style/) 

Ditch cuz i hate have a `{component}.css.ts` for my style, using object. `css` is a real language let use it... 
But my second choice if linaria fail to me

### 💀 [stitches](https://stitches.dev/)

Grr, near zero runtime cost, is not zero. We look for better performance.

### 💀 [tailwind](https://tailwindcss.com/)

I know `css`, and my designer don't know what is a "design token" or "vertical rythm". Sorry tailwind :(

### ❤️ [linaria](https://github.com/callstack/linaria)

Ok, zero runtime cost, same api as [style-components](https://styled-components.com/) or [emotion](https://emotion.sh/docs) so let give a try
