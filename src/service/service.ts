import axios from "axios"
import type { LeadDescriptor } from "../types/DataTypes"

const getBuffers = () => {
    return axios.get<LeadDescriptor[]>('/leads/all')
}

export {getBuffers}