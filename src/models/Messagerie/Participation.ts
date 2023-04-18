import { BaseResponse, BaseObject } from '../Globals'

export type Participation = BaseResponse<{
        dateTime: string;
        content: string;
        read: boolean;
    }, {
        attachments: {
            data: any[] | BaseObject<'attachment'> | null;
        };
        sender: {
            data: BaseObject;
        };
}>

export type ParticipationIncluded = BaseResponse<{
    category: string;
    additionalInfo: any|null;
    fromGroup: boolean;
} | {
    label: string;
    logoUrl: any|null;
}, {
    technicalUser: {
        data: any[] | BaseObject | null;
    };
    person: {
        data: any[] | BaseObject | null;
    };
}>
