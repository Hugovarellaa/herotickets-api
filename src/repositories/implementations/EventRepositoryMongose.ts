import mongoose from "mongoose";
import { Event } from "../../entities/Event";
import { EventRepository } from "../EventRepository";

const eventSchema = new mongoose.Schema({
  participants: {
    type: Array,
    ref: "User",
  },

  title: String,
  description: String,
  categories: [String],
  banner: String,
  date: Date,
  flyers: [String],
  city: String,

  price: {
    type: Array,
  },
  location: {
    latitude: String,
    longitude: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const EventModel = mongoose.model("Event", eventSchema);

class EventRepositoryMongoose implements EventRepository {
  async add(event: Event): Promise<Event> {
    const eventModel = new EventModel(event);

    await eventModel.save();
    return event;
  }
}

export { EventRepositoryMongoose };
