import logger from "./logger/logger";
import { sagaMiddleware } from "./saga/saga";
import "axios-response-logger";

export default [sagaMiddleware, logger];
