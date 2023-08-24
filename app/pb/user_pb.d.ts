// package: pb
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class UserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UserResponse;
    getFullName(): string;
    setFullName(value: string): UserResponse;
    getUsername(): string;
    setUsername(value: string): UserResponse;
    getEmail(): string;
    setEmail(value: string): UserResponse;
    getRole(): string;
    setRole(value: string): UserResponse;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        userId: string,
        fullName: string,
        username: string,
        email: string,
        role: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getFullName(): string;
    setFullName(value: string): CreateUserRequest;
    getUsername(): string;
    setUsername(value: string): CreateUserRequest;
    getEmail(): string;
    setEmail(value: string): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;
    getUserAgent(): string;
    setUserAgent(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        fullName: string,
        username: string,
        email: string,
        password: string,
        userAgent: string,
    }
}

export class CreateUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserResponse | undefined;
    setUser(value?: UserResponse): CreateUserResponse;
    getAccessToken(): string;
    setAccessToken(value: string): CreateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        user?: UserResponse.AsObject,
        accessToken: string,
    }
}

export class LoginUserRequest extends jspb.Message { 
    getCredential(): string;
    setCredential(value: string): LoginUserRequest;
    getPassword(): string;
    setPassword(value: string): LoginUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
    static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
    export type AsObject = {
        credential: string,
        password: string,
    }
}

export class LoginUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserResponse | undefined;
    setUser(value?: UserResponse): LoginUserResponse;
    getAccessToken(): string;
    setAccessToken(value: string): LoginUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
    static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
    export type AsObject = {
        user?: UserResponse.AsObject,
        accessToken: string,
    }
}

export class GetUserRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
    }
}
