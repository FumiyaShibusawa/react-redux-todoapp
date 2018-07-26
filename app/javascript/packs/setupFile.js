import $ from 'jquery';
global.$ = global.jQuery = $;

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
