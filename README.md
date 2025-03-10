# Novel & Manhwa Tracker

A web application for tracking read novels and manwhas, ensuring a mobile-friendly experience.

## Tech Stack

### **Frontend**
- [Nuxt.js](https://nuxt.com/) - Vue-based meta-framework for server-side rendering (SSR) and static site generation (SSG).
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- [Pinia](https://pinia.vuejs.org/) - Lightweight state management for Vue/Nuxt.
- Nuxt-based routing - Built-in file-based routing.
- OAuth - Google login integration for authentication.
- `useFetch` or Axios - API communication (TBD).

### **Backend**
- [NestJS](https://nestjs.com/) - Scalable backend framework for Node.js with TypeScript.
- [PostgreSQL](https://www.postgresql.org/) - Relational database for storing user data and tracking information.
- [Passport.js](http://www.passportjs.org/) - Authentication middleware for OAuth integration.
- REST API - Standardized API for frontend communication.
- [Redis](https://redis.io/) - Caching layer for improved performance.
- [BullMQ](https://docs.bullmq.io/) - Job queue for handling background tasks.

## 📌 Naming Conventions

### 1️⃣ General Naming Rules

| **Element**               | **Naming Style**                                              | **Example**                                               |
|---------------------------|---------------------------------------------------------------|-----------------------------------------------------------|
| **Classes**               | PascalCase                                                    | `UserEntity.ts`, `AuthService.ts`                         |
| **Interfaces**            | PascalCase with `I` Prefix                                    | `IUser.ts`, `IAuthService.ts`                             |
| **Variables**             | camelCase                                                     | `userList`, `chapterCount`                                |
| **Functions**             | camelCase                                                     | `fetchUserData()`, `updateChapter()`                      |
| **Files (Backend)**       | PascalCase for entities, kebab-case for modules & controllers | `UserEntity.ts`, `auth.controller.ts`, `novel.service.ts` |
| **Files (Frontend)**      | kebab-case for components, camelCase for composables          | `user-card.vue`, `useAuth.ts`                             |
| **Database**              | snake_case, plural                                            | `users`, `user_novels`                                    |
| **Environment Variables** | SCREAMING_SNAKE_CASE                                          | `DATABASE_URL`, `JWT_SECRET`                              |


## Project Scope

### Objective
To create a user-friendly web application that allows users to track their light novels and manga reading.

### Key features
1. Reading Progress Tracking
   - Users can increment or decrement chapter count with a simple plus/minus button instead of manually entering numbers.
   - A quick overview of currently reading, completed, and dropped titles.
   - Option to add notes or comments on specific titles.
2. Title Search & Auto-Completion
   - A dedicated searchable title database to handle large collections (1,000+ titles).
   - As users type in a title, the system will suggest existing titles from an external manga/novel database.
   - If the title is found, it can be added to their list instantly.
   - If the title is missing, users can manually add it.
   - Optimized indexing for fast searching and retrieval.
3. Import & Export Functionality
   - Users can import their existing lists (CSV, JSON) to avoid manually inputting 1,000+ titles.
   - Bulk upload support to quickly transfer data from spreadsheets.
   - Ability to export reading history for backup or migration.
4. Cover Image Management
   - Users can upload their own cover images for a title.
   - Future enhancement: The system will automatically fetch cover images using web crawling.
5. Personalized Library & List Management
   - Users can categorize their collection (e.g., Reading, Completed, Dropped, Wishlist).
   - Ability to filter by genre, author, or user-defined tags.
   - Search function to quickly find previously read titles.
6. Popular Titles & Trends
   - Slideshow on the homepage showcasing most-read novels and manga based on user activity.
   - Ranking system that tracks:
     - Most-read titles (total chapters read across all users).
     - Trending now (titles frequently updated by users in the last 30 days).
     - Leaderboard of the most active readers.
7. Authentication & User Profiles
   - OAuth integration (Google login) for a seamless sign-in experience.
   - Users can customize their profiles with avatars, reading stats, and favorite genres.
8. Backend Enhancements
   - Redis caching for faster API responses.
   - BullMQ for background tasks, such as fetching cover images asynchronously.

## Future Enhancements
- Web Scraping Integration: Automate fetching of manga/novel metadata and images.
- Social Features: Friends list, shared recommendations, and reading challenges.
- Mobile App Extension: Progressive Web App (PWA) support for an enhanced mobile experience.
- Export/Import Data: Allow users to migrate from spreadsheets or other tracking systems.

## License
This project is open-source (license TBD).

