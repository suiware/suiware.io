---
# author: Kos Komelin
pubDatetime: 2025-02-11T00:00:00Z
# modDatetime: 2025-01-28T00:00:00Z
title: Sui dApp Starter Updates, February 2025
slug: sui-dapp-starter-updates-february-2025
description: Sui dApp Starter has just gotten a few exciting updates, including a new Next.js template and @suiware/kit integration.
featured: false
draft: false
tags:
  - sui-dapp-starter
---

Following your feedback, Sui dApp Starter has just gotten a few important updates, which I'd like to share with you. 

<!--truncate-->

It took me a while to get to writing this post because I kept my hands dirty by attending Sui Agent Typhoon hackathon (more on this later), but now I'm back on track and happy to share the Sui dApp Starter news.

Just a second, let me welcome and thank new people in the community who are trying Sui dApp Starter and sharing their feedback! Your help is priceless because it helps the starter evolve and improve.

Now let's get down to business and see what's new in Sui dApp Starter:

## New Templates

I've introduced a new concept, called Template. Template is a full-stack app with Move smart contract and a frontend integrated with it.

Now Sui dApp Starter CLI asks you to choose a template when you create a new project.

Check it out yourself:

```bash
pnpm create sui-dapp@latest
```

We have a few templates available now, including a couple of new ones:

| Template | Description | 
| --- | --- | 
| Greeting (React) | A default good old template with a Move contract which utilizes Sui Object Display (NFT) and native Sui Randomness. Frontend is built with React, SWC, Vite, Tailwind. |
| Greeting (Next.js) | **(new)** The Move part is the same as in Greetings (React), but the frontend is built with Next.js. |
| Counter (React) | **(new)** A lightweight template with a simple Move counter contract and a React frontend. |

More on the templates in the [Sui dApp Starter docs](https://sui-dapp-starter.dev/docs/templates/).

## @suiware/kit

Sui dApp Starter is now integrated with [@suiware/kit](https://github.com/suiware/kit), an opinionated yet useful React kit with hooks and components for Sui development.

I started from extracting Sui-related components and hooks to a separate project to make them reusable, so you guys could use it in your own projects without Sui dApp Starter, and then I also added AddressInput and AmountInput components which I think people need in most projects.

Here are the kit [docs](https://www.npmjs.com/package/@suiware/kit) and [demo](https://kit.suiware.io/). 
Feel free to suggest or contribute new components and hooks! I'm here to help with getting them to the kit.

--

That's all for now, see you next time with me sharing my recent hackathon experience.
