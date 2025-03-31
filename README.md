Root of All Good - Windows Rootkit Detector

Inspired by Sysinternals' RootkitRevealer, this project offers a modern tool to detect rootkits and hidden threats on Windows systems, combining advanced techniques with a user-friendly interface.

### Planned Features

The following features are planned for the Root of All Good project (in order maybe):

- **User-Friendly UI**: A clean and intuitive graphical interface built with Electron.
- **Raw Registry Hive Comparison**: Compare raw Registry hive data with the output from the Windows API to identify discrepancies.
- **Registry Scanning**: Detect anomalies in the Windows Registry by scanning for hidden or malicious entries.
- **Command-Line Interface (CLI) Integration**: Support for advanced users to interact with the tool via the command line.
- **Real-Time Monitoring**: Provide real-time detection of suspicious changes in the system.
- **Detailed Reporting**: Generate comprehensive reports for detected issues, including potential remediation steps.
- **Secure Operations**: Implement robust security measures to prevent tampering or misuse of the tool.
- **Automated Updates**: Enable seamless updates to keep the tool up-to-date with the latest features and fixes.
- **Dark Mode**: Include a dark mode option for better usability in low-light environments.
- **Comprehensive Documentation**: Provide detailed documentation for both end-users and developers.

These features aim to make the Root of All Good project a robust and versatile tool for detecting and addressing rootkits on Windows systems.

### Project Structure

```
RoAG-kit/
├── src/
│   ├── backend/
│   │   ├── main.c              # Core logic for registry scanning and raw data comparison
│   │   ├── windows_api.c       # Windows API interaction
│   │   ├── windows_api.h       # Header file for Windows API functions
│   │   └── utils.c             # Utility functions for common tasks
│   └── frontend/
│       ├── main.js             # Electron main process
│       ├── renderer.js         # Electron renderer process
│       ├── index.html          # Main HTML file for the UI
│       └── styles.css          # CSS for styling the UI
├── assets/                     # Static assets like icons or images
├── tests/
│   ├── backend_tests.c         # Unit tests for the C backend
│   └── frontend_tests.js       # Tests for the Electron frontend
├── build/                      # Compiled binaries and packaged app
├── package.json                # Electron project configuration
├── Makefile                    # Build instructions for the C backend
└── README.md                   # Project documentation
```

### Explanation:
- **`src/backend/`**: Contains the C code for low-level operations like registry scanning and Windows API interactions.
- **`src/frontend/`**: Contains the Electron code for the desktop app's UI and logic.
- **`assets/`**: Stores static files like icons or images used in the app.
- **`tests/`**: Includes unit tests for both the backend and frontend.
- **`build/`**: Stores compiled binaries and the packaged app.
- **`package.json`**: Manages dependencies and scripts for the Electron app.
- **`Makefile`**: Automates the build process for the C backend.

```
