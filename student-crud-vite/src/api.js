import axios from 'axios'

const DEFAULT_BASE = 'http://studentaws-backend-env.eba-xz2bvixr.us-east-1.elasticbeanstalk.com';

const KEY = 'student_api_base'

export function getApiBase(){
  return localStorage.getItem(KEY) || DEFAULT_BASE
}
export function setApiBase(url){
  localStorage.setItem(KEY, url)
}

const api = axios.create({
  baseURL: getApiBase(),
  headers: { 'Content-Type': 'application/json' }
})

// If user changes base at runtime, re-point axios
export function refreshApiBase(){
  api.defaults.baseURL = getApiBase()
}

export default api
