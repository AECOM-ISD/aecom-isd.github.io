(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","children":["this.MainViewer"],"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"pitch":1},"name":"Player507","history":{}},"hash": "4a3318318a47c126253114dad745337f65a60d807c6701d00e955489d7fdd480", "definitions": [{"viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer","class":"Model3DPlayer"},{"id":"MainViewer","playbackBarHeadHeight":15,"progressBarBorderColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowColor":"#000000","data":{"name":"Main Viewer"},"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeight":10,"toolTipPaddingTop":4,"toolTipPaddingLeft":6,"progressBackgroundColor":["#000000"],"playbackBarHeadBorderSize":0,"progressBarBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","subtitlesTop":0,"toolTipBorderColor":"#767676","toolTipPaddingBottom":4,"playbackBarHeadShadow":true,"surfaceReticleColor":"#FFFFFF","propagateClick":false,"progressBackgroundColorRatios":[0],"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","toolTipShadowColor":"#333138","progressHeight":2,"playbackBarHeadWidth":6,"minHeight":50,"playbackBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColorRatios":[0],"minWidth":100,"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","progressBarBackgroundColorDirection":"horizontal","playbackBarRight":0,"toolTipFontFamily":"Arial","subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesGap":0,"subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","firstTransitionDuration":0,"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"class":"ViewerArea","progressBorderColor":"#000000","vrPointerSelectionTime":2000,"toolTipTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarLeft":0,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"progressBottom":10,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":2,"progressOpacity":0.7,"height":"100%","progressLeft":"33%","progressRight":"33%","playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"progressBarBorderSize":0},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","media":"this.model_498E9F48_427B_6E58_41BC_5EDF9FA19D14"}]},{"surfaceReticleMaxRadius":50,"id":"model_498E9F48_427B_6E58_41BC_5EDF9FA19D14","model":"this.res_52F240FD_427B_B238_41C4_1B6F7CA9B849","label":trans('model_498E9F48_427B_6E58_41BC_5EDF9FA19D14.label'),"backgroundColor":"#333333","surfaceReticleRadius":0.02,"lights":["this.light_5290512B_427B_B3DF_41C0_6B54E7F19D19"],"thumbnailUrl":"media/model_498E9F48_427B_6E58_41BC_5EDF9FA19D14_t.jpg","objects":[],"floorRadius":875042000,"surfaceSelectionCoef":2,"environmentIntensity":0.5,"data":{"label":"combine_tile","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"surfaceReticleMinRadius":15,"camera":"this.cam_529D1129_427B_B3DB_41C4_E24B8C34B2D9","class":"Model3D"},{"id":"res_52F240FD_427B_B238_41C4_1B6F7CA9B849","levels":[{"class":"Model3DResourceLevel","url":"media/model_498E9F48_427B_6E58_41BC_5EDF9FA19D14/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_498E9F48_427B_6E58_41BC_5EDF9FA19D14/scene_mobile.glb","tags":"mobile"}],"class":"Model3DResource"},{"id":"light_5290512B_427B_B3DF_41C0_6B54E7F19D19","class":"AmbientLight","intensity":0.5},{"id":"cam_529D1129_427B_B3DB_41C4_E24B8C34B2D9","initialX":187312750,"initialY":33348406,"minZ":-1108270000,"keepHeight":false,"maxPitch":45,"maxY":13327530.36,"initialZ":204293000,"initialPitch":-30,"maxX":1315986250,"minX":-941360750,"minHeight":33348406,"maxZ":1516856000,"minY":18959792.85,"autoNearFar":true,"class":"FlyOverModel3DCamera","minPitch":-90}],"width":"100%","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"backgroundColorRatios":[0],"layout":"absolute","scripts":{"downloadFile":TDV.Tour.Script.downloadFile,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPixels":TDV.Tour.Script.getPixels,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"createTween":TDV.Tour.Script.createTween,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeJS":TDV.Tour.Script.executeJS,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMapLocation":TDV.Tour.Script.setMapLocation,"mixObject":TDV.Tour.Script.mixObject,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"translate":TDV.Tour.Script.translate,"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"init":TDV.Tour.Script.init,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getKey":TDV.Tour.Script.getKey,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initAnalytics":TDV.Tour.Script.initAnalytics,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlays":TDV.Tour.Script.getOverlays,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setLocale":TDV.Tour.Script.setLocale,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"clone":TDV.Tour.Script.clone,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"shareSocial":TDV.Tour.Script.shareSocial,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMainViewer":TDV.Tour.Script.getMainViewer,"setValue":TDV.Tour.Script.setValue,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showWindow":TDV.Tour.Script.showWindow,"playAudioList":TDV.Tour.Script.playAudioList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cloneBindings":TDV.Tour.Script.cloneBindings,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"openLink":TDV.Tour.Script.openLink,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction},"minHeight":0,"height":"100%","minWidth":0,"scrollBarMargin":2,"gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.11.js.map
})();
//Generated with v2023.0.11, Mon May 22 2023