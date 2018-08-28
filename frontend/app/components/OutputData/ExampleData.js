import * as _ from 'lodash';

export const pageSize = 20;

export const columnsIndexName = {
    DATE: "Date",
    EARNINGS: "Earnings",
    PRECIOUS_METALS: "PreciousMetals",
    MMVB: "IndexMmvb"
};

export const columnsStringName = {
    DATE: "Дата",
    EARNINGS: "Выручка",
    PRECIOUS_METALS: "Серебро, руб",
    MMVB: "Индекс ММВБ"
};

export const columns = [
    {
        name: columnsStringName.DATE,
        width: '10%',
        className: 'additional-class',
        dataIndex: columnsIndexName.DATE,
        HANDLE_CLICK: () => {
            console.log('Header Click');
        }
    },
    {
        name: columnsStringName.EARNINGS,
        width: '20%',
        dataIndex: columnsIndexName.EARNINGS,
        className: 'additional-class'
    },
    {
        name: columnsStringName.PRECIOUS_METALS,
        width: '25%',
        dataIndex: columnsIndexName.PRECIOUS_METALS,
        className: 'additional-class',
        defaultSortDirection: 'descend'
    },
    {
        name: columnsStringName.MMVB,
        dataIndex: columnsIndexName.MMVB,
        width: '35%',
        className: 'additional-class'
    }
];

let simple_data = [
    {
        "Date": " 1",
        "Earnings": "2",
        "PreciousMetals": "3 ",
        "IndexMmvb": " 4"
    },
];

