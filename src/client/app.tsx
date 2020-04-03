import { h, render } from 'preact';
import StateComponent from './StateComponent'
import MappedComponent from './MappedComponent';

const Main = () => {
    return <div><StateComponent/><MappedComponent/></div>;
}

render(<Main/>, document.querySelector('#app'));
