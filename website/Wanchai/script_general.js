(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    return i(g);
    function i(p, q) {
        switch (p) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p) {
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
                    if (p['startsWith']('photo'))
                        x = this['getByClassName']('PhotoPlayList');
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
            if (p['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p) {
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
                        var B = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (B) {
                            w = B[0x1];
                            switch ('quiz.' + B[0x2]) {
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
                        var C = this['get']('data')['quiz'];
                        if (C) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, G[I]['id'], s), this);
                                        }
                                    } else {
                                        C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    C['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var L = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            L += C['getObjective'](G[I]['id'], s);
                                        }
                                    } else {
                                        L = C['getObjective'](w, s);
                                    }
                                } else {
                                    L = C['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        L += 0x1;
                                }
                                return L;
                            } catch (M) {
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
        var N = this['get']('data');
        N['updateText'](N['translateObjs'][f]);
    }
    function k(O) {
        var P = O['data']['nextSelectedIndex'];
        if (P >= 0x0) {
            var Q = O['source']['get']('items')[P];
            var R = function () {
                Q['unbind']('begin', R, this);
                j['call'](this);
            };
            Q['bind']('begin', R, this);
        }
    }
    function l(S) {
        return function (T) {
            if (S in T) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(U, V) {
        return function (W, X) {
            if (U == W && V in X) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(Y, Z, a0) {
        for (var a1 = 0x0; a1 < Y['length']; ++a1) {
            var a2 = Y[a1];
            var a3 = a2['get']('selectedIndex');
            if (a3 >= 0x0) {
                var a4 = Z['split']('.');
                var a5 = a2['get']('items')[a3];
                if (a0 !== undefined && !a0['call'](this, a5))
                    continue;
                for (var a6 = 0x0; a6 < a4['length']; ++a6) {
                    if (a5 == undefined)
                        return '';
                    a5 = 'get' in a5 ? a5['get'](a4[a6]) : a5[a4[a6]];
                }
                return a5;
            }
        }
        return '';
    }
    function o(a7, a8) {
        var a9 = a8['get']('player');
        return a9 !== undefined && a9['get']('viewerArea') == a7;
    }
}
var script = {"scripts":{"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPixels":TDV.Tour.Script.getPixels,"getMainViewer":TDV.Tour.Script.getMainViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"historyGoForward":TDV.Tour.Script.historyGoForward,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"historyGoBack":TDV.Tour.Script.historyGoBack,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playAudioList":TDV.Tour.Script.playAudioList,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"init":TDV.Tour.Script.init,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"existsKey":TDV.Tour.Script.existsKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"shareSocial":TDV.Tour.Script.shareSocial,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"translate":TDV.Tour.Script.translate,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setLocale":TDV.Tour.Script.setLocale,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setValue":TDV.Tour.Script.setValue,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"mixObject":TDV.Tour.Script.mixObject,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isPanorama":TDV.Tour.Script.isPanorama,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cloneBindings":TDV.Tour.Script.cloneBindings,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizStart":TDV.Tour.Script.quizStart,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"clone":TDV.Tour.Script.clone,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"executeJS":TDV.Tour.Script.executeJS,"downloadFile":TDV.Tour.Script.downloadFile,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openLink":TDV.Tour.Script.openLink,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getKey":TDV.Tour.Script.getKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initQuiz":TDV.Tour.Script.initQuiz,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"createTween":TDV.Tour.Script.createTween,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem},"id":"rootPlayer","height":"100%","layout":"absolute","start":"this.init()","data":{"locales":{"zh":"locale/zh.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"defaultLocale":"zh","history":{},"name":"Player2535"},"children":["this.MainViewer","this.Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602"],"class":"Player","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"backgroundColor":["#000000"],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"watermark":false,"backgroundColorRatios":[0],"propagateClick":false,"scrollBarMargin":2,"width":"100%","hash": "445d271464685c20c3f87d50b7624d4796c7ffd68962e88d47c583a70019c436", "definitions": [{"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","progressBottom":10,"playbackBarHeadBorderSize":0,"subtitlesBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"minHeight":50,"minWidth":100,"progressOpacity":0.7,"toolTipPaddingBottom":4,"progressBackgroundColor":["#000000"],"playbackBarHeadShadow":true,"subtitlesFontFamily":"Arial","playbackBarProgressBorderSize":0,"progressBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","playbackBarRight":0,"playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"progressBarBorderRadius":2,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","toolTipFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressRight":"33%","playbackBarHeadBorderColor":"#000000","width":"100%","height":"100%","progressBarBorderSize":0,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBottom":5,"playbackBarBackgroundOpacity":1,"class":"ViewerArea","playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"surfaceReticleColor":"#FFFFFF","toolTipPaddingLeft":6,"firstTransitionDuration":0,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"toolTipPaddingTop":4,"progressBarBackgroundColorRatios":[0],"propagateClick":false,"toolTipFontSize":"1.11vmin","toolTipFontColor":"#606060","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"id":"MainViewer","progressHeight":2},{"fontFamily":"Montserrat","id":"Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602","pressedRollOverBackgroundColorRatios":[0],"rollOverShadow":false,"data":{"name":"Button house info"},"class":"Button","rollOverBackgroundColor":["#FFFFFF"],"minHeight":1,"rollOverBackgroundOpacity":0.8,"minWidth":1,"fontWeight":"bold","backgroundColor":["#FFFFFF"],"iconHeight":30,"pressedBackgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"borderColor":"#000000","bottom":50,"iconWidth":30,"pressedBackgroundColorRatios":[0],"iconURL":"skin/Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602.png","fontSize":12,"paddingTop":0,"borderRadius":55,"paddingLeft":0,"paddingBottom":0,"fontColor":"#FFFFFF","propagateClick":false,"paddingRight":0,"width":50,"pressedRollOverBackgroundColor":["#FFFFFF"],"height":50,"verticalAlign":"middle","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_46A133D8_4BD1_171D_41CD_9955E41C23B8, {\"x\":659.96224,\"z\":-158.34901,\"yaw\":178.96,\"y\":290.64411,\"pitch\":-29.99}, 1, 'linear'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","horizontalAlign":"center","left":50,"visible":false,"rollOverBackgroundColorRatios":[0],"pressedBackgroundOpacity":1,"layout":"horizontal"},{"class":"FadeOutEffect","id":"FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86","easing":"cubic_in_out","duration":500},{"label":trans('photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.label'),"width":1000,"duration":5000,"height":651,"thumbnailUrl":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3_t.jpg","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.jpg"}]},"data":{"label":"or8drjewblxvg8acmoqy"},"class":"Photo","id":"photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3"},{"initialSequence":"this.sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true,"id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera"},{"lights":["this.light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA"],"label":trans('model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C.label'),"floorOpacity":0.66,"model":"this.res_8834C5B1_995C_764F_41D5_AEC416A38612","surfaceReticleMaxRadius":50,"floorColor":"#163B3E","surfaceReticleRadius":0.02,"surfaceReticleMinRadius":15,"class":"Model3D","data":{"showOnlyHotspotsLineSight":true,"panoramaLocations":["this.loc_32370910_2C12_DADD_419C_C84505F782D6"],"label":"hktest","showOnlyHotspotsLineSightInPanoramas":true},"id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","floorHeight":-8.36,"thumbnailUrl":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_t.jpg","backgroundColor":"#000000","floorRadius":4063.48,"objects":["this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","this.sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6","this.sprite_3859E51F_2C31_2AC3_41B6_AA3667757548"],"camera":"this.cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","surfaceSelectionCoef":2},{"class":"PlayList","id":"playList_46BDE336_4BD1_1715_41D0_BDD444DED312","items":["this.albumitem_46BE4337_4BD1_1713_41C6_BCA8AB0A481E"]},{"class":"PanoramaPlayer","arrowKeysAction":"translate","mode":"quality","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","aaEnabled":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer"},{"class":"FadeInEffect","id":"FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23","easing":"cubic_in_out","duration":500},{"titlePaddingBottom":5,"data":{"name":"Window8440"},"closeButtonIconColor":"#000000","veilColor":["#000000","#000000"],"minHeight":0,"scrollBarColor":"#000000","minWidth":0,"headerBorderColor":"#000000","titlePaddingRight":5,"backgroundColor":[],"modal":true,"headerBackgroundColorDirection":"vertical","gap":10,"bodyPaddingBottom":5,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"titleFontColor":"#000000","overflow":"scroll","title":trans('window_3EFC8F09_2C11_D6CC_41C0_F60768345670.title'),"closeButtonRollOverBackgroundColorRatios":[0],"headerVerticalAlign":"middle","closeButtonBorderRadius":11,"titleFontFamily":"Arial","closeButtonRollOverIconLineWidth":2,"closeButtonPressedBorderColor":"#000000","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"bodyPaddingTop":5,"footerBackgroundColorDirection":"vertical","shadowSpread":1,"headerPaddingBottom":10,"scrollBarMargin":2,"closeButtonIconLineWidth":2,"width":400,"closeButtonPressedBackgroundOpacity":0,"horizontalAlign":"center","height":600,"verticalAlign":"middle","footerBackgroundOpacity":1,"headerPaddingTop":10,"closeButtonPressedBorderSize":0,"closeButtonIconWidth":12,"veilColorDirection":"horizontal","headerPaddingRight":10,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"closeButtonBackgroundOpacity":0,"closeButtonPaddingBottom":0,"closeButtonRollOverBorderSize":0,"footerHeight":5,"shadowColor":"#000000","shadowVerticalLength":0,"footerBorderColor":"#000000","closeButtonPressedIconColor":"#FFFFFF","class":"Window","bodyBackgroundOpacity":1,"titlePaddingLeft":5,"closeButtonRollOverBackgroundOpacity":0,"footerBorderSize":0,"headerBorderSize":0,"closeButtonBorderSize":0,"shadow":true,"titlePaddingTop":5,"backgroundColorRatios":[],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"closeButtonPaddingLeft":0,"closeButtonPaddingRight":0,"bodyPaddingRight":5,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"headerPaddingLeft":10,"titleHorizontalAlign":"left","borderRadius":5,"bodyPaddingLeft":5,"closeButtonPressedIconLineWidth":2,"closeButtonRollOverBackgroundColor":["#C13535"],"headerBackgroundOpacity":1,"closeButtonIconHeight":12,"veilColorRatios":[0,1],"closeButtonBackgroundColor":[],"closeButtonRollOverIconColor":"#FFFFFF","propagateClick":false,"veilOpacity":0.4,"closeButtonPaddingTop":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonPressedBackgroundColorRatios":[0],"bodyBackgroundColorDirection":"vertical","bodyBorderColor":"#000000","bodyBorderSize":0,"titleFontSize":"18px","close":"this.playList_46BDE336_4BD1_1715_41D0_BDD444DED312.set('selectedIndex', -1);","closeButtonPressedBackgroundColor":["#3A1D1F"],"children":["this.htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","this.container_46BE2337_4BD1_1713_41D1_66164027CDF7"],"closeButtonBackgroundColorRatios":[],"closeButtonRollOverBorderColor":"#000000","titleFontWeight":"bold","shadowOpacity":0.5,"layout":"vertical","closeButtonBorderColor":"#000000","id":"window_3EFC8F09_2C11_D6CC_41C0_F60768345670"},{"width":"38.87%","id":"Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","data":{"name":"Label2350"},"class":"Label","minHeight":16,"minWidth":30,"text":trans('Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE.text'),"top":"0%","fontSize":"6vmin","paddingLeft":40,"paddingTop":40,"fontColor":"#FFFFFF","propagateClick":false,"backgroundOpacity":0,"height":"16.981%","verticalAlign":"top","fontFamily":"Arial","left":"0%"},{"class":"PlayList","id":"mainPlayList","items":["this.Model3DPlayListItem_46A133D8_4BD1_171D_41CD_9955E41C23B8","this.PanoramaPlayListItem_46A193D9_4BD1_171F_41B7_039078C12DA9"]},{"class":"Model3DPlayer","viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer"},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","colCount":12},{"height":1024,"width":6144,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6}]}}],"label":trans('panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804.label'),"thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","hfov":360,"hfovMax":130,"data":{"label":"Street View 360"},"vfov":180,"class":"Panorama","id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","hfovMin":"150%"},{"playList":"this.PhotoAlbumEditable_46A013B3_4BD1_1713_41BC_0D31A3B6BB46_AlbumPlayList","class":"PhotoAlbum","id":"PhotoAlbumEditable_46A013B3_4BD1_1713_41BC_0D31A3B6BB46"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85"},{"class":"AmbientLight","id":"light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA","intensity":0.5},{"class":"Model3DResource","id":"res_8834C5B1_995C_764F_41D5_AEC416A38612","levels":[{"class":"Model3DResourceLevel","url":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C/scene.glb"}]},{"data":{"image":"this.res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","height":66,"label":"Street View 360","width":66,"panorama":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804"},"model":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","class":"PanoramaModel3DLocation","x":344.08,"y":6.78,"z":483.1,"yaw":269.94,"id":"loc_32370910_2C12_DADD_419C_C84505F782D6"},{"rollOverEnabled":false,"clickEnabled":false,"data":{"label":"Object"},"class":"InnerModel3DObject","id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","objectId":"0"},{"parentId":"0","data":{"label":"Image"},"class":"SpriteModel3DObject","x":665.0247429738934,"y":66.09654352974923,"z":309.00820628101303,"translationLength":0,"image":"this.res_3F332F06_2C11_56C5_416D_6155F692812E","transparentAreaActive":true,"depthTest":false,"translationX":0.14,"translationY":0.99,"click":"this.showWindow(this.window_3EFC8F09_2C11_D6CC_41C0_F60768345670, null, false); this.playList_46BDE336_4BD1_1715_41D0_BDD444DED312.set('selectedIndex', 0); ","translationZ":0.04,"width":78,"height":78,"id":"sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6"},{"parentId":"0","data":{"label":"Image"},"class":"SpriteModel3DObject","x":443.29489341108575,"y":3.1599403781281694,"z":556.6868273006156,"translationLength":0,"image":"this.res_3A44F577_2C33_5544_4193_55AF64FE05DB","transparentAreaActive":true,"depthTest":false,"translationX":0.06,"translationY":0.87,"enabled":false,"click":"this.startPanoramaWithModel(this.PanoramaPlayListItem_46A193D9_4BD1_171F_41B7_039078C12DA9, function(){ this.setPlayListSelectedIndex(this.mainPlayList, 1) })","translationZ":-0.47,"width":74,"height":64,"id":"sprite_3859E51F_2C31_2AC3_41B6_AA3667757548"},{"minY":-426.74,"initialX":659.96,"initialZ":-158.34,"maxPitch":45,"keepHeight":false,"autoNearFar":true,"class":"FlyOverModel3DCamera","translationSpeed":4.93,"minHeight":374.07,"maxZ":2201.26,"initialFov":56,"maxY":703.81,"initialPitch":-30,"initialYaw":178.96,"initialY":290.64,"maxX":2045.3,"minX":-848.57,"minZ":-906.39,"id":"cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","minPitch":-90},{"class":"PhotoAlbumPlayListItem","media":"this.PhotoAlbumEditable_46A013B3_4BD1_1713_41BC_0D31A3B6BB46","id":"albumitem_46BE4337_4BD1_1713_41C6_BCA8AB0A481E","player":"this.viewer_uid46BD9336_4BD1_1715_41C0_97D31A943C99PhotoAlbumPlayer"},{"width":"100%","id":"htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","data":{"name":"HTMLText8441"},"class":"HTMLText","scrollBarVisible":"always","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"paddingTop":10,"paddingLeft":10,"paddingBottom":10,"propagateClick":false,"backgroundOpacity":0,"paddingRight":10,"scrollBarHorizontalMargin":-3,"height":"50%","html":trans('htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2.html')},{"id":"container_46BE2337_4BD1_1713_41D1_66164027CDF7","height":"50%","data":{"name":"Container1973"},"class":"Container","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"backgroundColor":[],"gap":10,"backgroundColorRatios":[],"overflow":"scroll","propagateClick":false,"scrollBarMargin":2,"children":["this.viewer_uid46BD9336_4BD1_1715_41C0_97D31A943C99"],"width":"100%","layout":"absolute"},{"id":"Model3DPlayListItem_46A133D8_4BD1_171D_41CD_9955E41C23B8","player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","start":"this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'begin', false, this.FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'end', true, this.FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23, 0, 0); this.MainViewerModel3DPlayer.set('displayPlaybackBar', true); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","media":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_46A193D9_4BD1_171F_41B7_039078C12DA9","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera","media":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"class":"PhotoPlayList","id":"PhotoAlbumEditable_46A013B3_4BD1_1713_41BC_0D31A3B6BB46_AlbumPlayList","items":[{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_inside"},"media":"this.photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3"}]},{"class":"ImageResource","id":"res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","levels":[{"height":119,"width":118,"class":"ImageResourceLevel","url":"media/res_325C5FD8_2C11_554C_41C4_A76DA3BA5606_0.png"}]},{"class":"ImageResource","id":"res_3F332F06_2C11_56C5_416D_6155F692812E","levels":[{"height":119,"width":119,"class":"ImageResourceLevel","url":"media/res_3F332F06_2C11_56C5_416D_6155F692812E_0.png"}]},{"class":"ImageResource","id":"res_3A44F577_2C33_5544_4193_55AF64FE05DB","levels":[{"height":115,"width":131,"class":"ImageResourceLevel","url":"media/res_3A44F577_2C33_5544_4193_55AF64FE05DB_0.png"}]},{"class":"PhotoAlbumPlayer","viewerArea":"this.viewer_uid46BD9336_4BD1_1715_41C0_97D31A943C99","id":"viewer_uid46BD9336_4BD1_1715_41C0_97D31A943C99PhotoAlbumPlayer"},{"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","progressBottom":2,"playbackBarHeadBorderSize":0,"subtitlesBorderColor":"#FFFFFF","data":{"name":"ViewerArea1972"},"progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"minHeight":50,"minWidth":100,"progressOpacity":0.7,"toolTipPaddingBottom":4,"progressBackgroundColor":["#000000"],"playbackBarHeadShadow":true,"subtitlesFontFamily":"Arial","playbackBarProgressBorderSize":0,"progressBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","playbackBarRight":0,"playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"progressBarBorderRadius":2,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","toolTipFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressRight":"33%","playbackBarHeadBorderColor":"#000000","width":"100%","height":"100%","progressBarBorderSize":0,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBottom":0,"playbackBarBackgroundOpacity":1,"class":"ViewerArea","playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":10,"surfaceReticleColor":"#FFFFFF","toolTipPaddingLeft":6,"firstTransitionDuration":0,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"toolTipPaddingTop":4,"progressBarBackgroundColorRatios":[0],"propagateClick":false,"toolTipFontSize":"1.11vmin","toolTipFontColor":"#606060","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"id":"viewer_uid46BD9336_4BD1_1715_41C0_97D31A943C99","progressHeight":2}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var aa = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return aa;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.21.js.map
})();
//Generated with v2022.2.21, Wed May 24 2023