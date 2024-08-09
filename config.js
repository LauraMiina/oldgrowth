var config = {
    style: 'mapbox://styles/lauramek/clydgthvo014f01p8atl4d6t6',
    accessToken: 'pk.eyJ1IjoibGF1cmFtZWsiLCJhIjoiY2xpZW1lNDhyMDcyazNrbXIxZWVlb2FkeiJ9.EMmoLWWUuRelWB2Jucc23Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
   // title: 'Fight for the Wilderness',
  //  subtitle: 'Where the oldest forest are a battlefield between environmentalists and loggers.',
   // byline: 'By Laura Kukkonen',
   // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centre',
            hidden: false,
            title: 'Historic counting of the trees',
            description: 'President Joe Biden´s administration issued an executive order in 2022 to “conserve America’s mature and old-growth forests on federal lands.” The map shows where all these old forests are, based on a recent inventory by the U.S. Forest Service. The darker the colors, the more old woods are inside a fireshed, an area of 250,000 acres related to the USFS´s role as a fire-prevention agency.',
            location: {
                center: [-94.786879, 35.975403],
                zoom: 4.2,
                pitch: 30,
                bearing: -10,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'matureoldgrowth-new',
                    visibility: 'none'
                },
                {
                    layer: 'projects',
                    visibility: 'none'
                },
                {
                    layer: 'oldgrowth',
                    visibility: 'visible'
                }
            ],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'It used to be a billion acres',
            image: 'white-noheader-old-growth.png',
            description: 'Around 18 percent of the 193 million acres of federal forests are deemed to be old-growth. That would mean 33 million acres, roughly three percent of the billion acres of forest that originally covered the country before the settlers arrived.',
            location: {
                center: [-103.771744, 38.585347],
                zoom: 4.3,
                pitch: 20,
                bearing: -5,
                speed: 2, // make the flying slow
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'matureoldgrowth-new',
                visibility: 'none'
            },
            {
                layer: 'projects',
                visibility: 'none'
            },
            {
                layer: 'oldgrowth',
                visibility: 'visible'
            }
        ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'West rules in old forest density',
         //   image: './path/to/image/source.png',
            description: 'There is very little old-growth left in the east of the country. The largest areas with old-growth and mature forests are in the West. Alaska has the highest concentration of forests that have never been cut.',
            location: {
                center: [-118.212542, 49.677534],
                zoom: 4,
                pitch: 20.01,
                bearing: 13.2,
                speed: 1, // make the flying slow
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'matureoldgrowth-new',
                    visibility: 'none'
                },
                {
                    layer: 'projects',
                    visibility: 'none'
                },
                {
                    layer: 'oldgrowth',
                    visibility: 'visible'
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapterr',
            alignment: 'right',
            hidden: false,
            title: 'Fights for the forests',
            description: 'There are over 20 controversial forest management projects that the Climate Forests coalition believes to be a threat to old-growth and mature forests. This list of projects compiled by the coalition of over 120 environmental organizations highlights ongoing disputes over the protection of the oldest trees across America.',
        //    title: 'Proposed logging in the projects',
            image: 'orange_range.svg',
            location: {
                center: [-103.771744, 38.585347],
                zoom: 4.4,
                pitch: 20,
                bearing: 0,
                speed: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'matureoldgrowth-new',
                    visibility: 'none'
                },
                {
                    layer: 'projects',
                    visibility: 'visible'
                },
                {
                    layer: 'oldgrowth',
                    visibility: 'visible'
                }
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The last old trees',
          //  image: './path/to/image/source.png',
            description: 'In the Telephone Gap project, the USFS is proposing forestry operations like logging, harvesting, and thinning to approximately 12,000 acres of forest. Over 800 acres of this is old-growth, according to an environmental nonprofit, Standing Trees. The USFS says there will be no logging in old-growth areas within this project.',
            location: {
                center: [-73.506591, 43.072033],
                zoom: 7,
                pitch: 30,
                bearing: -13.2,
                speed: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'matureoldgrowth-new',
                    visibility: 'none'
                },
                {
                    layer: 'projects',
                    visibility: 'visible'
                },
                {
                    layer: 'oldgrowth',
                    visibility: 'visible'
                }
            ],
            onChapterExit: []
        }





    ]
};
