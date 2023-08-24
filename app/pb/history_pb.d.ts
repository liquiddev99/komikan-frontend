// package: 
// file: history.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class History extends jspb.Message { 
    getUserAgent(): string;
    setUserAgent(value: string): History;
    getUserId(): string;
    setUserId(value: string): History;
    getClientIp(): string;
    setClientIp(value: string): History;
    getMangadexId(): string;
    setMangadexId(value: string): History;
    getAlId(): string;
    setAlId(value: string): History;
    getPath(): string;
    setPath(value: string): History;
    getCoverImage(): string;
    setCoverImage(value: string): History;
    getTitle(): string;
    setTitle(value: string): History;
    getReadingChapter(): string;
    setReadingChapter(value: string): History;

    hasLastReadAt(): boolean;
    clearLastReadAt(): void;
    getLastReadAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastReadAt(value?: google_protobuf_timestamp_pb.Timestamp): History;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): History;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): History.AsObject;
    static toObject(includeInstance: boolean, msg: History): History.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): History;
    static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
}

export namespace History {
    export type AsObject = {
        userAgent: string,
        userId: string,
        clientIp: string,
        mangadexId: string,
        alId: string,
        path: string,
        coverImage: string,
        title: string,
        readingChapter: string,
        lastReadAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateHistoryRequest extends jspb.Message { 
    getUserAgent(): string;
    setUserAgent(value: string): CreateHistoryRequest;
    getMangadexId(): string;
    setMangadexId(value: string): CreateHistoryRequest;
    getCoverImage(): string;
    setCoverImage(value: string): CreateHistoryRequest;
    getTitle(): string;
    setTitle(value: string): CreateHistoryRequest;
    getReadingChapter(): string;
    setReadingChapter(value: string): CreateHistoryRequest;
    getAlId(): string;
    setAlId(value: string): CreateHistoryRequest;
    getPath(): string;
    setPath(value: string): CreateHistoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateHistoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateHistoryRequest): CreateHistoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateHistoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateHistoryRequest;
    static deserializeBinaryFromReader(message: CreateHistoryRequest, reader: jspb.BinaryReader): CreateHistoryRequest;
}

export namespace CreateHistoryRequest {
    export type AsObject = {
        userAgent: string,
        mangadexId: string,
        coverImage: string,
        title: string,
        readingChapter: string,
        alId: string,
        path: string,
    }
}

export class CreateHistoryResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): CreateHistoryResponse;
    getMessage(): string;
    setMessage(value: string): CreateHistoryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateHistoryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateHistoryResponse): CreateHistoryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateHistoryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateHistoryResponse;
    static deserializeBinaryFromReader(message: CreateHistoryResponse, reader: jspb.BinaryReader): CreateHistoryResponse;
}

export namespace CreateHistoryResponse {
    export type AsObject = {
        ok: boolean,
        message: string,
    }
}

export class GetHistoriesRequest extends jspb.Message { 
    getUserAgent(): string;
    setUserAgent(value: string): GetHistoriesRequest;
    getLimit(): number;
    setLimit(value: number): GetHistoriesRequest;
    getOffset(): number;
    setOffset(value: number): GetHistoriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHistoriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHistoriesRequest): GetHistoriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHistoriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHistoriesRequest;
    static deserializeBinaryFromReader(message: GetHistoriesRequest, reader: jspb.BinaryReader): GetHistoriesRequest;
}

export namespace GetHistoriesRequest {
    export type AsObject = {
        userAgent: string,
        limit: number,
        offset: number,
    }
}

export class HistoriesResponse extends jspb.Message { 
    clearHistoriesList(): void;
    getHistoriesList(): Array<History>;
    setHistoriesList(value: Array<History>): HistoriesResponse;
    addHistories(value?: History, index?: number): History;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HistoriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HistoriesResponse): HistoriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HistoriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HistoriesResponse;
    static deserializeBinaryFromReader(message: HistoriesResponse, reader: jspb.BinaryReader): HistoriesResponse;
}

export namespace HistoriesResponse {
    export type AsObject = {
        historiesList: Array<History.AsObject>,
    }
}

export class UpdateHistoryRequest extends jspb.Message { 
    getMangadexId(): string;
    setMangadexId(value: string): UpdateHistoryRequest;
    getReadingChapter(): string;
    setReadingChapter(value: string): UpdateHistoryRequest;
    getUserAgent(): string;
    setUserAgent(value: string): UpdateHistoryRequest;
    getUserId(): string;
    setUserId(value: string): UpdateHistoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHistoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHistoryRequest): UpdateHistoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateHistoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateHistoryRequest;
    static deserializeBinaryFromReader(message: UpdateHistoryRequest, reader: jspb.BinaryReader): UpdateHistoryRequest;
}

export namespace UpdateHistoryRequest {
    export type AsObject = {
        mangadexId: string,
        readingChapter: string,
        userAgent: string,
        userId: string,
    }
}

export class UpdateHistoryResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): UpdateHistoryResponse;
    getMessage(): string;
    setMessage(value: string): UpdateHistoryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHistoryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHistoryResponse): UpdateHistoryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateHistoryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateHistoryResponse;
    static deserializeBinaryFromReader(message: UpdateHistoryResponse, reader: jspb.BinaryReader): UpdateHistoryResponse;
}

export namespace UpdateHistoryResponse {
    export type AsObject = {
        ok: boolean,
        message: string,
    }
}
