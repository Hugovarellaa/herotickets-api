import { Event } from "../entities/Event";
import { EventRepository } from "../repositories/EventRepository";

class EventUseCase {
  constructor(private eventRepository: EventRepository) {}

  async create(eventData: Event) {
    const event = await this.eventRepository.add(eventData);
    return event;
  }
}

export { EventUseCase };
