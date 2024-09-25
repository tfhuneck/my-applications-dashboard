'use server'

import prisma from '@/lib/prisma'

export async function POST(req: Request, res: Response) {
    const inputs = await req.json()
    // console.log(inputs)
    const{company,position,url} = inputs.data
    const entry = await prisma.postings.create({
        data:{
            company: company,
            positionName: position,
            positionUrl: url
        },
    });
    res = new Response(JSON.stringify(entry),{ status: 200, statusText: 'success'})
    return res
}



