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
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"unregisterKey":TDV.Tour.Script.unregisterKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initQuiz":TDV.Tour.Script.initQuiz,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizStart":TDV.Tour.Script.quizStart,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"createTween":TDV.Tour.Script.createTween,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"init":TDV.Tour.Script.init,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMainViewer":TDV.Tour.Script.getMainViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeJS":TDV.Tour.Script.executeJS,"quizFinish":TDV.Tour.Script.quizFinish,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setLocale":TDV.Tour.Script.setLocale,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isPanorama":TDV.Tour.Script.isPanorama,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"clone":TDV.Tour.Script.clone,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setValue":TDV.Tour.Script.setValue,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupImage":TDV.Tour.Script.showPopupImage,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showWindow":TDV.Tour.Script.showWindow,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowScore":TDV.Tour.Script.quizShowScore,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"registerKey":TDV.Tour.Script.registerKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"mixObject":TDV.Tour.Script.mixObject,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"cloneBindings":TDV.Tour.Script.cloneBindings,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getComponentByName":TDV.Tour.Script.getComponentByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPixels":TDV.Tour.Script.getPixels},"start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"defaultLocale":"en","history":{},"name":"Player74365"},"children":["this.MainViewer"],"propagateClick":false,"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scrollBarMargin":2,"layout":"absolute","class":"Player","hash": "605bf5a10a17d1895bc956a4bfb9b8b38241be8ca49240ec5c723dc8f1e89fa1", "definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"class":"Model3DPlayListItem","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","player":"this.MainViewerModel3DPlayer","media":"this.model_5BA905ED_651C_92D2_41CD_3D3FDA1F90CD"}]},{"id":"MainViewer","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"progressRight":"33%","toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","vrPointerColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingRight":6,"playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"data":{"name":"Main Viewer"},"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesFontSize":"3vmin","minHeight":50,"progressBottom":10,"playbackBarBottom":5,"height":"100%","toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","playbackBarHeadBorderRadius":0,"minWidth":100,"toolTipFontFamily":"Arial","progressBorderSize":0,"progressBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadow":true,"propagateClick":false,"progressBorderRadius":2,"progressLeft":"33%","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","class":"ViewerArea","playbackBarBorderRadius":0,"subtitlesGap":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipBackgroundColor":"#F6F6F6","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15},{"viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer","class":"Model3DPlayer"},{"id":"model_5BA905ED_651C_92D2_41CD_3D3FDA1F90CD","class":"Model3D","backgroundColor":"#333333","surfaceReticleMinRadius":15,"label":trans('model_5BA905ED_651C_92D2_41CD_3D3FDA1F90CD.label'),"floorRadius":8750.46,"thumbnailUrl":"media/model_5BA905ED_651C_92D2_41CD_3D3FDA1F90CD_t.jpg","objects":[],"surfaceReticleMaxRadius":50,"surfaceReticleRadius":0.02,"lights":["this.light_246681CE_651D_B2D1_41B0_15693BB6605B"],"data":{"label":"massing export","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"surfaceSelectionCoef":2,"camera":"this.cam_2466D1CE_651D_B2D1_41CD_DE8D324D85FF","model":"this.res_245A41B7_651D_B2BE_41D7_9BF5C1A60F8D","environmentIntensity":0.5},{"id":"light_246681CE_651D_B2D1_41B0_15693BB6605B","class":"AmbientLight","intensity":0.5},{"id":"cam_2466D1CE_651D_B2D1_41CD_DE8D324D85FF","class":"FlyOverModel3DCamera","autoNearFar":true,"minPitch":-90,"maxX":13159.84,"maxY":1907.27,"minY":-261.05,"initialX":1873.12,"minHeight":333.49,"minX":-9413.59,"minZ":-15282.63,"maxZ":10968.74,"initialPitch":-30,"keepHeight":false,"maxPitch":45,"initialY":333.49,"initialZ":-2156.94},{"id":"res_245A41B7_651D_B2BE_41D7_9BF5C1A60F8D","class":"Model3DResource","levels":[{"class":"Model3DResourceLevel","url":"media/model_5BA905ED_651C_92D2_41CD_3D3FDA1F90CD/scene.glb"},{"url":"media/model_5BA905ED_651C_92D2_41CD_3D3FDA1F90CD/scene_mobile.glb","class":"Model3DResourceLevel","tags":"mobile"}]}],"gap":10,"width":"100%","watermark":false,"height":"100%","minHeight":0,"minWidth":0};
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
//Generated with v2023.0.11, Tue May 30 2023