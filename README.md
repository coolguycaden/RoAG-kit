Root of All Good - Windows Rootkit Detector

Essentially re-made RootkitRevealer from Sysinternals

Planned features
    - user-friendly ui
    - cli integration
    - registry scanning
    - compare raw Registry hive data to Windows API

### Project Structure

Here is a suggested structure for your project:

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

This structure separates concerns, making the project easier to manage and scale.