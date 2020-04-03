import { h } from 'preact';
import { useState } from 'preact/hooks';
import * as Bacon from 'baconjs'

const buttonBus = new Bacon.Bus<string>()

const pressA = () => buttonBus.push('You pressed A')
const pressB = () => buttonBus.push('You pressed B')

function useBaconSubscription<T>(bus: Bacon.Bus<T>, defaultValue: T) {
    const [value, set] = useState<T>(defaultValue)
    bus.subscribe((event) => event.hasValue && set((event as Bacon.Value<T>).value));
    return value
}

export default () => {
    const value = useBaconSubscription<string>(buttonBus, "You haven't pressed anything")
    return <div>
        <pre>{value}</pre>
        <button onClick={pressA}>A</button>
        <button onClick={pressB}>B</button>
    </div>
}