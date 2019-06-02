/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
Scheduler.plugin(function(a){a.locale={date:{month_full:"\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2,\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2,\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2,\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2,\u039c\u03ac\u03ca\u03bf\u03c2,\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2,\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2,\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2,\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2,\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2,\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2,\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split(","),
month_short:"\u0399\u0391\u039d,\u03a6\u0395\u0392,\u039c\u0391\u03a1,\u0391\u03a0\u03a1,\u039c\u0391\u0399,\u0399\u039f\u03a5\u039d,\u0399\u039f\u03a5\u039b,\u0391\u03a5\u0393,\u03a3\u0395\u03a0,\u039f\u039a\u03a4,\u039d\u039f\u0395,\u0394\u0395\u039a".split(","),day_full:"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae,\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1,\u03a4\u03c1\u03af\u03c4\u03b7,\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7,\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7,\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae,\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae".split(","),
day_short:"\u039a\u03a5,\u0394\u0395,\u03a4\u03a1,\u03a4\u0395,\u03a0\u0395,\u03a0\u0391,\u03a3\u0391".split(",")},labels:{dhx_cal_today_button:"\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1",day_tab:"\u0397\u03bc\u03ad\u03c1\u03b1",week_tab:"\u0395\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1",month_tab:"\u039c\u03ae\u03bd\u03b1\u03c2",new_event:"\u039d\u03ad\u03bf \u03ad\u03c1\u03b3\u03bf",icon_save:"\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",icon_cancel:"\u0386\u03ba\u03c5\u03c1\u03bf",
icon_details:"\u039b\u03b5\u03c0\u03c4\u03bf\u03bc\u03ad\u03c1\u03b5\u03b9\u03b5\u03c2",icon_edit:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",icon_delete:"\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",confirm_closing:"",confirm_deleting:"\u03a4\u03bf \u03ad\u03c1\u03b3\u03bf \u03b8\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03b5\u03af \u03bf\u03c1\u03b9\u03c3\u03c4\u03b9\u03ba\u03ac. \u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03b5\u03c4\u03b5;",
section_description:"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",section_time:"\u03a7\u03c1\u03bf\u03bd\u03b9\u03ba\u03ae \u03c0\u03b5\u03c1\u03af\u03bf\u03b4\u03bf\u03c2",full_day:"\u03a0\u03bb\u03ae\u03c1\u03b7\u03c2 \u0397\u03bc\u03ad\u03c1\u03b1",confirm_recurring:"\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03b8\u03b5\u03af\u03c4\u03b5 \u03bf\u03bb\u03cc\u03ba\u03bb\u03b7\u03c1\u03b7 \u03c4\u03b7\u03bd \u03bf\u03bc\u03ac\u03b4\u03b1 \u03c4\u03c9\u03bd \u03b5\u03c0\u03b1\u03bd\u03b1\u03bb\u03b1\u03bc\u03b2\u03b1\u03bd\u03cc\u03bc\u03b5\u03bd\u03c9\u03bd \u03ad\u03c1\u03b3\u03c9\u03bd;",
section_recurring:"\u0395\u03c0\u03b1\u03bd\u03b1\u03bb\u03b1\u03bc\u03b2\u03b1\u03bd\u03cc\u03bc\u03b5\u03bd\u03bf \u03ad\u03c1\u03b3\u03bf",button_recurring:"\u0391\u03bd\u03b5\u03bd\u03b5\u03c1\u03b3\u03cc",button_recurring_open:"\u0395\u03bd\u03b5\u03c1\u03b3\u03cc",button_edit_series:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c4\u03b7 \u03c3\u03b5\u03b9\u03c1\u03ac",button_edit_occurrence:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03ad\u03bd\u03b1 \u03b1\u03bd\u03c4\u03af\u03b3\u03c1\u03b1\u03c6\u03bf",
agenda_tab:"\u0397\u03bc\u03b5\u03c1\u03ae\u03c3\u03b9\u03b1 \u0394\u03b9\u03ac\u03c4\u03b1\u03be\u03b7",date:"\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",description:"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",year_tab:"\u0388\u03c4\u03bf\u03c2",week_agenda_tab:"\u0397\u03bc\u03b5\u03c1\u03ae\u03c3\u03b9\u03b1 \u0394\u03b9\u03ac\u03c4\u03b1\u03be\u03b7",grid_tab:"\u03a0\u03bb\u03ad\u03b3\u03bc\u03b1"}}});
