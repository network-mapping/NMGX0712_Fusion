var Lang = {
    code:1,

    analysis:{
        viewshedAdd:'הוסף קווי ראיה: לחיצה להגדרת נקודת צופה ולחיצה שניה להגדרת מרחק וכיוון. ESC ליציאה',
        query: 'שאילתה',
        tools: 'כלים',
        environment: 'סביבה',
        maps:'מפות',
        distance:'מרחק',
        area:'שטח',
        volume:'נפח',
        profile:'פרופיל',
        viewshed:'קווי ראיה',
        compare:'השוואה',
        crossSection:'חתך',
        light:'תאורה',
        shadow:'צל',
        contour:'קווי גובה',
        slope:'שיפועים',
        distanceMeasurement:'מדידת מרחקים',
        areaMeasurement:'מדידת שטחים',
        volumeMeasurement:'מדידת נפחים',
        terrainProfile:'פרופיל גובה',
        createViewshed:'יצירת קווי ראיה',
        swipeComparison:'השוואה בין שכבות',
        crossSection:'חתך',
        turnSunlight:'הדלק תאורה',
        turnShadow:'הדלק צל',
        showContour:'הצג קווי גובה',
        showSlope:'הצג שיפועים',
    },
    analysisReplace:{
        'Description':'תאור',
        'Type':'סוג',
        'Pivot Longtitude':'ציר קו אורך',
        'Pivot Latitude':'ציר קו רוחב',
        'Pivot MGRS':'MGRS נצ',
        'Pivot Altitude':'Altitude ציר',
        'Perimeter':'היקף',
        'Area':'שטח',
        'Attributes Information':'מידע על תכונות',
        'Longitude':'קו אורך',
        'Latitude':'קו רוחב',
        'Altitude':'גוֹבַה',
        'Foot':'רגל',
        'Feet':'רגל',
        'Miles':'מייל',
        'Mile':'מייל',
        'Meters':'מטר',
        'Meter':'מטר',
        'Km':'קמ',
        'AGL':'AGL',
        'Square km':'קמ בריבוע',
        'Square mi':'מייל בריבוע',
        'Square feet':'רגל בריבוע',
        'Square meter':'מטר בריבוע',
    },
    application:{
        loadingTE: 'טוען את האפליקציה',
        projectMissing: 'כתובת פרוייקט חסרה',
        enterProjectURL: 'הקש כתובת פרוייקט',
        frameRate: 'מהירות ריצוד',
        sevirityError: 'Error:',
        sevirityWarning: 'אזהרה:',
        projectURLMissing:'כתובת פרוייקט חסרה',
        loadingProject: 'טוען פרוייקט',
        loadingError: 'לא יכול לטעות כתובת פרוייקט',
        noErrors:'אין שגיאות',
        errorLogTitle: 'רשימת שגיאות',
        coordX: 'X',
        coordY: 'Y',
        coordNorth: '.צ',
        coordSouth: '.ד',
        coordEast: 'מז.',
        coordWest: 'מע.',
        coordMGRS: 'MGRS',
        attributes: 'מאפיינים',
        message: 'הודעה',
        noVBScript: '   לא נתמכת VBScript הודעת',
        errorNoServer: 'שגיאה: לא יכול למצוא שרת',
        serverURL: 'כתובת שרת',
        userName: 'שם משתמש',
        password: 'ססמא',
        logIn: 'התחבר',
        logOut: 'התנתק',
        loggedIn: 'מחובר',
        logOutFromServer: 'התנתן מהשרת',
        clickToLogin: 'הקלק להתחבר לשרת',
        loginToSGS: 'התחבר לשרת',
        mustLogin:'אין לך הרשאות לפתוח את',
        unsupportedLayersError: 'לא ניתן לטעון חלק מהשכבות',
        failedToLoadFly: 'לא ניתן לטעון את הפרויקט מכיוון שכתובת האתר אינה חוקית. בדוק את כתובת האתר שלך ונסה שוב',
        failedToLoadTerrain: 'לא ניתן לטעון את מסד הנתונים של השטח של הפרויקט. ייתכן שהדבר נגרם על ידי שגיאת בקשות חוצות מקור (CORS)',
        scriptNotFound: 'לא ניתן למצוא את סקריפט האתחול ',
        browserNotSupported: ' האפליקציה תומכת בדפדפני כרום ואדג על מחשבים שולחניים',
        changeSGConnectionTitle: "התחבר לשרת",
        changeSGSConnectionMessage: "כתובת השרת כוללת קוד זיהוי השונה מהמשתמש שכרגע מחובר. האם תרצה להתנתק מהמשתמש ולהתחבר עם קוד הזיהוי?",
        changeSGConnectionYesButton: "כן",
        changeSGConnectionNoButton: "לא",
        serverURLPlaceholder: 'הכנס את כתובת השרת',
        userNamePlaceholder: 'הכנס את שם המשתמש',
        passwordPlaceholder: 'הכנס את הסיסמא',
        next: 'הבא',
        back: 'הקודם',
    },
    
    navigate:{
        tools:'כלים',
        modes:'מצבים',
        flyHome:'טוס למיקום ראשוני',
        home:'מיקום ראשוני',
        flyAround:'טוס מסביב',
        rotate:'סביב',
        addNewLocation:'הוסף מיקום חדש',
        addLocation:'הוסף מיקום',
        stopFlight:'עצור טיסה',
        stop:'עצור',
        fieldOfView:'מפתח עדשה',
        reset:'איפוס',
        renderModes:'מצבי תצוגה',
        threeDModel:'תצוגה תלת ממדית',
        threeD:'תלת ממד',
        twoDMode:'תצוגה דו ממדית',
        towD:'דו ממד',
        twoDNorthMode:'תצוגה דו ממדית מוצפנת',
        twoDNorth:'דו ממד מוצפן',
        navigationModes:'מצבי ניווט',
        undergroundMode:'תת קרקע',
        collisionDetection:'זיהוי התנגשות',
        slideMode:'מצב החלקה',
        undergroundModeBtn:'תת<br>קרקע',
        cllisionDetectionBtn:'זיהוי<br>התנגשות',
        slideModeBtn:'מצב<br>החלקה',
        showLocations:'הצג מיקומים ומצגות',
        myLocation:'המיקום שלי',
        copyLink:'העתק קישור',
        shareLocation:'שתף קישור',

    },
    projectTree:{
        navigate:'נווט',
        layers:'שכבות',
        projectTree:'עץ פרוייקט',
        myData:'המידע שלי',
        loadLayer:'טען שכבה',
        addLocation:'הוסף מיקום',
        playPresentation:'נגן מצגת',
        flyToObject:'טוס לאובייקט',
        jumpToObject:"קפוץ לאובייקט",
        clipModel:'גזירת מודל',
        clip:'גזירה:',
        queryLayer:'שאילתה לשכבה',
        query:'שאילתה ',
        delete:'מחק',
        properties:'תכונות',
        sure:'האם אתה בטוח?',
        zoom: 'זום',
        close:'סגור',
        selectedFeatures:'אלמנטים נבחרים',
        errorNoFeatures:'טבלת נתונים: לא נמצאו ',
        errorMustLogin:'אתה חייב להיות מחובר לשרת כדי לטעון שכבות ',
        errorNotSupported:'סוג שכבה לא נתמך ',
        description:'תאור',
        activationAction:'מצב הפעלה',
        share:'שתף',
        removeNullValue:'הורד אזורים נתונים חסרים',
        nullValue:'נתונים חסרים',
        nullTolerance:'טווח נתונים חסרים',
        pointSize:'גודל נקודה',
        pointColor:'צבע נקודה',
        intensityBlend:'ערבוב עוצמה',
        flattenTerrain:'שטח פני שטח',
        altitudeMethod:'מצב גובה',
        altitude:'גובה',
        altitudeOffset:'היסט גובה',
        text:'טקסט',
        icon:'צמונה',
        scale:'גודל',
        tooltip:'חלונית הסבר',
        quality:'איכות',
        lineWidth:'עובי קו',
        lineColor:'צבע קו',
        lineOpacity:'שקיפות קו',
        fillColor:'צבע מילוי',
        fillOpacity:'שקיפות מילוי',
        replaceTerrain:'החלף את פני השטח',
        displayStyle:'מצב תצוגה',
        move:'הזז',
        direction:'כיוון',
        distance:'מרחק',
        verticalFOV:'שדה ראיה אנכי',
        horizontalFOV:'שדה ראיה אופקי',
        altitudeAGL:'גובה מעל פני השטח',
        single:'יחיד',
        area:'שטח',
        line:'קו',
        attributes:'תכונות',
        deleteAllLocations:'מחק כל המיקומים', 
        deleteAllLayers:'מחק כל השכבות',
        deleteAll:'מחק הכל',
        flyTo:'טוס אל',
        jumpTo:'קפוץ אל',
        yes:'כן',
        no:'לא',
        relative:'יחסי',
        absolute:'מוחלט',
        onTerrain:'על פני השטח',
        none:'ללא',
        meshGroundLayer:'שכבת קרקע',
        simplifiedMesh:'פישוט המודל',
        texture:'טקסטורה',
        xRay:'רנטגן',
        solidColor:'צבע אחד',
        searchQuery:'שאילתה:',
        search:'חפש',
        edit:'עריכה',
        flyToTooltip:'זום לראות שכבה',
        closeTooltip:'סגור חלון עריכה',
        attributeMaxResult:'מציג רק את',
        attributeItems:'התוצאות הראשונות    ',
    },
    search:{
        search:'חפש',
        searchPlaceholder:'חפש כתובות או קאורדינטות',
        errorLoggedIn:'אתה חייב להיות מחובר לשרת כדי לבצע חיפוש',
    },
    settings:{
        settings:'הגדרות',
        projects:'פרוייקטים',
        graphics:'גרפיקה',
        quality:'איכות',
        normal:'רגיל',
        high:'גבוה',
        best:'הכי טוב',
        view:'תצוגה',
        units:'יחידות',
        Meter:'מטר',
        Km:'קמ',
        Feet:'רגל',
        Mile:'מייל',
        KmMeters:'מטר / קמ',
        milesFeet:'מייל / רגל',
        AGL:                "AGL",
        altitude:'גובה',
        aboveGroundLevel:'מעל הקרקע',
        absoluteValues:'מעל פני הים',
        navigationControls:'כלי ניווט',
        centerSign:'סימן במרכז',
        statusBar:'שורת מצב',
        MGRSCoordinates:'MGRS קאורדינטות ',
        postEffects:'אפקט תצוגה',
        depthPerception:'תפיסת עומק',
        saturation:'הרויה',
        brightness:'בהירות',
        contrast:'ניגודיות',
        gamma:'גמא',
        resetDefault:'אפס למקור',
        shadow:'צל',
        globalShadow:'צל כללי',
        about:'אודות',
        TEW:'TerraExplorer Fusion',
        helpCenter:'מרכז העזרה',
        show:'הצג',
        errorLogger:'שגיאות',
        licenseNotices:'רישיון מוצר',
        TED:'TerraExplorer for Desktop',
        openInPlus:'TerraExplorer Plus פתח פרוייקט זה עם צפיין ',
        open:'פתח',
        LoadAnotherProject:                 'טען פרויקט אחר מהשרת',
        learnMore:'אין לךאת הצפיין? למד עוד',
        openAnotherProject:'פתח פרוייקט נוסף',
        load:'טען',
        recentProjects:'פרוייקטים אחרונים',
        errorMustLogin:'אתה חייב להיות מחובר לשרת כדי לטעון פרויקט ',
    },
    
    toolbox:{
        query:"שאילתה",
        layers:'שכבות',
        analysisTools:'מדידות',
        navigationTools:'כלי ניווט',
        search:'חיפוש',
        settings:'הגדרות',
        logger:'הצג שגיאות',

    },
    startPage:{
        copyright:'Copyright © 2023 Skyline Software Systems Inc',
        projectMissing: 'כתובת פרוייקט חסרה',
        SearchInServer: "חפש בשרת",
        recentProjects:'פרוייקטים אחרונים',
        demoProjects: "פרוייקט דוגמא",
        load: "טען",

    },
};