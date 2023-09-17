import { RmqOptions } from "@nestjs/microservices"

export type MicroserviceOptions = {
    name: string
    config: RmqOptions
}