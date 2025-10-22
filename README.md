# Octobid Web

A modern B2B platform designed to streamline the buying and selling of medical equipment and supplies, connecting suppliers directly with hospitals and healthcare providers.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 15 and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Healthcare Focus**: Specialized for medical equipment procurement
- **Co-buying Platform**: Group purchasing for better pricing
- **Real-time Tracking**: Monitor orders and deliveries
- **Trusted Network**: Verified suppliers and healthcare providers


## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized development)

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone git@github.com:M-Alshahri/octobid_website_main.git
   cd octobid_website_main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Development

1. **Set up environment variables:**
   ```bash
   cp env.template .env
   # Edit .env with your values
   ```

2. **Run with Docker Compose:**
   ```bash
   npm run docker:dev
   ```

3. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000)


## 🐳 Docker Commands

| Command | Description |
|---------|-------------|
| `npm run docker:build` | Build production image |
| `npm run docker:build-dev` | Build development image |
| `npm run docker:run` | Run production container |
| `npm run docker:run-dev` | Run development container |
| `npm run docker:up` | Start production services |
| `npm run docker:dev` | Start development services |
| `npm run docker:down` | Stop all services |
| `npm run docker:logs` | View container logs |



## 🌍 Environment Variables

Create a `.env` file from the template:

```bash
cp env.template .env
```

**Built with ❤️ for the healthcare industry**