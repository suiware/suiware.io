---
# author: Kos Komelin
pubDatetime: 2025-05-27T00:00:00Z
# modDatetime: 2025-01-28T00:00:00Z
title: "Using Suiware MCP from Claude Code"
slug: suiware-mcp-claude-code
description: Learn how to supply Suiware MCP tools to Claude Code and have fun.
featured: true
draft: false
tags:
  - ai-tools
  - mcp
  - tutorials
---

Can't wait to plug Suiware MCP to my fridge but today I'll be using Claude Code for that.

<!--truncate-->

## 1. Create `claude_config.json` to plug Suiware MCP

Let's start from copying an example of MCP config from the [@suiware/ai-tools](https://github.com/suiware/ai-tools) repo:

```bash
curl https://raw.githubusercontent.com/suiware/ai-tools/refs/heads/main/packages/mcp/claude_config.example.json -o ./claude_config.json
```

## 2. Configure Sui account access

Then create a config for the Suiware MCP server with your Sui account key and network type (I recommend a new account for that):

```bash
curl https://raw.githubusercontent.com/suiware/ai-tools/refs/heads/main/packages/mcp/.env.example -o .env
```

Open `.env` and set `SUI_PRIVATE_KEY` and `SUI_NETWORK` to your values. 
Suiware MCP is better suitable for `mainnet`, but most of the tools also support `testnet`.

## 3. Update `--env-config-file` in `claude_config.json`

Use the absolute path to your `.env` file in `--env-config-file`:

```json
{
  "mcpServers": {
    "suiware-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@suiware/mcp@latest",
        "--env-config-file=/YOUR-ABSOLUTE-PATH/.env"
      ]
    }
  }
}
```

## 4. Run Claude Code with Suiware MCP plugged-in

_If you don't have Claude Code CLI installed, refer to the [Claude Code guide](https://docs.anthropic.com/en/docs/claude-code/getting-started)._

Time to run Claude Code with Suiware MCP enabled:

```bash
claude -p "get my balances and address" --mcp-config ./claude_config.json --allowedTools "mcp__suiware-mcp__get-wallet-balance,mcp__suiware-mcp__get-address"
```

To add more tools, just follow the same pattern `mcp__suiware-mcp__[tool-name]` and add them to `--allowedTools` comma-separated. 

Here are the tools you can use currently:

- `get-address` (e.g. "show my address")
- `get-wallet-balance` (e.g. "my balances")
- `swap-coin` (e.g. "swap 1 sui to wal")
- `transfer-coin` (e.g. "send 1 sui to @suiware")
- `stake-sui` (e.g. "stake 1 sui")
- `unstake-sui` (e.g. "unstake sui")

---

Did you manage to make it work? If not, [ping Suiware on X](https://x.com/suiware_).

Happy vibe-coding!
