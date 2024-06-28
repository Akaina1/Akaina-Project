// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/hello', () => 'Hello Next.js - From Elysia')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

// Compile the Elysia application
app.compile();

export const GET = app.handle
export const POST = app.handle
export const PUT = app.handle
export const DELETE = app.handle
export const PATCH = app.handle
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////