import { Guid } from "guid-typescript";

export class Message {
    Id: Guid;
    AuthorId: Guid;
    GroupId: Guid;
    DateCreated: Date;
    Value: string;
}