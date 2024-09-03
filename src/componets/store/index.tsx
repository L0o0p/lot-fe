import { atom, useAtom } from "jotai";

export interface Participant {
    name: string;
}

export interface AwardLog {
    prizes: string|null;
    participant: string|null;
}

export type AwardLogArray = AwardLog[];

// 使用适当的初始值初始化 atom
export const selectedParticipantAtom = atom<string | null>();

export const awardFormDataAtom = atom<AwardLogArray | null>();

export const useAwardFormData = () => {
    const [awardFormData, setAwardFormData] = useAtom(awardFormDataAtom);

    const updateData = (newEntry: AwardLog) => {
        // 安全地处理可能的 null 值
        const newList = awardFormData ? [...awardFormData, newEntry] : [newEntry];
        setAwardFormData(newList);
    };

    const updateParticipant = (participant: string) => {
        const newEntry: AwardLog = { participant, prizes: null };
        const newList = awardFormData ? [...awardFormData, newEntry] : [newEntry];
        setAwardFormData(newList);
    };

    const updatePrizes = (prizes: string) => {
        const newEntry: AwardLog = { participant: null, prizes };
        const newList = awardFormData ? [...awardFormData, newEntry] : [newEntry];
        setAwardFormData(newList);
    };


// 返回对象以确保可以解构使用返回值
return { awardFormData, updateData, updateParticipant, updatePrizes };
}