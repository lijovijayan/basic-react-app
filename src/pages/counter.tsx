import { createContext, useContext, useState } from 'react'

interface ICounter {
    count: number
    setCount: (count: number) => void
}

const CounterContext = createContext<ICounter>({
    count: 0,
    setCount: (count) => {}
})
interface Props {
    children: any
}
export function CouterProvider({ children }: Props) {
    const [count, setCount] = useState(0)
    return (
        <CounterContext.Provider
            value={{
                count,
                setCount
            }}
        >
            {children}
        </CounterContext.Provider>
    )
}

export function Counter() {
    const { count, setCount } = useContext(CounterContext)
    return <div className="counter" onClick={() => setCount(count + 1)}>{count}</div>
}
