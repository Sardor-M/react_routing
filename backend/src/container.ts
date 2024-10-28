import { asClass, asValue, createContainer } from 'awilix'
import { dataSource } from './database/db'
import { EventRepository } from './repositories/EventRepository'
import { CommentRepository } from './repositories/CommentRepository'
import { EventCreateService } from './services/EventCreateService'
import { CommentService } from './services/CommentService'
import { UserService } from './services/UserService'
import { UserRepository } from './repositories/UserRepository'

const container = createContainer({
    injectionMode: 'CLASSIC'
})

container.register({
    dataSource: asValue(dataSource),
})

// registering repositories
container.register({
    eventRepository: asClass(EventRepository).singleton(),
    commentRepository: asClass(CommentRepository).singleton(),
    userRepository: asClass(UserRepository).singleton(),
})

// registering services
container.register({
    eventService: asClass(EventCreateService).singleton(),
    commentService: asClass(CommentService).singleton(),
    userService: asClass(UserService).singleton(),
})

export default container;