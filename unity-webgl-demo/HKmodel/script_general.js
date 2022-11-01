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
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
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
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
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
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
var script = {"scrollBarMargin":2,"scripts":{"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPixels":TDV.Tour.Script.getPixels,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"initQuiz":TDV.Tour.Script.initQuiz,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"init":TDV.Tour.Script.init,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"createTween":TDV.Tour.Script.createTween,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initAnalytics":TDV.Tour.Script.initAnalytics,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"unregisterKey":TDV.Tour.Script.unregisterKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizStart":TDV.Tour.Script.quizStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"mixObject":TDV.Tour.Script.mixObject,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeJS":TDV.Tour.Script.executeJS,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"clone":TDV.Tour.Script.clone,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openLink":TDV.Tour.Script.openLink,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"toggleVisibilityModel3DObject":TDV.Tour.Script.toggleVisibilityModel3DObject,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setValue":TDV.Tour.Script.setValue,"downloadFile":TDV.Tour.Script.downloadFile,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizFinish":TDV.Tour.Script.quizFinish,"translate":TDV.Tour.Script.translate,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setLocale":TDV.Tour.Script.setLocale,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem},"minHeight":0,"children":["this.MainViewer","this.Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602"],"minWidth":0,"id":"rootPlayer","backgroundColorRatios":[0],"hash": "2a7af6cc4fee69e3506b2744e5068de8664c7bb82b72d4da19a46220d8160a16", "definitions": [{"id":"FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86","easing":"cubic_in_out","class":"FadeOutEffect","duration":500},{"bodyBorderSize":0,"veilColor":["#000000","#000000"],"closeButtonRollOverIconLineWidth":2,"data":{"name":"Window8440"},"closeButtonRollOverBorderSize":0,"headerBorderColor":"#000000","bodyPaddingTop":5,"closeButtonIconWidth":12,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"modal":true,"closeButtonPressedBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"veilColorDirection":"horizontal","bodyPaddingBottom":5,"closeButtonBorderColor":"#000000","shadow":true,"veilColorRatios":[0,1],"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"scrollBarColor":"#000000","footerBackgroundOpacity":1,"footerBorderSize":0,"title":trans('window_3EFC8F09_2C11_D6CC_41C0_F60768345670.title'),"gap":10,"borderRadius":5,"closeButtonPressedBackgroundColor":["#3A1D1F"],"headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonRollOverBorderColor":"#000000","headerBackgroundOpacity":1,"headerBorderSize":0,"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"closeButtonIconColor":"#000000","closeButtonRollOverBackgroundColor":["#C13535"],"paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","closeButtonPressedBackgroundColorRatios":[0],"closeButtonPressedBorderColor":"#000000","closeButtonPressedIconLineWidth":2,"paddingBottom":0,"closeButtonPaddingBottom":0,"paddingRight":0,"closeButtonIconHeight":12,"titleFontFamily":"Arial","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"bodyBackgroundOpacity":1,"verticalAlign":"middle","footerBackgroundColorDirection":"vertical","titleFontSize":"18px","veilOpacity":0.4,"footerHeight":5,"closeButtonBackgroundOpacity":0,"closeButtonPressedBorderSize":0,"closeButtonPaddingLeft":0,"layout":"vertical","scrollBarMargin":2,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"shadowColor":"#000000","shadowHorizontalLength":3,"minHeight":0,"children":["this.htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","this.container_0CE0733F_2C77_2EC4_41C3_9F85F1F97127"],"shadowSpread":1,"minWidth":0,"headerPaddingBottom":10,"id":"window_3EFC8F09_2C11_D6CC_41C0_F60768345670","backgroundColorRatios":[],"bodyPaddingRight":5,"shadowOpacity":0.5,"width":400,"titlePaddingTop":5,"overflow":"scroll","titleHorizontalAlign":"left","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"backgroundColor":[],"titlePaddingRight":5,"titlePaddingBottom":5,"closeButtonPressedIconColor":"#FFFFFF","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"height":600,"closeButtonIconLineWidth":2,"closeButtonPaddingRight":0,"bodyBackgroundColorDirection":"vertical","bodyBorderColor":"#000000","closeButtonRollOverIconColor":"#FFFFFF","headerVerticalAlign":"middle","closeButtonRollOverBackgroundColorRatios":[0],"closeButtonRollOverBackgroundOpacity":0,"class":"Window","closeButtonBackgroundColor":[],"bodyPaddingLeft":5,"propagateClick":false,"veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"headerBackgroundColorDirection":"vertical","titleFontColor":"#000000","veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"headerPaddingRight":10,"closeButtonBorderRadius":11,"headerPaddingTop":10,"closeButtonPaddingTop":0,"titleFontWeight":"bold","close":"this.playList_0CE0D33E_2C77_2EC4_41AD_A8D726EA6617.set('selectedIndex', -1);","footerBorderColor":"#000000","headerPaddingLeft":10,"shadowVerticalLength":0,"titlePaddingLeft":5,"closeButtonBorderSize":0},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera","class":"PanoramaCamera"},{"id":"mainPlayList","items":["this.Model3DPlayListItem_0CE523C4_2C77_2D45_41AE_514AE1D88CD7","this.PanoramaPlayListItem_0CE493CA_2C77_2D4D_41BB_6D153347042D"],"class":"PlayList"},{"progressLeft":"33%","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"vrPointerSelectionColor":"#FF6600","toolTipPaddingBottom":4,"subtitlesGap":0,"playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"paddingTop":0,"playbackBarBorderSize":0,"paddingLeft":0,"paddingBottom":0,"subtitlesTextShadowColor":"#000000","toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","paddingRight":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadShadowBlurRadius":3,"subtitlesTop":0,"progressOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"playbackBarLeft":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333138","playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"minHeight":50,"playbackBarHeadShadowColor":"#000000","minWidth":100,"playbackBarBackgroundOpacity":1,"id":"MainViewer","subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBottom":5,"progressBorderColor":"#000000","vrPointerColor":"#FFFFFF","toolTipPaddingRight":6,"progressBarBackgroundColor":["#3399FF"],"progressBottom":10,"width":"100%","progressBackgroundColor":["#000000"],"progressHeight":2,"progressBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"class":"ViewerArea","surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"progressBorderRadius":2,"playbackBarRight":0,"data":{"name":"Main Viewer"},"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"firstTransitionDuration":0},{"frames":[{"thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":9216,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/0/{row}_{column}.jpg","rowCount":3,"colCount":18,"height":1536,"class":"TiledImageResourceLevel"},{"tags":"ondemand","width":6144,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/1/{row}_{column}.jpg","rowCount":2,"colCount":12,"height":1024,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/2/{row}_{column}.jpg","rowCount":1,"colCount":6,"height":512,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Street View 360"},"thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","hfovMin":"150%","hfovMax":130,"vfov":180,"hfov":360,"id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","label":trans('panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804.label'),"class":"Panorama"},{"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","mode":"quality","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer"},{"id":"MainViewerModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer"},{"width":1000,"thumbnailUrl":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3_t.jpg","class":"Photo","label":trans('photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.label'),"duration":5000,"id":"photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3","height":651,"data":{"label":"or8drjewblxvg8acmoqy"},"image":{"class":"ImageResource","levels":[{"url":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.jpg","class":"ImageResourceLevel"}]}},{"fontColor":"#FFFFFF","minHeight":16,"minWidth":30,"id":"Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","text":trans('Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE.text'),"width":"38.87%","top":"0%","height":"16.981%","paddingTop":40,"paddingLeft":40,"class":"Label","paddingBottom":0,"propagateClick":false,"fontSize":"6vmin","fontFamily":"Arial","backgroundOpacity":0,"paddingRight":0,"left":"0%","data":{"name":"Label2350"}},{"playList":"this.PhotoAlbumEditable_0CE603A5_2C77_2DC4_41C5_7F7E0EC520D5_AlbumPlayList","class":"PhotoAlbum","id":"PhotoAlbumEditable_0CE603A5_2C77_2DC4_41C5_7F7E0EC520D5"},{"id":"playList_0CE0D33E_2C77_2EC4_41AD_A8D726EA6617","items":["this.albumitem_0CE0433F_2C77_2EC4_419E_97E576AC1953"],"class":"PlayList"},{"id":"FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23","easing":"cubic_in_out","class":"FadeInEffect","duration":500},{"objects":["this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","this.sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6","this.sprite_3859E51F_2C31_2AC3_41B6_AA3667757548"],"surfaceSelectionCoef":2,"surfaceReticleMinRadius":15,"thumbnailUrl":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_t.jpg","class":"Model3D","id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","floorRadius":2589.72,"data":{"showOnlyHotspotsLineSight":true,"panoramaLocations":["this.loc_32370910_2C12_DADD_419C_C84505F782D6"],"label":"hktest","showOnlyHotspotsLineSightInPanoramas":true},"model":{"class":"Model3DResource","levels":[{"url":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C.glb","class":"Model3DResourceLevel"}]},"backgroundColor":"#333333","lights":["this.light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA"],"camera":"this.cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","label":trans('model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C.label'),"surfaceReticleRadius":0.02,"surfaceReticleMaxRadius":50},{"fontColor":"#FFFFFF","rollOverBackgroundOpacity":0.8,"iconWidth":30,"pressedBackgroundOpacity":1,"iconURL":"skin/Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602.png","rollOverBackgroundColorRatios":[0],"pressedRollOverBackgroundColorRatios":[0],"minHeight":1,"minWidth":1,"id":"Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602","backgroundColorRatios":[0],"width":50,"data":{"name":"Button house info"},"iconHeight":30,"backgroundColor":["#FFFFFF"],"borderRadius":55,"height":50,"rollOverBackgroundColor":["#FFFFFF"],"bottom":50,"fontWeight":"bold","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","class":"Button","pressedRollOverBackgroundColor":["#FFFFFF"],"paddingBottom":0,"propagateClick":false,"fontSize":12,"iconBeforeLabel":true,"fontFamily":"Montserrat","pressedBackgroundColor":["#FFFFFF"],"rollOverShadow":false,"verticalAlign":"middle","visible":false,"left":50,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_0CE523C4_2C77_2D45_41AE_514AE1D88CD7, {\"x\":659.96224,\"yaw\":178.96,\"z\":-158.34901,\"pitch\":-29.99,\"y\":290.64411}, 1, 'linear'); this.mainPlayList.set('selectedIndex', 0)","paddingRight":0,"pressedBackgroundColorRatios":[0],"borderColor":"#000000"},{"data":{"name":"HTMLText8441"},"minHeight":0,"minWidth":0,"id":"htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","scrollBarColor":"#000000","width":"100%","height":"50%","paddingTop":10,"scrollBarVisible":"always","paddingLeft":10,"class":"HTMLText","paddingBottom":10,"propagateClick":false,"html":trans('htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2.html'),"backgroundOpacity":0,"paddingRight":10,"scrollBarHorizontalMargin":-3},{"scrollBarMargin":2,"data":{"name":"Container27987"},"children":["this.viewer_uid0CE0933E_2C77_2EC4_41BB_894D291C76B6"],"minHeight":0,"minWidth":0,"id":"container_0CE0733F_2C77_2EC4_41C3_9F85F1F97127","backgroundColorRatios":[],"scrollBarColor":"#000000","backgroundColor":[],"width":"100%","gap":10,"height":"50%","overflow":"scroll","paddingTop":0,"paddingLeft":0,"class":"Container","paddingBottom":0,"propagateClick":false,"paddingRight":0},{"id":"sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"player":"this.MainViewerModel3DPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","id":"Model3DPlayListItem_0CE523C4_2C77_2D45_41AE_514AE1D88CD7","class":"Model3DPlayListItem","start":"this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'begin', false, this.FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'end', true, this.FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23, 0, 0); this.MainViewerModel3DPlayer.set('displayPlaybackBar', true); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera","media":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","id":"PanoramaPlayListItem_0CE493CA_2C77_2D4D_41BB_6D153347042D","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"},{"id":"PhotoAlbumEditable_0CE603A5_2C77_2DC4_41C5_7F7E0EC520D5_AlbumPlayList","items":[{"camera":{"scaleMode":"fit_inside","class":"PhotoCamera"},"class":"PhotoPlayListItem","media":"this.photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3"}],"class":"PhotoPlayList"},{"id":"albumitem_0CE0433F_2C77_2EC4_419E_97E576AC1953","player":"this.viewer_uid0CE0933E_2C77_2EC4_41BB_894D291C76B6PhotoAlbumPlayer","class":"PhotoAlbumPlayListItem","media":"this.PhotoAlbumEditable_0CE603A5_2C77_2DC4_41C5_7F7E0EC520D5"},{"id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","objectId":"0","rollOverEnabled":false,"class":"InnerModel3DObject","data":{"label":"Object"},"clickEnabled":false},{"data":{"label":"Image"},"image":"this.res_3F332F06_2C11_56C5_416D_6155F692812E","id":"sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6","depthTest":false,"x":665.0247429738934,"width":78,"y":66.09654352974923,"z":309.00820628101303,"class":"SpriteModel3DObject","transparentAreaActive":true,"click":"this.showWindow(this.window_3EFC8F09_2C11_D6CC_41C0_F60768345670, null, false); this.playList_0CE0D33E_2C77_2EC4_41AD_A8D726EA6617.set('selectedIndex', 0); ","parentId":"0","height":78,"translationX":0.14,"translationLength":0,"translationY":0.99,"translationZ":0.04},{"data":{"label":"Image"},"image":"this.res_3A44F577_2C33_5544_4193_55AF64FE05DB","id":"sprite_3859E51F_2C31_2AC3_41B6_AA3667757548","depthTest":false,"x":443.29489341108575,"width":74,"y":3.1599403781281694,"z":556.6868273006156,"class":"SpriteModel3DObject","transparentAreaActive":true,"click":"this.startPanoramaWithModel(this.PanoramaPlayListItem_0CE493CA_2C77_2D4D_41BB_6D153347042D, function(){ this.mainPlayList.set('selectedIndex', 1) })","parentId":"0","height":64,"enabled":false,"translationX":0.06,"translationLength":0,"translationY":0.87,"translationZ":-0.47},{"yaw":269.94,"class":"PanoramaModel3DLocation","id":"loc_32370910_2C12_DADD_419C_C84505F782D6","x":344.08,"y":6.78,"model":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","z":483.1,"data":{"width":66,"height":66,"image":"this.res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","panorama":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804"}},{"id":"light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA","intensity":0.5,"class":"AmbientLight"},{"minPitch":-90,"initialZ":-158.34,"autoNearFar":true,"minX":-848.57,"class":"FlyOverModel3DCamera","initialX":659.96,"keepHeight":false,"maxX":2045.3,"initialY":290.64,"maxY":703.81,"initialPitch":-30,"maxZ":2201.26,"id":"cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","maxPitch":45,"initialYaw":178.96,"minZ":-906.39,"minHeight":374.07,"minY":-426.74,"initialFov":56},{"progressLeft":"33%","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"vrPointerSelectionColor":"#FF6600","toolTipPaddingBottom":4,"subtitlesGap":0,"playbackBarProgressBorderColor":"#000000","toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":10,"paddingTop":0,"playbackBarBorderSize":0,"paddingLeft":0,"paddingBottom":0,"subtitlesTextShadowColor":"#000000","toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","paddingRight":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadShadowBlurRadius":3,"subtitlesTop":0,"progressOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"playbackBarLeft":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333138","playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"minHeight":50,"playbackBarHeadShadowColor":"#000000","minWidth":100,"playbackBarBackgroundOpacity":1,"id":"viewer_uid0CE0933E_2C77_2EC4_41BB_894D291C76B6","subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBottom":0,"progressBorderColor":"#000000","vrPointerColor":"#FFFFFF","toolTipPaddingRight":6,"progressBarBackgroundColor":["#3399FF"],"progressBottom":2,"width":"100%","progressBackgroundColor":["#000000"],"progressHeight":2,"progressBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"class":"ViewerArea","surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"propagateClick":false,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"progressBorderRadius":2,"playbackBarRight":0,"data":{"name":"ViewerArea27986"},"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"firstTransitionDuration":0},{"id":"viewer_uid0CE0933E_2C77_2EC4_41BB_894D291C76B6PhotoAlbumPlayer","class":"PhotoAlbumPlayer","viewerArea":"this.viewer_uid0CE0933E_2C77_2EC4_41BB_894D291C76B6"},{"id":"res_3F332F06_2C11_56C5_416D_6155F692812E","class":"ImageResource","levels":[{"width":119,"url":"media/res_3F332F06_2C11_56C5_416D_6155F692812E_0.png","height":119,"class":"ImageResourceLevel"}]},{"id":"res_3A44F577_2C33_5544_4193_55AF64FE05DB","class":"ImageResource","levels":[{"width":131,"url":"media/res_3A44F577_2C33_5544_4193_55AF64FE05DB_0.png","height":115,"class":"ImageResourceLevel"}]},{"id":"res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","class":"ImageResource","levels":[{"width":118,"url":"media/res_325C5FD8_2C11_554C_41C4_A76DA3BA5606_0.png","height":119,"class":"ImageResourceLevel"}]}],"scrollBarColor":"#000000","backgroundColor":["#000000"],"width":"100%","gap":10,"height":"100%","paddingTop":0,"watermark":false,"paddingLeft":0,"class":"Player","paddingBottom":0,"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"paddingRight":0,"data":{"locales":{"zh":"locale/zh.txt"},"history":{},"name":"Player2535","defaultLocale":"zh","textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"pitch":1,"stopBackgroundAudio":false}},"start":"this.init()"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a1 = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a1;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.0-beta.11107.js.map
})();
//Generated with v2022.2.0-beta.11107, Mon Oct 31 2022