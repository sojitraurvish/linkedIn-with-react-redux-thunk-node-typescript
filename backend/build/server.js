"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./config/db"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, "..", "config.env") });
(0, db_1.default)();
colors_1.default.enable();
const app = (0, express_1.default)();
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("API IS RUNNING...");
});
app.use("/api/addpost", postRoutes_1.default);
app.use("/api/upload", uploadRoutes_1.default);
const ___dirname = path_1.default.resolve();
app.use("/uploads", express_1.default.static(path_1.default.join(___dirname, "/uploads")));
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
});
