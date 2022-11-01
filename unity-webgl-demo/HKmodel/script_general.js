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
var script = {"backgroundColorRatios":[0],"scrollBarMargin":2,"paddingRight":0,"minHeight":0,"id":"rootPlayer","watermark":false,"minWidth":0,"width":"100%","children":["this.MainViewer","this.Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602"],"backgroundColor":["#000000"],"gap":10,"hash": "9e5c40bb004079ac9c42ed0a933f1eece0c276f19e2379083cff153ca8cfabf1", "definitions": [{"progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","toolTipBorderColor":"#767676","surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarBorderSize":0,"toolTipPaddingBottom":4,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesGap":0,"firstTransitionDuration":0,"progressBorderRadius":2,"progressBackgroundColorRatios":[0],"paddingTop":0,"playbackBarLeft":0,"playbackBarHeadWidth":6,"progressRight":"33%","paddingBottom":0,"playbackBarProgressBorderSize":0,"playbackBarHeadHeight":15,"propagateClick":false,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderColor":"#000000","toolTipFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"progressLeft":"33%","playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarRight":0,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"subtitlesFontSize":"3vmin","paddingLeft":0,"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadow":true,"paddingRight":0,"toolTipTextShadowColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","minHeight":50,"id":"MainViewer","minWidth":100,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":50,"toolTipPaddingRight":6,"width":"100%","vrPointerSelectionColor":"#FF6600","progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"progressBarBackgroundColor":["#3399FF"],"height":"100%","playbackBarProgressBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","progressBottom":10,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","class":"ViewerArea","subtitlesTextShadowOpacity":1,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"progressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"progressBarBorderRadius":2,"data":{"name":"Main Viewer"}},{"titleFontSize":"18px","headerPaddingBottom":10,"veilShowEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"closeButtonPressedBorderColor":"#000000","closeButtonIconLineWidth":2,"modal":true,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"closeButtonRollOverBackgroundColorRatios":[0],"shadowOpacity":0.5,"bodyBackgroundColorDirection":"vertical","titleHorizontalAlign":"left","title":trans('window_3EFC8F09_2C11_D6CC_41C0_F60768345670.title'),"overflow":"scroll","closeButtonPressedBorderSize":0,"veilHideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"veilOpacity":0.4,"horizontalAlign":"center","veilColor":["#000000","#000000"],"closeButtonBorderColor":"#000000","titlePaddingTop":5,"closeButtonRollOverBorderSize":0,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"titleFontColor":"#000000","paddingTop":0,"paddingBottom":0,"titleFontFamily":"Arial","closeButtonIconHeight":12,"shadowHorizontalLength":3,"footerBackgroundOpacity":1,"closeButtonPaddingLeft":0,"propagateClick":false,"closeButtonIconColor":"#000000","bodyBorderColor":"#000000","headerBackgroundColorRatios":[0,0.09803921568627451,1],"headerPaddingRight":10,"headerBorderSize":0,"bodyPaddingRight":5,"headerBackgroundColorDirection":"vertical","closeButtonPaddingTop":0,"verticalAlign":"middle","footerBorderSize":0,"scrollBarMargin":2,"paddingLeft":0,"shadow":true,"closeButtonRollOverBorderColor":"#000000","footerBorderColor":"#000000","backgroundColorRatios":[],"closeButtonBorderSize":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"paddingRight":0,"shadowColor":"#000000","headerVerticalAlign":"middle","minHeight":0,"id":"window_3EFC8F09_2C11_D6CC_41C0_F60768345670","children":["this.htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","this.container_3C8A3E1A_329F_2C7F_41AB_8C5A1DC874A0"],"minWidth":0,"width":400,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"closeButtonBorderRadius":11,"bodyPaddingLeft":5,"titleFontWeight":"bold","gap":10,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"layout":"vertical","backgroundColor":[],"headerPaddingLeft":10,"titlePaddingLeft":5,"footerHeight":5,"scrollBarColor":"#000000","closeButtonPaddingRight":0,"closeButtonRollOverIconLineWidth":2,"closeButtonBackgroundColorRatios":[],"height":600,"borderRadius":5,"shadowSpread":1,"hideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"closeButtonIconWidth":12,"bodyPaddingBottom":5,"closeButtonPressedBackgroundColorRatios":[0],"bodyPaddingTop":5,"closeButtonPressedBackgroundColor":["#3A1D1F"],"titlePaddingRight":5,"headerBackgroundOpacity":1,"bodyBorderSize":0,"closeButtonRollOverBackgroundColor":["#C13535"],"veilColorRatios":[0,1],"closeButtonPressedBackgroundOpacity":0,"class":"Window","headerPaddingTop":10,"veilColorDirection":"horizontal","showEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"closeButtonPressedIconColor":"#FFFFFF","headerBorderColor":"#000000","close":"this.playList_3C89FE1A_329F_2C7F_41C5_5B15863CD5A8.set('selectedIndex', -1);","footerBackgroundColorDirection":"vertical","closeButtonRollOverBackgroundOpacity":0,"closeButtonPressedIconLineWidth":2,"bodyBackgroundOpacity":1,"titlePaddingBottom":5,"closeButtonPaddingBottom":0,"data":{"name":"Window8440"},"shadowVerticalLength":0,"closeButtonBackgroundOpacity":0},{"id":"FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86","class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},{"id":"MainViewerModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer"},{"id":"PhotoAlbumEditable_3C8CCE93_329F_2C4D_41B0_6E906F53B25C","playList":"this.PhotoAlbumEditable_3C8CCE93_329F_2C4D_41B0_6E906F53B25C_AlbumPlayList","class":"PhotoAlbum"},{"id":"playList_3C89FE1A_329F_2C7F_41C5_5B15863CD5A8","class":"PlayList","items":["this.albumitem_3C8A7E1A_329F_2C7F_41B1_CB1483D3B575"]},{"surfaceReticleMaxRadius":50,"floorRadius":2589.72,"thumbnailUrl":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_t.jpg","id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","class":"Model3D","objects":["this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","this.sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6","this.sprite_3859E51F_2C31_2AC3_41B6_AA3667757548"],"lights":["this.light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA"],"model":{"class":"Model3DResource","levels":[{"class":"Model3DResourceLevel","url":"media/model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C.glb"}]},"surfaceReticleMinRadius":15,"backgroundColor":"#333333","camera":"this.cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","label":trans('model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C.label'),"surfaceReticleRadius":0.02,"data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"hktest","panoramaLocations":["this.loc_32370910_2C12_DADD_419C_C84505F782D6"]},"surfaceSelectionCoef":2},{"id":"mainPlayList","class":"PlayList","items":["this.Model3DPlayListItem_3C8D0EBE_329F_2DB4_41C3_07BF83369277","this.PanoramaPlayListItem_3C8DBEBE_329F_2DB4_41A3_5616192782A1"]},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true,"id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera","class":"PanoramaCamera","initialSequence":"this.sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85"},{"paddingRight":0,"minHeight":16,"id":"Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE","minWidth":30,"width":"38.87%","text":trans('Label_217CCBAD_2C13_DDC7_41B7_20A0F461D9AE.text'),"top":"0%","height":"16.981%","paddingBottom":0,"fontColor":"#FFFFFF","paddingTop":40,"backgroundOpacity":0,"fontFamily":"Arial","class":"Label","propagateClick":false,"fontSize":"6vmin","left":"0%","data":{"name":"Label2350"},"paddingLeft":40},{"width":1000,"height":651,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.jpg"}]},"thumbnailUrl":"media/photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3_t.jpg","duration":5000,"label":trans('photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3.label'),"id":"photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3","class":"Photo","data":{"label":"or8drjewblxvg8acmoqy"}},{"pressedRollOverBackgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"fontFamily":"Montserrat","paddingRight":0,"minHeight":1,"id":"Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602","minWidth":1,"iconURL":"skin/Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602.png","width":50,"layout":"horizontal","backgroundColor":["#FFFFFF"],"pressedBackgroundColor":["#FFFFFF"],"iconWidth":30,"pressedRollOverBackgroundColorRatios":[0],"horizontalAlign":"center","bottom":50,"fontWeight":"bold","rollOverBackgroundColor":["#FFFFFF"],"borderRadius":55,"paddingTop":0,"iconHeight":30,"paddingBottom":0,"rollOverBackgroundColorRatios":[0],"iconBeforeLabel":true,"height":50,"fontColor":"#FFFFFF","propagateClick":false,"fontSize":12,"class":"Button","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_3C8D0EBE_329F_2DB4_41C3_07BF83369277, {\"x\":659.96224,\"yaw\":178.96,\"z\":-158.34901,\"pitch\":-29.99,\"y\":290.64411}, 1, 'linear'); this.mainPlayList.set('selectedIndex', 0)","visible":false,"pressedBackgroundOpacity":1,"left":50,"pressedBackgroundColorRatios":[0],"verticalAlign":"middle","rollOverShadow":false,"borderColor":"#000000","data":{"name":"Button house info"},"rollOverBackgroundOpacity":0.8,"paddingLeft":0},{"hfov":360,"class":"Panorama","data":{"label":"Street View 360"},"thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","label":trans('panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804.label'),"hfovMin":"150%","id":"panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","vfov":180,"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_t.jpg","cube":{"class":"ImageResource","levels":[{"width":9216,"colCount":18,"rowCount":3,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","height":1536},{"width":6144,"colCount":12,"rowCount":2,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","height":1024},{"width":3072,"colCount":6,"rowCount":1,"url":"media/panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","height":512}]}}]},{"mode":"quality","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true},{"id":"FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23","class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},{"scrollBarHorizontalMargin":-3,"paddingRight":10,"minHeight":0,"id":"htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2","minWidth":0,"width":"100%","scrollBarColor":"#000000","height":"50%","paddingTop":10,"paddingBottom":10,"class":"HTMLText","scrollBarVisible":"always","propagateClick":false,"backgroundOpacity":0,"html":trans('htmlText_3EFA9F0F_2C11_D6C4_41C1_C7BC6674DDD2.html'),"data":{"name":"HTMLText8441"},"paddingLeft":10},{"backgroundColorRatios":[],"scrollBarMargin":2,"paddingRight":0,"children":["this.viewer_uid3C8A4E1A_329F_2C7F_41B1_5B589639A0C8"],"minHeight":0,"id":"container_3C8A3E1A_329F_2C7F_41AB_8C5A1DC874A0","minWidth":0,"width":"100%","layout":"absolute","backgroundColor":[],"gap":10,"scrollBarColor":"#000000","height":"50%","overflow":"scroll","paddingTop":0,"paddingBottom":0,"propagateClick":false,"class":"Container","data":{"name":"Container2913"},"paddingLeft":0},{"id":"PhotoAlbumEditable_3C8CCE93_329F_2C4D_41B0_6E906F53B25C_AlbumPlayList","class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"scaleMode":"fit_inside","class":"PhotoCamera"},"media":"this.photo_3DC07BAF_2C11_3DC4_41AA_62DE438FF4E3"}]},{"id":"albumitem_3C8A7E1A_329F_2C7F_41B1_CB1483D3B575","class":"PhotoAlbumPlayListItem","media":"this.PhotoAlbumEditable_3C8CCE93_329F_2C4D_41B0_6E906F53B25C","player":"this.viewer_uid3C8A4E1A_329F_2C7F_41B1_5B589639A0C8PhotoAlbumPlayer"},{"clickEnabled":false,"data":{"label":"Object"},"rollOverEnabled":false,"id":"model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C_0","class":"InnerModel3DObject","objectId":"0"},{"data":{"label":"Image"},"image":"this.res_3F332F06_2C11_56C5_416D_6155F692812E","translationLength":0,"parentId":"0","id":"sprite_23BFECFF_2C11_DB43_41C3_66643325F8C6","x":665.0247429738934,"width":78,"y":66.09654352974923,"z":309.00820628101303,"height":78,"click":"this.showWindow(this.window_3EFC8F09_2C11_D6CC_41C0_F60768345670, null, false); this.playList_3C89FE1A_329F_2C7F_41C5_5B15863CD5A8.set('selectedIndex', 0); ","class":"SpriteModel3DObject","translationX":0.14,"translationY":0.99,"transparentAreaActive":true,"translationZ":0.04,"depthTest":false},{"data":{"label":"Image"},"image":"this.res_3A44F577_2C33_5544_4193_55AF64FE05DB","translationLength":0,"parentId":"0","id":"sprite_3859E51F_2C31_2AC3_41B6_AA3667757548","x":443.29489341108575,"width":74,"y":3.1599403781281694,"z":556.6868273006156,"height":64,"click":"this.startPanoramaWithModel(this.PanoramaPlayListItem_3C8DBEBE_329F_2DB4_41A3_5616192782A1, function(){ this.mainPlayList.set('selectedIndex', 1) })","class":"SpriteModel3DObject","enabled":false,"translationX":0.06,"translationY":0.87,"transparentAreaActive":true,"translationZ":-0.47,"depthTest":false},{"id":"light_2062A9BF_2C12_FDC4_41B0_6585BC0EB6BA","class":"AmbientLight","intensity":0.5},{"initialZ":-158.34,"maxY":703.81,"minY":-426.74,"minPitch":-90,"maxPitch":45,"minHeight":374.07,"id":"cam_207E19BE_2C12_FDC4_41C2_7870C70F2EAA","class":"FlyOverModel3DCamera","maxZ":2201.26,"keepHeight":false,"autoNearFar":true,"initialX":659.96,"initialFov":56,"maxX":2045.3,"initialPitch":-30,"minX":-848.57,"initialYaw":178.96,"minZ":-906.39,"initialY":290.64},{"yaw":269.94,"data":{"image":"this.res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","width":66,"panorama":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","height":66},"class":"PanoramaModel3DLocation","id":"loc_32370910_2C12_DADD_419C_C84505F782D6","x":344.08,"y":6.78,"z":483.1,"model":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.model_204467AA_2C12_F5CC_41AE_F614A0DC6D9C","id":"Model3DPlayListItem_3C8D0EBE_329F_2DB4_41C3_07BF83369277","class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer","start":"this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'begin', false, this.FadeOutEffect_30383628_2C11_36CD_41C1_FF606A7A6C86, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.Button_3672783F_2C0F_3AC3_41C3_8D86A0DF7602], 'end', true, this.FadeInEffect_3039D628_2C11_36CD_41B6_F3F66D8D2E23, 0, 0); this.MainViewerModel3DPlayer.set('displayPlaybackBar', true); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)"},{"camera":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804_camera","media":"this.panorama_386A3ED6_2C0E_D744_41AD_EDE0E1B16804","id":"PanoramaPlayListItem_3C8DBEBE_329F_2DB4_41A3_5616192782A1","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"},{"id":"sequence_3F72F470_2C0E_EB5C_41C5_E53BEFE55E85","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderColor":"#000000","toolTipBorderColor":"#767676","surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarBorderSize":0,"toolTipPaddingBottom":4,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"playbackBarBottom":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowBlurRadius":3,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesGap":0,"firstTransitionDuration":0,"progressBorderRadius":2,"progressBackgroundColorRatios":[0],"paddingTop":0,"playbackBarLeft":0,"playbackBarHeadWidth":6,"progressRight":"33%","paddingBottom":0,"playbackBarProgressBorderSize":0,"playbackBarHeadHeight":15,"propagateClick":false,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderColor":"#000000","toolTipFontFamily":"Arial","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"progressLeft":"33%","playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarRight":0,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"subtitlesFontSize":"3vmin","paddingLeft":0,"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadow":true,"paddingRight":0,"toolTipTextShadowColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","minHeight":50,"id":"viewer_uid3C8A4E1A_329F_2C7F_41B1_5B589639A0C8","minWidth":100,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":10,"toolTipPaddingRight":6,"width":"100%","vrPointerSelectionColor":"#FF6600","progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"progressBarBackgroundColor":["#3399FF"],"height":"100%","playbackBarProgressBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","progressBottom":2,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","class":"ViewerArea","subtitlesTextShadowOpacity":1,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"progressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"progressBarBorderRadius":2,"data":{"name":"ViewerArea2912"}},{"id":"viewer_uid3C8A4E1A_329F_2C7F_41B1_5B589639A0C8PhotoAlbumPlayer","class":"PhotoAlbumPlayer","viewerArea":"this.viewer_uid3C8A4E1A_329F_2C7F_41B1_5B589639A0C8"},{"id":"res_3F332F06_2C11_56C5_416D_6155F692812E","class":"ImageResource","levels":[{"width":119,"url":"media/res_3F332F06_2C11_56C5_416D_6155F692812E_0.png","class":"ImageResourceLevel","height":119}]},{"id":"res_3A44F577_2C33_5544_4193_55AF64FE05DB","class":"ImageResource","levels":[{"width":131,"url":"media/res_3A44F577_2C33_5544_4193_55AF64FE05DB_0.png","class":"ImageResourceLevel","height":115}]},{"id":"res_325C5FD8_2C11_554C_41C4_A76DA3BA5606","class":"ImageResource","levels":[{"width":118,"url":"media/res_325C5FD8_2C11_554C_41C4_A76DA3BA5606_0.png","class":"ImageResourceLevel","height":119}]}],"scrollBarColor":"#000000","height":"100%","paddingTop":0,"paddingBottom":0,"propagateClick":false,"class":"Player","start":"this.init()","scripts":{"setLocale":TDV.Tour.Script.setLocale,"existsKey":TDV.Tour.Script.existsKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"init":TDV.Tour.Script.init,"mixObject":TDV.Tour.Script.mixObject,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"createTween":TDV.Tour.Script.createTween,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"initQuiz":TDV.Tour.Script.initQuiz,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"showWindow":TDV.Tour.Script.showWindow,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"isPanorama":TDV.Tour.Script.isPanorama,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getKey":TDV.Tour.Script.getKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getComponentByName":TDV.Tour.Script.getComponentByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizFinish":TDV.Tour.Script.quizFinish,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"toggleVisibilityModel3DObject":TDV.Tour.Script.toggleVisibilityModel3DObject,"getOverlays":TDV.Tour.Script.getOverlays,"cloneBindings":TDV.Tour.Script.cloneBindings,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clone":TDV.Tour.Script.clone,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setValue":TDV.Tour.Script.setValue,"quizStart":TDV.Tour.Script.quizStart,"openLink":TDV.Tour.Script.openLink,"downloadFile":TDV.Tour.Script.downloadFile,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeJS":TDV.Tour.Script.executeJS,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"translate":TDV.Tour.Script.translate,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"registerKey":TDV.Tour.Script.registerKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"unregisterKey":TDV.Tour.Script.unregisterKey},"defaultMenu":["fullscreen","mute","rotation"],"data":{"locales":{"zh":"locale/zh.txt"},"name":"Player2535","history":{},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"defaultLocale":"zh"},"paddingLeft":0};
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
//Generated with v2022.2.0-beta.11107, Tue Nov 1 2022