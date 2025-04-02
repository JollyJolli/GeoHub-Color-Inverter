# GeoHub Color Inverter

Eine Chrome-Erweiterung, die während GeoHub-Spielen automatisch Farben invertiert, um die Sichtbarkeit zu verbessern und die Augenbelastung zu reduzieren.

## Projektherkunft

Dieses Projekt entstand aus einem häufigen Problem, mit dem GeoHub-Spieler konfrontiert sind: Das Standard-Farbschema kann während des Spiels schwer zu erkennen sein. Die invertierten Farben im Spiel machen es oft schwierig, wichtige Details zu unterscheiden, was zur Entwicklung dieser Erweiterung führte, um die Farbinversion automatisch zu handhaben und das Spielerlebnis zu verbessern.

## Funktionen

- Automatische Farbinversion auf GeoHub-Spielseiten
- Bildkorrektur zur Vermeidung von Doppelinversion
- Dynamische Updates für Echtzeitänderungen

## Installation

1. Laden Sie dieses Repository herunter oder klonen Sie es
2. Öffnen Sie Chrome und gehen Sie zu `chrome://extensions/`
3. Aktivieren Sie den "Entwicklermodus" in der oberen rechten Ecke
4. Klicken Sie auf "Entpackte Erweiterung laden" und wählen Sie den Erweiterungsordner aus

## Projektstruktur

```
├── manifest.json     # Erweiterungskonfiguration
├── content.js       # Haupt-Erweiterungsskript
├── icon48.svg       # Erweiterungssymbol (48x48)
└── icon128.svg      # Erweiterungssymbol (128x128)
```

## Technische Details

Die Erweiterung verwendet die folgenden Technologien und Funktionen:

- **Manifest V3**: Die neueste Version des Chrome-Manifestsystems
- **MutationObserver**: Zur Erkennung dynamischer Änderungen auf der Seite
- **CSS Filters**: Zur Anwendung der Farbinversion

Das Hauptskript (`content.js`) wird automatisch in GeoHub-Spielseiten injiziert und wendet die Farbinversion sowohl beim Laden der Seite als auch bei der Erkennung dynamischer Inhaltsänderungen an.

## Berechtigungen

Die Erweiterung benötigt nur die `activeTab`-Berechtigung zum Funktionieren, was bedeutet, dass sie nur auf die aktuelle Seite zugreifen kann, wenn der Benutzer aktiv mit ihr interagiert.

## Mitwirken

Wenn Sie zum Projekt beitragen möchten, können Sie gerne einen Pull Request erstellen oder ein Issue öffnen, um neue Funktionen oder Verbesserungen zu diskutieren.