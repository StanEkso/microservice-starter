import { Transport } from "@nestjs/microservices";
import { MicroserviceOptions } from "../../types";
import { RABBIT_MQ_URl } from "../common";
import { USERS_QUEUE } from "./users.common";

export const usersRmq: MicroserviceOptions = {
    name: 'USERS_RMQ_MICROSERVICE',
    config: {
        transport: Transport.RMQ,
        options: {
            urls: [RABBIT_MQ_URl],
            queue: USERS_QUEUE,
        }
    }
}