# JobTracker

A personal job application tracker. Log in, record every job you apply for, and keep track of its progress from "Applied" to "Offer" in one organized place.

**Live demo:** https://your-app.vercel.app
**Demo account:** `demo@yourapp.com` / `your-demo-password`

![App screenshot](./docs/screenshot.png)

---

## What is this project?

When you apply to many jobs on different websites (LinkedIn, company career pages, local job boards), it's hard to remember where you applied, when, and what happened next. JobTracker solves this by giving each user a private account where they can store and manage all their applications.

> JobTracker is **not** a job board. It does not post jobs or let companies review candidates. Users apply on other websites, then record and track those applications here.

## The problem it solves

- Applications are scattered across emails, bookmarks, and spreadsheets
- Job seekers forget what they applied for and when
- There is no clear view of progress (How many interviews? How many rejections?)

## How the system works

1. **Sign up / log in.** The user creates an account with email and password. Each user sees only their own data.
2. **Add an application.** The user clicks "Add Application" and fills in a form: company, role, date applied, job link, status, and notes.
3. **Validate.** The form checks the input (required fields, valid link, valid date) and shows friendly error messages.
4. **Save.** The data is sent to the backend (Supabase) and stored in the database against that user's account.
5. **View.** After login, the app fetches the user's applications and shows them in a table with search, filter, and sort.
6. **Update.** As things change (interview scheduled, offer received, rejected), the user edits the status or any other field.
7. **Delete.** Applications that are no longer needed can be removed.
8. **Analyze (optional).** A dashboard shows charts such as applications per week and how many reached each stage.

### Data flow

```
User action  ->  React UI  ->  TanStack Query  ->  Supabase API  ->  PostgreSQL
                                     ^                                  |
                                     +----------- response ------------+
```

## Features

**Core (MVP)**
- User authentication (sign up, log in, log out, protected pages)
- Add, view, edit, and delete job applications
- Form validation with clear error messages
- Table view with search, status filter, sorting, and pagination
- Status badges: Applied, Interview, Offer, Rejected
- Loading, empty, and error states
- Responsive design (mobile and desktop)
- Each user's data is private (Row Level Security)

**Extras (after the core works)**
- Kanban board with drag and drop to change status
- Dashboard with charts
- Dark mode
- Unit and component tests
- CSV export and follow-up reminders

## Application fields

| Field | Type | Required |
|---|---|---|
| Company name | text | Yes |
| Role / position | text | Yes |
| Date applied | date | Yes |
| Job link | URL | No |
| Status | Applied / Interview / Offer / Rejected | Yes |
| Salary | text | No |
| Notes | text | No |

## Tech stack

| Area | Tool |
|---|---|
| Framework | React + Vite + TypeScript |
| Styling | Tailwind CSS |
| Routing | React Router |
| Server state | TanStack Query |
| Table | TanStack Table |
| Forms and validation | Formik + Yup |
| Drag and drop | dnd-kit |
| Charts | Chart.js + react-chartjs-2 |
| Backend (auth + database) | Supabase |
| Testing | Vitest + React Testing Library |
| Deployment | Vercel |
| Design | Figma |

## Design

- **Primary color:** Indigo `#4F46E5`
- **Background:** `#F9FAFB`, cards `#FFFFFF`
- **Text:** `#111827` (main), `#6B7280` (secondary)
- **Status colors:** blue (Applied), amber (Interview), green (Offer), red (Rejected)
- **Font:** Inter

## Getting started

### Prerequisites
- Node.js 18+
- A free [Supabase](https://supabase.com) project

### Install

```bash
git clone https://github.com/your-username/jobtracker.git
cd jobtracker
npm install
```

### Environment variables

Create a `.env` file:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run

```bash
npm run dev
```

### Test

```bash
npm run test
```

## Project structure

```
src/
  components/   # shared UI components
  features/     # auth, applications, dashboard
  hooks/        # custom hooks (useApplications, etc.)
  lib/          # supabase client, query client
  pages/        # Login, Signup, Applications
  types/        # TypeScript types
```

## Roadmap

- [ ] Design login and applications screens in Figma
- [ ] Project setup (Vite, Tailwind, GitHub)
- [ ] Supabase tables and Row Level Security
- [ ] Authentication
- [ ] Add application form with validation
- [ ] Applications table
- [ ] Edit and delete
- [ ] Kanban board
- [ ] Dashboard charts
- [ ] Tests, deployment, and documentation

## Challenges and learnings

_Fill this in while building. Example topics: optimistic updates, structuring TanStack Query hooks, securing data with Row Level Security._

## Author

**Your Name**
[LinkedIn](https://linkedin.com/in/your-profile) | [GitHub](https://github.com/your-username)