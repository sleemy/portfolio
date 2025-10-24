
# Blueprint for JerryJigga's Portfolio

This document outlines the design, features, and implementation of a personal portfolio website for JerryJigga. The site is a modern, single-page application built with HTML, CSS, and JavaScript, and deployed on Firebase Hosting.

## **Purpose and Capabilities**

The primary goal of this project is to create a professional and visually appealing online portfolio to showcase JerryJigga's skills and projects. The site will feature:

*   **A personal introduction:** A brief bio and profile picture.
*   **A "Solutions" section:** A carousel to display projects or key skills.
*   **A contact form:** A secure way for visitors to get in touch.
*   **Social media links:** Easy access to JerryJigga's online presence.
*   **Modern and responsive design:** A visually appealing and mobile-friendly layout.
*   **Security:** Protection against spam and abuse using reCAPTCHA Enterprise.

## **Style, Design, and Features**

### **Visual Design**

*   **Layout:** A single-page layout with clear sections for easy navigation.
*   **Color Palette:** A modern and clean color scheme.
*   **Typography:** Clear and readable fonts.
*   **Iconography:** Use of SVG icons for social media links.
*   **Components:**
    *   **Navigation Bar:** A simple and intuitive navigation bar.
    *   **Profile Header:** A prominent header with a profile picture and status.
    *   **Carousel:** A dynamic carousel to showcase solutions.
    *   **Contact Form:** A user-friendly form with clear labels and inputs.
    *   **Footer:** A custom footer component.

### **Features**

*   **Web Components:** The site uses a custom web component for the footer (`<app-footer>`).
*   **ES Modules:** JavaScript is organized into modules for better code structure.
*   **reCAPTCHA Enterprise Integration:** The contact form is protected by reCAPTCHA Enterprise to prevent spam.
*   **Firestore Integration:** Form submissions are intended to be stored in a Firestore database.
*   **Secure by Default:** Firestore rules are in place to deny all access by default, with a specific rule to allow creating submissions.
*   **Environment-Specific Configuration:** Sensitive keys and configuration are managed in `env.js` (frontend) and `.env` (backend) files, which are excluded from version control.

## **Current Plan**

The current focus is on finalizing the implementation of the reCAPTCHA-protected contact form and ensuring the secure deployment of the application.

### **Steps**

1.  **Resolve Deployment Issues:** Address any authentication or configuration errors preventing successful deployment to Firebase Hosting.
2.  **Verify reCAPTCHA and Firestore Integration:** Once deployed, thoroughly test the contact form to ensure reCAPTCHA is working correctly and that form submissions are being successfully and securely saved to the Firestore database.
3.  **Refine and Polish:** Review the overall design and user experience, making any necessary adjustments to the styling, layout, or functionality.
