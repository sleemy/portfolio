
# Style Guide: Steam-Inspired Portfolio

This document outlines the design system for the Steam-Inspired Portfolio project. It ensures a consistent and cohesive user experience across all views.

## Color Palette

The color scheme is designed to be dark, modern, and reminiscent of the Steam platform.

| Name               | Hex       | Variable                  | Usage                                         |
| ------------------ | --------- | ------------------------- | --------------------------------------------- |
| Background         | `#1b2838` | `--background-color`      | Main background color for all pages.          |
| Header/Navigation  | `#171a21` | `--header-color`          | Background for headers and navigation bars.   |
| Text               | `#c7d5e0` | `--text-color`            | Primary text color for readability.           |
| Accent             | `#66c0f4` | `--accent-color`          | For links, buttons, titles, and active states.|
| Card               | `#2a475e` | `--card-color`            | Background color for cards and components.    |
| Shadow             | `#000000` | `--shadow-color`          | For creating depth with `box-shadow`.         |

## Typography

*   **Font Family**: 'Arial', sans-serif
*   **Base Font Size**: 16px

| Element           | Font Size | Font Weight | Color             | Notes                                     |
| ----------------- | --------- | ----------- | ----------------- | ----------------------------------------- |
| Page Title (`h1`) | `2em`     | `bold`      | `var(--accent-color)` | For main titles (e.g., Username).         |
| Section Title (`h2`)| `1.8em`   | `normal`    | `var(--accent-color)` | For section headings (e.g., Badges).      |
| Card Title (`h3`) | `1.1em`   | `normal`    | `var(--accent-color)` | For titles within components.             |
| Body Text (`p`)   | `1em`     | `normal`    | `var(--text-color)`   | For general paragraph text.               |
| Links (`a`)       | `1.2em`   | `normal`    | `var(--text-color)`   | Navigation links.                         |

## Components

### Navigation Bar (`<nav class="main-nav">`)

*   **Background**: `var(--header-color)`
*   **Link Color**: `var(--text-color)`
*   **Active/Hover Color**: `var(--accent-color)`
*   **Layout**: Flexbox, centered.

### Cards (`<user-badge>`, `<project-card>`, etc.)

*   **Background**: `var(--card-color)`
*   **Padding**: `20px`
*   **Border Radius**: `8px`
*   **Box Shadow**: `0 4px 8px var(--shadow-color)`
*   **Hover Effect**: `transform: translateY(-5px); box-shadow: 0 8px 20px var(--shadow-color), 0 0 15px var(--accent-color);`

## Visual Effects

*   **Background Texture**: A subtle noise texture (`subtle-noise.png`) is applied to the main `body` to add a tactile feel.
*   **Depth**: Multi-layered drop shadows (`box-shadow`) are used on headers and cards to create a sense of depth and lift elements off the page.
*   **Interactivity**: Interactive elements like links and cards have a hover effect that includes a color change and an enhanced shadow, creating a "glow" effect.
