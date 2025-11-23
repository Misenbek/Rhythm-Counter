function GetId(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (document.all) {
        return document.all[id];
    }
};

function cm_init() {
    var window_ratio = com.width / com.height;
    if (window_ratio > 1.71) {
        var margin_req = window_ratio * 600;
        dcr = margin_req;
        GetId("cm_container").style.width = margin_req + "px";
        cvp = cvp + (margin_req - 1024) / 2;
    }
    dcl();
    cnj.coi();
    dbm = new cvr();
    if (url_params['code']) {
        dbm.cvt(url_params['code']);
        dep();
        dbs();
    }
};
var com = GetWindowSize();
var dcr = 1024;
var cqu = 600;
var dbm = false;
var ctr = false;

function get_url_params() {
    var w = window;
    var obj = new Object();
    var wl = w.location;
    var vs = wl.search;
    ctr = wl.hostname;
    if (vs && vs.length > 3 && vs.substr(0, 1) == '?') {
        var va = vs.substr(1).split('&');
        for (var i = va.length - 1; i >= 0; i--) {
            vp = va[i].split('=');
            if (vp.length > 1) {
                obj[unescape(vp[0])] = unescape(vp[1]);
            }
        };
    }
    return obj;
};
var url_params = get_url_params();

function dcl() {
    cuk();
};
var cyi = 5;
var cvp = 25;
var cuu = 335;
var ddu = 425;

function dda(id) {
    cnj.cph();
    if (GetId(id).src.indexOf('med_button.png') != -1) {
        GetId(id).src = 'med_button_down.png';
    } else if (GetId(id).src.indexOf('small_button.png') != -1) {
        GetId(id).src = 'small_button_down.png';
    } else if (GetId(id).src.indexOf('emailit_up.png') != -1) {
        GetId(id).src = 'emailit_down.png';
    } else if (GetId(id).src.indexOf('backspace_up.png') != -1) {
        GetId(id).src = 'backspace_down.png';
    } else if (GetId(id).src.indexOf('clear_up.png') != -1) {
        GetId(id).src = 'clear_down.png';
    } else if (GetId(id).src.indexOf('play_up.png') != -1) {
        GetId(id).src = 'play_down.png';
    } else if (GetId(id).src.indexOf('stop_up.png') != -1) {
        GetId(id).src = 'stop_down.png';
    } else if (GetId(id).src.indexOf('songs_up.png') != -1) {
        GetId(id).src = 'songs_down.png';
    }
    var x = id.indexOf('add');
    if (x != -1) {
        dbm.cxp(id.substring(0, x - 1));
        dbs();
    }
    if (id == 'ts_top') {
        crj();
    } else if (id == 'ts_bottom') {
        crx();
    }
    if (id == 'play') {
        cnj.play();
    } else if (id == 'stop') {
        cnj.stop();
    } else if (id == 'clear') {
        cnj.stop();
        dbm.cqi();
        dbs();
    } else if (id == 'backspace') {
        cnj.stop();
        dbm.cvj();
        dbs();
    } else if (id == 'emailit') {
        dct();
    } else if (id == 'songs') {
        cpp();
    } else if (id == 'cr') {
        location.href = "http:/" + "/www.davidtulga.com/";
    } else if (id == 'voice_drum') {
        if (cnj.cqs) {
            cnj.stop();
            cnj.cqs = false;
            GetId(id).src = 'voice_drum_v.png';
        } else {
            cnj.stop();
            cnj.cqs = true;
            GetId(id).src = 'voice_drum_d.png';
        }
    }
};

function cmo(id) {
    if (GetId(id).src.indexOf('med_button_down.png') != -1) {
        GetId(id).src = 'med_button.png';
    } else if (GetId(id).src.indexOf('small_button_down.png') != -1) {
        GetId(id).src = 'small_button.png';
    } else if (GetId(id).src.indexOf('emailit_down.png') != -1) {
        GetId(id).src = 'emailit_up.png';
    } else if (GetId(id).src.indexOf('backspace_down.png') != -1) {
        GetId(id).src = 'backspace_up.png';
    } else if (GetId(id).src.indexOf('clear_down.png') != -1) {
        GetId(id).src = 'clear_up.png';
    } else if (GetId(id).src.indexOf('play_down.png') != -1) {
        GetId(id).src = 'play_up.png';
    } else if (GetId(id).src.indexOf('stop_down.png') != -1) {
        GetId(id).src = 'stop_up.png';
    } else if (GetId(id).src.indexOf('songs_down.png') != -1) {
        GetId(id).src = 'songs_up.png';
    }
};

function cwe(id, cos, coq) {
    return "<img id='" + id + "_but' src='pixel.gif' class='pixel_med_button' style='top: " + cos + "px; left: " + coq + "px;' onmousedown='dda(\"" + id + "\")' onmouseup='cmo(\"" + id + "\")' onmouseout='cmo(\"" + id + "\")'>";
};

function cua(id, cos, coq, width, height) {
    return "<img id='" + id + "_but' src='pixel.gif' class='pixel_custom_button' style='width: " + width + "px; height: " + height + "px; top: " + cos + "px; left: " + coq + "px;' onmousedown='dda(\"" + id + "\")' onmouseup='cmo(\"" + id + "\")' onmouseout='cmo(\"" + id + "\")'>";
};
var cmq = {
    "1": 31,
    "d2": 0,
    "2": 0,
    "d4": 0,
    "4": 0,
    "d8": 0,
    "8": 0,
    "16": 0,
    "t4": 0,
    "t8": 0,
    "r1": 20,
    "r2": 20,
    "r4": 14,
    "rd8": 18,
    "r8": 18,
    "r16": 14,
    "tr4": 14,
    "tr8": 18,
    "tie": 45
};
var ctt = {
    "1": 0,
    "d2": 0,
    "2": 0,
    "d4": 0,
    "4": 0,
    "d8": 0,
    "8": 0,
    "16": 0,
    "t4": 0,
    "t8": 0,
    "r1": 3,
    "r2": 3,
    "r4": 3,
    "rd8": 3,
    "r8": 3,
    "r16": 3,
    "tr4": 3,
    "tr8": 3,
    "tie": 0
};
var cwq = -30;
var def = 91;
var cvb = 60;
var cuo = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "e": 3,
    "+": 3,
    "a": 3
};
var cpv = {
    "1": 2,
    "2": 2,
    "3": 2,
    "4": 2,
    "5": 2,
    "6": 2,
    "7": 2,
    "8": 2,
    "9": 2,
    "10": -4,
    "11": -4,
    "12": -4,
    "e": 1,
    "+": 1,
    "a": 1
};
var dah = 14.2;
var dbc = 12.62;
var cmm = 2;
var crp = {
    'ts4': 3,
    'ts3': 2,
    'ts2': 1,
    'ts12': 4,
    'ts9': 3,
    'ts6': 2
};
var coy = {
    "1": 16,
    "d2": 12,
    "2": 8,
    "d4": 6,
    "4": 4,
    "d8": 3,
    "8": 2,
    "16": 1,
    "t4": 2.66,
    "t8": 1.33,
    "r1": 16,
    "r2": 8,
    "r4": 4,
    "rd8": 3,
    "r8": 2,
    "r16": 1,
    "tr4": 2.66,
    "tr8": 1.33,
    "tie": 0
};

function cyc(id) {
    GetId(id).src = 'med_button_disabled.png';
};

function ddw(id) {
    if (GetId(id).src.indexOf('med_button_disabled.png') != -1) GetId(id).src = 'med_button.png';
};

function dbe() {
    if (GetId('stop').src.indexOf('stop_disabled.png') != -1) GetId('stop').src = 'stop_up.png';
    GetId('play').src = 'play_disabled.png';
};

function cth() {
    GetId('stop').src = 'stop_disabled.png';
    if (dbm.dar == 0 && dbm.cnr.length > 0) {
        if (GetId('play').src.indexOf('play_disabled.png') != -1) GetId('play').src = 'play_up.png';
    } else {
        GetId('play').src = 'play_disabled.png';
    }
};

function cnn() {
    var cvn = dbm.dar;
    var cvx = dbm.dcp();
    var dan = cvn - Math.floor(cvn);
    var ctd = dbm.deh - cvn;
    var not_full = !(dbm.cpt());
    var ts_4 = dbm.crb == 4 ? true : false;
    if (dbm.cnr.length == 0) {
        GetId('clear').src = 'clear_disabled.png';
        GetId('backspace').src = 'backspace_disabled.png';
    } else {
        if (GetId('backspace').src.indexOf('backspace_disabled.png') != -1) GetId('backspace').src = 'backspace_up.png';
        if (GetId('clear').src.indexOf('clear_disabled.png') != -1) GetId('clear').src = 'clear_up.png';
    }
    cth();
    if (ctd >= 16 && dan == 0 && not_full) {
        ddw("1_add");
        if (cvx != 'tie') {
            ddw("r1_add");
        } else {
            cyc("r1_add");
        }
    } else {
        cyc("1_add");
        cyc("r1_add");
    }
    if (ctd >= 12 && dan == 0 && not_full) {
        ddw("d2_add");
        if (cvx != 'tie') {
            ddw("rd2_add");
        } else {
            cyc("rd2_add");
        }
    } else {
        cyc("d2_add");
        cyc("rd2_add");
    }
    if (ctd >= 8 && dan == 0 && not_full) {
        ddw("2_add");
        if (cvx != 'tie') {
            ddw("r2_add");
        } else {
            cyc("r2_add");
        }
    } else {
        cyc("2_add");
        cyc("r2_add");
    }
    if (ctd >= 6 && dan == 0 && not_full) {
        ddw("d4_add");
        if (cvx != 'tie') {
            ddw("rd4_add");
        } else {
            cyc("rd4_add");
        }
    } else {
        cyc("d4_add");
        cyc("rd4_add");
    }
    if (ctd >= 4 && dan == 0 && not_full) {
        ddw("4_add");
        if (cvx != 'tie') {
            ddw("r4_add");
        } else {
            cyc("r4_add");
        }
    } else {
        cyc("4_add");
        cyc("r4_add");
    }
    if (ctd >= 3 && dan == 0 && not_full) {
        ddw("d8_add");
        if (cvx != 'tie') {
            ddw("rd8_add");
        } else {
            cyc("rd8_add");
        }
    } else {
        cyc("d8_add");
        cyc("rd8_add");
    }
    if (ctd >= 2 && dan == 0 && not_full) {
        ddw("8_add");
        if (cvx != 'tie') {
            ddw("r8_add");
        } else {
            cyc("r8_add");
        }
    } else {
        cyc("8_add");
        cyc("r8_add");
    }
    if (ctd >= 1 && dan == 0 && not_full) {
        ddw("16_add");
        if (cvx != 'tie') {
            ddw("r16_add");
        } else {
            cyc("r16_add");
        }
    } else {
        cyc("16_add");
        cyc("r16_add");
    }
    if (ctd > 1.5 && (cvn % 4 == 0 || dan != 0) && not_full && ts_4) {
        ddw("t4_add");
        if (cvx != 'tie') {
            ddw("tr4_add");
        } else {
            cyc("tr4_add");
        }
    } else {
        cyc("t4_add");
        cyc("tr4_add");
    }
    if ((cvn % 4 == 0 || dan != 0) && not_full && ts_4) {
        ddw("t8_add");
        if (cvx != 'tie') {
            ddw("tr8_add");
        } else {
            cyc("tr8_add");
        }
    } else {
        cyc("t8_add");
        cyc("tr8_add");
    }
    if (cvx != "" && cvx.indexOf("r") == -1 && cvx != "tie" && not_full) {
        ddw("tie_add");
    } else {
        cyc("tie_add");
    }
}

