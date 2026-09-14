---
sidebar_position: 1
title: Overview
---

# Arko

Arko is a fitness platform that connects gyms, personal trainers, and nutritionists to their students, bringing workouts, diet tracking, physical progress, and a social feed into a single app.

## What it does

- **Workouts**: students follow structured training plans (manually built or AI-assisted), track sets, reps, weight, and rest time per exercise, and log completed sessions, including optional GPS tracking for cardio.
- **Nutrition**: students log meals against a food database, track calories and macros, and set daily nutrition goals.
- **Physical progress**: students record weight, measurements, and photos over time.
- **Social feed**: students share completed workouts, follow friends, and interact through likes and comments.
- **Gamification**: a workout streak system with weekly freeze protection keeps students engaged.
- **Two sides of the product**: students use the mobile app directly, while gyms and professionals (personal trainers, nutritionists) get an admin panel to manage their linked students and build training/nutrition plans for them.

## My role

I'm a co-founder of Arko. I work as a developer on both the mobile app and backend, and I also handle the product's documentation and marketing, alongside my co-founder (CTO).

## Tech stack

| Layer | Technologies |
| --- | --- |
| Mobile app | React Native (Expo), TypeScript, Zustand, React Navigation |
| Backend | Node.js, Express, TypeScript, Sequelize, MySQL |
| Auth | JWT (JSON Web Tokens) |

## API documentation

See the [API Reference](./api/arko-api) for the main endpoints (authentication, workouts, and nutrition tracking), generated from an OpenAPI spec.

:::info[Not a live API]
The base URL in this reference is a placeholder, the requests aren't callable. This section isn't meant to be tested, it's a demonstration: how I structure and write API documentation for a real system, and the kind of documentation work I'd do for yours.
:::
