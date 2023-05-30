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
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"scripts":{"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPixels":TDV.Tour.Script.getPixels,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"existsKey":TDV.Tour.Script.existsKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"createTween":TDV.Tour.Script.createTween,"playAudioList":TDV.Tour.Script.playAudioList,"quizStart":TDV.Tour.Script.quizStart,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"init":TDV.Tour.Script.init,"setMapLocation":TDV.Tour.Script.setMapLocation,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setLocale":TDV.Tour.Script.setLocale,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizFinish":TDV.Tour.Script.quizFinish,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"initQuiz":TDV.Tour.Script.initQuiz,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeJS":TDV.Tour.Script.executeJS,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"clone":TDV.Tour.Script.clone,"showWindow":TDV.Tour.Script.showWindow,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setValue":TDV.Tour.Script.setValue,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"mixObject":TDV.Tour.Script.mixObject,"registerKey":TDV.Tour.Script.registerKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"openLink":TDV.Tour.Script.openLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"startMeasurement":TDV.Tour.Script.startMeasurement,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot},"start":"this.init()","data":{"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"history":{},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player4182"},"children":["this.MainViewer"],"class":"Player","propagateClick":false,"backgroundColorRatios":[0],"hash": "2b79a2b3c66a3ac7d0ea00e2fb0dbf58fa72e99f62b9f3a17ed8288033014658", "definitions": [{"id":"mainPlayList","items":[{"class":"Model3DPlayListItem","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","player":"this.MainViewerModel3DPlayer","media":"this.model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA"}],"class":"PlayList"},{"id":"MainViewer","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","progressBackgroundColorRatios":[0],"class":"ViewerArea","progressRight":"33%","vrPointerColor":"#FFFFFF","toolTipPaddingBottom":4,"progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"progressBarBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","subtitlesBottom":50,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBorderSize":0,"firstTransitionDuration":0,"playbackBarBorderSize":0,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesFontSize":"3vmin","progressBottom":10,"playbackBarBottom":5,"height":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":2,"toolTipShadowColor":"#333138","playbackBarHeadBorderRadius":0,"minHeight":50,"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressHeight":2,"toolTipFontFamily":"Arial","subtitlesBackgroundOpacity":0.2,"minWidth":100,"toolTipPaddingTop":4,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadow":true,"surfaceReticleColor":"#FFFFFF","propagateClick":false,"progressLeft":"33%","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarRight":0,"data":{"name":"Main Viewer"},"playbackBarBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3},{"viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer","class":"Model3DPlayer"},{"id":"model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA","label":trans('model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA.label'),"backgroundColor":"#333333","surfaceReticleMinRadius":15,"floorRadius":41486.2,"thumbnailUrl":"media/model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA_t.jpg","class":"Model3D","surfaceReticleMaxRadius":50,"objects":[],"surfaceReticleRadius":0.02,"lights":["this.light_7F535B4C_6ADE_D9E1_419F_39BDD51226A4","this.light_7B079D1D_6AB6_D960_41D6_3D879837F621"],"data":{"label":"STLMC-massing terrain","showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"surfaceSelectionCoef":2,"camera":"this.cam_7F56FB4B_6ADE_D9E7_419C_AD0A936276E4","environmentIntensity":0.5,"model":"this.res_7F789B41_6ADE_D9E3_41D9_4DBCA3E0D331"},{"id":"light_7F535B4C_6ADE_D9E1_419F_39BDD51226A4","class":"AmbientLight","intensity":0.5},{"id":"light_7B079D1D_6AB6_D960_41D6_3D879837F621","shadowRadius":10.86,"pitch":36,"yaw":116.6,"shadowTolerance":2,"class":"OrbitLight","castShadow":true,"intensity":0.63},{"id":"cam_7F56FB4B_6ADE_D9E7_419C_AD0A936276E4","initialPitch":-30,"autoNearFar":true,"minPitch":-90,"maxX":5407.56,"initialYaw":10.85,"maxY":1768.18,"minY":-1180.86,"class":"FlyOverModel3DCamera","initialX":1516.09,"keepHeight":false,"minZ":-6825.18,"minHeight":8078.34,"minX":-4453.9,"maxZ":719.88,"initialFov":56,"maxPitch":45,"initialY":632.97,"initialZ":-935.91},{"id":"res_7F789B41_6ADE_D9E3_41D9_4DBCA3E0D331","class":"Model3DResource","levels":[{"class":"Model3DResourceLevel","url":"media/model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA/scene.glb"},{"url":"media/model_7AC86718_6ADF_E961_41D3_C86EEEBF1BBA/scene_mobile.glb","class":"Model3DResourceLevel","tags":"mobile"}]}],"scrollBarColor":"#000000","scrollBarMargin":2,"layout":"absolute","gap":10,"width":"100%","watermark":false,"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0};
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