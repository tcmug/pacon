import { h, hydrate } from 'preact';
import * as Bacon from 'baconjs'

const buttonBus = new Bacon.Bus<any>()

const pressA = () => buttonBus.push('You pressed A')
const pressB = () => buttonBus.push('You pressed B')
const Component = ({value}: {value: string}) => (
    <div>
        <pre>{value}</pre>
        <button onClick={pressA}>A</button>
        <button onClick={pressB}>B</button>
    </div>
)

var components = buttonBus.map((value) => {
    return Component({value: value})
});

components.onValue(e => hydrate(e, document.getElementById('elem')))

export default () => (<div id="elem"><Component value="You haven't pressed anything"/></div>)
