import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from '@aryanxvz/medium-common'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()

// the signup route
userRouter.post('/signup', async (c) => {
    const body = await c.req.json()
    const { success } = signupInput.safeParse(body)
    if (!success) {
        c.status(403);
        return c.json({ error: "inputs not correct" });
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
        try {
            const user = await prisma.user.create({
            data:{
                username: body.username,
                password: body.password,
                name: body.name
            }
        })
      
    const token = await sign({ id : user.id }, c.env.JWT_SECRET)
    return c.json({
        jwt: token,
        name: user.name
    })
    } catch(e) {
        c.status(401)
        return c.json("invalid")
    }
})

    
    //the signin route
userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body)
    if (!success) {
        c.status(403);
        return c.json({ error: "inputs not correct" });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.findUnique({
            where: {
                name: body.name,
                username: body.username,
                password: body.password
            }
        });
        if (!user) {
            c.status(403);
            return c.json({
              message: "Incorrect creds"
            })
        }
        const jwt = await sign({ id: String(user.id) }, c.env.JWT_SECRET);
        return c.json({ 
            jwt,
            name: user.name
         });

    } catch(e) {
        c.status(403);
        return c.json({ error: "user not found" });
    }

})

export default userRouter