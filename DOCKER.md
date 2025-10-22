# Docker Setup for Octobid Web

This document explains how to run the Octobid Next.js application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system
- Create `.env` file from template (see Environment Variables section)

## Quick Start

### Production Build

1. **Build and run with Docker Compose:**
   ```bash
   npm run docker:up
   ```

2. **Or build and run manually:**
   ```bash
   npm run docker:build
   npm run docker:run
   ```

3. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Build (with hot reloading)

**Option 1: Using Docker Compose (Recommended)**
```bash
npm run docker:dev
```

**Option 2: Manual build and run**
1. **Build development image:**
   ```bash
   npm run docker:build-dev
   ```

2. **Run development container:**
   ```bash
   npm run docker:run-dev
   ```

## Available Docker Scripts

| Script | Description |
|--------|-------------|
| `npm run docker:build` | Build production Docker image |
| `npm run docker:build-dev` | Build development Docker image |
| `npm run docker:run` | Run production container |
| `npm run docker:run-dev` | Run development container with hot reloading |
| `npm run docker:up` | Start production services with Docker Compose |
| `npm run docker:dev` | Start development services with Docker Compose |
| `npm run docker:down` | Stop Docker Compose services |
| `npm run docker:logs` | View container logs |

## Docker Files Explained

### Dockerfile (Production)
- Multi-stage build for optimized production image
- Uses Node.js 18 Alpine for smaller image size
- Implements Next.js standalone output for better performance
- Runs as non-root user for security
- Final image size: ~150MB

### Dockerfile.dev (Development)
- Single-stage build for development
- Includes hot reloading and development tools
- Mounts source code as volume for live updates

### docker-compose.yml
- Orchestrates the application services
- Includes both production and development configurations
- Sets up networking and environment variables

## Environment Variables

### Setup
1. **Copy the template:**
   ```bash
   cp env.template .env
   ```

2. **Edit `.env` file with your values:**
   ```bash
   # Application Configuration
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   
   # Next.js Configuration
   NEXT_TELEMETRY_DISABLED=1
   
   # Add your other environment variables here
   # DATABASE_URL=your_database_url_here
   # API_KEY=your_api_key_here
   ```

### Available Variables
- `NODE_ENV`: Environment mode ("production" or "development")
- `PORT`: Application port (default: 3000)
- `HOSTNAME`: Container hostname (default: "0.0.0.0")
- `NEXT_TELEMETRY_DISABLED`: Disables Next.js telemetry (default: 1)

### How It Works
- Docker Compose reads variables from `.env` file
- Variables are passed to containers via `env_file` and `environment`
- Dockerfile provides fallback defaults with `${VAR:-default}` syntax

## Optimization Features

1. **Multi-stage builds**: Reduces final image size
2. **Layer caching**: Dependencies are cached separately from source code
3. **Standalone output**: Next.js creates a minimal runtime
4. **Non-root user**: Enhanced security
5. **Alpine Linux**: Smaller base image
6. **Docker ignore**: Excludes unnecessary files

## Troubleshooting

### Docker daemon not running
```bash
# Start Docker Desktop or Docker daemon
# On macOS: Open Docker Desktop application
# On Linux: sudo systemctl start docker
```

### Container won't start
```bash
# Check container logs
npm run docker:logs

# Or check specific container
docker logs octobid-web
```

### Port already in use
```bash
# Stop all containers
npm run docker:down

# Or kill specific port
lsof -ti:3000 | xargs kill -9
```

### Build issues
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t octobid-web .
```

