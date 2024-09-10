'use server'

import prisma from '@/lib/prisma'

export async function GET(req: Request, res: Response) {
    // console.log(req.method)
    console.log('ping - GET')
    const data = 'get over here'
    const options = { status: 200, statusText: 'yeeaaahhhh'}
    res = new Response(data, options)
    return res;
}

export async function POST(req: Request, res: Response) {
    const inputs = await req.json()
    const{company,position,url} = inputs
    const entry = await prisma.applications.create({
        data:{
            company: company,
            positionName: position,
            positionUrl: url
        },
    });
    res = new Response('entry saved',{ status: 200, statusText: 'success'})
    return res
}



