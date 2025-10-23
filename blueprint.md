
# Project Blueprint

## Overview

This project is a multi-page web application featuring a user profile, a community market, and a user inventory. The application is built with HTML, CSS, and JavaScript, and it utilizes web components for a modular architecture.

## Implemented Features

### Styling and Design

*   **Core CSS:** A central `style.css` file provides global styles.
*   **Component Styles:** Each view (`UserProfileView`, `CommunityMarketView`, `UserInventoryView`, etc.) has its own dedicated CSS file for component-specific styles.
*   **Favicon:** A `favico.ico` file is included to be displayed in the browser tab.

### Features

*   **User Profile View:** Displays user information, including a profile picture, badges, projects, and reviews.
*   **Community Market View:** A view to showcase community items.
*   **User Inventory View:** A view to display a user's inventory.
*   **Reusable Footer:** A footer component with a copyright notice is included on all pages.

## Current Plan

### Goal: Redesign the "UserProfileView" to better showcase skills and provide a contact form.

### Steps:

1.  **"Badges" to "Solutions" Section:**
    *   Rename the "Badges" section to "Solutions".
    *   Replace the current badge display with a dynamic carousel to showcase skills using the newly uploaded SVG icons.
    *   Implement a hover effect on each SVG to display a skill level visualization.

2.  **"Projects" to "Contact Us" Section:**
    *   Replace the "Latest And Ongoing Projects" section with a "Contact Us" form.
    *   The form will include fields for name, email, and a message.
    *   Implement functionality to store the submitted messages.
