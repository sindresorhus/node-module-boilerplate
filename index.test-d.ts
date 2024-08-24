import {expectType} from 'tsd';
import unicornFun from './index.js';

expectType<string>(unicornFun('unicorns'));
