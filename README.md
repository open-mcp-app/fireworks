# Fireworks

A modern MCP (Machine Control Protocol) client application built with Expo React Native.

## Features

- Remote MCP service integration
- Local MCP capabilities
- File system operations
- Cross-platform support (iOS & Android)

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/open-mcp-app/fireworks.git
cd fireworks
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## Development

### Running the App

- iOS: `npm run ios` or `yarn ios`
- Android: `npm run android` or `yarn android`
- Web: `npm run web` or `yarn web`

### Project Structure

```
fireworks/
├── app/              # Main application code
├── components/       # Reusable components
├── services/         # Business logic and services
│   └── mcp/         # MCP related services
├── hooks/           # Custom React hooks
├── constants/       # Constants and configurations
├── assets/          # Static assets
└── scripts/         # Utility scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2 .0 - see the [LICENSE](./LICENSE) file for details.
