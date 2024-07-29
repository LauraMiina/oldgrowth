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
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Historic counting of the trees',
            description: 'Earlier this year, the US Forest Service published a historic inventory of all the mature and old-growth federal forests in the country. The inventory was done as part of an executive order by President Biden´s administration in 2022 to “conserve America’s mature and old-growth forests on Federal lands”.  In this map you can see all the firesheds that have these old forests. The darker the colors, the more old woods the area holds.',
            location: {
                center: [-85.053290, 37.920008],
                zoom: 4,
                pitch: 30,
                bearing: -13.2,
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
                    layer: 'projectlisting-cubelm',
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
          //  image: './path/to/image/source.png',
            description: 'From the 193 million acres of federal forests, around 18 percent is deemed to be old-growth. That would mean 33 million acres, roughly three percent of the billion acres of primary forest that once covered the country.',
            location: {
                center: [-103.771744, 38.585347],
                zoom: 4.3,
                pitch: 20,
                bearing: 0,
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
                layer: 'projectlisting-cubelm',
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
          //  title: 'Third Title',
         //   image: './path/to/image/source.png',
            description: 'There is very little old-growth left in the east of the country. Largest areas with old-growth and mature forests are in the West. The highest concentration of forests that have never been cut is in Alaska.',
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
                    layer: 'projectlisting-cubelm',
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
          //  image: './path/to/image/source.png',
            description: 'There are over 20 controversial forest management projects that the Climate Forests coalition believe to be a threat to old-growth and mature forests. This list of projects compiled by the coalition of over 120 environmental organizations highlights ongoing disputes over the protection of the oldest trees across America.',
            location: {
                center: [-103.771744, 38.585347],
                zoom: 4.3,
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
                    layer: 'projectlisting-cubelm',
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
            description: 'In the Telephone Gap project the USFS is proposing forestry operations like logging, harvesting and thinning to approximately 12,000 acres of forest. Over 800 acres of this is old-growth, according to an environmental nonprofit Standing Trees. The USFS is saying that there will be no logging in old-growth areas within this project.',
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
                    layer: 'projectlisting-cubelm',
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
