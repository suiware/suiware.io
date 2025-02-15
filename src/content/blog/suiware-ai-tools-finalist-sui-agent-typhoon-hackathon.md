---
# author: Kos Komelin
pubDatetime: 2025-02-15T00:00:00Z
# modDatetime: 2025-01-28T00:00:00Z
title: Suiware AI Tools is a Finalist of the Sui Agent Typhoon Hackaton
slug: suiware-ai-tools-finalist-sui-agent-typhoon-hackathon
description: Suiware AI Tools has made it to the finals of the first Sui AI hackathon. Time to tell you what the project is about and why you may want to have it in your toolkit.
featured: true
draft: false
tags:
  - events
  - hackathons
---

My project has made it to the finals of the first [Sui Agent Typhoon](https://sui.io/sui-agent-typhoon) hackathon. 
Let me tell you what the project is about and how it can get you to the next level as a developer.

<!--truncate-->

## Motivation

While looking for ideas for the hackathon, I explored a few frameworks for building AI agents including ElizaOS, Coinbase AgentKit, and Inngest AgentKit.

Some of the frameworks were under super-active development, some were overloaded with features, some targeted to a specific blockchain, but one SDK caught my eye because it was easy to use and extendable. I'm talking about [Vercel AI SDK (ai)](https://www.npmjs.com/package/ai), which I decided to try out.

## What are Vercel AI SDK Tools?

Vercel AI SDK (`ai`) has a concept of Tools (read plugins). The tools instruct your AI code to recognize specific commands in your prompts and perform certain actions.

Here is an example of such a tool which fetches current temperature in Sydney:

```ts
export const sydneyTemperatureTool = tool({
  description: 'Gets current temperature in Sydney',
  parameters: z.object({}),
  execute: async () => {
    const latitude = -33.8688 // Sydney's latitude
    const longitude = 151.2093 // Sydney's longitude
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`

    try {
      const response = await fetch(URL)
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`)
      }

      const data = (await response.json()) as any
      const currentWeather = data.current_weather

      return {
        temperature: `${currentWeather.temperature}°C`,
      }
    } catch (error: any) {
      return { error: error.message }
    }
  },
})
```

Simple structure, isn't it? Yet powerful once plugged in to an AI agent like so...

```ts
const { text } = await generateText({
  model: anthropic('claude-3-5-sonnet-latest'),
  prompt: 'I want to know the current temperature in Sydney',
  tools: {
    sydneyTemperature: sydneyTemperatureTool,
  },
  maxSteps: 5,
})

console.log(text)
```

The output of this code looks like this:

```
The current temperature in Sydney is 17.5°C.
```

I hope you get the idea. Now go and change your Linkedin title to "AI Solution Architect" and lesssgooo! But wait a minute, let me finish my post first ))

## What is my hackathon project about?

For the Sui Agent Typhoon Hackathon, I've built a collection of pluggable tools for `ai`, which allow your AI assistants to interact with Sui Network (balance, transfer and swap) and also get some market data (VIX value). I called the project [@suiware/ai-tools](https://www.npmjs.com/package/@suiware/ai-tools).

<iframe width="560" height="315" src="https://www.youtube.com/embed/oeAXqvaQzcI?si=etPBF24txuv-UNEO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Project intro on Youtube](https://youtu.be/oeAXqvaQzcI)

Basically with my tools plugged in, your AI assistant would be capable of processing the following prompt:

```
If my Sui balance is above 5 and VIX is below 20,
turn 1 sui into USDC and donate 0.1 SUI to @kkomelin ;)
```

Sounds cool? If you think so, play with the [examples](https://github.com/suiware/ai-tools/blob/main/packages/examples/README.md) and share your feedback with [me on X](https://twitter.com/suiware_)!

## Next steps

There are a lot of opportunities to extend and improve the project, for example:
- Improve suiTransferTool: add support for other tokens
- Add more tools: staking, lending, pools, etc.
- Add more services: Suilend, Bluefin, Cetus, DefiLlama, etc.
- Add more model providers: Atoma, local models
- Implement Command scheduling
- Add Web UI examples
- Create automated tests

If you have your own ideas which you want to contribute to the project, ping me on [Discord](https://discord.gg/CD3wRRP5) or create an issue on [Github](https://github.com/suiware/ai-tools/issues/new).

Let's make `@suiware/ai-tools` the best AI toolkit for Sui!

## Thank you

I want to shout out to all my buddies for their support and advice during development, and thank you for your interest in my stuff! I'll keep building.
