'use server'

import prisma from '@/lib/prisma'
import { Application } from '@/lib/types'

export async function getApplicationData(): Promise<Application[]> {
    const applications = await prisma.applications.findMany()
    return applications
}