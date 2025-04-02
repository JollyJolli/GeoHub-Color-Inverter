# GeoHub Color Inverter

A Chrome extension that automatically inverts colors during GeoHub games to improve visibility and reduce eye strain.

## Project Origin

This project was born from a common issue faced by GeoHub players: the default color scheme can be challenging to see clearly during gameplay. The inverted colors in the game often make it difficult to distinguish important details, which led to the creation of this extension to automatically handle color inversion and enhance the gaming experience.

## Features

- Automatic color inversion on GeoHub game pages
- Image correction to prevent double inversion
- Dynamic updates for real-time changes

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder

## Project Structure

```
├── manifest.json     # Extension configuration
├── content.js       # Main extension script
├── icon48.svg       # Extension icon (48x48)
└── icon128.svg      # Extension icon (128x128)
```

## Technical Details

The extension uses the following technologies and features:

- **Manifest V3**: The latest version of Chrome's manifest system
- **MutationObserver**: To detect dynamic changes on the page
- **CSS Filters**: To apply color inversion

The main script (`content.js`) is automatically injected into GeoHub game pages and applies color inversion both when loading the page and when dynamic content changes are detected.

## Permissions

The extension only requires the `activeTab` permission to function, which means it can only access the current page when the user is actively interacting with it.

## Contributing

If you'd like to contribute to the project, feel free to create a pull request or open an issue to discuss new features or improvements.