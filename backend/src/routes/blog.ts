import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()

//
// blogRouter.use('/*', (c, next) => {
//     next()
// })


//
blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: 
        }
    })

    return c.json({ id : post.id })
})
  

//
blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      
    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({ id : post.id })
})


//
blogRouter.get('/:id', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
    try{
        const post = await prisma.post.findFirst({
            where: {
                id: body.id
            }
        })
        return c.json({ post })
    } catch(e) {
        c.status(404)
        return c.json("error while fetching")
    }
})


//
blogRouter.get('/bulk', (c) => {
    return c.text('get all blog')
})

