/*
 * Language: Power Query
 * Author: mc <mc@github>
 * Website: https://docs.microsoft.com/en-us/power-query/
 * Description: language definition for Power Query
 * */

/** @type LanguageFn */
export default function(hljs) {
    const KEYWORDS = 'type nullable number';
    const BUILTIN  = 'each';

    const QUOTE_STRING = {
          className: 'string',
          begin: /"/, end: /"/,
          contains: [ hljs.BACKSLASH_ESCAPE ]
        };
    const COLUMN_NAME_1 = {
          className: 'symbol',
          begin: /\\[/, end: /\\]/,
          contains: [ hljs.BACKSLASH_ESCAPE ]
        };
    const COLUMN_NAME_2 = {
          className: 'symbol',
          begin: /\\[#"/, end: /"\\]/,
          contains: [ hljs.BACKSLASH_ESCAPE ]
        };

    return {
          name: 'PowerQuery',
          keywords: {
                  keyword: KEYWORDS,
                  built_in: BUILTIN
                },
          contains: [
                  hljs.NUMBER_MODE,
                  COLUMN_NAME_1,
                  COLUMN_NAME_2,
                  QUOTE_STRING
                ]
        };
}
