// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var history_pb = require('./history_pb.js');

function serialize_CreateHistoryRequest(arg) {
  if (!(arg instanceof history_pb.CreateHistoryRequest)) {
    throw new Error('Expected argument of type CreateHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateHistoryRequest(buffer_arg) {
  return history_pb.CreateHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateHistoryResponse(arg) {
  if (!(arg instanceof history_pb.CreateHistoryResponse)) {
    throw new Error('Expected argument of type CreateHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateHistoryResponse(buffer_arg) {
  return history_pb.CreateHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetHistoriesRequest(arg) {
  if (!(arg instanceof history_pb.GetHistoriesRequest)) {
    throw new Error('Expected argument of type GetHistoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetHistoriesRequest(buffer_arg) {
  return history_pb.GetHistoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HistoriesResponse(arg) {
  if (!(arg instanceof history_pb.HistoriesResponse)) {
    throw new Error('Expected argument of type HistoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HistoriesResponse(buffer_arg) {
  return history_pb.HistoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_History(arg) {
  if (!(arg instanceof history_pb.History)) {
    throw new Error('Expected argument of type History');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_History(buffer_arg) {
  return history_pb.History.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateHistoryRequest(arg) {
  if (!(arg instanceof history_pb.UpdateHistoryRequest)) {
    throw new Error('Expected argument of type UpdateHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateHistoryRequest(buffer_arg) {
  return history_pb.UpdateHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateHistoryResponse(arg) {
  if (!(arg instanceof history_pb.UpdateHistoryResponse)) {
    throw new Error('Expected argument of type UpdateHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateHistoryResponse(buffer_arg) {
  return history_pb.UpdateHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type pb.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateUserResponse(arg) {
  if (!(arg instanceof user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type pb.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateUserResponse(buffer_arg) {
  return user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type pb.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_LoginUserRequest(arg) {
  if (!(arg instanceof user_pb.LoginUserRequest)) {
    throw new Error('Expected argument of type pb.LoginUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginUserRequest(buffer_arg) {
  return user_pb.LoginUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_LoginUserResponse(arg) {
  if (!(arg instanceof user_pb.LoginUserResponse)) {
    throw new Error('Expected argument of type pb.LoginUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginUserResponse(buffer_arg) {
  return user_pb.LoginUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type pb.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var KomikanService = exports.KomikanService = {
  createUser: {
    path: '/pb.Komikan/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.CreateUserResponse,
    requestSerialize: serialize_pb_CreateUserRequest,
    requestDeserialize: deserialize_pb_CreateUserRequest,
    responseSerialize: serialize_pb_CreateUserResponse,
    responseDeserialize: deserialize_pb_CreateUserResponse,
  },
  loginUser: {
    path: '/pb.Komikan/LoginUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginUserRequest,
    responseType: user_pb.LoginUserResponse,
    requestSerialize: serialize_pb_LoginUserRequest,
    requestDeserialize: deserialize_pb_LoginUserRequest,
    responseSerialize: serialize_pb_LoginUserResponse,
    responseDeserialize: deserialize_pb_LoginUserResponse,
  },
  getUser: {
    path: '/pb.Komikan/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_pb_GetUserRequest,
    requestDeserialize: deserialize_pb_GetUserRequest,
    responseSerialize: serialize_pb_UserResponse,
    responseDeserialize: deserialize_pb_UserResponse,
  },
  createHistory: {
    path: '/pb.Komikan/CreateHistory',
    requestStream: false,
    responseStream: false,
    requestType: history_pb.CreateHistoryRequest,
    responseType: history_pb.History,
    requestSerialize: serialize_CreateHistoryRequest,
    requestDeserialize: deserialize_CreateHistoryRequest,
    responseSerialize: serialize_History,
    responseDeserialize: deserialize_History,
  },
  getHistories: {
    path: '/pb.Komikan/GetHistories',
    requestStream: false,
    responseStream: false,
    requestType: history_pb.GetHistoriesRequest,
    responseType: history_pb.HistoriesResponse,
    requestSerialize: serialize_GetHistoriesRequest,
    requestDeserialize: deserialize_GetHistoriesRequest,
    responseSerialize: serialize_HistoriesResponse,
    responseDeserialize: deserialize_HistoriesResponse,
  },
  updateHistory: {
    path: '/pb.Komikan/UpdateHistory',
    requestStream: false,
    responseStream: false,
    requestType: history_pb.UpdateHistoryRequest,
    responseType: history_pb.UpdateHistoryResponse,
    requestSerialize: serialize_UpdateHistoryRequest,
    requestDeserialize: deserialize_UpdateHistoryRequest,
    responseSerialize: serialize_UpdateHistoryResponse,
    responseDeserialize: deserialize_UpdateHistoryResponse,
  },
  upsertHistory: {
    path: '/pb.Komikan/UpsertHistory',
    requestStream: false,
    responseStream: false,
    requestType: history_pb.CreateHistoryRequest,
    responseType: history_pb.CreateHistoryResponse,
    requestSerialize: serialize_CreateHistoryRequest,
    requestDeserialize: deserialize_CreateHistoryRequest,
    responseSerialize: serialize_CreateHistoryResponse,
    responseDeserialize: deserialize_CreateHistoryResponse,
  },
};

exports.KomikanClient = grpc.makeGenericClientConstructor(KomikanService);