let testData = [
    {
        "Date": "09.01.2017",
        "Earnings": "2 861 629 595.04",
        "PreciousMetals": "31.32",
        "IndexMmvb": "2211.25"
    },
    {
        "Date": "10.01.2017",
        "Earnings": "2 922 007 211.53",
        "PreciousMetals": "31.68",
        "IndexMmvb": "2237.49"
    },
    {
        "Date": "11.01.2017",
        "Earnings": "2 900 994 328.22",
        "PreciousMetals": "31.84",
        "IndexMmvb": "2218.61"
    },
    {
        "Date": "12.01.2017",
        "Earnings": "2 884 689 528.14",
        "PreciousMetals": "32.23",
        "IndexMmvb": "2212"
    },
    {
        "Date": "13.01.2017",
        "Earnings": "2 874 244 614.66",
        "PreciousMetals": "32.12",
        "IndexMmvb": "2195.19"
    },
    {
        "Date": "16.01.2017",
        "Earnings": "2 995 450 121.15",
        "PreciousMetals": "32.28",
        "IndexMmvb": "2189.07"
    },
    {
        "Date": "17.01.2017",
        "Earnings": "3 246 629 930.23",
        "PreciousMetals": "32.12",
        "IndexMmvb": "2178.73"
    },
    {
        "Date": "18.01.2017",
        "Earnings": "3 237 583 592.15",
        "PreciousMetals": "32.12",
        "IndexMmvb": "2170.09"
    },
    {
        "Date": "19.01.2017",
        "Earnings": "3 236 913 813.87",
        "PreciousMetals": "32.35",
        "IndexMmvb": "2162.25"
    },
    {
        "Date": "20.01.2017",
        "Earnings": "3 234 646 194.37",
        "PreciousMetals": "32.67",
        "IndexMmvb": "2159.96"
    },
    {
        "Date": "23.01.2017",
        "Earnings": "3 258 761 618.96",
        "PreciousMetals": "32.52",
        "IndexMmvb": "2146.09"
    },
    {
        "Date": "24.01.2017",
        "Earnings": "3 269 444 069.41",
        "PreciousMetals": "32.31",
        "IndexMmvb": "2174.59"
    },
    {
        "Date": "25.01.2017",
        "Earnings": "3 283 894 834.16",
        "PreciousMetals": "32.63",
        "IndexMmvb": "2176"
    },
    {
        "Date": "26.01.2017",
        "Earnings": "3 286 153 789.60",
        "PreciousMetals": "32.53",
        "IndexMmvb": "2229.2"
    },
    {
        "Date": "27.01.2017",
        "Earnings": "3 296 723 250.93",
        "PreciousMetals": "32.46",
        "IndexMmvb": "2266.05"
    },
    {
        "Date": "30.01.2017",
        "Earnings": "3 282 594 728.03",
        "PreciousMetals": "32.7",
        "IndexMmvb": "2234.14"
    },
    {
        "Date": "31.01.2017",
        "Earnings": "3 277 823 058.44",
        "PreciousMetals": "32.3",
        "IndexMmvb": "2217.39"
    },
    {
        "Date": "01.02.2017",
        "Earnings": "3 267 787 707.04",
        "PreciousMetals": "33.03",
        "IndexMmvb": "2231.68"
    },
    {
        "Date": "02.02.2017",
        "Earnings": "3 275 430 199.09",
        "PreciousMetals": "33.53",
        "IndexMmvb": "2217.56"
    },
    {
        "Date": "03.02.2017",
        "Earnings": "3 270 015 173.89",
        "PreciousMetals": "33.94",
        "IndexMmvb": "2226.61"
    },
    {
        "Date": "06.02.2017",
        "Earnings": "3 368 156 349.34",
        "PreciousMetals": "33.77",
        "IndexMmvb": "2210.51"
    },
    {
        "Date": "07.02.2017",
        "Earnings": "3 437 892 268.15",
        "PreciousMetals": "32.62",
        "IndexMmvb": "2218.77"
    },
    {
        "Date": "08.02.2017",
        "Earnings": "3 578 968 057.16",
        "PreciousMetals": "33.49",
        "IndexMmvb": "2189.61"
    },
    {
        "Date": "09.02.2017",
        "Earnings": "3 703 909 772.24",
        "PreciousMetals": "33.68",
        "IndexMmvb": "2173.98"
    },
    {
        "Date": "10.02.2017",
        "Earnings": "3 731 318 594.53",
        "PreciousMetals": "33.66",
        "IndexMmvb": "2162.19"
    },
    {
        "Date": "13.02.2017",
        "Earnings": "3 635 600 293.08",
        "PreciousMetals": "33.52",
        "IndexMmvb": "2161.49"
    },
    {
        "Date": "14.02.2017",
        "Earnings": "3 707 962 217.85",
        "PreciousMetals": "32.89",
        "IndexMmvb": "2141.5"
    },
    {
        "Date": "15.02.2017",
        "Earnings": "3 727 833 724.07",
        "PreciousMetals": "33.36",
        "IndexMmvb": "2137.08"
    },
    {
        "Date": "16.02.2017",
        "Earnings": "3 588 628 211.68",
        "PreciousMetals": "32.68",
        "IndexMmvb": "2148.48"
    },
    {
        "Date": "17.02.2017",
        "Earnings": "3 580 757 079.49",
        "PreciousMetals": "32.85",
        "IndexMmvb": "2128.21"
    },
    {
        "Date": "20.02.2017",
        "Earnings": "3 464 363 444.23",
        "PreciousMetals": "33.54",
        "IndexMmvb": "2119.09"
    },
    {
        "Date": "21.02.2017",
        "Earnings": "3 452 882 578.58",
        "PreciousMetals": "33.63",
        "IndexMmvb": "2127.72"
    },
    {
        "Date": "22.02.2017",
        "Earnings": "3 463 309 407.41",
        "PreciousMetals": "33.45",
        "IndexMmvb": "2106.3"
    },
    {
        "Date": "27.02.2017",
        "Earnings": "3 460 627 617.65",
        "PreciousMetals": "33.06",
        "IndexMmvb": "2056.46"
    },
    {
        "Date": "28.02.2017",
        "Earnings": "3 473 103 513.64",
        "PreciousMetals": "34.03",
        "IndexMmvb": "2035.77"
    },
    {
        "Date": "01.03.2017",
        "Earnings": "3 500 418 194.84",
        "PreciousMetals": "34.18",
        "IndexMmvb": "2059.87"
    },
    {
        "Date": "02.03.2017",
        "Earnings": "3 618 712 639.28",
        "PreciousMetals": "34.31",
        "IndexMmvb": "2049"
    },
    {
        "Date": "03.03.2017",
        "Earnings": "3 882 334 105.60",
        "PreciousMetals": "34.42",
        "IndexMmvb": "2056.89"
    },
    {
        "Date": "06.03.2017",
        "Earnings": "3 949 940 588.30",
        "PreciousMetals": "34.72",
        "IndexMmvb": "2047.42"
    },
    {
        "Date": "07.03.2017",
        "Earnings": "4 086 252 177.65",
        "PreciousMetals": "33.12",
        "IndexMmvb": "2024.84"
    },
    {
        "Date": "09.03.2017",
        "Earnings": "4 228 878 881.34",
        "PreciousMetals": "33.36",
        "IndexMmvb": "1974.24"
    },
    {
        "Date": "10.03.2017",
        "Earnings": "4 232 862 141.92",
        "PreciousMetals": "32.91",
        "IndexMmvb": "1973.96"
    },
    {
        "Date": "13.03.2017",
        "Earnings": "4 267 455 051.36",
        "PreciousMetals": "32.63",
        "IndexMmvb": "2000.14"
    },
    {
        "Date": "14.03.2017",
        "Earnings": "4 522 919 744.87",
        "PreciousMetals": "32.11",
        "IndexMmvb": "2001.25"
    },
    {
        "Date": "15.03.2017",
        "Earnings": "4 630 090 250.39",
        "PreciousMetals": "32.26",
        "IndexMmvb": "1992.59"
    },
    {
        "Date": "16.03.2017",
        "Earnings": "4 514 660 980.92",
        "PreciousMetals": "32.31",
        "IndexMmvb": "2014.37"
    },
    {
        "Date": "17.03.2017",
        "Earnings": "4 534 545 049.22",
        "PreciousMetals": "31.67",
        "IndexMmvb": "2036.96"
    },
    {
        "Date": "20.03.2017",
        "Earnings": "4 657 139 049.15",
        "PreciousMetals": "32.52",
        "IndexMmvb": "2042.72"
    },
    {
        "Date": "21.03.2017",
        "Earnings": "4 590 313 993.13",
        "PreciousMetals": "32.05",
        "IndexMmvb": "2048.07"
    },
    {
        "Date": "22.03.2017",
        "Earnings": "4 488 350 564.47",
        "PreciousMetals": "31.7",
        "IndexMmvb": "2061.53"
    },
    {
        "Date": "23.03.2017",
        "Earnings": "4 631 553 737.17",
        "PreciousMetals": "32.08",
        "IndexMmvb": "2051.04"
    },
    {
        "Date": "24.03.2017",
        "Earnings": "4 593 113 530.93",
        "PreciousMetals": "32.51",
        "IndexMmvb": "2039.77"
    },
    {
        "Date": "27.03.2017",
        "Earnings": "4 637 615 029.24",
        "PreciousMetals": "32.4",
        "IndexMmvb": "2013.16"
    },
    {
        "Date": "28.03.2017",
        "Earnings": "4 597 007 511.27",
        "PreciousMetals": "32.89",
        "IndexMmvb": "2032.54"
    },
    {
        "Date": "29.03.2017",
        "Earnings": "4 576 435 355.49",
        "PreciousMetals": "32.84",
        "IndexMmvb": "2023.71"
    },
    {
        "Date": "30.03.2017",
        "Earnings": "4 411 144 211.07",
        "PreciousMetals": "33.24",
        "IndexMmvb": "2021.88"
    },
    {
        "Date": "31.03.2017",
        "Earnings": "4 233 137 028.16",
        "PreciousMetals": "32.81",
        "IndexMmvb": "1995.9"
    },
    {
        "Date": "03.04.2017",
        "Earnings": "4 370 672 716.57",
        "PreciousMetals": "32.49",
        "IndexMmvb": "2008.61"
    },
    {
        "Date": "04.04.2017",
        "Earnings": "4 287 242 137.18",
        "PreciousMetals": "32.78",
        "IndexMmvb": "2025.69"
    },
    {
        "Date": "05.04.2017",
        "Earnings": "4 197 774 618.06",
        "PreciousMetals": "33.35",
        "IndexMmvb": "2056.32"
    },
    {
        "Date": "06.04.2017",
        "Earnings": "4 191 869 894.42",
        "PreciousMetals": "32.81",
        "IndexMmvb": "2054.69"
    },
    {
        "Date": "07.04.2017",
        "Earnings": "4 176 148 793.06",
        "PreciousMetals": "33.06",
        "IndexMmvb": "2020.23"
    },
    {
        "Date": "10.04.2017",
        "Earnings": "4 282 926 566.69",
        "PreciousMetals": "33.67",
        "IndexMmvb": "1971.23"
    },
    {
        "Date": "11.04.2017",
        "Earnings": "4 324 897 168.04",
        "PreciousMetals": "33.1",
        "IndexMmvb": "1977.95"
    },
    {
        "Date": "12.04.2017",
        "Earnings": "4 077 984 632.19",
        "PreciousMetals": "32.85",
        "IndexMmvb": "1947.88"
    },
    {
        "Date": "13.04.2017",
        "Earnings": "4 019 000 911.04",
        "PreciousMetals": "33.41",
        "IndexMmvb": "1944.7"
    },
    {
        "Date": "14.04.2017",
        "Earnings": "3 999 770 624.32",
        "PreciousMetals": "33.78",
        "IndexMmvb": "1916.29"
    },
    {
        "Date": "18.04.2017",
        "Earnings": "4 039 198 659.60",
        "PreciousMetals": "33.57",
        "IndexMmvb": "1920.29"
    },
    {
        "Date": "19.04.2017",
        "Earnings": "4 022 970 406.70",
        "PreciousMetals": "33.15",
        "IndexMmvb": "1916.5"
    },
    {
        "Date": "20.04.2017",
        "Earnings": "4 530 449 989.89",
        "PreciousMetals": "32.91",
        "IndexMmvb": "1932.17"
    },
    {
        "Date": "21.04.2017",
        "Earnings": "4 489 755 205.15",
        "PreciousMetals": "32.99",
        "IndexMmvb": "1944.72"
    },
    {
        "Date": "24.04.2017",
        "Earnings": "4 824 513 555.55",
        "PreciousMetals": "32.51",
        "IndexMmvb": "1979.57"
    },
    {
        "Date": "25.04.2017",
        "Earnings": "4 877 864 394.49",
        "PreciousMetals": "32.11",
        "IndexMmvb": "1998.41"
    },
    {
        "Date": "26.04.2017",
        "Earnings": "4 963 852 078.76",
        "PreciousMetals": "32.03",
        "IndexMmvb": "2026.92"
    },
    {
        "Date": "27.04.2017",
        "Earnings": "5 007 701 406.67",
        "PreciousMetals": "31.85",
        "IndexMmvb": "2011.67"
    },
    {
        "Date": "28.04.2017",
        "Earnings": "5 053 310 398.37",
        "PreciousMetals": "31.98",
        "IndexMmvb": "2016.71"
    },
    {
        "Date": "02.05.2017",
        "Earnings": "5 111 286 206.00",
        "PreciousMetals": "31.9",
        "IndexMmvb": "2026.85"
    },
    {
        "Date": "03.05.2017",
        "Earnings": "5 463 596 886.14",
        "PreciousMetals": "31.04",
        "IndexMmvb": "1993.66"
    },
    {
        "Date": "04.05.2017",
        "Earnings": "5 394 977 086.16",
        "PreciousMetals": "30.93",
        "IndexMmvb": "1998.87"
    },
    {
        "Date": "05.05.2017",
        "Earnings": "5 275 801 802.56",
        "PreciousMetals": "30.54",
        "IndexMmvb": "2002.41"
    },
    {
        "Date": "10.05.2017",
        "Earnings": "5 118 859 257.25",
        "PreciousMetals": "30.62",
        "IndexMmvb": "2028.21"
    },
    {
        "Date": "11.05.2017",
        "Earnings": "5 094 123 962.08",
        "PreciousMetals": "30.42",
        "IndexMmvb": "2002.54"
    },
    {
        "Date": "12.05.2017",
        "Earnings": "5 079 938 739.90",
        "PreciousMetals": "30.06",
        "IndexMmvb": "1994.58"
    },
    {
        "Date": "15.05.2017",
        "Earnings": "5 093 919 681.79",
        "PreciousMetals": "29.96",
        "IndexMmvb": "2003.12"
    },
    {
        "Date": "16.05.2017",
        "Earnings": "4 991 530 196.30",
        "PreciousMetals": "30.15",
        "IndexMmvb": "1992.94"
    },
    {
        "Date": "17.05.2017",
        "Earnings": "4 970 119 191.61",
        "PreciousMetals": "30.24",
        "IndexMmvb": "1994.35"
    },
    {
        "Date": "18.05.2017",
        "Earnings": "5 267 799 375.91",
        "PreciousMetals": "30.83",
        "IndexMmvb": "1967.66"
    },
    {
        "Date": "19.05.2017",
        "Earnings": "5 266 775 467.29",
        "PreciousMetals": "31.06",
        "IndexMmvb": "1962.4"
    },
    {
        "Date": "23.05.2017",
        "Earnings": "5 391 747 724.04",
        "PreciousMetals": "30.79",
        "IndexMmvb": "1960.16"
    },
    {
        "Date": "24.05.2017",
        "Earnings": "5 400 117 651.34",
        "PreciousMetals": "31.17",
        "IndexMmvb": "1951.98"
    },
    {
        "Date": "25.05.2017",
        "Earnings": "5 631 790 189.40",
        "PreciousMetals": "30.81",
        "IndexMmvb": "1947.26"
    },
    {
        "Date": "26.05.2017",
        "Earnings": "5 808 826 368.07",
        "PreciousMetals": "30.92",
        "IndexMmvb": "1934.25"
    },
    {
        "Date": "29.05.2017",
        "Earnings": "5 807 256 855.10",
        "PreciousMetals": "31.55",
        "IndexMmvb": "1940.77"
    },
    {
        "Date": "30.05.2017",
        "Earnings": "5 773 157 863.64",
        "PreciousMetals": "31.52",
        "IndexMmvb": "1932.91"
    },
    {
        "Date": "31.05.2017",
        "Earnings": "5 598 165 162.24",
        "PreciousMetals": "31.38",
        "IndexMmvb": "1900.38"
    },
    {
        "Date": "01.06.2017",
        "Earnings": "5 511 494 190.50",
        "PreciousMetals": "31.55",
        "IndexMmvb": "1869.66"
    },
    {
        "Date": "02.06.2017",
        "Earnings": "5 527 342 779.18",
        "PreciousMetals": "31.14",
        "IndexMmvb": "1881.87"
    },
    {
        "Date": "05.06.2017",
        "Earnings": "5 392 690 809.18",
        "PreciousMetals": "31.33",
        "IndexMmvb": "1877.69"
    },
    {
        "Date": "06.06.2017",
        "Earnings": "5 133 607 689.73",
        "PreciousMetals": "31.89",
        "IndexMmvb": "1870.04"
    },
    {
        "Date": "07.06.2017",
        "Earnings": "5 205 133 013.74",
        "PreciousMetals": "32",
        "IndexMmvb": "1868.42"
    },
    {
        "Date": "08.06.2017",
        "Earnings": "5 126 246 338.25",
        "PreciousMetals": "32.02",
        "IndexMmvb": "1874.21"
    },
    {
        "Date": "09.06.2017",
        "Earnings": "4 857 916 140.70",
        "PreciousMetals": "32.25",
        "IndexMmvb": "1883.34"
    },
    {
        "Date": "13.06.2017",
        "Earnings": "4 743 053 153.88",
        "PreciousMetals": "31.8",
        "IndexMmvb": "1861.27"
    },
    {
        "Date": "14.06.2017",
        "Earnings": "4 740 485 964.43",
        "PreciousMetals": "30.78",
        "IndexMmvb": "1838.32"
    },
    {
        "Date": "15.06.2017",
        "Earnings": "4 780 479 897.82",
        "PreciousMetals": "31.1",
        "IndexMmvb": "1817.82"
    },
    {
        "Date": "16.06.2017",
        "Earnings": "4 704 987 374.52",
        "PreciousMetals": "31.14",
        "IndexMmvb": "1822.91"
    },
    {
        "Date": "19.06.2017",
        "Earnings": "4 673 912 772.79",
        "PreciousMetals": "31.11",
        "IndexMmvb": "1849.78"
    },
    {
        "Date": "20.06.2017",
        "Earnings": "4 717 566 622.03",
        "PreciousMetals": "31.06",
        "IndexMmvb": "1857.96"
    },
    {
        "Date": "21.06.2017",
        "Earnings": "4 554 381 876.28",
        "PreciousMetals": "31.24",
        "IndexMmvb": "1850.81"
    },
    {
        "Date": "22.06.2017",
        "Earnings": "4 663 743 388.16",
        "PreciousMetals": "31.85",
        "IndexMmvb": "1860.05"
    },
    {
        "Date": "23.06.2017",
        "Earnings": "4 779 804 513.97",
        "PreciousMetals": "32.06",
        "IndexMmvb": "1867.46"
    },
    {
        "Date": "26.06.2017",
        "Earnings": "4 848 319 605.96",
        "PreciousMetals": "32.05",
        "IndexMmvb": "1860.39"
    },
    {
        "Date": "27.06.2017",
        "Earnings": "5 175 609 597.35",
        "PreciousMetals": "31.36",
        "IndexMmvb": "1878.94"
    },
    {
        "Date": "28.06.2017",
        "Earnings": "5 173 603 268.84",
        "PreciousMetals": "31.54",
        "IndexMmvb": "1891.98"
    },
    {
        "Date": "29.06.2017",
        "Earnings": "5 322 999 267.08",
        "PreciousMetals": "32.12",
        "IndexMmvb": "1881.04"
    },
    {
        "Date": "30.06.2017",
        "Earnings": "5 105 094 276.26",
        "PreciousMetals": "31.97",
        "IndexMmvb": "1879.5"
    },
    {
        "Date": "03.07.2017",
        "Earnings": "4 977 538 195.61",
        "PreciousMetals": "31.45",
        "IndexMmvb": "1902.59"
    },
    {
        "Date": "04.07.2017",
        "Earnings": "5 003 028 360.47",
        "PreciousMetals": "31.24",
        "IndexMmvb": "1917.4"
    },
    {
        "Date": "05.07.2017",
        "Earnings": "5 071 367 021.49",
        "PreciousMetals": "30.75",
        "IndexMmvb": "1921.38"
    },
    {
        "Date": "06.07.2017",
        "Earnings": "5 085 362 708.64",
        "PreciousMetals": "30.55",
        "IndexMmvb": "1923.22"
    },
    {
        "Date": "07.07.2017",
        "Earnings": "5 010 016 929.96",
        "PreciousMetals": "31.01",
        "IndexMmvb": "1912.48"
    },
    {
        "Date": "10.07.2017",
        "Earnings": "5 132 890 083.93",
        "PreciousMetals": "30.75",
        "IndexMmvb": "1925.74"
    },
    {
        "Date": "11.07.2017",
        "Earnings": "5 096 124 229.64",
        "PreciousMetals": "29.51",
        "IndexMmvb": "1937.64"
    },
    {
        "Date": "12.07.2017",
        "Earnings": "5 121 904 298.34",
        "PreciousMetals": "30.29",
        "IndexMmvb": "1954.39"
    },
    {
        "Date": "13.07.2017",
        "Earnings": "5 119 739 183.34",
        "PreciousMetals": "30.85",
        "IndexMmvb": "1959.91"
    },
    {
        "Date": "14.07.2017",
        "Earnings": "5 081 421 873.79",
        "PreciousMetals": "30.86",
        "IndexMmvb": "1960.69"
    },
    {
        "Date": "17.07.2017",
        "Earnings": "5 192 011 855.17",
        "PreciousMetals": "30.24",
        "IndexMmvb": "1959.11"
    },
    {
        "Date": "18.07.2017",
        "Earnings": "4 675 721 004.87",
        "PreciousMetals": "30.52",
        "IndexMmvb": "1947.71"
    },
    {
        "Date": "19.07.2017",
        "Earnings": "4 710 247 660.67",
        "PreciousMetals": "30.87",
        "IndexMmvb": "1951.89"
    },
    {
        "Date": "20.07.2017",
        "Earnings": "4 366 214 369.05",
        "PreciousMetals": "30.91",
        "IndexMmvb": "1946.51"
    },
    {
        "Date": "21.07.2017",
        "Earnings": "4 459 033 308.48",
        "PreciousMetals": "30.73",
        "IndexMmvb": "1925.13"
    },
    {
        "Date": "24.07.2017",
        "Earnings": "4 557 419 737.10",
        "PreciousMetals": "31.13",
        "IndexMmvb": "1931.75"
    },
    {
        "Date": "25.07.2017",
        "Earnings": "4 495 672 188.78",
        "PreciousMetals": "31.65",
        "IndexMmvb": "1923.73"
    },
    {
        "Date": "26.07.2017",
        "Earnings": "4 441 551 920.68",
        "PreciousMetals": "31.37",
        "IndexMmvb": "1933.1"
    },
    {
        "Date": "27.07.2017",
        "Earnings": "4 523 822 300.85",
        "PreciousMetals": "31.53",
        "IndexMmvb": "1945.12"
    },
    {
        "Date": "28.07.2017",
        "Earnings": "4 435 498 275.92",
        "PreciousMetals": "32.07",
        "IndexMmvb": "1916.75"
    },
    {
        "Date": "31.07.2017",
        "Earnings": "4 400 369 938.22",
        "PreciousMetals": "31.7",
        "IndexMmvb": "1919.53"
    },
    {
        "Date": "01.08.2017",
        "Earnings": "4 405 621 657.19",
        "PreciousMetals": "32.36",
        "IndexMmvb": "1940.14"
    },
    {
        "Date": "02.08.2017",
        "Earnings": "4 701 893 202.41",
        "PreciousMetals": "32.21",
        "IndexMmvb": "1965.48"
    },
    {
        "Date": "03.08.2017",
        "Earnings": "4 912 596 923.23",
        "PreciousMetals": "32.47",
        "IndexMmvb": "1965.29"
    },
    {
        "Date": "04.08.2017",
        "Earnings": "4 891 668 122.70",
        "PreciousMetals": "32.17",
        "IndexMmvb": "1953.49"
    },
    {
        "Date": "07.08.2017",
        "Earnings": "4 878 076 244.69",
        "PreciousMetals": "32.39",
        "IndexMmvb": "1970.37"
    },
    {
        "Date": "08.08.2017",
        "Earnings": "4 873 081 461.24",
        "PreciousMetals": "31.15",
        "IndexMmvb": "1989.61"
    },
    {
        "Date": "09.08.2017",
        "Earnings": "4 857 300 243.39",
        "PreciousMetals": "31.61",
        "IndexMmvb": "1975.91"
    },
    {
        "Date": "10.08.2017",
        "Earnings": "4 548 824 802.57",
        "PreciousMetals": "31.98",
        "IndexMmvb": "1960.23"
    },
    {
        "Date": "11.08.2017",
        "Earnings": "4 563 692 332.82",
        "PreciousMetals": "32.91",
        "IndexMmvb": "1944.83"
    },
    {
        "Date": "14.08.2017",
        "Earnings": "4 550 959 645.15",
        "PreciousMetals": "33.07",
        "IndexMmvb": "1951.75"
    },
    {
        "Date": "15.08.2017",
        "Earnings": "4 543 755 829.91",
        "PreciousMetals": "32.63",
        "IndexMmvb": "1950.28"
    },
    {
        "Date": "16.08.2017",
        "Earnings": "4 333 671 438.37",
        "PreciousMetals": "32.54",
        "IndexMmvb": "1942.88"
    },
    {
        "Date": "17.08.2017",
        "Earnings": "4 327 014 296.42",
        "PreciousMetals": "31.99",
        "IndexMmvb": "1941.52"
    },
    {
        "Date": "18.08.2017",
        "Earnings": "4 274 594 324.80",
        "PreciousMetals": "32.42",
        "IndexMmvb": "1930.71"
    },
    {
        "Date": "21.08.2017",
        "Earnings": "4 275 777 243.19",
        "PreciousMetals": "32.73",
        "IndexMmvb": "1937.66"
    },
    {
        "Date": "22.08.2017",
        "Earnings": "4 448 611 540.44",
        "PreciousMetals": "32.36",
        "IndexMmvb": "1947.4"
    },
    {
        "Date": "23.08.2017",
        "Earnings": "4 384 303 359.88",
        "PreciousMetals": "32.31",
        "IndexMmvb": "1958.52"
    },
    {
        "Date": "24.08.2017",
        "Earnings": "4 346 775 156.59",
        "PreciousMetals": "32.43",
        "IndexMmvb": "1973.5"
    },
    {
        "Date": "25.08.2017",
        "Earnings": "4 331 086 989.51",
        "PreciousMetals": "32.19",
        "IndexMmvb": "1979.14"
    },
    {
        "Date": "28.08.2017",
        "Earnings": "4 314 815 839.77",
        "PreciousMetals": "32.37",
        "IndexMmvb": "1987.15"
    },
    {
        "Date": "29.08.2017",
        "Earnings": "4 336 181 193.74",
        "PreciousMetals": "32.04",
        "IndexMmvb": "1989.12"
    },
    {
        "Date": "30.08.2017",
        "Earnings": "4 542 261 621.64",
        "PreciousMetals": "33.12",
        "IndexMmvb": "2008.88"
    },
    {
        "Date": "31.08.2017",
        "Earnings": "4 544 212 720.62",
        "PreciousMetals": "32.93",
        "IndexMmvb": "2022.22"
    },
    {
        "Date": "01.09.2017",
        "Earnings": "4 666 177 500.61",
        "PreciousMetals": "32.64",
        "IndexMmvb": "2010.98"
    },
    {
        "Date": "04.09.2017",
        "Earnings": "4 878 126 009.43",
        "PreciousMetals": "32.66",
        "IndexMmvb": "2003.32"
    },
    {
        "Date": "05.09.2017",
        "Earnings": "4 798 536 916.58",
        "PreciousMetals": "33.07",
        "IndexMmvb": "2004.02"
    },
    {
        "Date": "06.09.2017",
        "Earnings": "4 727 567 005.70",
        "PreciousMetals": "33.26",
        "IndexMmvb": "2014.6"
    },
    {
        "Date": "07.09.2017",
        "Earnings": "4 725 584 364.70",
        "PreciousMetals": "32.76",
        "IndexMmvb": "2010.17"
    },
    {
        "Date": "08.09.2017",
        "Earnings": "4 656 062 428.16",
        "PreciousMetals": "32.68",
        "IndexMmvb": "2032.75"
    },
    {
        "Date": "11.09.2017",
        "Earnings": "4 834 351 622.45",
        "PreciousMetals": "33.37",
        "IndexMmvb": "2044.13"
    },
    {
        "Date": "12.09.2017",
        "Earnings": "4 835 815 106.62",
        "PreciousMetals": "32.81",
        "IndexMmvb": "2058.8"
    },
    {
        "Date": "13.09.2017",
        "Earnings": "4 688 109 605.41",
        "PreciousMetals": "32.68",
        "IndexMmvb": "2054.19"
    },
    {
        "Date": "14.09.2017",
        "Earnings": "4 683 105 172.16",
        "PreciousMetals": "33.21",
        "IndexMmvb": "2052.25"
    },
    {
        "Date": "18.09.2017",
        "Earnings": "4 374 083 270.57",
        "PreciousMetals": "32.74",
        "IndexMmvb": "2059.08"
    },
    {
        "Date": "19.09.2017",
        "Earnings": "4 631 692 904.62",
        "PreciousMetals": "32.48",
        "IndexMmvb": "2048.99"
    },
    {
        "Date": "20.09.2017",
        "Earnings": "4 531 710 796.33",
        "PreciousMetals": "32.04",
        "IndexMmvb": "2057.53"
    },
    {
        "Date": "21.09.2017",
        "Earnings": "4 614 464 425.78",
        "PreciousMetals": "32.48",
        "IndexMmvb": "2060.24"
    },
    {
        "Date": "22.09.2017",
        "Earnings": "4 708 565 501.88",
        "PreciousMetals": "31.73",
        "IndexMmvb": "2051.63"
    },
    {
        "Date": "25.09.2017",
        "Earnings": "4 682 268 492.02",
        "PreciousMetals": "31.46",
        "IndexMmvb": "2069.11"
    },
    {
        "Date": "26.09.2017",
        "Earnings": "4 846 833 246.09",
        "PreciousMetals": "31.37",
        "IndexMmvb": "2071.13"
    },
    {
        "Date": "27.09.2017",
        "Earnings": "4 837 551 214.70",
        "PreciousMetals": "31.46",
        "IndexMmvb": "2081.12"
    },
    {
        "Date": "28.09.2017",
        "Earnings": "4 938 212 221.87",
        "PreciousMetals": "31.5",
        "IndexMmvb": "2071.64"
    },
    {
        "Date": "29.09.2017",
        "Earnings": "4 622 714 431.32",
        "PreciousMetals": "31.6",
        "IndexMmvb": "2077.19"
    }
];

export const data = _.uniq(testData);
export const emptyData = _.uniq(simple_data);