function cpn(index) {
    if (index == -10) {
        return;
    }
    var source = "";
    var name_source = "";
    var c_source = "";
    var c_name_source = "";
    var r_source = "";
    var r_name_source = "";
    var dch = "";
    var cxj = "";
    for (var i = 0; i < dbm.cnr.length; i++) {
        source = GetId('cpj' + i).src;
        name_source = source.substring(0, source.length - 4);
        dch = dbm.cnr[i];
        cxj = dbm.cnr[i - 1];
        if (i == index && dch != 'tie' && dch.indexOf("r") == -1) {
            GetId('cpj' + i).src = name_source + "_blue.png";
            r_source = GetId('cxx' + i).src;
            r_name_source = r_source.substring(0, r_source.length - 4);
            GetId('cxx' + i).src = r_name_source + "_blue.png";
            if (cxj != 'tie') {
                c_source = GetId('note_count_' + i).src;
                c_name_source = c_source.substring(0, c_source.length - 4);
                GetId('note_count_' + i).src = c_name_source + "_blue.png";
            }
        } else if (name_source.substring(name_source.length - 5, name_source.length) == "_blue") {
            GetId('cpj' + i).src = name_source.substring(0, name_source.length - 5) + ".png";
            r_source = GetId('cxx' + i).src;
            r_name_source = r_source.substring(0, r_source.length - 4);
            GetId('cxx' + i).src = r_name_source.substring(0, r_name_source.length - 5) + ".png";
            if (cxj != 'tie') {
                c_source = GetId('note_count_' + i).src;
                c_name_source = c_source.substring(0, c_source.length - 4);
                GetId('note_count_' + i).src = c_name_source.substring(0, c_name_source.length - 5) + ".png";
            }
        }
    }
};

