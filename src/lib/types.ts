import { Reply, Interview } from '@prisma/client'  // Import Prisma enums

export type Application = {
    id: string,
    createdAt: Date,
    company: string,
    positionName: string,
    positionUrl: string,
    appliedStatus: boolean,
    replyStatus: boolean,
    replyType: Reply, 
    interviewType: Interview, 
    appliedDate: Date | null, 
    replyDate: Date | null, 
}

