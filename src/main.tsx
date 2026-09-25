import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksApp } from './05-useReducer/TaskApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/pokemonPage'
// import { TrafficLightEffectHook } from './02-useEffect/TrafficLightEffectHook'
// import { TrafficLightEffect } from './02-useEffect/TrafficLightEffect'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp></HooksApp> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightEffect></TrafficLightEffect> */}
    {/* <TrafficLightEffectHook></TrafficLightEffectHook> */}
    {/* <PokemonPage></PokemonPage> */}
    {/* <FocusScreen></FocusScreen> */}
    <TasksApp></TasksApp>
  </StrictMode>,
)
