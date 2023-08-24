// package: pb
// file: service_komikan.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_komikan_pb from "./service_komikan_pb";
import * as user_pb from "./user_pb";
import * as history_pb from "./history_pb";

interface IKomikanService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IKomikanService_ICreateUser;
    loginUser: IKomikanService_ILoginUser;
    getUser: IKomikanService_IGetUser;
    createHistory: IKomikanService_ICreateHistory;
    getHistories: IKomikanService_IGetHistories;
    updateHistory: IKomikanService_IUpdateHistory;
    upsertHistory: IKomikanService_IUpsertHistory;
}

interface IKomikanService_ICreateUser extends grpc.MethodDefinition<user_pb.CreateUserRequest, user_pb.CreateUserResponse> {
    path: "/pb.Komikan/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<user_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.CreateUserResponse>;
}
interface IKomikanService_ILoginUser extends grpc.MethodDefinition<user_pb.LoginUserRequest, user_pb.LoginUserResponse> {
    path: "/pb.Komikan/LoginUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.LoginUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.LoginUserRequest>;
    responseSerialize: grpc.serialize<user_pb.LoginUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.LoginUserResponse>;
}
interface IKomikanService_IGetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.UserResponse> {
    path: "/pb.Komikan/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IKomikanService_ICreateHistory extends grpc.MethodDefinition<history_pb.CreateHistoryRequest, history_pb.History> {
    path: "/pb.Komikan/CreateHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<history_pb.CreateHistoryRequest>;
    requestDeserialize: grpc.deserialize<history_pb.CreateHistoryRequest>;
    responseSerialize: grpc.serialize<history_pb.History>;
    responseDeserialize: grpc.deserialize<history_pb.History>;
}
interface IKomikanService_IGetHistories extends grpc.MethodDefinition<history_pb.GetHistoriesRequest, history_pb.HistoriesResponse> {
    path: "/pb.Komikan/GetHistories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<history_pb.GetHistoriesRequest>;
    requestDeserialize: grpc.deserialize<history_pb.GetHistoriesRequest>;
    responseSerialize: grpc.serialize<history_pb.HistoriesResponse>;
    responseDeserialize: grpc.deserialize<history_pb.HistoriesResponse>;
}
interface IKomikanService_IUpdateHistory extends grpc.MethodDefinition<history_pb.UpdateHistoryRequest, history_pb.UpdateHistoryResponse> {
    path: "/pb.Komikan/UpdateHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<history_pb.UpdateHistoryRequest>;
    requestDeserialize: grpc.deserialize<history_pb.UpdateHistoryRequest>;
    responseSerialize: grpc.serialize<history_pb.UpdateHistoryResponse>;
    responseDeserialize: grpc.deserialize<history_pb.UpdateHistoryResponse>;
}
interface IKomikanService_IUpsertHistory extends grpc.MethodDefinition<history_pb.CreateHistoryRequest, history_pb.CreateHistoryResponse> {
    path: "/pb.Komikan/UpsertHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<history_pb.CreateHistoryRequest>;
    requestDeserialize: grpc.deserialize<history_pb.CreateHistoryRequest>;
    responseSerialize: grpc.serialize<history_pb.CreateHistoryResponse>;
    responseDeserialize: grpc.deserialize<history_pb.CreateHistoryResponse>;
}

export const KomikanService: IKomikanService;

export interface IKomikanServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<user_pb.CreateUserRequest, user_pb.CreateUserResponse>;
    loginUser: grpc.handleUnaryCall<user_pb.LoginUserRequest, user_pb.LoginUserResponse>;
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.UserResponse>;
    createHistory: grpc.handleUnaryCall<history_pb.CreateHistoryRequest, history_pb.History>;
    getHistories: grpc.handleUnaryCall<history_pb.GetHistoriesRequest, history_pb.HistoriesResponse>;
    updateHistory: grpc.handleUnaryCall<history_pb.UpdateHistoryRequest, history_pb.UpdateHistoryResponse>;
    upsertHistory: grpc.handleUnaryCall<history_pb.CreateHistoryRequest, history_pb.CreateHistoryResponse>;
}

export interface IKomikanClient {
    createUser(request: user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: user_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createHistory(request: history_pb.CreateHistoryRequest, callback: (error: grpc.ServiceError | null, response: history_pb.History) => void): grpc.ClientUnaryCall;
    createHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.History) => void): grpc.ClientUnaryCall;
    createHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.History) => void): grpc.ClientUnaryCall;
    getHistories(request: history_pb.GetHistoriesRequest, callback: (error: grpc.ServiceError | null, response: history_pb.HistoriesResponse) => void): grpc.ClientUnaryCall;
    getHistories(request: history_pb.GetHistoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.HistoriesResponse) => void): grpc.ClientUnaryCall;
    getHistories(request: history_pb.GetHistoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.HistoriesResponse) => void): grpc.ClientUnaryCall;
    updateHistory(request: history_pb.UpdateHistoryRequest, callback: (error: grpc.ServiceError | null, response: history_pb.UpdateHistoryResponse) => void): grpc.ClientUnaryCall;
    updateHistory(request: history_pb.UpdateHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.UpdateHistoryResponse) => void): grpc.ClientUnaryCall;
    updateHistory(request: history_pb.UpdateHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.UpdateHistoryResponse) => void): grpc.ClientUnaryCall;
    upsertHistory(request: history_pb.CreateHistoryRequest, callback: (error: grpc.ServiceError | null, response: history_pb.CreateHistoryResponse) => void): grpc.ClientUnaryCall;
    upsertHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.CreateHistoryResponse) => void): grpc.ClientUnaryCall;
    upsertHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.CreateHistoryResponse) => void): grpc.ClientUnaryCall;
}

export class KomikanClient extends grpc.Client implements IKomikanClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public loginUser(request: user_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.LoginUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createHistory(request: history_pb.CreateHistoryRequest, callback: (error: grpc.ServiceError | null, response: history_pb.History) => void): grpc.ClientUnaryCall;
    public createHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.History) => void): grpc.ClientUnaryCall;
    public createHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.History) => void): grpc.ClientUnaryCall;
    public getHistories(request: history_pb.GetHistoriesRequest, callback: (error: grpc.ServiceError | null, response: history_pb.HistoriesResponse) => void): grpc.ClientUnaryCall;
    public getHistories(request: history_pb.GetHistoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.HistoriesResponse) => void): grpc.ClientUnaryCall;
    public getHistories(request: history_pb.GetHistoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.HistoriesResponse) => void): grpc.ClientUnaryCall;
    public updateHistory(request: history_pb.UpdateHistoryRequest, callback: (error: grpc.ServiceError | null, response: history_pb.UpdateHistoryResponse) => void): grpc.ClientUnaryCall;
    public updateHistory(request: history_pb.UpdateHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.UpdateHistoryResponse) => void): grpc.ClientUnaryCall;
    public updateHistory(request: history_pb.UpdateHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.UpdateHistoryResponse) => void): grpc.ClientUnaryCall;
    public upsertHistory(request: history_pb.CreateHistoryRequest, callback: (error: grpc.ServiceError | null, response: history_pb.CreateHistoryResponse) => void): grpc.ClientUnaryCall;
    public upsertHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: history_pb.CreateHistoryResponse) => void): grpc.ClientUnaryCall;
    public upsertHistory(request: history_pb.CreateHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: history_pb.CreateHistoryResponse) => void): grpc.ClientUnaryCall;
}
