// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'hello Next - From Elysia 13.0.0')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

// Compile the Elysia application
app.compile();

export const GET = app.handle
export const POST = app.handle