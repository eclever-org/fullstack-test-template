# Full-Stack Test: Capital Cities

Design and implement an API and a UI to create, edit, view and delete capital cities.

## Stack

- Frontend: React + TypeScript, Zustand (recommended), Mapbox
- Backend: Node.js with a framework of your choice (Express, Fastify, NestJS)
- Database: an SQL database of your choice (e.g. PostgreSQL, MySQL, SQLite or MongoDB)
- Everything else is up to you.

Optional starters are included: an Express backend in `backend/` and a Postgres container via Docker.
Use, modify or replace them, but keep the project easy to run and describe how in your submission.

## Run the starter

Needs Node.js 20+ and npm (Docker only for the Postgres container). Get a
[REST Countries](https://restcountries.com) API key and a [Mapbox](https://account.mapbox.com) public token, then:

```bash
cp .env.example .env   # fill in RESTCOUNTRIES_API_KEY and VITE_MAPBOX_TOKEN
npm install
npm run db             # optional: Postgres on :5432
npm run dev            # UI http://localhost:5173, API http://localhost:3001 (GET /health -> {"ok":true})
```

No Docker or Node? Use a GitHub Codespace (Postgres included) and add both keys as Codespaces secrets.

## Data

```json
{ "id": "...", "name": "string", "latitude": 0.0, "longitude": 0.0, "country": "string" }
```

`name` and `country` are unique. Provide `db/schema.sql`; it must run automatically the first time the database starts.

## Backend

On startup, import countries and capitals from [REST Countries](https://restcountries.com/docs) v5
(`country` = common name, `name` = capital):

```
GET https://api.restcountries.com/countries/v5
Authorization: Bearer <RESTCOUNTRIES_API_KEY>
```

Endpoints:

```
GET    /capital          all capital cities
GET    /capital/<name>   one by name (case-insensitive)
POST   /capital          create
PUT    /capital/<id>     update
DELETE /capital/<id>     delete
```

## Frontend

Connect the UI to the endpoints above. Implementation and UI/UX choices are yours.

## Priorities

Must have:

- `db/schema.sql`, running automatically on first start
- Import of the REST Countries data on startup
- All five `/capital` endpoints
- A list of countries with their capitals next to the map
- A 32px × 32px square marker per capital, with a popup to change its color

Nice to have:

- Add, edit and delete a city from the UI
- Remove a city from the map and from the list

## Submission

Push to a private repo and invite the reviewer (or send a zip without `node_modules`).
