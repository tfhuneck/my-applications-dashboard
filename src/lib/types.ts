import { Reply, Interview } from '@prisma/client'  // Import Prisma enums

enum detailsType {
    HEADING,
    SUBHEADING,
    BULLETS,
    BODY
}

type details = [{
    type: detailsType;
    elements: [{
        content: string;
    }]
}]

declare global {
    interface Posting {
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
        details: details,
    }
}

export default global;