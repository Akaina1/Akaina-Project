// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'Hello Next.js - From Elysia')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

// Compile the Elysia application
app.compile();

export const GET = app.handle
export const POST = app.handle