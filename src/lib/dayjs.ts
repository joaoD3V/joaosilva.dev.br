import lib from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';

lib.locale('pt-br');
lib.extend(customParseFormat);
lib.extend(duration);

export const dayjs = lib;
