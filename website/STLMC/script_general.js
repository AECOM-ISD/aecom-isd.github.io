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
var script = {"children":["this.MainViewer"],"scrollBarColor":"#000000","class":"Player","data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player4182"},"backgroundColor":["#FFFFFF"],"id":"rootPlayer","hash": "d20804cedc1b0cc524cb708a6529ceaa0bcab3ec4edd92a999320da7573da3cf", "definitions": [{"surfaceReticleMaxRadius":50,"id":"model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA","label":trans('model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA.label'),"class":"Model3D","surfaceReticleRadius":0.02,"lights":["this.light_7F535B4C_6ADE_D9E1_419F_39BDD51226A4","this.light_7B079D1D_6AB6_D960_41D6_3D879837F621"],"model":"this.res_7F789B41_6ADE_D9E3_41D9_4DBCA3E0D331","backgroundColor":"#333333","thumbnailUrl":"media/model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA_t.jpg","objects":[],"floorRadius":41486.2,"surfaceSelectionCoef":2,"environmentIntensity":0.5,"surfaceReticleMinRadius":15,"camera":"this.cam_7F56FB4B_6ADE_D9E7_419C_AD0A936276E4","data":{"label":"STLMC-massing terrain","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true}},{"playbackBarHeadHeight":15,"class":"ViewerArea","id":"MainViewer","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeight":10,"progressBarBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarHeadBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressBackgroundColor":["#000000"],"subtitlesTop":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarHeadShadow":true,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","propagateClick":false,"progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","playbackBarBorderSize":0,"progressHeight":10,"playbackBarHeadWidth":6,"toolTipBorderColor":"#767676","subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"width":"100%","minHeight":50,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"playbackBarProgressBorderSize":0,"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"horizontal","playbackBarRight":0,"toolTipFontFamily":"Arial","subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesGap":0,"subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","firstTransitionDuration":0,"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"toolTipFontSize":"1.11vmin","progressBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","playbackBarLeft":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressOpacity":0.7,"progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBottom":10,"subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"progressLeft":"10%","toolTipFontColor":"#606060","height":"100%","toolTipPaddingLeft":6,"progressRight":"10%","playbackBarBackgroundOpacity":1,"progressBarBorderSize":0,"progressBarBorderRadius":2},{"id":"mainPlayList","items":[{"class":"Model3DPlayListItem","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","player":"this.MainViewerModel3DPlayer","media":"this.model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA"}],"class":"PlayList"},{"viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer","class":"Model3DPlayer"},{"id":"light_7F535B4C_6ADE_D9E1_419F_39BDD51226A4","intensity":0.5,"class":"AmbientLight"},{"id":"light_7B079D1D_6AB6_D960_41D6_3D879837F621","shadowTolerance":2,"class":"OrbitLight","shadowRadius":10.86,"yaw":116.6,"pitch":36,"intensity":0.63,"castShadow":true},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA/scene.glb"},{"url":"media/model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA/scene_mobile.glb","tags":"mobile","class":"Model3DResourceLevel"}],"class":"Model3DResource","id":"res_7F789B41_6ADE_D9E3_41D9_4DBCA3E0D331"},{"autoNearFar":true,"id":"cam_7F56FB4B_6ADE_D9E7_419C_AD0A936276E4","initialX":1994.78,"initialY":440.99,"minZ":-6450.82,"class":"FlyOverModel3DCamera","initialPitch":-30,"maxPitch":45,"maxX":6593.19,"initialZ":-840.04,"maxY":1768.18,"minHeight":8078.34,"minX":-2936.11,"initialYaw":-5.59,"keepHeight":false,"minY":-1180.86,"maxZ":1094.24,"minPitch":-90}],"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","watermark":false,"propagateClick":false,"scripts":{"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizStart":TDV.Tour.Script.quizStart,"getPixels":TDV.Tour.Script.getPixels,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"executeJS":TDV.Tour.Script.executeJS,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"createTween":TDV.Tour.Script.createTween,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"isPanorama":TDV.Tour.Script.isPanorama,"initQuiz":TDV.Tour.Script.initQuiz,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"init":TDV.Tour.Script.init,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getKey":TDV.Tour.Script.getKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clone":TDV.Tour.Script.clone,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"playAudioList":TDV.Tour.Script.playAudioList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"initAnalytics":TDV.Tour.Script.initAnalytics,"unregisterKey":TDV.Tour.Script.unregisterKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"registerKey":TDV.Tour.Script.registerKey,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"existsKey":TDV.Tour.Script.existsKey,"downloadFile":TDV.Tour.Script.downloadFile,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setValue":TDV.Tour.Script.setValue,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"openLink":TDV.Tour.Script.openLink,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"startMeasurement":TDV.Tour.Script.startMeasurement,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowScore":TDV.Tour.Script.quizShowScore,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync},"backgroundColorRatios":[0],"gap":10,"height":"100%","scrollBarMargin":2,"minWidth":0,"minHeight":0,"start":"this.init()","width":"100%"};
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