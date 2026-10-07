# Full-Stack Test: Capital Cities

Design and implement an API and a UI to create, edit, view and delete capital cities.

## Stack

- Frontend: React + TypeScript, Zustand (recommended), Mapbox
- Backend: Node.js, with a framework of your choice (Express, Fastify, NestJS)
- Database: an SQL database of your choice (e.g. PostgreSQL, MySQL, SQLite or MongoDB)
- Everything else is up to you.

This repo includes optional starters: an Express backend in `backend/` and a Postgres container
via Docker. You can use them, modify them, or replace them with your own setup.
If you do, make sure the project is still easy to run and describe how in your submission.

## Running the provided starter locally

Prerequisites: Node.js 20+, npm. Docker is only needed for the provided Postgres container.

1. Create the two accounts/keys you need:
   - REST Countries API key: <https://restcountries.com>
   - Mapbox public access token: <https://account.mapbox.com>
2. Configure your environment:
   ```bash
   cp .env.example .env
   ```
   then fill in `RESTCOUNTRIES_API_KEY` and `VITE_MAPBOX_TOKEN` in `.env`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the database (optional, skip if you use your own; Postgres on port 5432):
   ```bash
   npm run db
   ```
5. Start the API and the frontend together:

   ```bash
   npm run dev
   ```

   - Frontend: <http://localhost:5173>
   - API: <http://localhost:3001> (`GET /health` should return `{"ok":true}`)

No Docker or local Node? Open the repo in a GitHub Codespace instead; Postgres is started for you.
Add the two keys as Codespaces secrets, then run `npm run dev`.

## Data

Capital city:

| field       |        |
| ----------- | ------ |
| `id`        |        |
| `name`      | unique |
| `latitude`  |        |
| `longitude` |        |
| `country`   | unique |

```json
{
  "id": "...",
  "name": "string",
  "latitude": 0.0,
  "longitude": 0.0,
  "country": "string"
}
```

Create an SQL script that sets up the database schema (`db/schema.sql`). It must run automatically
the first time the database starts.

## Backend

On startup, import the countries and their capitals from the
[REST Countries](https://restcountries.com/docs) API (v5) into your database:

```
GET https://api.restcountries.com/countries/v5
Authorization: Bearer <RESTCOUNTRIES_API_KEY>
```

Map the API's data onto the model above (`country` = the country's common name, `name` = its capital).

Endpoints:

- `GET /capital`: all capital cities
- `GET /capital/<name>`: a capital city by name (case-insensitive)
- `POST /capital`: create
- `PUT /capital/<id>`: update
- `DELETE /capital/<id>`: delete

## Frontend

Connect the UI to the endpoints above, and implement:

- A list of countries with their capitals next to the map
- Add, edit and delete a city
- Remove a city from the map or from the list
- A marker on each capital on the map: a square, 32px × 32px. Clicking it opens a popup where the user can change the marker's color.

Implementation details and UI/UX choices are yours.

## Priorities

Must have:

- Database schema script (`db/schema.sql`), running automatically on first start
- Import of the REST Countries data on startup
- All five `/capital` endpoints
- A list of countries with their capitals next to the map
- A 32px × 32px square marker per capital, with a popup to change its color

Nice to have:

- Add, edit and delete a city from the UI
- Remove a city from the map and from the list

## Submission

Push to a private repo and invite the reviewer (or send a zip without `node_modules`).
