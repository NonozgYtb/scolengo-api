import { Included } from './Globals'

export interface EvaluationDetail {
    id: string;
    type: string;
    attributes: {
        title: string;
        topic: string;
        dateTime: string;
        coefficient: number;
        min: number|null;
        max: number|null;
        average: number|null;
        scale: number;
    };
    relationships: {
        subSkills: {
            data: {
                id: string;
                type: string;
            }[] | null;
        };
        subSubject: {
            data: {
                id: string;
                type: string;
            }[] | null;
        };
        evaluationService: {
            data: {
                id: string;
                type: string;
            };
        };
        evaluationResult: {
            data: {
                id: string;
                type: string;
            };
        };
    };
}

export type EvaluationDetailIncluded = Included<Partial<{
    mark: number;
    nonEvaluationReason: null;
    comment: null;
    label: string;
    color: string;
    title: string;
    firstName: string;
    lastName: string;
}>, {
    subSkillsEvaluationResults?: {
        data: {
            id: string;
            type: string;
        }[] | null;
    };
    subject?: {
        data: {
            id: string;
            type: string;
        };
    };
    teachers?: {
        data: {
            id: string;
            type: string;
        }[] | null;
    };
}>
