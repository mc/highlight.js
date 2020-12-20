/*
 * Language: Power Query
 * Author: mc <mc@github>
 * Website: https://docs.microsoft.com/en-us/power-query/
 * Description: language definition for Power Query
 * */

/** @type LanguageFn */
export default function(hljs) {
    const KEYWORDS = 'type nullable number';
    const BUILTIN  = 'each let in';

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

    const TableFunctions = {
          className: 'function',
          begin: /Table\.(Combine|FindText|IsEmpty|Profile|Split|Group|Skip|Range|Repeat|(First|Last)N?|View(Function)?|(Alternate|Insert|Select|Reverse|Replace)Rows|(Remove|Select)Rows(WithErrors)?|From(Columns|List|Records|Partitions|Rows|Value)|To(Columns|List|Records|Row)|Schema|Fuzzy(Group|(Nested)?Join)|(Column|Row)Count|GetRelationships|Combine|FindText|FirstValue|Matches(All|Any)Rows|Partition|Remove(First|Last)N|SingleRow)/
        };

    return {
          name: 'PowerQuery',
          keywords: {
                  keyword: KEYWORDS,
                  built_in: BUILTIN
                },
          contains: [
                  hljs.NUMBER_MODE,
                  TableFunctions,
                  COLUMN_NAME_1,
                  COLUMN_NAME_2,
                  QUOTE_STRING
                ]
        };
}
