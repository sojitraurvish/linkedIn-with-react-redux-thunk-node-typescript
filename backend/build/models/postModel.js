"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    actor: {
        description: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date
        },
        image: {
            type: String,
            required: true
        },
    },
    video: {
        type: String,
        default: "",
    },
    sharedImg: {
        type: String,
        default: "",
    },
    comments: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
exports.Post = mongoose_1.default.model("Post", postSchema);
