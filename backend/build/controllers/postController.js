"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.postUpload = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const postModel_1 = require("../models/postModel");
exports.postUpload = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { actor, video, sharedImg, comments, description } = req.body;
    actor.date = new Date().getDate();
    const post = new postModel_1.Post({
        actor, video, sharedImg, comments, description
    });
    const createdPost = yield post.save();
    res.status(201).json(createdPost);
}));
exports.getAllPosts = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield postModel_1.Post.find({}).sort({ createdAt: -1 });
    res.status(201).json(posts);
}));
