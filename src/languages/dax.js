/*
 * Language: DAX
 * Author: mc <mc@github>
 * Website: https://docs.microsoft.com/en-us/dax/
 * Description: language definition for DAX
 * */

/** @type LanguageFn */
export default function(hljs) {
    const KEYWORDS = 'DEFINE EVALUATE ORDER BY VAR';
    const BUILTIN = 'ALL ALLCROSSFILTERED ALLEXCEPT ALLNOBLANKROW ALLSELECTED CALCULATE CALCULATETABLE EARLIER EARLIEST FILTER KEEPFILTERS LOOKUPVALUE '+
        'REMOVEFILTERS SELECTEDVALUE ACCRINT ACCRINTM AMORDEGRC AMORLINC COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD CUMIPMT CUMPRINC DB DDB DISC DOLLARDE DOLLARFR '+
        'DURATION EFFECT FV INTRATE IPMT ISPMT MDURATION NOMINAL NPER ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD PDURATION PMT PPMT PRICE PRICEDISC PRICEMAT PV RATE RECEIVED ' +
        'RRI SLN SYD TBILLEQ TBILLPRICE TBILLYIELD VDB XIRR XNPV YIELD YIELDDISC YIELDMAT CONTAINS CONTAINSROW CONTAINSSTRING CONTAINSSTRINGEXACT CUSTOMDATA HASONEFILTER ' +
        'HASONEVALUE ISBLANK ISCROSSFILTERED ISEMPTY ISERROR ISEVEN ISFILTERED ISINSCOPE ISLOGICAL ISNONTEXT ISNUMBER ISODD ISONORAFTER ISSELECTEDMEASURE ISSUBTOTAL ' +
        'ISTEXT NONVISUAL SELECTEDMEASURE SELECTEDMEASUREFORMATSTRING SELECTEDMEASURENAME USERNAME USEROBJECTID USERPRINCIPALNAME CALENDAR CALENDARAUTO DATE DATEDIFF '+
        'DATEVALUE DAY EDATE EOMONTH HOUR MINUTE MONTH NOW QUARTER SECOND TIME TIMEVALUE TODAY UTCNOW UTCTODAY WEEKDAY WEEKNUM YEARYEARFRAC AND COALESCE FALSE IF ' +
        'IFERROR NOT OR SWITCH TRUE ABS ACOS ACOSH ACOT ACOTH ASIN ASINH ATAN ATANH CEILING COMBIN COMBINA CONVERT COS COSH CURRENCZ DEFREES DIVIDE EVEN EXP FACT FLOOR' +
        'GCD INT ISO/CEILING LCM LN LOG LOG10 MROUND ODD PI POWER PRODUCT PRODUCTX QUOTIENT RADIANS RAND RANDBETWEEN ROUND ROUNDDOWN ROUNDUP SIGN SQRT SUM SUMX TRUNC' +
        'BLANK ERROR PATH PATHCONTAINS PATHITEM PATHITEMREVERSE PATHLENGTH CROSSFILTER RELATED RELATEDTABLE USERELATIONSHIP APPROXIMATEDISTINCTCOUNT AVERAGE AVERAGEA '+
        'AVERAGEX BETA.DIST BETA.INV CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CONFIDENCE.NORM CONFIDENCE.T COT COTH COUNT COUNTA COUNTAX COUNTBLANK COUNTROWS '+
        'COUNTX DATATABLE DISTINCTCOUNT DISTINCTCOUNTNOBLANK EXPON.DIST GEOMEAN GEOMEANX MAX MAXA MAXX MEDIAN MEDIANX MIN MINA MINX NORM.DIST NORM.INV NORM.S.DIST '+
        'NORM.S.INV PERCENTILE.EXC PERCENTILE.INC PERCENTILEX.EXC PERCENTILEX.INC POISSON.DIST RANK.EQ RANKX SAMPLE SIN SINH STDEV.P STDEV.S STDEVX.P STDEVX.S SQRTPI '+
        'T.DIST T.DIST.2T T.DIST.RT T>IN T>INV.2t TAN TANH VAR.P VAR.S VARX.P VARX.S ADDCOLUMNS ADDMISSINGITEMS CROSSJOIN CURRENTGROUP DATATABLE DETAILROWS DISTINCT '+
        'EXCEPT FILTERS GENERATE GENERATEALL GROUPBZ IGNORE INTERSECT NATURALINNERJOIN ROLLUP ROLLUPISSUBTOTAL ROLLUPGROUP ROW SELECTCOLUMNS SUBSTITUTEWITHINDEX '+
        'SUMMARIZE SUMMARIZECOLUMNS TOPN TREATAS UNION VALUES COMBINEVALUES CONCATENATE CONCATENATEX EXACT FIND FIXED FORMAT LEFT LEN LOWER MID REPLACE REPT RIGHT '+
        'SEARCH SUBSTITUTE TRIM UNICHAR UNICODE UPPER VALUE CLOSINGBALANCEMONTH CLOSINGBALANCEQUARTER CLOSINGBALANCEYEAR DATEADD DATESBETWEEN DATESINPERIOD DATESMTD '+
        'DATESQTD DATESYTD ENDOFMONTH ENDOFQUARTER ENDOFYEAR FIRSTDATE FIRSTNONBLANK LASTDATE LASTNONBLANK NEXTDAY NEXTMONTH NEXTQUARTER NEXTYEAR OPENINGBALANCEMONTH '+
        'OPENINGBALANCEQUARTER OPENINGBALANCEYEAR PARALLELPERIOD PERVIOUSDAY PERVIOUSMONTH PREVIOUSQUARTER PREVIOUSYEAR SAMEPERIODLASTYEAR STARTOFMONTH STARTOFQUARTER '+
        'STARTOFYEAR TOTALMTD TOTALQTD TOTALYTD';

    const QUOTE_STRING = {
          className: 'string',
          begin: /"/, end: /"/,
          contains: [ hljs.BACKSLASH_ESCAPE ]
        };
    const TABLE_NAME = {
          className: 'symbol',
          begin: /'/, end: /'/,
          contains: [ hljs.BACKSLASH_ESCAPE ]
        };
    const COLUMN_NAME = {
          className: 'symbol',
          begin: /[\\w_]*\\[/, end: /\\]/,
          contains: [ hljs.BACKSLASH_ESCAPE ]
        };

    return {
          name: 'DAX',
          keywords: {
                  keyword: KEYWORDS,
                  built_in: BUILTIN
                },
          contains: [
                  hljs.REGEXP_MODE,
                  hljs.HASH_COMMENT_MODE,
                  hljs.NUMBER_MODE,
                  QUOTE_STRING,
                  TABLE_NAME,
                  COLUMN_NAME
                ]
        };
}
