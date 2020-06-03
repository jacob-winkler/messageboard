import { Guid } from "guid-typescript";

export class Message {
    id: Guid;
    authorId: Guid;
    groupId: Guid;
    datecreated: Date;
    value: string;
}