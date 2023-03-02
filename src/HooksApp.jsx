import { CounterApp } from "./1-useState/CounterApp"
import { CounterCustomHook } from "./1-useState/CounterCustomHook"
import { SimpleForm } from "./2-useEffect/SimpleForm"
import { MultipleCustomHooks } from "./3-fetch/MultipleCustomHooks"
import { Memorize } from "./4-memo/Memorize"
import { MemorizeWithHook } from "./4-memo/MemorizeWithHook"
import { TodoApp } from "./6-useReducer/TodoApp"
import { MainApp } from "./7-useContext/MainApp"

export const HooksApp = () => {
  return (
    <>
        {/* <h1>HooksApp</h1>
        <hr/>
        <TodoApp/> */}

        {/* <CounterApp />
        <hr/>
        <CounterCustomHook />
        <hr/>
        <SimpleForm />
        <hr/>
        <MultipleCustomHooks />
        <hr/>
        <Memorize />
        <hr/>
        <MemorizeWithHook />
        <hr/> */}
        <MainApp />
    </>
  )
}
