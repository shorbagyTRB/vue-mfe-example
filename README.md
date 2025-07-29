# Vue React Micro-Frontend

A micro-frontend project using Vue and React components with pnpm workspace.

## Project Structure

- `layout/` - Main layout application (Vue)
- `remote/` - Remote Vue component 
- `remote-react/` - Remote React component

## Development

### Run All Applications Concurrently

```bash
pnpm dev
```

This will start:
- Layout app on default port (dev script)
- Remote Vue app on port 3001 (remote script)
- Remote React app on port 3002 (remote script)

### Run Individual Applications

```bash
# Layout application
pnpm dev:layout

# Remote Vue application
pnpm dev:remote

# Remote React application  
pnpm dev:remote-react
```

### Build

```bash
# Build all applications
pnpm build

# Build individual applications
pnpm build:layout
pnpm build:remote
pnpm build:remote-react
```

## Workspace Configuration

This project uses pnpm workspaces to manage multiple applications. The workspace is configured in `pnpm-workspace.yaml` and scripts are orchestrated from the root `package.json`.
