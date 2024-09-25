'use server'

import prisma from '@/lib/prisma'
import { Posting } from '@/lib/types'

export async function getApplicationData(): Promise<Posting[]> {
    const postings = await prisma.postings.findMany()
    return postings
}