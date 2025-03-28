module.exports = {
    testEnvironment: 'node', // oder 'jsdom' für Browser-Umgebung
    verbose: true, // Zeigt detaillierte Testberichte an
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Falls du Babel verwendest
    },
    testMatch: [
      '**/?(*.)+(spec|test).js', // Sucht nach Testdateien im Format .test.js oder .spec.js
    ],
  };