function dbs() {
    var html = "";
    var dch = "";
    var cxj = "";
    var cnd = "";
    var cxv = "";
    var der = "";
    var cmw = "";
    var cus = "";
    var cye = "";
    var ctl = "";
    var cyw = "";
    var cqg = "";
    var cpb = "";
    var t_group_val = 0;
    var crv = "";
    var ddk = cmm;
    var coq = cmm;
    var csq = -1;
    var cyu = 0;
    var cvn = 0;
    var dat = 0;
    var deh = dbm.dcn * (dbm.crb == 4 ? 4 : 2);
    var dax = dbm.crb == 4 ? dah : dbc;
    for (var i = 0; i < dbm.cnr.length; i++) {
        dch = dbm.cnr[i];
        cxj = dbm.cnr[i - 1];
        if (dch == "tie") {
            dat = coy[cxj];
            if (cxj.indexOf('t') == -1) {
                html += "<img id='cpj" + i + "' src='tie_v" + dat + ".png' class='note_on_staff' style='top: " + cmq[dch] + "px; left: " + (ddk + 5 + Math.floor(dat / 2)) + "px; " + (dbm.crb == 8 ? "width:" + (dat * (dax - 1) + 1) + "px; height:6px;" : "") + "'>";
            } else {
                html += "<img id='cpj" + i + "' src='tie_v" + (dat > 2 ? "2t" : "1t") + ".png' class='note_on_staff' style='top: " + cmq[dch] + "px; left: " + (ddk + 5 + Math.floor(dat / 2)) + "px;'>";
            }
        } else {
            cye = "";
            ctl = "";
            cyw = "";
            cqg = "";
            cpb = "";
            j = i + 1;
            if (j < dbm.cnr.length) {
                if (dbm.cnr[j] == 'tie') {
                    j++;
                }
                if (j < dbm.cnr.length) {
                    cye = dbm.cnr[j];
                    j++;
                    if (j < dbm.cnr.length) {
                        if (dbm.cnr[j] == 'tie') {
                            j++;
                        }
                        if (j < dbm.cnr.length) {
                            ctl = dbm.cnr[j];
                            j++;
                            if (j < dbm.cnr.length) {
                                if (dbm.cnr[j] == 'tie') {
                                    j++;
                                }
                                if (j < dbm.cnr.length) {
                                    cyw = dbm.cnr[j];
                                    j++;
                                    if (j < dbm.cnr.length) {
                                        if (dbm.cnr[j] == 'tie') {
                                            j++;
                                        }
                                        if (j < dbm.cnr.length) {
                                            cqg = dbm.cnr[j];
                                            j++;
                                            if (j < dbm.cnr.length) {
                                                if (dbm.cnr[j] == 'tie') {
                                                    j++;
                                                }
                                                if (j < dbm.cnr.length) {
                                                    cpb = dbm.cnr[j];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var cse = (ctt[dch] + coq);
            var nid = dch;
            if (dch.indexOf('t') == -1) {
                if (dbm.crb == 4) {
                    if (dch == 'd8' && cye == '16' && cvn % 4 == 0) {
                        nid = dch + '_bfL';
                    } else if (dch == '16' && cye == 'd8' && cvn % 4 == 0) {
                        nid = dch + '_bf8';
                    } else if (dch == 'd8' && cnd == '16' && cvn % 4 == 1) {
                        nid = dch + '_bb';
                    } else if (dch == '16' && cnd == 'd8' && cvn % 4 == 3) {
                        nid = dch + '_bb8';
                    } else if (dch == '16' && cye == 'r16' && cvn % 4 == 0) {
                        if (ctl == 'r16' && cyw == '16') {
                            nid = dch + '_bfLL';
                        } else if (ctl == '16') {
                            nid = dch + '_bfL';
                        } else if (ctl == '8') {
                            nid = dch + '_bf8L';
                        } else {
                            nid = dch;
                        }
                    } else if (dch == '16' && cye == 'r8' && ctl == '16' && cvn % 4 == 0) {
                        nid = dch + '_bfLL';
                    } else if (dch == '16' && cye == '16' && cnd == 'r16' && cxv == '16' && cvn % 4 == 2) {
                        nid = dch + '_bfb';
                    } else if (dch == '16' && cye == 'r16' && ctl == '16' && cvn % 4 == 1) {
                        if (cnd == '16') {
                            nid = dch + '_bfLb';
                        } else {
                            nid = dch + '_bfL';
                        }
                    } else if (dch == '16' && ((cnd == 'r8' && cxv == '16' && cvn % 4 == 3) || (cnd == 'r16' && cxv == '16' && cvn % 4 >= 2) || (cnd == 'r16' && cxv == 'r16' && der == '16' && cvn % 4 == 3))) {
                        nid = dch + '_bb';
                    } else if (dch == '16' && cnd == 'r16' && cxv == '8' && cvn % 4 == 3) {
                        nid = dch + '_bb8';
                    } else if (dch == '16' && ((cye == '8' && cvn % 4 <= 1) || (cye == '16' && cvn % 4 <= 2)) && (cvn % 4 == 0 || ((cnd != '8' || cvn % 4 == 1) && cnd != '16' && cvn % 4 != 0))) {
                        if (cye == '8') {
                            nid = dch + '_bf8';
                        } else {
                            nid = dch + '_bf';
                        }
                    } else if (dch == '16' && ((cnd == '8' && cvn % 4 > 1) || cnd == '16') && ((cye == '8' && cvn % 4 == 1) || (cye == '16' && (cvn % 4 == 1 || cvn % 4 == 2)))) {
                        if (cye == '8') {
                            nid = dch + '_bf8b';
                        } else if (cnd == '8') {
                            nid = dch + '_bfb8';
                        } else {
                            nid = dch + '_bfb';
                        }
                    } else if (dch == '16' && ((cnd == '8' && cvn % 4 > 1) || (cnd == '16' && cvn % 4 != 0))) {
                        if (cnd == '8') {
                            nid = dch + '_bb8';
                        } else {
                            nid = dch + '_bb';
                        }
                    } else if (dch == '8' && cnd == '16' && cye == '16' && cvn % 4 == 1) {
                        nid = dch + '_bfb';
                    } else if (dch == '8' && (((cnd == '8' || (cnd == 'r16' && cxv == '16')) && cvn % 4 == 2) || (cnd == '16' && (cvn % 4 == 1 || cvn % 4 == 2)))) {
                        nid = dch + '_bb';
                    } else if (dch == '8' && ((cye == '8' && cvn % 4 == 0) || (cye == '16' && cvn % 4 <= 1))) {
                        nid = dch + '_bf';
                    } else if (dch == '8' && (cye == 'r16' && cvn % 4 == 0 && ctl == '16')) {
                        nid = dch + '_bfL';
                    }
                    html += "<img id='cpj" + i + "' src='s" + nid + ".png' class='note_on_staff' style='top: " + cmq[dch] + "px; left: " + cse + "px;'>";
                    if (dch.indexOf('r') == -1) {
                        html += "<img id='cxx" + i + "' src='rec_" + coy[dch] + ".png' class='note_on_staff' style='top: " + def + "px; left: " + (csq) + "px;'>";
                        html += "<img src='rec_" + coy[dch] + "_blue.png' class='note_on_staff' style='visibility: hidden; top: " + def + "px; left: " + (csq) + "px;'>";
                        html += "<img src='s" + nid + "_blue.png' class='note_on_staff' style='visibility: hidden; top: " + cmq[dch] + "px; left: " + cse + "px;'>";
                    } else {
                        html += "<img id='cxx" + i + "' src='rec_r" + coy[dch] + ".png' class='note_on_staff' style='top: " + def + "px; left: " + (csq) + "px;'>";
                    }
                } else {
                    var m_p = cvn % 6;
                    var nadd;
                    nadd = "false";
                    if (dch == 'd8') {
                        if ((cye == '8' && m_p <= 1) || (cye == 'd8' && m_p == 0) || (cye == '16' && m_p <= 2)) {
                            nid = "d8_bfL";
                        } else if (cye == 'r16') {
                            if ((ctl == '16' && m_p <= 1) || (ctl == '8' && m_p == 0)) {
                                nid = "d8_bfLL";
                            } else if (ctl == 'r16' && cyw == '16' && m_p == 0) {
                                nid = "d8_bfLLL";
                            }
                        } else if (cye == 'r8' && ctl == '16' && m_p == 0) {
                            nid = "d8_bfLLL";
                        }
                        if (m_p <= 3 && ((cnd == '8' && m_p >= 2) || (cnd == '16' && m_p >= 1) || (cnd == 'd8' && m_p == 3) || (cnd == 'r16' && cxv == '16' && m_p >= 2) || (cnd == 'r16' && cxv == '8' && m_p == 3) || (cnd == 'r8' && cxv == '16' && m_p == 3) || (cnd == 'r16' && cxv == 'r16' && der == '16' && m_p == 3))) {
                            nadd = "b";
                        }
                        if (nadd != "false") {
                            if (nid.indexOf("_") != -1) {
                                nid = nid + nadd;
                            } else {
                                nid = "d8_b" + nadd;
                            }
                        }
                    } else if (dch == '8') {
                        if (((cnd == '8' && m_p >= 2) || (cnd == 'r8' && cxv == '8' && m_p == 4) || (cnd == 'r16' && cxv == 'r16' && der == '8' && m_p == 4) || (cnd == 'r16' && cxv == '8' && m_p <= 4 && m_p >= 3) || (cnd == '16' && m_p >= 1) || (cnd == 'r16' && cxv == '16' && m_p >= 2) || (cnd == 'r8' && cxv == '16' && m_p >= 3) || (cnd == 'r16' && cxv == 'r16' && der == '16' && m_p >= 3) || (cnd == 'r16' && cxv == 'r16' && der == 'r16' && cmw == '16' && m_p == 4) || (cnd == 'r8' && cxv == 'r16' && der == '16' && m_p == 4) || (cnd == 'rd8' && cxv == '16' && m_p == 4) || (cnd == 'd8' && m_p >= 3) || (cnd == 'r16' && cxv == 'd8' && m_p == 4) || (cnd == 'r16' && cxv == 'r8' && der == '16' && m_p == 4)) && m_p <= 4) {
                            if ((cye == '8' && m_p <= 2) || (cye == '16' && m_p <= 3) || (cye == 'd8' && m_p <= 1)) {
                                nid = "8_bfb";
                            } else if ((cye == 'r16' && ctl == '8' && m_p == 1) || (cye == 'r16' && ctl == '16' && m_p <= 2)) {
                                nid = "8_bfLb";
                            } else if ((cye == 'r16' && ctl == 'r16' && cyw == '16' && m_p == 1) || (cye == 'r8' && ctl == '16' && m_p == 1)) {
                                nid = "8_bfLLb";
                            } else {
                                nid = "8_bb";
                            }
                        } else if ((cye == '8' && m_p <= 2) || (cye == '16' && m_p <= 3) || (cye == 'd8' && m_p <= 1)) {
                            nid = "8_bf";
                        } else if ((cye == 'r16' && ctl == '16' && m_p <= 2) || (cye == 'r16' && ctl == '8' && m_p <= 1) || (cye == 'r16' && ctl == 'd8' && m_p == 0)) {
                            nid = "8_bfL";
                        } else if ((cye == 'r8' && ctl == '8' && m_p == 0) || (cye == 'r16' && ctl == 'r16' && cyw == '8' && m_p == 0) || (cye == 'r16' && ctl == 'r16' && cyw == '16' && m_p <= 1) || (cye == 'r8' && ctl == '16' && m_p <= 1)) {
                            nid = "8_bfLL";
                        } else if ((cye == 'r16' && ctl == 'r16' && cyw == 'r16' && cqg == '16' && m_p == 0) || (cye == 'r8' && ctl == 'r16' && cyw == '16' && m_p == 0) || (cye == 'r16' && ctl == 'r8' && cyw == '16' && m_p == 0) || (cye == 'rd8' && ctl == '16' && m_p == 0)) {
                            nid = "8_bfLLL";
                        }
                    } else if (dch == '16') {
                        if ((cye == '8' && m_p <= 3) || (cye == 'd8' && m_p <= 2)) {
                            nid = "16_bf8";
                        } else if (cye == '16' && m_p <= 4) {
                            nid = "16_bf";
                        } else if (cye == 'r16') {
                            if ((ctl == '8' && m_p <= 2) || (ctl == 'd8' && m_p <= 1)) {
                                nid = "16_bf8L";
                            } else if (ctl == '16' && m_p <= 3) {
                                nid = "16_bfL";
                            } else if (ctl == 'r16') {
                                if ((cyw == '8' && m_p <= 1) || (cyw == 'd8' && m_p == 0)) {
                                    nid = "16_bf8LL";
                                } else if (cyw == '16' && m_p <= 2) {
                                    nid = "16_bfLL";
                                } else if (cyw == 'r16') {
                                    if (cqg == '8' && m_p == 0) {
                                        nid = "16_bf8LLL";
                                    } else if (cqg == '16' && m_p <= 1) {
                                        nid = "16_bfLLL";
                                    } else if (cqg == 'r16' && cpb == '16' && m_p == 0) {
                                        nid = "16_bfLLLL";
                                    }
                                } else if (cyw == 'r8' && cqg == '16' && m_p == 0) {
                                    nid = "16_bfLLLL";
                                }
                            } else if (ctl == 'r8') {
                                if (cyw == '8' && m_p == 0) {
                                    nid = "16_bf8LLL";
                                } else if (cyw == '16' && m_p <= 1) {
                                    nid = "16_bfLLL";
                                } else if (cyw == 'r16' && cqg == '16' && m_p == 0) {
                                    nid = "16_bfLLLL";
                                }
                            } else if (ctl == 'rd8' && cyw == '16' && m_p == 0) {
                                nid = "16_bfLLLL";
                            }
                        } else if (cye == 'r8') {
                            if ((ctl == '8' && m_p <= 1) || (ctl == 'd8' && m_p == 0)) {
                                nid = "16_bf8LL";
                            } else if (ctl == '16' && m_p <= 2) {
                                nid = "16_bfLL";
                            } else if (ctl == 'r16') {
                                if (cyw == '8' && m_p == 0) {
                                    nid = "16_bf8LLL";
                                } else if (cyw == '16' && m_p <= 1) {
                                    nid = "16_bfLLL";
                                } else if (cyw == 'r16' && cqg == '16' && m_p == 0) {
                                    nid = "16_bfLLLL";
                                }
                            } else if (ctl == 'r8' && cyw == '16' && m_p == 0) {
                                nid = "16_bfLLLL";
                            }
                        } else if (cye == 'rd8') {
                            if (ctl == '8' && m_p == 0) {
                                nid = "16_bf8LLL";
                            } else if (ctl == '16' && m_p <= 1) {
                                nid = "16_bfLLL";
                            } else if (ctl == 'r16' && cyw == '16' && m_p == 0) {
                                nid = "16_bfLLLL";
                            }
                        } else if (cye == 'r4' && ctl == '16' && m_p == 0) {
                            nid = "16_bfLLLL";
                        }
                        if ((cnd == '8' && m_p >= 2) || (cnd == 'r8' && cxv == '8' && m_p >= 4) || (cnd == 'r16' && cxv == '8' && m_p >= 3) || (cnd == 'r16' && cxv == 'r16' && der == '8' && m_p >= 4) || (cnd == 'r8' && cxv == 'r16' && der == '8' && m_p == 5) || (cnd == 'r16' && cxv == 'r8' && der == '8' && m_p == 5) || (cnd == 'rd8' && cxv == '8' && m_p == 5) || (cnd == 'd8' && m_p >= 3) || (cnd == 'r16' && cxv == 'd8' && m_p >= 4) || (cnd == 'r8' && cxv == 'd8' && m_p == 5) || (cnd == 'r16' && cxv == 'r16' && der == 'd8' && m_p == 5) || (cnd == 'r16' && cxv == 'r16' && der == 'r16' && cmw == '8' && m_p == 5)) {
                            nadd = "b8";
                        } else if ((cnd == '16' && m_p >= 1) || (cnd == 'r8' && cxv == '16' && m_p >= 3) || (cnd == 'r16' && cxv == '16' && m_p >= 2) || (cnd == 'r16' && cxv == 'r16' && der == '16' && m_p >= 3) || (cnd == 'r8' && cxv == 'r16' && der == '16' && m_p == 5) || (cnd == 'r16' && cxv == 'r8' && der == '16' && m_p >= 4) || (cnd == 'rd8' && cxv == '16' && m_p >= 4) || (cnd == 'r16' && cxv == 'r16' && der == 'r16' && cmw == '16' && m_p >= 4) || (cnd == 'r8' && cxv == 'r16' && der == 'r16' && cmw == '16' && m_p == 5) || (cnd == 'r16' && cxv == 'r8' && der == 'r16' && cmw == '16' && m_p == 5) || (cnd == 'r16' && cxv == 'r16' && der == 'r8' && cmw == '16' && m_p == 5) || (cnd == 'r8' && cxv == 'r8' && der == '16' && m_p == 5) || (cnd == 'r4' && cxv == '16' && m_p == 5) || (cnd == 'rd8' && cxv == 'r16' && der == '16' && m_p == 5) || (cnd == 'r16' && cxv == 'rd8' && der == '16' && m_p == 5) || (cnd == 'r16' && cxv == 'r16' && der == 'r16' && cmw == 'r16' && cus == '16' && m_p == 5)) {
                            nadd = "b";
                        }
                        if (nadd != "false") {
                            if (nid.indexOf("_") != -1) {
                                nid = nid + nadd;
                            } else {
                                nid = "16_b" + nadd;
                            }
                        }
                    }
                    html += "<img id='cpj" + i + "' src='s" + nid + ".png' class='note_on_staff' style='top: " + cmq[dch] + "px; left: " + cse + "px;'>";
                    if (dch.indexOf('r') == -1) {
                        html += "<img id='cxx" + i + "' src='rec_" + coy[dch] + ".png' class='note_on_staff' style='top: " + def + "px; left: " + (csq) + "px; width:" + (coy[dch] * (dax + 0.2) + 0.2) + "px; height:10px;'>";
                        html += "<img src='rec_" + coy[dch] + "_blue.png' class='note_on_staff' style='visibility: hidden; top: " + def + "px; left: " + (csq) + "px;'>";
                        html += "<img src='s" + nid + "_blue.png' class='note_on_staff' style='visibility: hidden; top: " + cmq[dch] + "px; left: " + cse + "px;'>";
                    } else {
                        html += "<img id='cxx" + i + "' src='rec_r" + coy[dch] + ".png' class='note_on_staff' style='top: " + def + "px; left: " + (csq) + "px; width:" + (coy[dch] * (dax + 0.2) + 0.2) + "px; height:10px;'>";
                    }
                }
            } else {
                if (cvn == Math.floor(cvn)) {
                    t_group_val = 0;
                    for (var j = i; j < dbm.cnr.length; j++) {
                        t_group_val += coy[dbm.cnr[j]];
                        if (t_group_val + .25 > Math.ceil(t_group_val)) break;
                    }
                    if (t_group_val > 4.5) {
                        html += "<img id='triplet_bracket_" + i + "' src='triplet_bracket_8.png' class='note_on_staff' style='top: " + cwq + "px; left: " + (coq + 3) + "px;'>";
                    } else {
                        html += "<img id='triplet_bracket_" + i + "' src='triplet_bracket_4.png' class='note_on_staff' style='top: " + cwq + "px; left: " + (coq + 3) + "px;'>";
                    }
                }
                if (dch == 't8' && cye == 't8' && (cvn == Math.floor(cvn) || ((cvn - Math.floor(cvn)) * 10 < 5 && cnd != 't8'))) {
                    nid = '8_bft';
                } else if (dch == 't8' && cnd == 't8' && cvn != Math.floor(cvn) && (cvn - Math.floor(cvn)) * 10 < 5) {
                    if (cye == 't8') {
                        nid = '8_bfbt';
                    } else {
                        nid = '8_bb';
                    }
                } else if (dch == 't8' && (cnd == 't8' || (cnd == 'tr8' && cxv == 't8')) && (cvn - Math.floor(cvn)) * 10 > 5) {
                    nid = '8_bb';
                } else if (dch == 't8' && cye == 'tr8' && ctl == 't8' && (cvn - Math.floor(cvn)) == 0) {
                    nid = '8_bfL';
                } else {
                    nid = dch.substring(1);
                }
                html += "<img id='cpj" + i + "' src='s" + nid + ".png' class='note_on_staff' style='top: " + cmq[dch] + "px; left: " + cse + "px;'>";
                if (dch.indexOf('r') == -1) {
                    html += "<img id='cxx" + i + "' src='rec_" + (coy[dch] > 2 ? "2t" : "1t") + ".png' class='note_on_staff' style='top: " + def + "px; left: " + (csq) + "px;'>";
                    html += "<img src='rec_" + (coy[dch] > 2 ? "2t" : "1t") + "_blue.png' class='note_on_staff' style='visibility: hidden; top: " + def + "px; left: " + (csq) + "px;'>";
                    html += "<img src='s" + nid + "_blue.png' class='note_on_staff' style='visibility: hidden; top: " + cmq[dch] + "px; left: " + cse + "px;'>";
                } else {
                    html += "<img id='cxx" + i + "' src='rec_r" + (coy[dch] > 2 ? "2t" : "1t") + ".png' class='note_on_staff' style='top: " + def + "px; left: " + (csq) + "px;'>";
                }
            }
            if (dch.indexOf('r') == -1 && dch != 'tie' && cxj != 'tie') {
                crv = cnj.dej(cvn, dbm.crb);
                html += "<img id='note_count_" + i + "' src='count_" + crv + ".png' class='note_on_staff' style='top: " + (cvb + cuo[crv]) + "px; left: " + (cpv[crv] + coq) + "px;'>";
                html += "<img src='count_" + crv + "_blue.png' class='note_on_staff' style='visibility: hidden; top: " + (cvb + cuo[crv]) + "px; left: " + (cpv[crv] + coq) + "px;'>";
            }
            ddk = coq;
            coq += dax * coy[dch];
            csq += (dax + 0.2) * coy[dch];
            cvn += coy[dch];
            cvn = ctp(cvn);
            if (cvn >= deh) {
                cyu++;
                coq += crp['ts' + dbm.dcn];
                cvn = 0;
            }
            cus = cmw;
            cmw = der;
            der = cxv;
            cxv = cnd;
            cnd = dch;
        }
    }
    GetId("cmk").innerHTML = html;
    setTimeout(function() {
        cnn();
    }, 10);
};

function cuk() {
    var cou = "<img id='cvv' src='interface_back_4.4.png' class='interface_back' style='top: " + cyi + "px; left: " + cvp + "px;'>";
    var cos = 0;
    var coq = 0;
    cos = (cyi + 10);
    coq = (cvp - 10);
    cou += "<img id='ts_top' src='small_button.png' class='ts_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='ts_top_n' src='time_4.png' class='ts_button_img' style='top: " + (cos + 12) + "px; left: " + (coq + 15) + "px;'>";
    cou += cua("ts_top", cos, coq, 50, 52);
    cos = (cyi + 72);
    coq = (cvp - 10);
    cou += "<img id='ts_bottom' src='small_button.png' class='ts_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='ts_bottom_n' src='time_4.png' class='ts_button_img' style='top: " + (cos + 12) + "px; left: " + (coq + 15) + "px;'>";
    cou += cua("ts_bottom", cos, coq, 50, 52);
    var i = 0;
    var x = 105;
    var m = 79.5;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='1_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='1_add_n' src='1.png' class='note_add_button_img' style='top: " + (cos + 29) + "px; left: " + (coq + 21) + "px;'>";
    cou += cwe("1_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='d2_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='d2_add_n' src='d2.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 21) + "px;'>";
    cou += cwe("d2_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='2_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='2_add_n' src='2.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 22) + "px;'>";
    cou += cwe("2_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='d4_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='d4_add_n' src='d4.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 21) + "px;'>";
    cou += cwe("d4_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='4_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='4_add_n' src='4.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 22) + "px;'>";
    cou += cwe("4_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='d8_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='d8_add_n' src='d8.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 21) + "px;'>";
    cou += cwe("d8_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='8_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='8_add_n' src='8.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 21) + "px;'>";
    cou += cwe("8_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='16_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='16_add_n' src='16.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 21) + "px;'>";
    cou += cwe("16_add", cos, coq);
    x += 7;
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='t4_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='t4_add_n' src='4.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 22) + "px;'>";
    cou += cwe("t4_add", cos, coq);
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='t8_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='t8_add_n' src='8.png' class='note_add_button_img' style='top: " + (cos + 11) + "px; left: " + (coq + 21) + "px;'>";
    cou += cwe("t8_add", cos, coq);
    x += 7;
    i++;
    cos = (cuu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='tie_add' src='med_button_disabled.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='daj' src='tie.png' class='note_add_button_img' style='top: " + (cos + 28) + "px; left: " + (coq + 10) + "px;'>";
    cou += cwe("tie_add", cos, coq);
    // Domain check removed for local development
    // if (ctr != unescape("%77%77%77%2e%70%68%69%6c%74%75%6c%" + "67%61%2e%63%6f%6d") && ctr != unescape("%70%68%69%6c%" + "74%75%6c%67%61%2e%63%6f%6d")) {
    //     return;
    // };
    i = 0;
    x = 105;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='r1_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='r1_add_n' src='r1.png' class='note_add_button_img' style='top: " + (cos + 32) + "px; left: " + (coq + 19) + "px;'>";
    cou += cwe("r1_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='rd2_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='rd2_add_n_0' src='r2.png' class='note_add_button_img' style='top: " + (cos + 32) + "px; left: " + (coq + 5) + "px;'>";
    cou += "<img id='rd2_add_n_1' src='plus.png' class='note_add_button_img' style='top: " + (cos + 30) + "px; left: " + (coq + 32) + "px;'>";
    cou += "<img id='rd2_add_n_2' src='r4.png' class='note_add_button_img' style='top: " + (cos + 20) + "px; left: " + (coq + 44) + "px;'>";
    cou += cwe("rd2_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='r2_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='r2_add_n' src='r2.png' class='note_add_button_img' style='top: " + (cos + 32) + "px; left: " + (coq + 18) + "px;'>";
    cou += cwe("r2_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='rd4_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='rd4_add_n_0' src='r4.png' class='note_add_button_img' style='top: " + (cos + 20) + "px; left: " + (coq + 13) + "px;'>";
    cou += "<img id='rd4_add_n_1' src='plus.png' class='note_add_button_img' style='top: " + (cos + 30) + "px; left: " + (coq + 28) + "px;'>";
    cou += "<img id='rd4_add_n_2' src='r8.png' class='note_add_button_img' style='top: " + (cos + 27) + "px; left: " + (coq + 40) + "px;'>";
    cou += cwe("rd4_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='r4_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='r4_add_n' src='r4.png' class='note_add_button_img' style='top: " + (cos + 20) + "px; left: " + (coq + 25) + "px;'>";
    cou += cwe("r4_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='rd8_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='rd8_add_n' src='rd8.png' class='note_add_button_img' style='top: " + (cos + 27) + "px; left: " + (coq + 23) + "px;'>";
    cou += cwe("rd8_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='r8_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='r8_add_n' src='r8.png' class='note_add_button_img' style='top: " + (cos + 27) + "px; left: " + (coq + 25) + "px;'>";
    cou += cwe("r8_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='r16_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='r16_add_n' src='r16.png' class='note_add_button_img' style='top: " + (cos + 22) + "px; left: " + (coq + 25) + "px;'>";
    cou += cwe("r16_add", cos, coq);
    x += 7;
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='tr4_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='tr4_add_n' src='r4.png' class='note_add_button_img' style='top: " + (cos + 20) + "px; left: " + (coq + 25) + "px;'>";
    cou += cwe("tr4_add", cos, coq);
    i++;
    cos = (ddu + cyi);
    coq = (x + (m * i) + cvp);
    cou += "<img id='tr8_add' src='med_button.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += "<img id='tr8_add_n' src='r8.png' class='note_add_button_img' style='top: " + (cos + 27) + "px; left: " + (coq + 25) + "px;'>";
    cou += cwe("tr8_add", cos, coq);
    cos = (cyi + 365);
    coq = (cvp + 20);
    cou += "<img id='voice_drum' src='voice_drum_v.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("voice_drum", cos, coq, 50, 120);
    cos = (cyi + 575);
    coq = (cvp + 326);
    cou += "<img id='cr' src='cr.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("cr", cos, coq, 372, 15);
    cos = (cyi + 525);
    coq = (cvp + 0);
    cou += "<img id='play' src='play_disabled.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("play", cos, coq, 110, 42);
    cos = (cyi + 525);
    coq = (cvp + 135);
    cou += "<img id='stop' src='stop_disabled.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("stop", cos, coq, 112, 42);
    cos = (cyi + 525);
    coq = (cvp + 270);
    cou += "<img id='songs' src='songs_up.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("songs", cos, coq, 148, 42);
    cos = (cyi + 525);
    coq = (cvp + 445);
    cou += "<img id='emailit' src='emailit_up.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("emailit", cos, coq, 176, 42);
    cos = (cyi + 525);
    coq = (cvp + 650);
    cou += "<img id='clear' src='clear_disabled.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("clear", cos, coq, 106, 42);
    cos = (cyi + 525);
    coq = (cvp + 780);
    cou += "<img id='backspace' src='backspace_disabled.png' class='note_add_button_img' style='top: " + cos + "px; left: " + coq + "px;'>";
    cou += cua("backspace", cos, coq, 194, 42);
    cou += "<div id='cmk' class='note_container' style='top: " + (cyi + 40) + "px; left: " + (cvp + 50) + "px; width: 925px; height: 50px;'></div>";
    GetId("cm_container").innerHTML = '<div style="position:relative;"><div id="JSWinDiv" style="position:absolute; z-index: -1;"></div></div>' + cou;
};

function crr(e) {
    if (cnx.is_visible()) {
        if (!e) {
            var e = window.event;
        }
        if (e.keyCode == 13) {
            cqc();
        }
    }
};

function dct() {
    cnj.stop();
    cwg.close();
    cnx.render();
    coc.GetElement().onkeypress = crr;
    cnx.center_relative_size(dcr, cqu);
    cqq.GetElement().value = dbm.ded();
    coc.GetElement().value = '';
    cnx.show();
};

function cwa() {
    window.location.href = "mailto:?subject=" + escape("Check out this rhythm!") + "&body=" + escape("Here's a rhythm I created with counting music:\n\nTo hear it counted out, go to http:/" + "/www.philtulga.com/reading-counting.php?code=" + escape(dbm.ded()) + "\n\nIf that doesn't work, you can also click the Email It! button, then paste in this code to load: " + dbm.ded() + "\n\n");
};

function cqc() {
    dcj(coc.GetElement().value);
};

function dcj(code) {
    cnj.stop();
    dbm.cvt(code);
    dep();
    dbs();
    cnx.close();
    cwg.close();
};

function cpp() {
    cnj.stop();
    cnx.close();
    cwg.render();
    cwg.center_relative_size(dcr, cqu);
    cwg.show();
};

function crj() {
    cnj.stop();
    cxh = 0;
    dcv = dbm.crb;
    if (dcv == 4) {
        if (dbm.dcn == 4) {
            cxh = 3;
        } else if (dbm.dcn == 3) {
            cxh = 2;
        } else if (dbm.dcn == 2) {
            cxh = 4;
        }
    } else {
        if (dbm.dcn == 12) {
            cxh = 9;
        } else if (dbm.dcn == 9) {
            cxh = 6;
        } else if (dbm.dcn == 6) {
            cxh = 12;
        }
    }
    cnb(cxh, dcv);
};

function crx() {
    cnj.stop();
    cxh = 0;
    dcv = 0;
    if (dbm.crb == 4) {
        dcv = 8;
        if (dbm.dcn == 4) {
            cxh = 12;
        } else if (dbm.dcn == 3) {
            cxh = 9;
        } else if (dbm.dcn == 2) {
            cxh = 6;
        }
    } else {
        dcv = 4;
        if (dbm.dcn == 12) {
            cxh = 4;
        } else if (dbm.dcn == 9) {
            cxh = 3;
        } else if (dbm.dcn == 6) {
            cxh = 2;
        }
    }
    cnb(cxh, dcv);
};

function cnb(cxh, dcv) {
    dbm.cws(cxh, dcv);
    dep();
    dbs();
};

function dep() {
    if (dbm.dcn == 12) {
        GetId('ts_top_n').style.left = (cvp - 4) + "px";
    } else {
        GetId('ts_top_n').style.left = (cvp + 5) + "px";
    }
    GetId('ts_top_n').src = 'time_' + dbm.dcn + '.png';
    GetId('ts_bottom_n').src = 'time_' + dbm.crb + '.png';
    GetId('cvv').src = 'interface_back_' + dbm.dcn + '.' + dbm.crb + '.png';
};
cnj = new Object();
cnj.cvl = false;
cnj.ctf = false;
cnj.dap = false;
cnj.crl = true;
cnj.coi = function() {
    soundManager.setup({
        url: './',
        flashVersion: 9,
        preferFlash: true,
        debugMode: false,
        consoleOnly: true,
        useHighPerformance: true,
        onready: function() {
            cnj.coa();
        }
    });
    if (window.AudioContext || window.webkitAudioContext) {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            cnj.dap = new AudioContext();
            cnj.ctf = true;
        } catch (e) {
            cnj.ctf = false;
            cnj.dap = false;
        }
    }
};
cnj.cwm = new Object();
cnj.cyk = function(id, filename) {
    this.cwm[id] = soundManager.createSound({
        id: id,
        url: filename,
        autoLoad: true,
        autoPlay: false,
        onload: function() {
            cnj.cym();
        },
        volume: 100
    });
};
cnj.cmy = false;
cnj.cog = false;
cnj.cph = function() {
    if (!cnj.cmy) {
        if (cnj.ctf) {
            var request = new XMLHttpRequest();
            request.open('GET', 'MEGAFILE.mp3', true);
            request.responseType = 'arraybuffer';
            request.addEventListener('load', cnj.cxf, false);
            request.send();
        } else if (cnj.crl) {
            GetId('master_sound').play();
            GetId('master_sound').pause();
            cnj.cog = true;
        }
        cnj.cmy = true;
    } else if (cnj.cog) {
        return true;
    }
    return false;
};
cnj.cym = function() {
    cnj.cog = true;
};
cnj.csi = false;
cnj.cnt = false;
cnj.dcx = false;
cnj.cwy = false;
cnj.cxf = function(e) {
    var request = e.target;
    try {
        cnj.csi = request.response;
        if (window.AudioContext) {
            cnj.dap.decodeAudioData(cnj.csi, function onSuccess(decodedBuffer) {
                cnj.cuq(true, decodedBuffer);
            }, function onFailure() {
                cnj.cuq(false, false);
            });
        } else {
            cnj.cnt = cnj.dap.createBuffer(cnj.csi, false);
            cnj.dcx = cnj.den();
            cnj.cog = true;
        }
    } catch (err) {
        cnj.cuq(false, false);
    }
};
cnj.cuq = function(success, decodedBuffer) {
    if (success) {
        cnj.cnt = decodedBuffer;
        cnj.dcx = cnj.den();
        cnj.cog = true;
    } else {
        cnj.ctf = false;
        cnj.cmy = false;
    }
};
cnj.den = function() {
    var source = cnj.dap.createBufferSource();
    source.buffer = cnj.cnt;
    source.connect(cnj.dap.destination);
    if (typeof source.start === 'undefined') {
        source.start = source.noteGrainOn;
    }
    if (typeof source.stop === 'undefined') {
        source.stop = source.noteOff;
    }
    source.csc = false;
    source.crn = false;
    return source;
};
cnj.cpr = 25;
cnj.cxt = 0;
cnj.cqs = false;
cnj.cpf = 2;
cnj.cys = {
    "n1": 0,
    "n2": 11475,
    "n3": 15500,
    "n4": 19500,
    "ne": 23500,
    "n+": 8000,
    "na": 27250,
    "nt_+": 30500,
    "nt_a": 34167,
    "cmu": 4000,
    "n8_1": 43500,
    "n8_2": 49475,
    "n8_3": 55500,
    "n8_4": 61500,
    "n8_5": 67500,
    "n8_6": 73500,
    "n8_7": 79500,
    "n8_8": 85500,
    "n8_9": 91500,
    "n8_10": 97500,
    "n8_11": 103500,
    "n8_12": 109500,
    "n8_+": 115500,
    "n8_rest": 37500,
    "ro": 121500,
    "ro_+": 129500,
    "ro_e": 137000,
    "ro_a": 144750,
    "ro_t_+": 152000,
    "ro_t_a": 159667,
    "st": 167000,
    "st_+": 171000,
    "st_e": 174500,
    "st_a": 178250,
    "st_t_+": 181500,
    "st_t_a": 185167,
    "ro8": 188500,
    "ro8_+": 194500,
    "st8": 200250,
    "st8_+": 206250
};
cnj.coa = function() {
    if (soundManager.html5.usingFlash) {
        cnj.cvl = true;
    }
    if (cnj.ctf) {
        cnj.cph();
    } else if (cnj.cvl) {
        this.cyk('master', 'MEGAFILE.mp3');
        cnj.cmy = true;
    }
};
cnj.play = function() {
    if (cnj.cqa) {
        return false;
    }
    if (!cnj.cog) {
        return false;
    }
    // Domain check removed for local development
    //cnj.stop();
    //if (ctr != unescape("%77%77%77%2e%70%68%69%6c" + "%74%75%6c%67%61%2e%63%6f%6d") && ctr != unescape("%70%68%69%6c%74%75%" + "6c%67%61%2e%63%6f%6d")) {
        //return false;
    //};
    if (dbm.dar == 0) {
        if (dbm.cpx > 0) {
            dbe();
            cnj.crt();
            cnj.cnl();
        } else {}
    } else {}
};
cnj.coe = 83;
cnj.cuc = 250;
cnj.ctv = 250;
cnj.dal = new Array();
cnj.cqo = new Array();
cnj.cxl = new Array();
cnj.csa = new Array();
cnj.cwo = new Array();
cnj.csu = new Array();
cnj.cuw = function(position, ts) {
    var cya = position - Math.floor(position);
    if (ts == 4) {
        if (position == 0) {
            return "n1";
        } else if (position == 4) {
            return "n2";
        } else if (position == 8) {
            return "n3";
        } else if (position == 12) {
            return "n4";
        } else if (position % 4 == 1) {
            return "ne";
        } else if (position % 4 == 2) {
            return "n+";
        } else if (position % 4 == 3) {
            return "na";
        } else if (cya != 0) {
            cya = cya * 10;
            if (cya < 5) {
                return "nt_+";
            } else {
                return "nt_a";
            }
        } else {
            return false;
        }
    } else {
        if (position == 0) {
            return "n8_1";
        } else if (position == 2) {
            return "n8_2";
        } else if (position == 4) {
            return "n8_3";
        } else if (position == 6) {
            return "n8_4";
        } else if (position == 8) {
            return "n8_5";
        } else if (position == 10) {
            return "n8_6";
        } else if (position == 12) {
            return "n8_7";
        } else if (position == 14) {
            return "n8_8";
        } else if (position == 16) {
            return "n8_9";
        } else if (position == 18) {
            return "n8_10";
        } else if (position == 20) {
            return "n8_11";
        } else if (position == 22) {
            return "n8_12";
        } else if (position % 2 == 1) {
            return "n8_+";
        } else {
            return false;
        }
    }
};
cnj.ddg = function(position, ts, value) {
    var cya = position - Math.floor(position);
    if (ts == 4) {
        if (position % 4 == 0) {
            if (value > cnj.cpf) {
                return "ro";
            } else {
                return "st";
            }
        } else if (position % 4 == 1) {
            if (value > cnj.cpf) {
                return "ro_e";
            } else {
                return "st_e";
            }
        } else if (position % 4 == 2) {
            if (value > cnj.cpf) {
                return "ro_+";
            } else {
                return "st_+";
            }
        } else if (position % 4 == 3) {
            if (value > cnj.cpf) {
                return "ro_a";
            } else {
                return "st_a";
            }
        } else if (cya != 0) {
            cya = cya * 10;
            if (cya < 5) {
                if (value > cnj.cpf) {
                    return "ro_t_+";
                } else {
                    return "st_t_+";
                }
            } else {
                if (value > cnj.cpf) {
                    return "ro_t_a";
                } else {
                    return "st_t_a";
                }
            }
        } else {
            return false;
        }
    } else {
        if (position % 2 == 0) {
            if (value > cnj.cpf) {
                return "ro8";
            } else {
                return "st8";
            }
        } else if (position % 2 == 1) {
            if (value > cnj.cpf) {
                return "ro8_+";
            } else {
                return "st8_+";
            }
        } else {
            return false;
        }
    }
};
cnj.coo = function(sound, cue) {
    if (sound.substr(0, 2) == "st" && cue > cnj.cpf) {
        return "ro" + sound.substr(2);
    } else {
        return sound;
    }
};
cnj.dej = function(position, ts) {
    var cya = position - Math.floor(position);
    if (ts == 4) {
        if (position == 0) {
            return "1";
        } else if (position == 4) {
            return "2";
        } else if (position == 8) {
            return "3";
        } else if (position == 12) {
            return "4";
        } else if (position % 4 == 1) {
            return "e";
        } else if (position % 4 == 2) {
            return "+";
        } else if (position % 4 == 3) {
            return "a";
        } else if (cya != 0) {
            cya = cya * 10;
            if (cya < 5) {
                return "+";
            } else {
                return "a";
            }
        } else {
            return false;
        }
    } else {
        if (position == 0) {
            return "1";
        } else if (position == 2) {
            return "2";
        } else if (position == 4) {
            return "3";
        } else if (position == 6) {
            return "4";
        } else if (position == 8) {
            return "5";
        } else if (position == 10) {
            return "6";
        } else if (position == 12) {
            return "7";
        } else if (position == 14) {
            return "8";
        } else if (position == 16) {
            return "9";
        } else if (position == 18) {
            return "10";
        } else if (position == 20) {
            return "11";
        } else if (position == 22) {
            return "12";
        } else if (position % 2 == 1) {
            return "+";
        } else {
            return false;
        }
    }
};
cnj.crt = function() {
    cnj.dal = new Array();
    cnj.cqo = new Array();
    cnj.cxl = new Array();
    cnj.csa = new Array();
    cnj.cwo = new Array();
    cnj.csu = new Array();
    cnj.cxd = false;
    var dch = "";
    var cvx = "";
    var cxb = false;
    var dbo = 0;
    var cqy = 0;
    var dbw = 0;
    var css = 0;
    var deh = dbm.dcn * (dbm.crb == 4 ? 4 : 2);
    var cya = 0;
    var t_present = false;
    var cms = dbm.crb == 4 ? "cmu" : "n8_rest";
    var ddy = (dbm.crb == 4 ? (cnj.cqs ? 32 : 16) : 24);
    var cxr = 0;
    var csy = -1;
    var cyo = -1;
    var ctb = -1;
    cnj.cyg = dbm.cpx * deh;
    cnj.cum = 3 * cnj.cyg;
    for (var i = 0; i < cnj.cyg; i++) {
        cnj.dal[i] = "";
        cnj.cqo[i] = -1;
        cnj.cxl[i] = 0;
    }
    for (var i = 0; i < cnj.cum; i++) {
        cnj.csa[i] = "";
        cnj.cwo[i] = -1;
        cnj.csu[i] = 0;
    }
    for (var i = 0; i < dbm.cnr.length; i++) {
        cxr = 0;
        dch = dbm.cnr[i];
        cvx = dbm.cnr[i - 1];
        if (cya == 0) {
            cnj.cqo[cqy] = i;
            cnj.cwo[dbw] = i;
        } else {
            cnj.cwo[dbw] = i;
            t_present = true;
        }
        if (dch.substring(0, 1) == "r" || dch.substring(0, 2) == "tr") {
            if (t_present) {
                cnj.csa[dbw] = cms;
            } else {
                cnj.csa[dbw] = cms;
                cnj.dal[cqy] = cms;
            }
            dbo = 0;
            cxb = false;
        } else if (dch == 'tie') {
            cxb = true;
            if (dbo == 0) {
                dbo = coy[cvx] + css % 4;
            }
        } else {
            if (cxb) {
                if (dbo >= ddy) {
                    if (t_present) {
                        cnj.csa[dbw] = cms;
                    } else {
                        cnj.csa[dbw] = cms;
                        cnj.dal[cqy] = cms;
                    }
                } else {
                    dbo += coy[dch];
                    if (dbo > ddy) {
                        cxr = ddy - (dbo - coy[dch]);
                        cnj.csa[dbw] = "tie";
                        cnj.csa[dbw + ctp(cxr * 3)] = cms;
                        if (!t_present) {
                            cnj.dal[cqy] = "tie";
                            cnj.dal[cqy + cxr] = cms;
                        }
                    } else {
                        if (t_present) {
                            cnj.csa[dbw] = "tie";
                        } else {
                            cnj.csa[dbw] = "tie";
                            cnj.dal[cqy] = "tie";
                        }
                    }
                }
            } else {
                if (cnj.cqs) {
                    cnj.csa[dbw] = cnj.ddg(css, dbm.crb, coy[dch]);
                } else {
                    cnj.csa[dbw] = cnj.cuw(css, dbm.crb);
                }
                if (!t_present) {
                    if (cnj.cqs) {
                        cnj.dal[cqy] = cnj.ddg(css, dbm.crb, coy[dch]);
                    } else {
                        cnj.dal[cqy] = cnj.cuw(css, dbm.crb);
                    }
                }
                dbo = 0;
            }
            cxb = false;
        }
        if (cxr) {
            cnj.csu[dbw] = cxr;
            cnj.csu[dbw + ctp(cxr * 3)] = coy[dch] - cxr;
            cnj.cwo[dbw + ctp(cxr * 3)] = -10;
            if (!t_present) {
                cnj.cxl[cqy] = cxr;
                cnj.cxl[cqy + cxr] = coy[dch] - cxr;
                cnj.cqo[cqy + cxr] = -10;
            }
        } else if (t_present) {
            cnj.csu[dbw] = coy[dch];
        } else {
            cnj.csu[dbw] = coy[dch];
            cnj.cxl[cqy] = coy[dch];
        }
        css += coy[dch];
        cqy += coy[dch];
        dbw += ctp(coy[dch] * 3);
        css = ctp(css);
        cya = css - Math.floor(css);
        if (css >= deh) {
            css = 0;
            cya = 0;
        }
    }
    if (t_present) {
        cnj.cxd = true;
        cnj.cyg = cnj.cum;
        csy = -1;
        cyo = -1;
        ctb = 0;
        for (var i = 0; i < cnj.cum; i++) {
            if (cnj.csu[i]) {
                if (cnj.csa[i] == "tie") {
                    if (csy < 0) {
                        csy = ctb;
                    }
                    cnj.csu[csy] += cnj.csu[i];
                    if (cnj.cqs) {
                        cnj.csa[csy] = cnj.coo(cnj.csa[csy], cnj.csu[csy]);
                    }
                    cyo = -1;
                } else if (cnj.csa[i] == cms) {
                    if (cyo < 0 || i % deh == 0) {
                        cyo = i;
                    } else {
                        cnj.csu[cyo] += cnj.csu[i];
                    }
                    csy = -1;
                } else {
                    csy = -1;
                    cyo = -1;
                }
                ctb = i;
            }
        }
    } else {
        cnj.cxd = false;
        csy = -1;
        cyo = -1;
        ctb = 0;
        for (var i = 0; i < cnj.cyg; i++) {
            if (cnj.cxl[i]) {
                if (cnj.dal[i] == "tie") {
                    if (csy < 0) {
                        csy = ctb;
                    }
                    cnj.cxl[csy] += cnj.cxl[i];
                    if (cnj.cqs) {
                        cnj.dal[csy] = cnj.coo(cnj.dal[csy], cnj.cxl[csy]);
                    }
                    cyo = -1;
                } else if (cnj.dal[i] == cms) {
                    if (cyo < 0 || i % deh == 0) {
                        cyo = i;
                    } else {
                        cnj.cxl[cyo] += cnj.cxl[i];
                    }
                    csy = -1;
                } else {
                    csy = -1;
                    cyo = -1;
                }
                ctb = i;
            }
        }
    }
};
cnj.dbk = 0;
cnj.cyg = 0;
cnj.cwi = true;
cnj.cqa = false;
cnj.cwu = false;
cnj.cxd = false;
cnj.cvf = true;
cnj.cow = false;
cnj.cnl = function() {
    this.dbk = 0;
    this.cqa = true;
    this.cwu = false;
    cnj.cwi = true;
    this.cug = 0;
    this.cow = setInterval(function() {
        cnj.dbg();
    }, (dbm.crb == 4 ? (cnj.cxd ? this.coe : this.cuc) : this.ctv));
    cnj.dap.currentTime = 0;
    cnj.dbg();
};
cnj.dbg = function() {
    if (cnj.cqa) {
        var pos = cnj.dbk;
        var dba = cnj.cxd ? cnj.csu[pos] : cnj.cxl[pos];
        var is_4 = dbm.crb == 4;
        if (dba > 0) {
            var cpl = cnj.cxd ? cnj.csa[pos] : cnj.dal[pos];
            var cww = cnj.cys[cpl] + ((!cnj.ctf && cnj.cvl) ? cnj.cpr : cnj.cxt);
            var cqw = (is_4 ? cnj.cuc : cnj.ctv) * dba;
            var dcb = is_4 ? (cnj.cqs ? 8000 : 4000) : 6000;
            var dbu = ((pos / (cnj.cxd ? 3 : 1)) % dbm.deh);
            if (cpl == 'tie') {} else if (cpl == 'cmu') {
                if (!cnj.cwu || dbu == 0) {
                    cww += (is_4 ? cnj.cuc : cnj.ctv) * dbu;
                    cnj.cyq(cww, dcb);
                    cnj.cwu = true;
                } else {}
            } else {
                if (cnj.cwu) {
                    cnj.cwu = false;
                }
                cnj.cyq(cww, dcb);
            }
            if (cnj.cwi) {
                cnj.cwi = false;
                cnj.cvf = false;
            }
            setTimeout(function() {
                cpn((cnj.cxd ? cnj.cwo[pos] : cnj.cqo[pos]));
            }, 1);
        }
        cnj.dbk++;
        if (cnj.dbk >= cnj.cyg) {
            cnj.dbk = 0;
        }
    }
};
cnj.cyq = function(cww, cqw) {
    if (cnj.ctf) {
        if (!cnj.cvf) {
            cnj.cwy = cnj.dcx;
            cnj.dcx = cnj.den();
            if (cnj.cwy.csc && !cnj.cwy.crn) {
                cnj.cwy.stop(0);
                cnj.cwy.crn = true;
            }
        }
        cnj.dcx.start(0, cww / 1000, cqw / 1000);
        cnj.dcx.csc = true;
    } else if (cnj.cvl) {
        soundManager.stopAll();
        cnj.cwm['master'].play({
            from: cww,
            to: cww + cqw,
        });
    } else {
        GetId('master_sound').pause();
        GetId('master_sound').currentTime = cww / 1000;
        GetId('master_sound').play();
    }
};
cnj.stop = function() {
    cth();
    if (cnj.cqa) {
        cnj.cqa = false;
        cnj.cwu = false;
        clearInterval(this.cow);
        if (cnj.ctf) {
            if (cnj.dcx.csc && !cnj.dcx.crn) {
                cnj.dcx.stop(0);
                cnj.dcx.crn = true;
            }
        } else if (cnj.cvl) {
            soundManager.stopAll();
        } else {
            GetId('master_sound').pause();
        }
        cpn(-1);
    }
};

function ctp(value) {
    if (value - .25 < Math.floor(value)) value = Math.floor(value);
    if (value + .25 > Math.ceil(value)) value = Math.ceil(value);
    return value;
};
cvr = function() {
    this.cnr = new Array();
    this.dcn = 4;
    this.crb = 4;
    this.deh = this.dcn * (this.crb == 4 ? 4 : 2);
    this.cso = (this.dcn == 12 ? 3 : 4);
    this.dar = 0;
    this.cpx = 0;
    this.csg = false;
    this.dcp = function() {
        if (this.cnr.length > 0) {
            return this.cnr[this.cnr.length - 1];
        } else {
            return "";
        }
    };
    this.cpt = function() {
        return (this.cpx >= this.cso);
    };
    this.cxp = function(type) {
        cnj.stop();
        var crf = this.dar - Math.floor(this.dar);
        if (type == "rd2") {
            if (this.cxp("r2")) {
                if (this.cxp("r4")) {
                    return true;
                }
            }
            return false;
        } else if (type == "rd4") {
            if (this.cxp("r4")) {
                if (this.cxp("r8")) {
                    return true;
                }
            }
            return false;
        }
        if (this.cpx >= this.cso) {
            return false;
        }
        var cvx = this.dcp();
        var w = window;
        if (type == "tie") {
            if (cvx == "" || cvx == "tie" || cvx.indexOf("r") != -1) {
                return false;
            }
        }
        if (cvx == "tie" && type.indexOf("r") != -1) {
            return false;
        }
        if (type != "tie" && type.indexOf("t") != -1) {
            if (this.crb != 4) {
                return false;
            } else if (this.dar % 4 != 0 && crf < .1) {
                return false;
            }
        }
        var lw = w.location;
        if (type != "tie" && type.indexOf("t") == -1 && crf != 0) {
            return false;
        }
        var cqk = this.dar + coy[type];
        if (cqk + .25 > Math.ceil(cqk)) cqk = Math.ceil(cqk);
        if (cqk - .25 < Math.floor(cqk)) cqk = Math.floor(cqk);
        // Domain check removed for local development
        //if (lw.hostname != unescape("%77%77%77%2e%7" + "0%68%69%6c%74%75%6c" + "%67%61%2e%63%6f%6d") && lw.hostname != unescape("%70%68%69%6c%7" + "4%75%6c%67%61%2e%6" + "3%6f%6d")) {
        //    return false;
        //};
        if (cqk > this.deh) {
            return false;
        } else if (cqk == this.deh) {
            this.dar = 0;
            this.cpx++;
        } else {
            this.dar = cqk;
        }
        this.cnr[this.cnr.length] = type;
        return true;
    };
    this.cvj = function() {
        cnj.stop();
        if (this.cnr.length <= 0) {
            return false;
        }
        if (this.dar > 0 || this.cnr[this.cnr.length - 1] == "tie") {
            this.dar = this.dar - coy[this.cnr[this.cnr.length - 1]];
            this.dar = ctp(this.dar);
            this.cnr.pop();
            return true;
        } else {
            this.cnr.pop();
            var dav = 0;
            var dch = "";
            for (var i = 0; i < this.cnr.length; i++) {
                dch = this.cnr[i];
                dav += coy[dch];
                dav = ctp(dav);
                if (dav >= this.deh) {
                    dav = 0;
                }
            }
            this.dar = dav;
            this.cpx--;
            return true;
        }
        return true;
    };
    this.ded = function() {
        cnj.stop();
        var out = "#RC";
        if (this.crb == 4) {
            if (this.dcn == 4) {
                out += "";
            } else {
                out += "^" + this.dcn;
            }
        } else {
            out += "~" + this.dcn;
        }
        for (var i = 0; i < this.cnr.length; i++) {
            if (this.cnr[i] == "1") {
                out += "1";
            } else if (this.cnr[i] == "d2") {
                out += "2";
            } else if (this.cnr[i] == "2") {
                out += "3";
            } else if (this.cnr[i] == "d4") {
                out += "4";
            } else if (this.cnr[i] == "4") {
                out += "5";
            } else if (this.cnr[i] == "d8") {
                out += "6";
            } else if (this.cnr[i] == "8") {
                out += "7";
            } else if (this.cnr[i] == "16") {
                out += "8";
            } else if (this.cnr[i] == "t4") {
                out += "t1";
            } else if (this.cnr[i] == "t8") {
                out += "t2";
            } else if (this.cnr[i] == "r1") {
                out += "r1";
            } else if (this.cnr[i] == "r2") {
                out += "r2";
            } else if (this.cnr[i] == "r4") {
                out += "r3";
            } else if (this.cnr[i] == "rd8") {
                out += "r4";
            } else if (this.cnr[i] == "r8") {
                out += "r5";
            } else if (this.cnr[i] == "r16") {
                out += "r6";
            } else if (this.cnr[i] == "tr4") {
                out += "tr1";
            } else if (this.cnr[i] == "tr8") {
                out += "tr2";
            } else if (this.cnr[i] == "-" || this.cnr[i] == "tie") {
                out += "-";
            }
        }
        out += "#";
        return out;
    };
    this.cvt = function(cwk) {
        cnj.stop();
        var i = 0;
        var ctx = false;
        if (cwk.length < 5) {
            return false;
        }
        while (cwk.substring(i, i + 1) != "#" && i < cwk.length) {
            i++;
        }
        if (i >= cwk.length || cwk.substring(i, i + 3) != "#RC") {
            return false;
        }
        i += 3;
        this.cqi();
        if (cwk.substring(i, i + 1) == "D") {
            ctx = true;
            i++;
        }
        if (cwk.substring(i, i + 1) == "^") {
            this.crb = 4;
            i++;
            this.dcn = cwk.substring(i, i + 1) - 0;
            i++;
        } else if (cwk.substring(i, i + 1) == "~") {
            this.crb = 8;
            i++;
            this.dcn = cwk.substring(i, i + 1) - 0;
            if (this.dcn == 1) {
                this.dcn = cwk.substring(i, i + 2) - 0;
                i++;
            }
            i++;
        } else {
            this.crb = 4;
            this.dcn = 4;
        }
        if (ctx && this.dcn == 4) {
            this.dcn = 2;
        }
        this.deh = this.dcn * (this.crb == 4 ? 4 : 2);
        this.cso = (this.dcn == 12 ? 3 : 4);
        var sub1 = "";
        var sub2 = "";
        var sub3 = "";
        while (i < cwk.length) {
            sub1 = cwk.substring(i, i + 1);
            if (sub1 == "1") {
                if (ctx) {
                    this.cxp("2");
                } else {
                    this.cxp("1");
                }
                i++;
                continue;
            } else if (sub1 == "2") {
                if (ctx) {
                    this.cxp("d4");
                } else {
                    this.cxp("d2");
                }
                i++;
                continue;
            } else if (sub1 == "3") {
                if (ctx) {
                    this.cxp("4");
                } else {
                    this.cxp("2");
                }
                i++;
                continue;
            } else if (sub1 == "4") {
                if (ctx) {
                    this.cxp("d8");
                } else {
                    this.cxp("d4");
                }
                i++;
                continue;
            } else if (sub1 == "5") {
                if (ctx) {
                    this.cxp("8");
                } else {
                    this.cxp("4");
                }
                i++;
                continue;
            } else if (sub1 == "6") {
                this.cxp("d8");
                i++;
                continue;
            } else if (sub1 == "7") {
                if (ctx) {
                    this.cxp("16");
                } else {
                    this.cxp("8");
                }
                i++;
                continue;
            } else if (sub1 == "8") {
                this.cxp("16");
                i++;
                continue;
            } else if (sub1 == "-") {
                this.cxp("tie");
                i++;
                continue;
            } else if (sub1 == "#") {
                return true;
            }
            sub2 = cwk.substring(i, i + 2);
            if (sub2 == "t1") {
                if (ctx) {
                    this.cxp("t8");
                } else {
                    this.cxp("t4");
                }
                i += 2;
                continue;
            } else if (sub2 == "t2") {
                this.cxp("t8");
                i += 2;
                continue;
            } else if (sub2 == "r1") {
                if (ctx) {
                    this.cxp("r2");
                } else {
                    this.cxp("r1");
                }
                i += 2;
                continue;
            } else if (sub2 == "r2") {
                if (ctx) {
                    this.cxp("r4");
                } else {
                    this.cxp("r2");
                }
                i += 2;
                continue;
            } else if (sub2 == "r3") {
                if (ctx) {
                    this.cxp("r8");
                } else {
                    this.cxp("r4");
                }
                i += 2;
                continue;
            } else if (sub2 == "r4") {
                this.cxp("rd8");
                i += 2;
                continue;
            } else if (sub2 == "r5") {
                if (ctx) {
                    this.cxp("r16");
                } else {
                    this.cxp("r8");
                }
                i += 2;
                continue;
            } else if (sub2 == "r6") {
                this.cxp("r16");
                i += 2;
                continue;
            }
            sub3 = cwk.substring(i, i + 3);
            if (sub3 == "tr1") {
                if (ctx) {
                    this.cxp("tr8");
                } else {
                    this.cxp("tr4");
                }
                i += 3;
                continue;
            } else if (sub3 == "tr2") {
                this.cxp("tr8");
                i += 3;
                continue;
            }
            return false;
        }
        return true;
    };
    this.cqi = function() {
        cnj.stop();
        delete this.cnr;
        this.cnr = new Array();
        this.dar = 0;
        this.cpx = 0;
    };
    this.cws = function(top, bottom) {
        this.cqi();
        this.dcn = top;
        this.crb = bottom;
        this.deh = this.dcn * (this.crb == 4 ? 4 : 2);
        this.cso = (this.dcn == 12 ? 3 : 4);
    };
};
var ddc = new JSWinSource();
cqq = new JSInput("", 400, 26, 15, 45);
ddc.add(cqq);
cqq.tooltip = "This is the code for the rhythm you have created. Press Send to a Friend to send this code by email so they can play it as well!";
ddc.add(new JSLabel("<strong>Current rhythm code:</strong>", 400, 20, 15, 15));
ddc.last_added().tooltip = cqq.tooltip;
ddc.add(new JSButton("Send to a Friend!", "cwa();", 200, 40, 14, 90));
coc = new JSInput("", 400, 26, 15, 193);
ddc.add(coc);
coc.tooltip = "Paste a rhythm from someone else here, and press Load to see what they have made!";
ddc.add(new JSLabel("<strong>Code to load:</strong>", 400, 20, 15, 165));
ddc.last_added().tooltip = coc.tooltip;
ddc.add(new JSButton("Load", "cqc();", 100, 40, 14, 240));
ddc.add(new JSButton("Cancel", "cnx.close();", 100, 40, 319, 240));
var cnx = new JSWindow("Counting Music - Email It!", ddc, 430, 330);
cnx.type = JSWindows.WindowType.NORMAL;
cnx.closeButton = true;
var ddm = new JSWinSource();
ddm.add(new JSButton("Done", "cwg.close();", 100, 40, 350, 420));
daf = 'Introductory Rhythms\n#RC1335555#\n#RC5555777777778888888888888888#\n#RC3-55255-77477-88686868#\n#RC5555t1t1t1t1t1t1t2t2t2t2t2t2t2t2t2t2t2t2t2-t2t2-t2t2-t2t1t1t1#\n#RC~6777777888888888888442#\n\nHalf/Quarter Note Rhythms in 4/4\n#RC333r2r2333#\n#RC55555r35r3r35r355555#\n#RC53555r35r35r35r353#\n#RC553-553-553-553#\n#RC5555-5555-5555-553#\n#RC25-33-525555#\n\nQuarter/Eighth Note Rhythms in 4/4\n#RC775r35r37755r35775r377775#\n#RC77r5755577r5755577r57r575577#\n#RC7575r3r377-7755r3757r575757#\n#RC757775577-7777775757r5777577#\n#RC757-775577-757r575757r5777-775#\n#RC757r57r57r5777-77r57r57r57757r57r57r5777#\n#RC7777r557r577777r57r557777777r57-7777#\n#RCr557r577777r57-77r57r5777r557r57r5777r57#\n#RCr5577r57r57r5r57-777r57r57r5r557r577r57r5r57#\n#RCr55757777r57-775577r557r57577r57#\n#RCr5577755r57-7777775r557r57775r57#\n#RC757757r5777-7777r557757r5777-775#\n#RCr55747r57r57-77547r557r575-77r57#\n#RC7r57r5r57r57r577r57r5r57r57r577r57r57r5r57r577r5#\n#RCr575r57r57r57r575r57r57r57r5755r57r57r57#\n#RC7455577-555574r35577#\n#RC5r57-7r5555r57-7r5r355r57r57-7r555#\n#RC7777-577777774r3777777747777#\n#RC74r57777777-5r57r577774r3r577777#\n#RC7777-5r57r577777-5r3r57777777-5r5777#\n#RC77-547r5777-554777-5r35-7777#\n#RC777774r37777777477777777-577#\n#RC577-757r57577-77r55757777-77-775#\n#RC5r3r57r3r35r3r57r57r35r3r3r57r35#\n#RCr55557r57r57r57r57r557r557r57-77-77-77#\n#RCr57r3r57r3r3r57r3r57r55r5r55r5r57-7r5r57-7r5#\n#RCr57r57r57r3r3r57r57r57r57r3r57r57r57r57r3r57#\n#RCr57r3555r57r3555r57r3r355r57#\n\nEighth/Sixteenth Note Rhythms in 2/4\n#RC^2887r57r58877r57887r588887#\n#RC^288r6877788r6877788r68r687788#\n#RC^28787r5r588-8877r5878r687878#\n#RC^2878887788-8888887878r6888788#\n#RC^2878-887788-878r687878r6888-887#\n#RC^2878r68r68r6888-88r68r68r68878r68r68r6888#\n#RC^28888r678r688888r68r678888888r68-8888#\n#RC^2r678r688888r68-88r68r6888r678r68r6888r68#\n#RC^2r6788r68r68r6r68-888r68r68r6r678r688r68r6r68#\n#RC^2r67878888r68-887788r678r68788r68#\n#RC^2r6788877r68-8888887r678r68887r68#\n#RC^2878878r6888-8888r678878r6888-887#\n#RC^2r67868r68r68-88768r678r687-88r68#\n#RC^28r68r6r68r68r688r68r6r68r68r688r68r68r6r68r688r6#\n#RC^2r687r68r68r68r687r68r68r68r6877r68r68r68#\n#RC^28677788-777786r57788#\n\nEighth/Sixteenth Note Rhythms in 4/4\n#RC7r68-8r6777r68-8r6r577r68r68-8r677#\n#RC8888-788888886r5888888868888#\n#RC86r68888888-7r68r688886r488888#\n#RC8888-7r68r688888-7r5r68888888-7r6888#\n#RC88-768r6888-776888-7r57-8888#\n#RC888886r58888888688888888-788#\n#RC788-878r68788-88r67878888-88-887#\n#RC7r5r68r5r57r5r68r68r57r5r5r68r57#\n#RCr67778r68r68r68r68r678r678r68-88-88-88#\n#RCr68r5r68r5r5r68r5r68r67r6r67r6r68-8r6r68-8r6#\n#RCr68r68r68r5r5r68r68r68r68r5r68r68r68r68r5r68#\n#RCr68r5777r68r5777r68r5r577r68#\n\n3-4 Rhythms\n#RC^355535532#\n#RC^355773777732#\n#RC^3r35535r3557755#\n#RC^3555-55535-53#\n#RC^355r5755r575552#\n#RC^3r573r577777r573-77775#\n#RC^3r55572-77-77-773-5#\n#RC^37577777757r5777777r555#\n#RC^3r5577777r557r5777r572#\n#RC^3r547777r54r377r572#\n#RC^36877556877775682#\n#RC^3r588687777r588686877r5882#\n#RC^3r588r678r6888r6888r588r678r678r6888r5882#\n\nTriplet Rhythms in 4/4\n#RC5555t1t1t1t1t1t155t1t1t1t1t1t155#\n#RC5555t2t2t2t2t2t2t2t2t2t2t2t25t2t2t2t2t2t25t2t2t2t2t2t255#\n#RCt1t1t1t1t1t1t2t2t2t2t2t2t2t2t2t2t2t2t1t1t2t2t1t1t2t2t2t2t1t155#\n#RC5555t1t2t1t2t1t2t1t2t2t1t2t1t2t1t2t15555#\n#RC5555tr1t1t1tr1t1t15555tr1t1t155#\n#RCt2-t2t2-t2t2-t23t1t1t13t2-t2t2-t2t2-t2t1t1t1553#\n#RCt1t2t1t2t1t2t1t2tr1t1t1t2t2t2-t2t1t1t2t1t2t1t2t1t2t2t2t2-t2t13#\n#RCtr2t1t1t2-t2t2t2t2t2t2tr2t1t2t2t2-t2t1t2t2t2tr2t1t1t2-t2t1t1t2-5-t2t2t25r3#\n\nDuplet/Triplet Rhythms in 4/4\n#RC7777r57t2t2t2t2t2t27777r57r57t2t2t2777777r57t2t2t277#\n#RCt2t2t25757r57t2t2t2577r557t2t2t255757t2t2t2#\n#RC577-77t2t2t2t2t2t2577-77r57t2t2t257777-77t2t2t25#\n#RC757t2t2t27777757t2t2t2t2t2t277757r57t2t2t27777#\n#RCt2t2t2t2t2t2757r57t2t2t2t2t2t277757t2t2t2t2t2t2t2t2t2757t2t2t2#\n#RC88888888t2t2t2t2t2t27777t1t1t1558888t2t2t2r6888tr2t2t2r575#\n#RC68878tr2t2t2t2t2t28888878tr2t2t2t2t168r687t2t2t2r3r6888r588t2t2t25#\n\n6/8 Rhythms\n#RC~67777774444777777#\n#RC~677777757457-75r577777#\n#RC~6754r554r577r577r5774#\n#RC~67557-75777r5557-754#\n#RC~677777788888878878888788887887887887#\n#RC~67788778888774r5788r5788r68774#\n#RC~687878787788r68477887788r6877r6877#\n#RC~668r6868r68r687748778-8778-777r55#\n\n9/8 Rhythms\n#RC~977777744777777#\n#RC~977757457-75r577#\n#RC~975r554r577r577r577#\n#RC~97557777r55574#\n#RC~9777888888888877888877888877#\n#RC~9778888774r5788r68774#\n#RC~9878787874788r68r6877777#\n#RC~968r6868r6848778-8778r55#\n\n12/8 Rhythms\n#RC~127777774444777777#\n#RC~12777777574555r577777#\n#RC~12754r554r577r577r5774#\n#RC~127557-75777r5557-754#\n#RC~1277777788888878878888788887887887887#\n#RC~127788778888774r5788r5788r68774#\n#RC~1287878787788r68477887788r6877r6877#\n#RC~1268r6868r68r687748778-8778-777r55#';
// hkp = '"Reading Rhythms" Examples\nIntroductory Rhythms\n#RC1335555#\n#RC5555777777778888888888888888#\n#RC3-55255-77477-88686868#\n\nHalf/Quarter Note Rhythms\n#RC53555r35r35r35r353#\n#RC553-553-553-553#\n#RC5555-5555-5555-553#\n\nQuarter/Eighth Note Rhythms\n#RC775r35r37755r35775r377775#\n#RC77r5755577r5755577r57r575577#\n#RC7575r3r377-7755r3757r575757#\n\nEighth/Sixteenth Rhythms\n#RC8888-788888886r5888888868888#\n#RC86r68888888-7r68r688886r488888#\n#RC788-878r68788-88r67878888-88-887#';
// gwg = '1\n2\n3\n8\n9\n10\n12\n13\n14\n57\n58\n62';
her = "Melodic Rhythms\n#RC5687768776877775775775547#\n#RC388887777773#\n#RC7777775#\n\nDrum Rhythms (1x slow, 2x's fast)\n#RC5r57r35r355r37r68r57r5757r68r57r575#\n#RC5577r57r57r57r57577878r68r68r68777878r68r68r687#\n#RC5r57r5755577r37r68r6877788r57r68r6877788r5#\n#RC5775775775r37887887887r57887887887r5#\n#RC7777-7757777-7758888-8878888-8878888-8878888-887#\n#RC777777577777758888887888888788888878888887#\n#RC777r5555r5777r3888r6777r6888r5888r6777r6888r5#";
hdw = "Peter's Theme (Peter and the Wolf)\nWolf's Theme (Peter and the Wolf)\nTwinkle Twinkle Little Star\nClave (Cuba)\nSamba (Brazil)\nFanga (Liberia)\nCantares Mexicanos, Song 48\nK&#596;t&#596;k&#596;, mommra (Ghana)\nB&#596;k&#596;k&#596; wa olondo (Congo)\nSOS (Morse Code)";

function hbq(hkx, gxv, offset) {
    var hch = hkx.split('\n');
    var gyk = gxv.split('\n');
    var html = "<div style='width: 100%; height: 100%; text-align: center; font-size: 20px;" + (offset ? (" position: absolute; " + offset) : "") + "'>";
    var j = 0;
    for (var i = 0; i < hch.length; i++) {
        var line = hch[i];
        if (line.substring(0, 1) == "#") {
            html += "<input type='button' onclick='dcj(\"" + line + "\");' value=\"" + gyk[j] + "\" class='" + (gyk[j].length > 3 ? 'song_button_large' : 'song_button') + "'>&nbsp; ";
            j++;
        } else if (line.length > 3) {
            html += "<strong>" + line + "</strong><br><br>";
        } else {
            html += "<br><br>";
        }
    }
    return html + "<br></div>";
};

function csk() {
    var cvh = daf.split('\n');
    var html = "<div style='width: 100%; height: 100%; text-align: center; font-size: 20px;'>";
    var j = 1;
    for (var i = 0; i < cvh.length; i++) {
        var line = cvh[i];
        if (line.substring(0, 1) == "#") {
            html += "<input type='button' onclick='dcj(\"" + line + "\");' value=\"" + j + "\" class='song_button'>&nbsp; ";
            j++;
        } else if (line.length > 3) {
            html += "<strong>" + line + "</strong><br><br>";
        } else {
            html += "<br><br>";
        }
    }
    return html + "<br><br></div>";
};
var dad = new JSWinSource();
var ddi = new JSLabel(hbq(her, hdw, false) + csk(), 730, false, 10, 10);
dad.add(ddi);
var crd = new JSSubWin(dad, 760, 390, 20, 20);
ddm.add(crd);
var cwg = new JSWindow("Counting Music - Rhythms", ddm, 800, 500);
cwg.type = JSWindows.WindowType.NORMAL;
cwg.closeButton = true;