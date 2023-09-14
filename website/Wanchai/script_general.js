(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
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
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
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
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
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
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#000000"],"watermark":false,"minHeight":0,"data":{"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false},"defaultLocale":"zh","locales":{"zh":"locale/zh.txt"},"name":"Player2535","history":{}},"children":["this.MainViewer","this.Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602"],"minWidth":0,"scrollBarMargin":2,"start":"this.init()","propagateClick":false,"backgroundColorRatios":[0],"hash": "e71472b76645498c8ed1168c93f2bed1dfcab77b4872678acb2204a745337a61", "definitions": [{"id":"window_3EFC8F09_2C11_D6CC_41C0_F60768345670","backgroundColorRatios":[],"backgroundColor":[],"close":"this.playList_8611F5B4_926D_B2B6_41C7_4F0575D2234F.set('selectedIndex', -1);","minHeight":0,"minWidth":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"scrollBarMargin":2,"closeButtonRollOverBackgroundColorRatios":[0],"propagateClick":false,"shadowSpread":1,"layout":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"bodyPaddingBottom":5,"verticalAlign":"middle","closeButtonIconWidth":12,"footerBorderColor":"#000000","closeButtonBorderColor":"#000000","titlePaddingLeft":5,"modal":true,"headerBorderSize":0,"data":{"name":"Window8440"},"closeButtonPressedIconLineWidth":2,"closeButtonRollOverIconLineWidth":2,"titlePaddingTop":5,"closeButtonRollOverBorderColor":"#000000","titleFontSize":"18px","shadow":true,"footerBorderSize":0,"title":trans('window_3EFC8F09_2C11_D6CC_41C0_F60768345670.title'),"headerBackgroundOpacity":1,"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonIconColor":"#000000","veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"shadowOpacity":0.5,"width":400,"closeButtonRollOverBorderSize":0,"footerBackgroundColorDirection":"vertical","closeButtonPaddingLeft":0,"height":600,"bodyBackgroundColorDirection":"vertical","shadowHorizontalLength":3,"titleFontColor":"#000000","titlePaddingBottom":5,"closeButtonPressedBackgroundColorRatios":[0],"closeButtonBorderRadius":11,"closeButtonPaddingBottom":0,"headerPaddingLeft":10,"headerBackgroundColorDirection":"vertical","showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonIconHeight":12,"closeButtonBackgroundColor":[],"closeButtonBorderSize":0,"gap":10,"titlePaddingRight":5,"bodyPaddingLeft":5,"closeButtonPaddingTop":0,"overflow":"scroll","veilColorDirection":"horizontal","shadowColor":"#000000","footerBackgroundColorRatios":[0,0.8980392156862745,1],"bodyBackgroundOpacity":1,"footerHeight":5,"closeButtonIconLineWidth":2,"headerVerticalAlign":"middle","bodyBorderSize":0,"shadowVerticalLength":0,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundOpacity":0,"closeButtonPressedBackgroundOpacity":0,"borderRadius":5,"scrollBarColor":"#000000","titleFontWeight":"bold","closeButtonRollOverBackgroundColor":["#C13535"],"veilColor":["#000000","#000000"],"closeButtonPressedBackgroundColor":["#3A1D1F"],"closeButtonPressedBorderColor":"#000000","headerBorderColor":"#000000","footerBackgroundOpacity":1,"bodyPaddingRight":5,"bodyBorderColor":"#000000","closeButtonPressedIconColor":"#FFFFFF","headerPaddingTop":10,"closeButtonRollOverBackgroundOpacity":0,"veilColorRatios":[0,1],"veilOpacity":0.4,"titleHorizontalAlign":"left","closeButtonPaddingRight":0,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonPressedBorderSize":0,"closeButtonBackgroundColorRatios":[],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"class":"Window","headerPaddingBottom":10,"titleFontFamily":"Arial","headerPaddingRight":10,"horizontalAlign":"center","children":["this.htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","this.container_8616C5BC_926D_B2B6_41D5_8E1C18026497"],"bodyPaddingTop":5},{"id":"playList_8611F5B4_926D_B2B6_41C7_4F0575D2234F","class":"PlayList","items":["this.albumitem_861705BC_926D_B2B6_41B5_0D106C975B9B"]},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85"},{"id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","hfov":360,"class":"Panorama","label":trans('panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804.label'),"frames":[{"thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/0/{row}_{column}.jpg","rowCount":2,"width":12288},{"height":1024,"class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/1/{row}_{column}.jpg","rowCount":1,"width":6144}],"class":"ImageResource"}}],"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","data":{"label":"Street View 360"},"hfovMin":"150%"},{"id":"mainPlayList","class":"PlayList","items":["this.Model3DPlayListItem_860D8656_926D_B1F2_41B1_84C93F3E41BD","this.PanoramaPlayListItem_86043659_926D_B1FE_41DD_0D9115EF8451"]},{"id":"Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602","rollOverBackgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"minHeight":1,"backgroundColorRatios":[0],"fontSize":12,"minWidth":1,"rollOverBackgroundColor":["#FFFFFF"],"data":{"name":"Button house info"},"propagateClick":false,"iconURL":"skin/Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602.png","fontWeight":"bold","pressedRollOverBackgroundColor":["#FFFFFF"],"borderRadius":55,"pressedRollOverBackgroundColorRatios":[0],"layout":"horizontal","verticalAlign":"middle","bottom":50,"rollOverShadow":false,"iconHeight":30,"paddingRight":0,"width":50,"paddingLeft":0,"pressedBackgroundOpacity":1,"borderColor":"#000000","height":50,"rollOverBackgroundOpacity":0.8,"pressedBackgroundColorRatios":[0],"visible":false,"class":"Button","iconWidth":30,"horizontalAlign":"center","fontFamily":"Montserrat","pressedBackgroundColor":["#FFFFFF"],"left":50,"fontColor":"#FFFFFF","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_860D8656_926D_B1F2_41B1_84C93F3E41BD, {\"x\":659.96224,\"z\":-158.34901,\"yaw\":178.96,\"y\":290.64411,\"pitch\":-29.99}, 1, 'linear'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","paddingTop":0,"paddingBottom":0},{"viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer","class":"Model3DPlayer"},{"image":{"levels":[{"url":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.jpg","class":"ImageResourceLevel"}],"class":"ImageResource"},"id":"photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3","class":"Photo","label":trans('photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.label'),"data":{"label":"or8drjewblxvg8acmoqy"},"width":1000,"duration":5000,"height":651,"thumbnailUrl":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3_t.jpg"},{"id":"FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86","duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},{"id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","floorColor":"#163B3E","label":trans('model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C.label'),"backgroundColor":"#000000","data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"hktest","panoramaLocations":["this.loc_32370910_2C12_DADD_419C_C84505F782D6"]},"objects":["this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","this.sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6","this.sprite_3859E51F_2C31_2AC3_41B6_AA3667757548"],"surfaceReticleMinRadius":15,"surfaceSelectionCoef":2,"model":"this.res_8834C5B1_995C_764F_41D5_AEC416A38612","surfaceReticleRadius":0.02,"class":"Model3D","floorRadius":4063.48,"lights":["this.light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA"],"surfaceReticleMaxRadius":50,"floorOpacity":0.66,"floorHeight":-8.36,"camera":"this.cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","thumbnailUrl":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_t.jpg"},{"id":"MainViewer","minHeight":50,"playbackBarBackgroundColorDirection":"vertical","minWidth":100,"playbackBarRight":0,"progressBackgroundColorRatios":[0],"subtitlesGap":0,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":"33%","playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"progressOpacity":0.7,"toolTipShadowColor":"#333138","subtitlesBottom":50,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","width":"100%","subtitlesFontSize":"3vmin","progressBackgroundColor":["#000000"],"progressBottom":10,"progressHeight":2,"height":"100%","playbackBarBorderColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarBorderRadius":0,"progressBorderSize":0,"subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"progressBorderRadius":2,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarLeft":0,"toolTipBorderColor":"#767676","playbackBarBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"progressLeft":"33%","toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","class":"ViewerArea","toolTipPaddingBottom":4,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","playbackBarHeight":10,"playbackBarHeadWidth":6},{"id":"PhotoAlbumEditable_860AF635_926D_B1B6_41D8_6507109C6CFE","class":"PhotoAlbum","playList":"this.PhotoAlbumEditable_860AF635_926D_B1B6_41D8_6507109C6CFE_AlbumPlayList"},{"id":"FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23","duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate"},{"id":"Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","fontSize":"6vmin","minHeight":16,"data":{"name":"Label2350"},"minWidth":30,"propagateClick":false,"verticalAlign":"top","text":trans('Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE.text'),"top":"0%","paddingLeft":40,"backgroundOpacity":0,"width":"38.87%","height":"16.981%","class":"Label","fontFamily":"Arial","left":"0%","fontColor":"#FFFFFF","paddingTop":40},{"id":"htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","minHeight":0,"data":{"name":"HTMLText8441"},"minWidth":0,"propagateClick":false,"scrollBarColor":"#000000","paddingLeft":10,"scrollBarVisible":"always","paddingRight":10,"width":"100%","height":"50%","class":"HTMLText","html":trans('htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2.html'),"backgroundOpacity":0,"scrollBarHorizontalMargin":-3,"paddingTop":10,"paddingBottom":10},{"id":"container_8616C5BC_926D_B2B6_41D5_8E1C18026497","backgroundColor":[],"minHeight":0,"backgroundColorRatios":[],"minWidth":0,"scrollBarMargin":2,"data":{"name":"Container2984"},"propagateClick":false,"layout":"absolute","scrollBarColor":"#000000","width":"100%","height":"50%","class":"Container","gap":10,"children":["this.viewer_uid8610B5B5_926D_B2B6_41BA_8DE1D76E52AA"],"overflow":"scroll"},{"id":"albumitem_861705BC_926D_B2B6_41B5_0D106C975B9B","media":"this.PhotoAlbumEditable_860AF635_926D_B1B6_41D8_6507109C6CFE","class":"PhotoAlbumPlayListItem","player":"this.viewer_uid8610B5B5_926D_B2B6_41BA_8DE1D76E52AAPhotoAlbumPlayer"},{"id":"sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence"},{"id":"Model3DPlayListItem_860D8656_926D_B1F2_41B1_84C93F3E41BD","class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer","start":"this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'begin', false, this.FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'end', true, this.FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23, 0, 0); this.MainViewerModel3DPlayer.set('displayPlaybackBar', true); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","media":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_86043659_926D_B1FE_41DD_0D9115EF8451","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera","media":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"id":"loc_32370910_2C12_DADD_419C_C84505F782D6","data":{"image":"this.res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","height":66,"panorama":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","width":66,"label":"Street View 360"},"x":344.08,"class":"PanoramaModel3DLocation","model":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","y":6.78,"z":483.1,"yaw":269.94},{"id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","class":"InnerModel3DObject","useHandCursor":false,"data":{"label":"Object"},"rollOverEnabled":false,"objectId":"0"},{"id":"sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6","transparentAreaActive":true,"depthTest":false,"data":{"label":"Image"},"parentId":"0","image":"this.res_3F332F06_2C11_56C5_416D_6155F692812E","x":665.0247429738934,"y":66.09654352974923,"z":309.00820628101303,"translationLength":0,"width":78,"height":78,"click":"this.showWindow(this.window_3EFC8F09_2C11_D6CC_41C0_F60768345670, null, false); this.playList_8611F5B4_926D_B2B6_41C7_4F0575D2234F.set('selectedIndex', 0); ","class":"SpriteModel3DObject","translationX":0.14,"translationZ":0.04,"translationY":0.99},{"id":"sprite_3859E51F_2C31_2AC3_41B6_AA3667757548","enabled":false,"transparentAreaActive":true,"depthTest":false,"data":{"label":"Image"},"parentId":"0","image":"this.res_3A44F577_2C33_5544_4193_55AF64FE05DB","x":443.29489341108575,"y":3.1599403781281694,"z":556.6868273006156,"translationLength":0,"width":74,"height":64,"click":"this.startPanoramaWithModel(this.PanoramaPlayListItem_86043659_926D_B1FE_41DD_0D9115EF8451, function(){ this.setPlayListSelectedIndex(this.mainPlayList, 1) })","class":"SpriteModel3DObject","translationX":0.06,"translationZ":-0.47,"translationY":0.87},{"id":"res_8834C5B1_995C_764F_41D5_AEC416A38612","levels":[{"url":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C/scene.glb","class":"Model3DResourceLevel"}],"class":"Model3DResource"},{"id":"light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA","class":"AmbientLight","intensity":0.5},{"id":"cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","maxPitch":45,"minZ":-906.39,"minHeight":374.07,"initialZ":-158.34,"autoNearFar":true,"maxY":703.81,"maxX":2045.3,"translationSpeed":4.93,"initialY":290.64,"minY":-426.74,"initialYaw":178.96,"maxZ":2201.26,"minPitch":-90,"initialX":659.96,"initialPitch":-30,"class":"FlyOverModel3DCamera","keepHeight":false,"initialFov":56,"minX":-848.57},{"id":"PhotoAlbumEditable_860AF635_926D_B1B6_41D8_6507109C6CFE_AlbumPlayList","class":"PhotoPlayList","items":[{"camera":{"scaleMode":"fit_inside","class":"PhotoCamera"},"media":"this.photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3","class":"PhotoPlayListItem"}]},{"id":"viewer_uid8610B5B5_926D_B2B6_41BA_8DE1D76E52AA","minHeight":50,"playbackBarBackgroundColorDirection":"vertical","minWidth":100,"playbackBarRight":0,"progressBackgroundColorRatios":[0],"subtitlesGap":0,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":"33%","playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"progressOpacity":0.7,"toolTipShadowColor":"#333138","subtitlesBottom":10,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","toolTipPaddingLeft":6,"toolTipTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"data":{"name":"ViewerArea2983"},"playbackBarProgressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","width":"100%","subtitlesFontSize":"3vmin","progressBackgroundColor":["#000000"],"progressBottom":2,"progressHeight":2,"height":"100%","playbackBarBorderColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarBorderRadius":0,"progressBorderSize":0,"subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"progressBorderRadius":2,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarLeft":0,"toolTipBorderColor":"#767676","playbackBarBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"progressLeft":"33%","toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","class":"ViewerArea","toolTipPaddingBottom":4,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","playbackBarHeight":10,"playbackBarHeadWidth":6},{"viewerArea":"this.viewer_uid8610B5B5_926D_B2B6_41BA_8DE1D76E52AA","id":"viewer_uid8610B5B5_926D_B2B6_41BA_8DE1D76E52AAPhotoAlbumPlayer","class":"PhotoAlbumPlayer"},{"id":"res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","levels":[{"height":119,"class":"ImageResourceLevel","url":"media/res_325C5FD8_2C11_554C_41C4_A76DA3BA5606_0.png","width":118}],"class":"ImageResource"},{"id":"res_3F332F06_2C11_56C5_416D_6155F692812E","levels":[{"height":119,"class":"ImageResourceLevel","url":"media/res_3F332F06_2C11_56C5_416D_6155F692812E_0.png","width":119}],"class":"ImageResource"},{"id":"res_3A44F577_2C33_5544_4193_55AF64FE05DB","levels":[{"height":115,"class":"ImageResourceLevel","url":"media/res_3A44F577_2C33_5544_4193_55AF64FE05DB_0.png","width":131}],"class":"ImageResource"}],"layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","scripts":{"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"playAudioList":TDV.Tour.Script.playAudioList,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"getKey":TDV.Tour.Script.getKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"init":TDV.Tour.Script.init,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setValue":TDV.Tour.Script.setValue,"showWindow":TDV.Tour.Script.showWindow,"cloneBindings":TDV.Tour.Script.cloneBindings,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"setLocale":TDV.Tour.Script.setLocale,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getOverlays":TDV.Tour.Script.getOverlays,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"mixObject":TDV.Tour.Script.mixObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"clone":TDV.Tour.Script.clone,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"startMeasurement":TDV.Tour.Script.startMeasurement,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMapLocation":TDV.Tour.Script.setMapLocation,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaByName":TDV.Tour.Script.getMediaByName,"createTween":TDV.Tour.Script.createTween,"unregisterKey":TDV.Tour.Script.unregisterKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openLink":TDV.Tour.Script.openLink,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility},"width":"100%","height":"100%","class":"Player","gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.9.js.map
})();
//Generated with v2023.1.9, Thu Sep 14 2023