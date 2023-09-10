import axios from 'axios'

const itieraries = axios.create({
    baseURL: 'http://localhost:4000',
  });

export const getAllItineraries = async () => {
    try {
        const { data } = await cities("/api/itineraries")
        return data.itineraries
    } catch (error) {
        return []
    }
}

export const getItinerary = async (id) => {
    try {
        const { data } = await cities(`/api/itinerary/${id}`)
        return data.itinerary
    } catch (error) {
        return[]
    }
}