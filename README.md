# Vue React Svelte Micro-Frontend

A micro-frontend project using Vue, React, and Svelte components with pnpm workspace.


## Note

This project uses Vite 7, which requires Node.js version 20.19+ or 22.12+. For the best experience, we recommend using Node.js 22.12+.


## Project Structure

- `layout/` - Main layout application (Vue)
- `remote/` - Remote Vue component 
- `remote-react/` - Remote React component
- `remote-svelte/` - Remote Svelte component

## Development

### Node.js Version

```bash
# Install and use Node.js version from .nvmrc
nvm install
nvm use

# Verify the version
node --version
```

### Run All Applications Concurrently

```bash
pnpm dev
```

This will start:
- Layout app on default port (dev script)
- Remote Vue app on port 3001 (remote script)
- Remote React app on port 3002 (remote script)
- Remote Svelte app on port 3003 (remote script)

### Run Individual Applications

```bash
# Layout application
pnpm dev:layout

# Remote Vue application
pnpm dev:remote

# Remote React application  
pnpm dev:remote-react

# Remote Svelte application
pnpm dev:remote-svelte
```

### Build

```bash
# Build all applications
pnpm build

# Build individual applications
pnpm build:layout
pnpm build:remote
pnpm build:remote-react
pnpm build:remote-svelte
```

## Workspace Configuration

This project uses pnpm workspaces to manage multiple applications. The workspace is configured in `pnpm-workspace.yaml` and scripts are orchestrated from the root `package.json`.
